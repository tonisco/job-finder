import { createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosError, AxiosResponse } from "axios"
import { JobForm, Job, JobDetails, JobEditdetails, JobCreate, JobDelete } from "../types/JobsTypes"
import { RegisterInput, UserDetails, LoginInput } from "../types/UserTypes"
import { RootState } from "./config"

const api = "https://api.jobboard.tedbree.com/v1"

export const getJobs = createAsyncThunk<Job, undefined, { rejectValue: err }>(
	"allJobs",
	async (_, { rejectWithValue }): Promise<any> => {
		console.log(api)
		try {
			const { data } = await axios.get(`${api}/jobs`)
			return data
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			rejectWithValue(response.data)
		}
	}
)

export const getJob = createAsyncThunk<JobDetails, number, { rejectValue: err }>(
	"aJob",
	async (id, { rejectWithValue }): Promise<any> => {
		try {
			console.log(id)
			const { data } = await axios.get(`${api}/jobs/${id}`)
			return data
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			rejectWithValue(response.data)
		}
	}
)

export const createJob = createAsyncThunk<
	JobCreate,
	JobForm,
	{ rejectValue: err; state: RootState }
>(
	"createJob",
	async (input, { rejectWithValue, getState }): Promise<any> => {
		try {
			const { token } = getState().user.user.data
			const config = {
				headers: {
					authorization: "",
					"Content-Type": "application/json",
				},
			}
			if (token) {
				config.headers.authorization = `Bearer ${token}`
			}
			const { data } = await axios.post(`${api}/jobs/`, input, config)
			console.log(data)
			return data
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			console.log(response)
			rejectWithValue(response.data)
		}
	}
)

export const editJob = createAsyncThunk<
	JobCreate,
	JobEditdetails,
	{ rejectValue: err; state: RootState }
>(
	"editJob",
	async (values, { rejectWithValue, getState }): Promise<any> => {
		try {
			const { token } = getState().user.user.data
			const config = {
				headers: {
					authorization: "",
					"Content-Type": "application/json",
				},
			}
			if (token) {
				config.headers.authorization = `Bearer ${token}`
			}
			const { data } = await axios.put(`${api}/jobs/${values.id}`, values.input, config)
			return data
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			rejectWithValue(response.data)
		}
	}
)

export const deleteJob = createAsyncThunk<
	JobDelete,
	number,
	{ rejectValue: err; state: RootState }
>(
	"deleteJob",
	async (id, { rejectWithValue, getState }): Promise<any> => {
		try {
			const { token } = getState().user.user.data
			const config = {
				headers: {
					authorization: "",
					"Content-Type": "application/json",
				},
			}
			if (token) {
				config.headers.authorization = `Bearer ${token}`
			}
			const { data } = await axios.delete(`${api}/jobs/${id}`, config)
			return data
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			rejectWithValue(response.data)
		}
	}
)

export const registerUser = createAsyncThunk<UserDetails, RegisterInput, { rejectValue: err }>(
	"register",
	async (input, { rejectWithValue }): Promise<any> => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			}
			const { data } = await axios.post(`${api}/jobs/register`, input, config)
			return data
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			return rejectWithValue(response.data)
		}
	}
)

interface err {
	message: string
}

export const loginUser = createAsyncThunk<UserDetails, LoginInput, { rejectValue: err }>(
	"login",
	async (input, { rejectWithValue }): Promise<any> => {
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			}
			console.log(input)
			const { data } = await axios.post(`${api}/login`, input, config)
			localStorage.setItem("user", JSON.stringify(data.data))
			return data
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			return rejectWithValue(response.data)
		}
	}
)
