"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { fetchMetaDescription } from "../lib/fetchMetaDescription";
import { Building2, Globe, Send } from "lucide-react";

export default function OrganizationSetupPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    description: "",
    metaDescription: "",
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [loading, user, router]);

  // Handle URL change to fetch meta description
  const handleURLChange = async (event) => {
    const url = event.target.value;
    setFormData((prev) => ({ ...prev, websiteUrl: url }));

    if (url) {
      try {
        const description = await fetchMetaDescription(url);
        setFormData((prev) => ({ ...prev, metaDescription: description }));
      } catch (error) {
        console.error("Error fetching meta description:", error);
      }
    } else {
      setFormData((prev) => ({ ...prev, metaDescription: "" }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Show an alert (optional)
    alert("Form submitted successfully!");

    // Redirect to dashboard
    router.push("/");
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            Set Up Your Organization
          </h1>
          <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
            Get started by providing your organization's details. We'll help you create
            a perfect profile for your business.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Name */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Building2 className="w-4 h-4 mr-2 text-blue-500" />
                Company Name
              </label>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your company name"
                required
              />
            </div>

            {/* Website URL */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Globe className="w-4 h-4 mr-2 text-blue-500" />
                Company Website URL
              </label>
              <input
                type="url"
                value={formData.websiteUrl}
                onChange={handleURLChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="https://example.com"
                required
              />
            </div>

            {/* Meta Description (Auto-Fetched) */}
            {formData.metaDescription && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  value={formData.metaDescription}
                  readOnly
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                />
              </div>
            )}

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder="Tell us about your company..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <Send className="w-4 h-4 mr-2" />
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
