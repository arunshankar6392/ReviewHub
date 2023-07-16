import "./App.css";
import Auth from "./Pages/Auth";
import AllReviews from "./Pages/AllReviews";
import CreateReview from "./Pages/CreateReview";
import ReviewHub from "./Pages/ReviewHub";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SavedReviews from "./Pages/SavedReviews";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ReviewHub />} />
          <Route path="/all-reviews" element={<AllReviews />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-review" element={<CreateReview />} />
          <Route path="/saved-reviews" element={<SavedReviews />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
