export interface JobDetails {
	id?: number
	title?: string
	company?: string
	company_logo?: string
	location?: string
	category?: string
	salary?: string
	description?: string
	benefits?: string
	type?: string
	work_condition?: string
	created_at?: string
	updated_at?: string
}

export interface JobForm {
	title: string
	location: string
	category: string
	salary: string
	description: string
	type: string
	work_condition: string
}

export interface JobsLink {
	url: null | string
	label: string
	active: boolean
}

export interface Job {
	current_page?: number
	data?: JobDetails[]
	first_page_url?: string
	from?: number
	last_page?: number
	last_page_url?: string
	links?: JobsLink[]
	next_page_url?: string
	path?: string
	per_page?: number
	prev_page_url?: null | string
	to?: number
	total?: number
}

export interface JobEditdetails {
	id: number
	input: JobForm
}

export interface JobCreate {
	status?: string
	message?: string
	data?: JobDetails
}

export interface JobDelete {
	status?: string
	message?: string
}
