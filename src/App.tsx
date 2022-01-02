import React from "react"
import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import AdminHome from "./pages/AdminHome"
import Login from "./pages/Login"

const App: React.FC = () => {
	return (
		<div className="overflow-x-hidden">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Signup />} />
				<Route path="/admin/home" element={<AdminHome />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</div>
	)
}

export default App
