export default function WebpageDetails({ page, onClose }) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Scraped Data from {page.url}</h2>
          
          {page.dataChunks.length > 0 ? (
            <ul className="list-disc list-inside space-y-2">
              {page.dataChunks.map((chunk, index) => (
                <li key={index} className="bg-gray-100 p-2 rounded">{chunk}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No data extracted yet.</p>
          )}
  
          <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Close
          </button>
        </div>
      </div>
    );
  }
  