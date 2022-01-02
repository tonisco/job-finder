import React, { useEffect } from "react"
import { RiMapPinLine } from "react-icons/ri"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getJob } from "../../redux/action"

interface SearchDetailsProps {
	setShow: () => void
	selected: number
}

const SearchDetails = ({ setShow, selected }: SearchDetailsProps) => {
	const dispatch = useAppDispatch()
	const { data, error, loading } = useAppSelector((state) => state.getJob)

	useEffect(() => {
		if (selected !== 0) {
			dispatch(getJob(selected))
		}
	}, [selected, dispatch])

	return (
		<div className="mt-[8.4rem] bg-white text-cd-gray shadow-xl rounded-xl">
			{loading ? (
				<h1>Loading</h1>
			) : error ? (
				<h1>{error}</h1>
			) : (
				<>
					<div className="flex flex-col gap-3 px-8 pt-7 pb-4 border-b border-cl-red">
						<h1 className="text-cd-blue text-2xl font-gil-bold">{data.title}</h1>
						<div className="flex gap-2 items-center">
							<RiMapPinLine className="text-cl-blue h-6 w-6" />
							<h4>{data.location}</h4>
						</div>
						<button
							className="px-3 py-1 bg-cd-blue text-white self-start rounded-lg tracking-wider"
							onClick={setShow}
						>
							Apply Via Find Job
						</button>
					</div>
					<div className="flex flex-col gap-3 px-8 pt-7 pb-4 text-sm leading-5">
						{data.description}
						{data.benefits}
						{/* <p>
							In this role, you will be responsible for developing and implementing
							user interface components using React.js concepts and workflow such as
							Redux, Flux, and Webpack. You will also be responsible for profiling and
							improving front-end performance and documenting our front-end codebase.
						</p>
						<ul className="list-inside list-disc py-2 space-y-2">
							<li>Minimum Qualification: Degree</li>
							<li>Experience Level: Senior level</li>
							<li>Experience Length: 5 years</li>
						</ul>
						<h4 className="font-gil-bold">Job Description/Requirements</h4>
						<ul className="list-inside list-disc py-2 space-y-2">
							<li>
								5+ years experience of front-end related (HTML5 + JS + CSS3)
								development work experience, familiar with mobile application
								development;
							</li>
							<li>
								Proficient in JavaScript / Typescript, mastering technologies such
								as HTML, CSS, DOM, AJAX, etc., can quickly complete the established
								interactive design functions; At least 4 years experience is
								required.
							</li>
							<li>Thorough understanding of React.js and its core principles</li>
							<li>
								Experience with popular React.js workflows (such as Flux or Redux)
							</li>
							<li>Familiarity with RESTful API’s</li>
							<li>Knowledge of isomorphic react is a plus</li>
							<li>Familiarity with mordern front-end build pipelines and tools</li>
							<li>
								Experience with common front-end development tools such as Babel,
								Webpack, NPM e.t.c
							</li>
						</ul> */}
					</div>
				</>
			)}
		</div>
	)
}

export default SearchDetails
