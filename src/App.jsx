import {Route, Routes} from "react-router-dom"
import Reviews from "./pages/reviews/Reviews"
import AddReview from "./pages/addReview/AddReview"

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/reviews/add" element={<AddReview />} />
            </ Routes>
        </div>
    )
}

export default App
