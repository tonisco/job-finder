import React, { useState } from "react"
import { RiSearchLine } from "react-icons/ri"
import { FiPlus } from "react-icons/fi"
import Header from "../components/main/Header"
import JobsTable from "../components/utils/JobsTable"
import Footer from "../components/main/Footer"
import JobCreateForm from "../components/form/JobCreateForm"

const AdminHome = () => {
	const [showForm, setShowForm] = useState<boolean>(false)

	const changeForm = (): void => {
		setShowForm((currVal: boolean) => !currVal)
	}

	return (
		<>
			{showForm && <JobCreateForm changeForm={changeForm} />}
			<div
				className={`bg-cl-gray ${showForm ? "h-screen overflow-y-hidden" : "min-h-screen"}`}
			>
				<div className="bg-cd-blue pb-6">
					<Header>
						<div className="max-w-5xl mx-auto px-5 lg:px-0">
							<h1 className="header-text">Jobs</h1>
						</div>
					</Header>
				</div>
				<div className="max-w-5xl mx-auto px-3 lg:px-0 my-12 space-y-5">
					<div className="flex flex-col sm:flex-row gap-8 w-full sm:justify-between items-start sm:items-center">
						<form className="form-container items-center ">
							<RiSearchLine className="h-8 w-8 text-cl-blue" />
							<input type="text" className="search-input" placeholder="Job Title" />
							<button type="submit" className="button py-2">
								Search
							</button>
						</form>
						<button
							type="button"
							className="button py-2 gap-3 flex font-gil-mid text-lg items-center"
							onClick={changeForm}
						>
							<FiPlus /> <p>New Job</p>
						</button>
					</div>
					<JobsTable />
				</div>
				<Footer />
			</div>
		</>
	)
}

export default AdminHome
