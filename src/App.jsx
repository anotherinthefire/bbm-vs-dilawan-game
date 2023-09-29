import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Rules from "./pages/Rules"
import Game from "./pages/Game"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </Router>
  )
}