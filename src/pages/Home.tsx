import React, { useState, useEffect } from "react"
import Header from "../components/main/Header"
import SearchBar from "../components/form/SearchBar"
import SearchList from "../components/main/SearchList"
import SearchDetails from "../components/main/SearchDetails"
import Pagination from "../components/utils/Pagination"
import Footer from "../components/main/Footer"
import JobApplyForm from "../components/form/JobApplyForm"
import { useAppDispatch } from "../redux/hooks"
import { getJobs } from "../redux/action"

const Home = () => {
	const [showApply, setShowApply] = useState<boolean>(false)

	const dispatch = useAppDispatch()

	const setShow = (): void => {
		setShowApply(!showApply)
	}
	const [selected, setSelected] = useState<number>(0)

	useEffect(() => {
		dispatch(getJobs())
	}, [dispatch])

	return (
		<div className={`${showApply && "h-screen overflow-y-hidden"}`}>
			{showApply && <JobApplyForm setShow={setShow} />}

			<div className="bg-cd-blue">
				<Header>
					<div className="max-w-5xl mx-auto px-5 lg:px-0">
						<h1 className="header-text">Find Your Dream Job</h1>
						<SearchBar />
					</div>
				</Header>
			</div>
			<div className="bg-cl-gray overflow-x-hidden">
				<div className="grid grid-cols-2 max-w-5xl px-6 lg:px-0 mx-auto gap-10">
					<SearchList selected={selected} setSelected={setSelected} />
					<SearchDetails setShow={setShow} selected={selected} />
					<Pagination />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home
