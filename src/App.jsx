import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage";
import Attendeeform from "./components/attandeeform/attendeeform";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/attendee" element={<Attendeeform />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
