"use client";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth"); // Redirect to login if not authenticated
    } else {
      router.push("/")
    }
  }, [user, loading, router]);

  if (loading) return <p>Loading...</p>;

  return user ? children : null;
}
