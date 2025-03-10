// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/app/dashboard/hooks/useAuth";

// export default function Callback() {
//   const router = useRouter();
//   const { fetchAuth, userId, loading } = useAuth();

//   useEffect(() => {
//     const handleCallback = async () => {
//       if (loading) return;

//       await fetchAuth(); 
//       if (userId) {
//         router.push("/dashboard"); 
//       } else {
//         router.push("/auth/login"); 
//       }
//     };

//     handleCallback();
//   }, [fetchAuth, userId, loading, router]);

//   return <div>Loading...</div>; 
// }