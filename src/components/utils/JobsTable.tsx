import React from "react"
import Pagination from "./Pagination"

const JobsTable = () => {
	return (
		<div className="space-y-6 font-gil-mid">
			<ul className="tables bg-cd-blue text-white  mt-8 ">
				<li className="col-span-3">Job Title</li>
				<li className="hidden sm:list-item col-span-2">Date Modified</li>
				<li className="col-span-1 sm:col-span-2">Candidates</li>
				<li className="col-start-7 sm:col-start-10 col-span-2">Filter</li>
			</ul>
			{[...new Array(8)].map((_, i) => (
				<ul className="tables bg-white px-5" key={i}>
					<li className="col-span-3">Customer success intern</li>
					<li className="hidden sm:list-item col-span-2">12/7/21</li>
					<li className="col-span-1 sm:col-span-2">50</li>
					<li className="col-span-2 w-[85%] max-w-[5rem] sm:max-w-[8rem]">
						<button className="tables-button bg-cl-red text-white">Edit</button>
					</li>
					<li className="col-span-2 w-[85%] max-w-[5rem] sm:max-w-[8rem]">
						<button className="tables-button bg-white border border-cl-blue text-cl-blue">
							Delete
						</button>
					</li>
				</ul>
			))}
			<Pagination />
		</div>
	)
}

export default JobsTable
