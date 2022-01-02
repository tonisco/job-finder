import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import {
	getJobsSlice,
	createJobSlice,
	deleteJobSlice,
	editJobSlice,
	getJobSlice,
	userSlice,
} from "./slice"

const reducer = {
	jobs: getJobsSlice.reducer,
	createJob: createJobSlice.reducer,
	deleteJob: deleteJobSlice.reducer,
	editJob: editJobSlice.reducer,
	getJob: getJobSlice.reducer,
	user: userSlice.reducer,
}
const store = configureStore({ reducer })

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
