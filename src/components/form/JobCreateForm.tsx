import React, { useState, FormEvent, useEffect } from "react"
import { GrClose } from "react-icons/gr"
import Quil from "../utils/Quil"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { createJob } from "../../redux/action"
import { ToastContainer } from "react-toastify"
import { toastError, toastSuccess } from "../utils/Toast"
import { clearCreateJob } from "../../redux/slice"

interface formCreateType {
	changeForm: () => void
	editId: number
	setEditId: (id: number) => void
	showForm: boolean
}

const JobCreateForm = ({ changeForm, editId, setEditId, showForm }: formCreateType) => {
	const [title, setTitle] = useState<string>("")
	const [location, setLocation] = useState<string>("")
	const [category, setCategory] = useState<string>("Tech")
	const [salary, setSalary] = useState<string>("")
	const [type, setType] = useState<string>("Full-time")
	const [work_condition, setWork_condition] = useState<string>("Remote")
	const [description, setDescription] = useState<string>("")

	const dispatch = useAppDispatch()
	const { data } = useAppSelector((state) => state.jobs.data)
	const { data: createJobData, error, loading } = useAppSelector((state) => state.createJob)

	const changeDescription = (value: any) => {
		setDescription(value)
	}

	const clearInputs = () => {
		setTitle("")
		setLocation("")
		setCategory("")
		setSalary("")
		setType("")
		setWork_condition("")
		setDescription("")
		setEditId(0)
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		if (title.length < 3) {
			return toastError("Title must contain at least 3 letters")
		}
		if (location.length < 3) {
			return toastError("Location must contain at least 3 letters")
		}
		if (salary.length < 3) {
			return toastError("Salary must contain at least 3 letters")
		}
		if (description.length < 3) {
			return toastError("description must contain at least 3 letters")
		}

		dispatch(
			createJob({ title, location, category, salary, type, work_condition, description })
		)
		// clearInputs()
	}

	const closeForm = () => {
		changeForm()
		if (editId !== 0) {
			clearInputs()
		}
	}

	useEffect(() => {
		if (showForm && editId !== 0) {
			const value = data!.find((data) => data.id === editId)
			if (value !== -1) {
				setTitle(value!.title!)
				setLocation(value?.location!)
				setCategory(value?.category!)
				setSalary(value?.salary!)
				setType(value?.type!)
				setWork_condition(value?.work_condition!)
				// setDescription(value?.description!)
			}
		}
	}, [showForm, editId, data])

	useEffect(() => {
		if (error) {
			toastError(error)
		}
		if (createJobData.message) {
			toastSuccess(createJobData.message)
		}
		dispatch(clearCreateJob())
	}, [error, createJobData?.message])

	return (
		<>
			<ToastContainer />
			<div
				className="bg-gray-500 bg-opacity-40 fixed cursor-pointer h-screen w-full z-10"
				onClick={closeForm}
			></div>
			<div className="box z-20 scale-up-center">
				<div className="max-w-2xl mx-auto flex flex-col gap-7 px-8 relative">
					<GrClose
						className="absolute -top-10 right-2 h-10 cursor-pointer"
						onClick={closeForm}
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
							<input
								type="text"
								id="job_title"
								className="form-inputs"
								value={title}
								onChange={(e) => {
									setTitle(e.target.value)
								}}
							/>
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
								value={location}
								onChange={(e) => setLocation(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="section" className="text-cd-blue font-gil-bold">
								What section is this job categorized under ?
							</label>
							<select
								id="section"
								className="form-inputs"
								value={category}
								onChange={(e) => setCategory(e.target.value)}
							>
								<option value="Tech">Tech</option>
								<option value="Health care">Health care</option>
								<option value="Hospitality">Hospitality</option>
								<option value="Customer Service">Customer Service</option>
								<option value="Marketing">Marketing</option>
							</select>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="salary" className="text-cd-blue font-gil-bold">
								Salary range
							</label>
							<input
								type="text"
								id="salary"
								className="form-inputs"
								value={salary}
								onChange={(e) => setSalary(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="type" className="text-cd-blue font-gil-bold">
								What type of employment is it ?
							</label>
							<select
								id="type"
								className="form-inputs"
								value={type}
								onChange={(e) => setType(e.target.value)}
							>
								<option value="Full-time">Full-time</option>
								<option value="Temporary">Temporary</option>
								<option value="Contract">Contract</option>
								<option value="Permanent">Permanent</option>
								<option value="Internship">Internship</option>
								<option value="Volunteer">Volunteer</option>
							</select>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="work" className="text-cd-blue font-gil-bold">
								Work Condition
							</label>
							<select
								id="work"
								className="form-inputs"
								value={work_condition}
								onChange={(e) => setWork_condition(e.target.value)}
							>
								<option value="Remote">Remote</option>
								<option value="Part Remote">Part Remote</option>
								<option value="On-Premise">On-Premise</option>
							</select>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="description" className="text-cd-blue font-gil-bold">
								Description
							</label>
							<Quil description={description} setDescription={changeDescription} />
						</div>
						<button
							type="submit"
							className="py-2 px-7 w-full rounded-lg tracking-wider bg-cd-blue text-white font-gil-mid"
							onClick={handleSubmit}
						>
							SUBMIT
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default JobCreateForm
