import React from "react"
import { GrClose } from "react-icons/gr"

interface formCreateType {
	changeForm: () => void
}

const JobCreateForm = ({ changeForm }: formCreateType) => {
	return (
		<>
			<div
				className="bg-gray-500 bg-opacity-40 fixed cursor-pointer h-screen w-full z-10"
				onClick={changeForm}
			></div>
			<div className="box z-20 scale-up-center">
				<div className="max-w-2xl mx-auto flex flex-col gap-7 px-8 relative">
					<GrClose
						className="absolute -top-10 right-2 h-10 cursor-pointer"
						onClick={changeForm}
					/>
					<div className="space-y-1">
						<h3 className="text-cd-blue font-gil-bold text-3xl">New Job</h3>
						<p className="text-sm">
							Kindly provide the required information to get matched with suitable
							candidates
						</p>
					</div>
					<form className="space-y-6 w-full">
						<div className="flex flex-col gap-2 ">
							<label htmlFor="job_title" className="text-cd-blue font-gil-bold">
								Job title
							</label>
							<input type="text" id="job_title" className="form-inputs" />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="company_name" className="text-cd-blue font-gil-bold">
								Company name
							</label>
							<input type="text" id="company_name" className="form-inputs" />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="location" className="text-cd-blue font-gil-bold">
								Location
							</label>
							<input
								type="text"
								placeholder="Lagos, Nigeria"
								id="location"
								className="form-inputs"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="type" className="text-cd-blue font-gil-bold">
								What type of employment is it ?
							</label>
							<select id="type" className="form-inputs">
								<option value="Full-time">Full-time</option>
								<option value="Temporary">Temporary</option>
								<option value="Contract">Contract</option>
								<option value="Permanent">Permanent</option>
								<option value="Internship">Internship</option>
								<option value="Volunteer">Volunteer</option>
							</select>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="salary" className="text-cd-blue font-gil-bold">
								Salary range
							</label>
							<input type="text" id="salary" className="form-inputs" />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="submission" className="text-cd-blue font-gil-bold">
								Submission deadline
							</label>
							<input type="date" id="submission" className="form-inputs" />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="section" className="text-cd-blue font-gil-bold">
								What section is this job categorized under ?
							</label>
							<select id="section" className="form-inputs">
								<option value="Tech">Tech</option>
								<option value="Health care">Health care</option>
								<option value="Hospitality">Hospitality</option>
								<option value="Customer Service">Customer Service</option>
								<option value="Marketing">Marketing</option>
							</select>
						</div>
						<button
							type="submit"
							className="py-2 px-7 w-full rounded-lg tracking-wider bg-cd-blue text-white font-gil-mid"
						>
							Login
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default JobCreateForm
