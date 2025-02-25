import Header from "./Components/header";
import NewsFeed from "./Components/NewsFeed";
import Sidebar from "./Components/sideBar";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Header - Fixed */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm h-14">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen mx-32 pt-14">
        {/* Sidebar - Left */}
        <div className="hidden lg:block fixed left-14 top-14 bottom-0 w-1/5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
          <div className="p-4 pr-2">
            <Sidebar />
          </div>
        </div>

        {/* NewsFeed - Center */}
        <main className="w-full lg:mx-[20%] transition-all duration-300">
          <div className="max-w-[100%] mx-auto py-4 px-4">
            <NewsFeed />
          </div>
        </main>

        {/* Contact - Right */}
        <div className="hidden lg:block fixed right-14 top-14 bottom-0 w-1/5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
          <div className="p-4 pl-2">
            <Contact />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
