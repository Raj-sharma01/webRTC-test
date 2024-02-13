import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { Routes, Route } from "react-router-dom";



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<LobbyScreen />,
//   },
//   // {
//   //   path: "/room/:roomId",
//   //   element:<RoomPage />
//   // },
  
// ]);
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
      </Routes>
    </div>
  );
}

export default App;
