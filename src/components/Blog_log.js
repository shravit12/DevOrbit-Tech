export default function B_log({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="bg-white/30 backdrop-blur-md sticky top-18 z-40 w-full mb-12">
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 whitespace-nowrap rounded ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "bg-gray-900 text-white/90"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}