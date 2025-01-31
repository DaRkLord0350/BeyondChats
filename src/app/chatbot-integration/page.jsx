"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti"; // Import confetti animation library
import { BarChart3, MessageSquare, Mail } from 'lucide-react';

export default function ChatbotIntegrationPage() {
  const [integrationStatus, setIntegrationStatus] = useState(null); // Track integration status (success or failure)
  const [isTesting, setIsTesting] = useState(false);
  const router = useRouter();

  const handleTestChatbot = () => {
    setIsTesting(true);
    setTimeout(() => {
      setIsTesting(false);
      setIntegrationStatus("success"); // Simulate successful integration
    }, 3000);
  };

  const handleIntegrationInstructions = () => {
    alert("Copy the code below and paste it in the <head> tag of your website.");
  };

  const handleMailInstructions = () => {
    alert("Instructions have been emailed to your developer!");
  };

  const handleNext = () => {
    router.push("/admin-panel"); // Redirect to Admin Panel after successful integration
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="flex justify-center">
            <BarChart3 className="h-12 w-12 text-indigo-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Chatbot Integration</h1>
          <p className="text-gray-500">Experience the power of AI-driven conversations</p>
        </div>

        {integrationStatus === "success" ? (
          <>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
            <div className="text-center">
              <p className="text-green-600 font-semibold mb-4">Chatbot Integrated Successfully!</p>
              <button
                onClick={handleNext}
                className="w-full p-2 bg-blue-600 text-white rounded mt-4"
              >
                Explore Admin Panel
              </button>
              <button
                onClick={() => router.push("/start-chat")}
                className="w-full p-2 bg-blue-600 text-white rounded mt-4"
              >
                Start Talking to Your Chatbot
              </button>
              <div className="mt-4">
                <button className="p-2 bg-gray-600 text-white rounded">
                  Share on Social Media
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-gray-600 text-center">Test our chatbot capabilities</p>
              <button
                onClick={handleTestChatbot}
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Test Chatbot</span>
              </button>
            </div>

            {isTesting && (
              <div className="mb-4">
                <p className="text-gray-600 mb-4">Testing chatbot integration...</p>
              </div>
            )}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Integration Options</span>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={handleIntegrationInstructions}
                className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 transition-colors duration-200"
              >
                Instructions for Integration
              </button>
              <button
                onClick={handleMailInstructions}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Mail Instructions to Developer</span>
              </button>
            </div>
          </div>
        )}

        <p className="text-center text-sm text-gray-500">
          Need help? Contact our support team for assistance
        </p>
      </div>
    </div>
  );
}
