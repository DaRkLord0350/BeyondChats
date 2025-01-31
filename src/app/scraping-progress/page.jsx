"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, X } from 'lucide-react'; // Import the icons

const dummyWebpages = [
  { id: 1, url: "https://example.com", status: "scraped", dataChunks: ["Intro text", "Main content", "Footer details"] },
  { id: 2, url: "https://example.com/about", status: "pending", dataChunks: [] },
  { id: 3, url: "https://example.com/contact", status: "scraped", dataChunks: ["Email", "Phone number", "Location"] },
  { id: 4, url: "https://example.com/blog", status: "scraped", dataChunks: ["Blog titles", "Author names", "Published dates"] },
  { id: 5, url: "https://example.com/services", status: "pending", dataChunks: [] },
];

export default function ScrapingProgressPage() {
  const [selectedPage, setSelectedPage] = useState(null);
  const [showData, setShowData] = useState(false); // State to toggle data visibility

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
      {/* Progress Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4">
            <h1 className="text-2xl font-semibold text-white">Scraping Progress</h1>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">URL</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {dummyWebpages.map((page) => (
                  <tr key={page.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{page.url}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {page.status === "scraped" ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Scraped
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {page.status === "scraped" ? (
                        <button
                          onClick={() => {
                            setSelectedPage(page);
                            setShowData(false); // Hide data when selecting a new page
                          }}
                          className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                          <Sparkles className="w-4 h-4 mr-2" />
                          View Data
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      ) : (
                        <span className="text-gray-400">Pending...</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Display Data Chunks of the Selected Page */}
          {selectedPage && (
            <div className="mt-6 px-6 py-4 bg-gray-100 rounded-md">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-700">Scraped Data for {selectedPage.url}</h3>
                <button
                  onClick={() => setShowData(!showData)}
                  className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                  {showData ? 'Hide' : 'Show'}
                </button>
              </div>

              {showData && (
                <ul className="mt-4 list-disc pl-6">
                  {selectedPage.dataChunks.map((chunk, index) => (
                    <li key={index} className="text-gray-600">{chunk}</li>
                  ))}
                </ul>
              )}

              <button
                onClick={() => setSelectedPage(null)}
                className="mt-4 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors"
              >
                <X className="w-4 h-4 mr-2" />
                Close Data
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
