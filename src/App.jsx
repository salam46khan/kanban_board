import MainContent from "./components/MainContent/MainContent";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="bg-gray-50">
      <div className="min-h-screen flex flex-col lg:flex-row">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;