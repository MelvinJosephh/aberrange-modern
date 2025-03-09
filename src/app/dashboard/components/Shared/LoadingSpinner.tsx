'use client'; 
import { cn } from "@/lib/utils" 

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-[200px] space-x-2",
        className
      )}
    >
      <div
        className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"
        role="status"
        aria-label="Loading"
      />
      <span className="text-gray-500">Loading...</span>
    </div>
  );
}