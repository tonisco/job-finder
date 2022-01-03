import React from "react"
import { useAppSelector } from "../../redux/hooks"
import { useSearchParams } from "react-router-dom"

const Pagination = () => {
	const { data } = useAppSelector((state) => state.jobs)
	const [query, setQuery] = useSearchParams()

	return (
		<div className="flex gap-8 flex-wrap my-10">
			{data &&
				[...new Array(data.last_page)].map((_, i) => (
					<div className="border border-cd-blue px-4 py-2 bg-white text-cd-blue" key={i}>
						{i + 1}
					</div>
				))}
			<div className="border border-cd-blue px-3 py-1 text-cd-blue">&rarr;</div>
		</div>
	)
}

export default Pagination
