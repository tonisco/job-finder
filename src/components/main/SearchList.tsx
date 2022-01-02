import React, { useEffect } from "react"
import { useAppSelector } from "../../redux/hooks"
import SearchListCard from "../utils/SearchListCard"

interface Details {
	selected: number
	setSelected: (id: number) => void
}

const SearchList = ({ selected, setSelected }: Details) => {
	const { data, loading, error } = useAppSelector((state) => state.jobs)

	useEffect(() => {
		if (selected === 0 && data.data) {
			setSelected(data.data[0].id!)
		}
	}, [data.data, selected, setSelected])

	useEffect(() => {
		if (error) {
			console.log(error)
		}
	}, [error])

	const changeSelected = (id: number): void => {
		setSelected(id)
	}

	return (
		<div className="mt-20 w-full">
			<div className="flex w-full justify-between">
				<h2 className="font-gil-mid">Showing 68 results</h2>
				<div className="">
					<label htmlFor="sort">Sort By</label>
					<select>
						<option value="Latest">Latest</option>
						<option value="Type">Type</option>
						<option value="Latest">Latest</option>
					</select>
				</div>
			</div>
			{/* first item */}
			{!loading &&
				(data ? (
					data.data?.map((job) => {
						return (
							<SearchListCard
								job={job}
								selected={selected}
								changeSelected={changeSelected}
								key={job.id}
							/>
						)
					})
				) : (
					<h1>Error</h1>
				))}
		</div>
	)
}

export default SearchList
