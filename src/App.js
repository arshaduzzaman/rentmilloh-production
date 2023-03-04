import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AddFloor from "./pages/floor/AddFloor";
import AddProperty from "./pages/property/AddProperty";
import FloorDetails from "./pages/floor/FloorDetails";
import ViewFloors from "./pages/floor/ViewFloors";
import ViewProperties from "./pages/property/ViewProperties";

function App() {
  return (
    <>
      <div></div>
      <Routes>
        {/* Home */}
        <Route exact path="/" element={<Dashboard />} />

        {/* Property */}
        <Route exact path="/properties/" element={<ViewProperties />} />
        <Route exact path="/properties/add" element={<AddProperty />} />
        <Route exact path="/properties/:propertyId" element={<AddProperty />} />

        {/* Floor */}
        <Route
          exact
          path="/properties/:propertyId/floors/"
          element={<ViewFloors />}
        />
        <Route
          exact
          path="/properties/:propertyId/floors/add"
          element={<AddFloor />}
        />
        <Route
          exact
          path="/properties/:propertyId/floors/:floorId"
          element={<FloorDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
