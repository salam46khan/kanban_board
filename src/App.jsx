import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="bg-gray-50">
      <div class="min-h-screen flex flex-col lg:flex-row">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;