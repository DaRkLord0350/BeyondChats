"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./hooks/useAuth"; // Custom hook for authentication
import { Header } from "./components/Header"; // Optional: add a header component for navigation
import { Footer } from "./components/Footer"; // Optional: add a footer component
import ScrapingProgressPage from "./scraping-progress/page.jsx"; // Scraping Progress Page
import SetupPage from "./setup/page.jsx"; // Organization Setup Page\
import ChatbotIntegrationPage from "./chatbot-integration/page.jsx"; // Chatbot Integration Page
import HomePage from "./home/page.jsx"; // Home Page or Dashboard

export default function App() {
  const { user, loading } = useAuth(); // Get user and loading state from useAuth hook
  const router = useRouter(); // Initialize useRouter hook

  // Redirect to login page if the user is not logged in
  useEffect(() => {
    if (!user && !loading) {
      router.push("/auth"); // Redirect to login if no user and not loading
    }
  }, [user, loading, router]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Check if user is logged in */}
        {user ? (
          <>
            <HomePage />
            <SetupPage />
            <ScrapingProgressPage />
            <ChatbotIntegrationPage />
          </>
        ) : (
          <div>Please login or sign up</div>
        )}
      </main>
      <Footer />
    </div>
  );
}