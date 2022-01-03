import React, { useEffect } from "react"
import Pagination from "./Pagination"
import { useAppSelector, useAppDispatch } from "../../redux/hooks"
import { getJobs } from "../../redux/action"

interface JobsTableProps {
	setEditId: (id: number) => void
	changeForm: () => void
}

const JobsTable = ({ setEditId, changeForm }: JobsTableProps) => {
	const { data, error, loading } = useAppSelector((state) => state.jobs)
	console.log(error)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getJobs())
	}, [dispatch])

	const itemToEdit = (id: number) => {
		setEditId(id)
		changeForm()
	}

	return (
		<div className="space-y-6 font-gil-mid min-h-[65%]">
			{!loading && data && (
				<>
					<ul className="tables bg-cd-blue text-white  mt-8 ">
						<li className="col-span-3">Job Title</li>
						<li className="hidden sm:list-item col-span-2">Date Modified</li>
						<li className="col-span-1 sm:col-span-2">Candidates</li>
						<li className="col-start-7 sm:col-start-10 col-span-2">Filter</li>
					</ul>
					{data.data!.map((job, i) => (
						<ul className="tables bg-white px-5" key={i}>
							<li className="col-span-3">{job.title}</li>
							<li className="hidden sm:list-item col-span-2">
								{job.updated_at?.split("T")[0]}
							</li>
							<li className="col-span-1 sm:col-span-2">50</li>
							<li className="col-span-2 w-[85%] max-w-[5rem] sm:max-w-[8rem]">
								<button
									className="tables-button bg-cl-red text-white"
									onClick={() => itemToEdit(job.id!)}
								>
									Edit
								</button>
							</li>
							<li className="col-span-2 w-[85%] max-w-[5rem] sm:max-w-[8rem]">
								<button className="tables-button bg-white border border-cl-blue text-cl-blue">
									Delete
								</button>
							</li>
						</ul>
					))}
					<Pagination />
				</>
			)}
		</div>
	)
}

export default JobsTable
