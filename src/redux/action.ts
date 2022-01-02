import { createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosError, AxiosResponse } from "axios"
import { JobForm, Job, JobDetails, JobEditdetails, JobCreate, JobDelete } from "../types/JobsTypes"
import { RegisterInput, UserDetails, LoginInput } from "../types/UserTypes"

const api = process.env.API

export const getJobs = createAsyncThunk<Job, undefined, { rejectValue: err }>(
	"allJobs",
	async (_, { rejectWithValue }): Promise<any> => {
		try {
			const { data } = await axios.get("http://localhost:8000/api/v1/jobs")
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
			const { data } = await axios.get(`http://localhost:8000/api/v1/jobs/${id}`)
			return data
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			rejectWithValue(response.data)
		}
	}
)

export const createJob = createAsyncThunk<JobCreate, JobForm, { rejectValue: err }>(
	"aJob",
	async (input, { rejectWithValue }): Promise<any> => {
		try {
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			rejectWithValue(response.data)
		}
		const config = {
			headers: {
				// authorization
				"Content-Type": "application/json",
			},
		}
		const { data } = await axios.post(`http://localhost:8000/api/v1/jobs/`, input, config)
		return data
	}
)

export const editJob = createAsyncThunk<JobCreate, JobEditdetails, { rejectValue: err }>(
	"aJob",
	async (values, { rejectWithValue }): Promise<any> => {
		try {
			const config = {
				headers: {
					// authorization
					"Content-Type": "application/json",
				},
			}
			const { data } = await axios.put(
				`http://localhost:8000/api/v1/jobs/${values.id}`,
				values.input,
				config
			)
			return data
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			rejectWithValue(response.data)
		}
	}
)

export const deleteJob = createAsyncThunk<JobDelete, number, { rejectValue: err }>(
	"aJob",
	async (id, { rejectWithValue }): Promise<any> => {
		try {
			const config = {
				headers: {
					// authorization
					"Content-Type": "application/json",
				},
			}
			const { data } = await axios.delete(`http://localhost:8000/api/v1/jobs/${id}`, config)
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
			const { data } = await axios.post(
				"http://localhost:8000/api/v1/jobs/register",
				input,
				config
			)
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
			const { data } = await axios.post(
				"http://localhost:8000/api/v1/auth/login",
				input,
				config
			)
			localStorage.setItem("user", JSON.stringify(data.data))
			return data
		} catch (e) {
			const error = e as AxiosError<err>
			const response = error.response as AxiosResponse<err>
			return rejectWithValue(response.data)
		}
	}
)
