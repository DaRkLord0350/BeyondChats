// src/pages/home/page.jsx
"use client";

import { useRouter } from "next/navigation";
import { Sparkles, Bot, BarChart3 } from 'lucide-react';
import { useAuth } from "../hooks/useAuth"; // Custom hook for authentication
import { Header } from "../components/Header";

export default function HomePage() {
  const { user } = useAuth(); // Get user from useAuth hook
  const router = useRouter(); // Initialize useRouter hook

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <p className="text-lg text-center">You are not logged in. Please login to access the dashboard.</p>
        </div>
      </div>
    );
  }
  const FeatureCard = ({ icon: Icon, title, description, buttonText, onButtonClick }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
        <Icon className="text-blue-600 w-12 h-12 mb-4" />
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        
        {/* Button for Navigation */}
        <button
          onClick={onButtonClick}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-md"
        >
          {buttonText}
        </button>
      </div>
    );
  };

  return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <Header/>
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to Your Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Get started with our powerful tools and features
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon={Sparkles}
              title="Set Up Organization"
              description="Configure your organization settings and preferences for optimal performance"
              buttonText="Set Up"
              onButtonClick={() => router.push("/setup")}
            />
            
            <FeatureCard
              icon={BarChart3}
              title="View Progress"
              description="Track and analyze your data scraping operations in real-time"
              buttonText="Set Up"
              onButtonClick={() => router.push("/scraping-progress")}
            />
            <FeatureCard
              icon={Bot}
              title="Chatbot Integration"
              description="Seamlessly integrate and customize your AI chatbot assistant"
              buttonText="Set Up"
              onButtonClick={() => router.push("/chatbot-integration")}
            />
          </div>
  
        
        </div>
      </div>
  );
}
