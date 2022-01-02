import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
	return (
		<div className="bg-cd-blue">
			<div className="max-w-5xl px-6 lg:px-0 py-8 text-white tracking-normal flex justify-between w-full mx-auto">
				<div className="space-y-2">
					<img src="/images/Logo.png" alt="logo" />
					<p>© 2021 FindJobs</p>
				</div>
				<div className="space-y-2">
					<h5 className="font-gil-bold">Quick Links</h5>
					<ul className="space-y-1">
						<li>Home</li>
						<li>About</li>
						<li>Calendar</li>
						<li>Terms and condition</li>
					</ul>
				</div>
				<div className="space-y-2">
					<h5 className="font-gil-bold">Quick Links</h5>
					<ul className="space-y-1">
						<li>Home</li>
						<li>About</li>
						<li>Calendar</li>
						<li>Terms and condition</li>
					</ul>
				</div>
				<div className="space-y-2">
					<h5 className="font-gil-bold">Social Media</h5>
					<div className="flex gap-3">
						<FaInstagram className="bg-sky-700 rounded-full p-2 text-white h-10 w-10" />
						<FaFacebookF className="bg-sky-700 rounded-full p-2 text-white h-10 w-10" />
						<FaTwitter className="bg-sky-700 rounded-full p-2 text-white h-10 w-10" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
