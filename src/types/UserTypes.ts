export interface RegisterInput {
	name: string
	email: string
	password: string
	avatar: string
}

export interface LoginInput {
	email: string
	password: string
}

export interface UserDetails {
	status: string
	message: string
	data: { name?: string; email?: string; token?: string; avatar?: string }
}
