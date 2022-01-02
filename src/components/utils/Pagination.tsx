import React from "react"

const Pagination = () => {
	return (
		<div className="flex gap-8 flex-wrap my-10">
			{[...new Array(5)].map((_, i) => (
				<div className="border border-cd-blue px-4 py-2 bg-white text-cd-blue" key={i}>
					{i + 1}
				</div>
			))}
			<div className="border border-cd-blue px-3 py-1 text-cd-blue">&rarr;</div>
		</div>
	)
}

export default Pagination
