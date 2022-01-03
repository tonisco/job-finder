import React, { useEffect } from "react"
import { RiMapPinLine } from "react-icons/ri"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { getJob } from "../../redux/action"
import parse from "html-react-parser"

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

	console.log(selected)

	return (
		<div className="mt-[8.4rem] bg-white text-cd-gray shadow-xl rounded-xl">
			{selected !== 0 &&
				(loading ? (
					<h1>Loading</h1>
				) : data ? (
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
						<div className="flex flex-col gap-3 px-8 pt-7 pb-4 text-sm leading-5 list-edit">
							{data.description && parse(data.description!)}
						</div>
					</>
				) : (
					<h1>{error}</h1>
				))}
		</div>
	)
}

export default SearchDetails
