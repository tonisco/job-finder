import React from "react"
import { Link } from "react-router-dom"
import Rings from "../utils/Rings"

const Header: React.FC = ({ children }) => {
	return (
		<div>
			<div className="w-full max-w-5xl mx-auto px-5 lg:px-0 py-5">
				<div className=" flex justify-between ">
					<Link to="/">
						<img src="/images/Logo.png" className="h-8" alt="logo" />
					</Link>
					<ul className="font-gil-mid flex items-center space-x-4 text-white tracking-wider text-blue-200">
						<li className="text-white">Jobs</li>
						<li>Company Review</li>
						<li>Find Salaries</li>
						<Link
							to="/login"
							className="py-1 px-2 bg-white text-cd-blue font-gil-bold rounded"
						>
							Post Job
						</Link>
					</ul>
				</div>
			</div>
			{children}
			<Rings />
		</div>
	)
}

export default Header
