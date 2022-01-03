import React, { useState, FormEvent } from "react"
import { RiMapPinLine, RiSearchLine } from "react-icons/ri"
import { useSearchParams } from "react-router-dom"

const SearchBar = () => {
	const [title, setTitle] = useState("")
	const [location, setLocation] = useState("")

	const [query, setQuery] = useSearchParams()

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (title) {
			setQuery({ q: title })
		}
	}

	return (
		<div className="relative h-12">
			<form className="form-container absolute top-5 h-[4.5rem] py-3" onSubmit={handleSubmit}>
				<div className="h-full  flex-1 flex items-center gap-2 border-r border-cl-blue">
					<RiSearchLine className=" h-8 w-8 text-cl-blue" />
					<input
						type="text"
						className="h-full w-full text-gray-700 tracking-wider focus:outline-none py-1 px-2"
						placeholder="Job Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="h-full  flex-1 flex items-center gap-2">
					<RiMapPinLine className=" h-8 w-8 text-cl-blue" />
					<input
						type="text"
						className="h-full w-full text-gray-700 tracking-wider focus:outline-none py-1 px-2"
						placeholder="Location"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
					/>
				</div>
				<button type="submit" className="button py-2">
					Search
				</button>
			</form>
		</div>
	)
}

export default SearchBar
