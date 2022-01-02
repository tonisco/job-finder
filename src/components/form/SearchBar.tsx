import React from "react"
import { RiMapPinLine, RiSearchLine } from "react-icons/ri"

const SearchBar: React.FC = () => {
	return (
		<div className="relative h-12">
			<form className="form-container absolute top-5 h-[4.5rem] py-3">
				<div className="h-full  flex-1 flex items-center gap-2 border-r border-cl-blue">
					<RiSearchLine className=" h-8 w-8 text-cl-blue" />
					<input
						type="text"
						className="h-full w-full text-gray-700 tracking-wider focus:outline-none py-1 px-2"
						placeholder="Job Title"
					/>
				</div>
				<div className="h-full  flex-1 flex items-center gap-2">
					<RiMapPinLine className=" h-8 w-8 text-cl-blue" />
					<input
						type="text"
						className="h-full w-full text-gray-700 tracking-wider focus:outline-none py-1 px-2"
						placeholder="Location"
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
