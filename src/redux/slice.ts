import { createSlice } from "@reduxjs/toolkit"
import { Job, JobDetails, JobCreate } from "../types/JobsTypes"
import { getJobs, getJob, createJob, editJob, deleteJob, loginUser, registerUser } from "./action"
import { UserDetails } from "../types/UserTypes"

interface JobsPayload {
	loading: boolean
	data: Job
	error: string
}

const getJobsInitial: JobsPayload = {
	data: {},
	error: "",
	loading: true,
}

export const getJobsSlice = createSlice({
	name: "getallJobs",
	initialState: getJobsInitial,
	reducers: {
		clearGetJobsError: (state) => {
			state.error = ""
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getJobs.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(getJobs.fulfilled, (state, action) => {
			state.loading = false
			state.data = action.payload
		})
		builder.addCase(getJobs.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message!
		})
	},
})
export const { clearGetJobsError } = getJobsSlice.actions

interface JobPayload {
	loading: boolean
	data: JobDetails
	error: string
}

const getJobInitial: JobPayload = {
	loading: false,
	error: "",
	data: {},
}

export const getJobSlice = createSlice({
	name: "getJob",
	initialState: getJobInitial,
	reducers: {
		clearGetJobError: (state) => {
			state.error = ""
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getJob.pending, (state, action) => {
			state.data = {}
			state.error = ""
			state.loading = true
		})
		builder.addCase(getJob.fulfilled, (state, action) => {
			state.data = action.payload
			state.loading = false
		})
		builder.addCase(getJob.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message!
		})
	},
})

export const { clearGetJobError } = getJobSlice.actions

interface CreateJobPayload {
	loading: boolean
	data: JobCreate
	error: string
}

const createJobInitial: CreateJobPayload = {
	loading: false,
	error: "",
	data: {},
}

export const createJobSlice = createSlice({
	name: "createJob",
	initialState: createJobInitial,
	reducers: {
		clearCreateJobError: (state) => {
			state.error = ""
		},
	},
	extraReducers: (builder) => {
		builder.addCase(createJob.pending, (state, action) => {
			state.loading = true
			state.error = ""
			state.data = {}
		})
		builder.addCase(createJob.fulfilled, (state, action) => {
			state.data = action.payload
			state.loading = false
		})
		builder.addCase(createJob.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message!
		})
	},
})

export const { clearCreateJobError } = createJobSlice.actions

interface EditJobPayLoad {
	loading: boolean
	data: JobCreate
	error: string
}

const editJobInitial: EditJobPayLoad = {
	loading: false,
	error: "",
	data: {},
}

export const editJobSlice = createSlice({
	name: "editJob",
	initialState: editJobInitial,
	reducers: {
		clearEditJobError: (state) => {
			state.error = ""
		},
	},
	extraReducers: (builder) => {
		builder.addCase(editJob.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(editJob.fulfilled, (state, action) => {
			state.data = action.payload
			state.loading = false
		})
		builder.addCase(editJob.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message!
		})
	},
})

export const { clearEditJobError } = editJobSlice.actions

interface DeleteJob {
	loading: boolean
	data: JobCreate
	error: string
}

const deleteJobInitial: DeleteJob = {
	loading: false,
	error: "",
	data: {},
}

export const deleteJobSlice = createSlice({
	name: "deleteJob",
	initialState: deleteJobInitial,
	reducers: {
		clearDeleteJobError: (state) => {
			state.error = ""
		},
	},
	extraReducers: (builder) => {
		builder.addCase(deleteJob.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(deleteJob.fulfilled, (state, action) => {
			state.data = action.payload
			state.loading = false
		})
		builder.addCase(deleteJob.rejected, (state, action) => {
			state.loading = false
			state.error = action.error.message!
		})
	},
})

export const { clearDeleteJobError } = deleteJobSlice.actions

interface UserPayload {
	loading: boolean
	user: UserDetails
	error: string
}

const userInitial: UserPayload = {
	loading: false,
	error: "",
	user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "{}") : {},
}

export const userSlice = createSlice({
	name: "user",
	initialState: userInitial,
	reducers: {
		clearUserError: (state) => {
			state.error = ""
		},
		clearUserMessage: (state) => {
			state.user.message = ""
			state.user.status = ""
		},
	},
	extraReducers: (builder) => {
		builder.addCase(loginUser.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(loginUser.fulfilled, (state, action) => {
			state.user = action.payload
			state.loading = false
		})
		builder.addCase(loginUser.rejected, (state, action) => {
			state.loading = false
			if (action.payload) {
				state.error = action.error.message!
			} else {
				state.error = action.error.message!
			}
		})
		builder.addCase(registerUser.pending, (state, action) => {
			state.loading = true
		})
		builder.addCase(registerUser.fulfilled, (state, action) => {
			state.user = action.payload
			state.loading = false
		})
		builder.addCase(registerUser.rejected, (state, action) => {
			state.loading = false
			if (action.payload) {
				state.error = action.error.message!
			} else {
				state.error = action.error.message!
			}
		})
	},
})

export const { clearUserError, clearUserMessage } = userSlice.actions
