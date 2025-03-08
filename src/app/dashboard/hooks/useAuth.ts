'use client';

import { create } from 'zustand';
import ky from 'ky';
import { useEffect } from 'react';
import { UserData } from '../types/auth'; // Import the type
import { useRouter} from 'next/navigation'; // Corrected import for NextRouter

// Define the auth state interface
interface AuthState {
  role: string | null;
  userId: string | null;
  email: string | null;
  status: string | null;
  name: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  setAuth: (role: string, userId: string, email?: string, status?: string, name?: string) => void;
  clearAuth: () => void;
  fetchAuth: () => Promise<void>;
}

// Create the store with Zustand
export const useAuth = create<AuthState>((set, get) => ({
  role: null,
  userId: null,
  email: null,
  status: null,
  name: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  // Set authentication state with optional parameters
  setAuth: (role, userId, email, status, name) =>
    set({
      role,
      userId,
      email,
      status,
      name,
      isAuthenticated: true,
      loading: false,
      error: null,
    }),

  // Clear authentication state
  clearAuth: () =>
    set({
      role: null,
      userId: null,
      email: null,
      status: null,
      name: null,
      isAuthenticated: false,
      loading: false,
      error: null,
    }),

  // Fetch authentication data from backend using ky
  fetchAuth: async () => {
    const state = get();
    if (state.loading) return;

    set({ loading: true, error: null });

    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('token='))
        ?.split('=')[1];

      if (!token) {
        set({ loading: false, isAuthenticated: false, error: 'No token found' });
        return;
      }

      const api = ky.create({
        prefixUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        credentials: 'include',
        hooks: {
          beforeRequest: [request => {
            request.headers.set('Authorization', `Bearer ${token}`);
          }],
        },
      });

      const response = await api.get('user');
      const data: UserData = await response.json();
      const { id, role, email, status, name } = data;
      set({ role, userId: id, email, status, name, isAuthenticated: true, loading: false });
    } catch (error) {
      console.error('Auth fetch error:', error);
      set({
        loading: false,
        isAuthenticated: false,
        error: error instanceof Error ? error.message : 'Authentication failed',
      });
    }
  },
}));

// Custom hook to use useAuth with automatic fetch on mount
export const useAuthWithFetch = () => {
  const auth = useAuth(); // Get the full auth state

  useEffect(() => {
    auth.fetchAuth();
  }, [auth.fetchAuth]); // Dependency on fetchAuth to prevent unnecessary re-renders

  return auth; // Return the full auth object, including loading and error
};

// Custom hook to handle authentication redirects
export const useAuthRedirect = () => {
  const router = useRouter();

  const handleAuthRedirect = (isAuthenticated: boolean) => {
    if (!router) {
      console.warn('Router is undefined, redirect cannot be performed');
      return;
    }
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  };

  return { handleAuthRedirect };
};