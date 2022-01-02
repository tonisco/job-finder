import React from "react"
import { JobDetails } from "../../types/JobsTypes"
import { RiMapPinLine } from "react-icons/ri"

interface Details {
	job: JobDetails
	selected: number
	changeSelected: (id: number) => void
}

const SearchListCard = ({ job, selected, changeSelected }: Details) => {
	return (
		<div
			className={`mt-8 w-full p-4 ${
				job.id === selected ? "bg-cd-blue text-white" : "bg-white text-cd-blue"
			} rounded-lg shadow-xl flex flex-col  space-y-2`}
			key={job.id}
		>
			<div className=" w-full gap-3 flex justify-between text-2xl font-gil-bold">
				<h2>{job?.title}</h2>
				<h3 className="text-lg">{job.salary!.replaceAll(",000", "k")}</h3>
			</div>
			<div className="flex gap-2 items-center">
				<RiMapPinLine className="text-cl-blue" />
				<h4 className={`${job.id !== selected && "text-cd-gray"}`}>{job.location}</h4>
			</div>
			<p className={`${job.id !== selected && "text-cd-gray"} text-sm`}>{job.description}</p>
			<button
				className={`${
					job.id === selected ? "text-cl-red bg-white" : "bg-cl-red text-white"
				} self-end px-3 py-1 font-gil-mid rounded-xl tracking-wider`}
				onClick={() => changeSelected(job.id!)}
			>
				See more
			</button>
		</div>
	)
}

export default SearchListCard
