import React from "react"
import { GrClose } from "react-icons/gr"
import { RiMapPinLine } from "react-icons/ri"
import FileInput from "./FileInput"

interface JobApplyProps {
	setShow: () => void
}

const JobApplyForm = ({ setShow }: JobApplyProps) => {
	return (
		<>
			<div
				className="bg-gray-500 bg-opacity-40 fixed cursor-pointer h-screen w-full z-10"
				onClick={setShow}
			></div>
			<div className="box z-20 scale-up-center">
				<div className="max-w-2xl mx-auto flex flex-col gap-7 px-8 relative">
					<GrClose
						className="absolute -top-10 right-2 h-10 cursor-pointer"
						onClick={setShow}
					/>
					<div className="space-y-1">
						<h3 className="text-cd-blue font-gil-bold text-3xl">Front end developer</h3>
						<p className="text-sm flex items-center gap-1">
							<RiMapPinLine className="text-cl-blue" /> Ikeja, Lagos
						</p>
					</div>
					<form className="space-y-6 w-full">
						<div className="flex flex-col gap-2 ">
							<label htmlFor="first_name" className="text-cd-blue font-gil-bold">
								First Name
							</label>
							<input type="text" id="first_name" className="form-inputs" />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="last_name" className="text-cd-blue font-gil-bold">
								Last Name
							</label>
							<input type="text" id="last_name" className="form-inputs" />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="email" className="text-cd-blue font-gil-bold">
								Email
							</label>
							<input type="email" id="email" className="form-inputs" required />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="location" className="text-cd-blue font-gil-bold">
								Location
							</label>
							<input type="text" id="location" className="form-inputs" />
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="phone" className="text-cd-blue font-gil-bold">
								Phone Number
							</label>
							<input type="tel" id="phone" className="form-inputs" />
						</div>
						<FileInput />
						<button
							type="submit"
							className="py-2 px-7 w-full rounded-lg tracking-wider bg-cd-blue text-white font-gil-mid"
						>
							Submit Application
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default JobApplyForm
