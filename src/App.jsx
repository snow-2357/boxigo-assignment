// import Sidenav from "./components/Sidenav";

import MyMoves from "./components/MyMoves";
import Sidenav from "./components/Sidenav";

function App() {
  return (
    <div className="flex ">
      <div className="w-60 hidden lg:block">
        <Sidenav />
      </div>
      <MyMoves />
    </div>
  );
}

export default App;
