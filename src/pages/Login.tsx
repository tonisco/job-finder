import React, { useState, useEffect, FormEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import Rings from "../components/utils/Rings"
import { useAppSelector, useAppDispatch } from "../redux/hooks"
import Toast, { toastError, toastSuccess } from "../components/utils/Toast"
import { clearUserError, clearUserMessage } from "../redux/slice"
import { loginUser } from "../redux/action"

const Login = () => {
	const [email, setEmail] = useState<string>("")
	const [password, setPassword] = useState<string>("")

	const { error, loading, user } = useAppSelector((state) => state.user)
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	useEffect(() => {
		if (error) {
			toastError(error)
			dispatch(clearUserError())
		}
		// if (user.status === "success") {
		// 	toastSuccess(user.message)
		// 	dispatch(clearUserMessage)
		// 	const timeout = window.setTimeout(() => {
		// 		navigate("/admin/home")
		// 	}, 1500)
		// 	return () => window.clearTimeout(timeout)
		// }
	}, [dispatch, error, user.message, user.status, navigate])

	const handleLogin = (e: FormEvent) => {
		e.preventDefault()
		dispatch(loginUser({ email, password }))
	}

	return (
		<>
			<Toast />

			<div className="grid grid-cols-1 md:grid-cols-5 w-full h-screen">
				<Link to="/" className="absolute h-8 top-8 left-16">
					<img src="/images/Logo.png" alt="logo" className="h-full" />
				</Link>
				<Rings />
				<div className="hidden col-span-3 h-full md:flex flex-col justify-center items-center login-background ">
					<h1 className="text-4xl max-w-sm lg:text-4xl text-white lg:max-w-md font-gil-bold ">
						Find the best candidates for your organisation.
					</h1>
					<figure className="h-64">
						<img
							src="/images/LoginImage.svg"
							className="w-full h-full object-contain translate-x-[-12%]"
							alt="login"
						/>
					</figure>
				</div>
				<div className=" col-span-2 flex flex-col justify-center gap-5 mx-auto items-center w-full">
					<div className="w-[70%] mx-auto space-y-8">
						<h1 className="font-gil-bold text-3xl md:self-start text-cd-blue mb-2">
							Login
						</h1>
						<form className="space-y-8 w-full" onSubmit={handleLogin}>
							<div className="flex flex-col gap-1 ">
								<label htmlFor="email" className="text-cl-blue font-gil-mid">
									Email
								</label>
								<input
									type="email"
									id="email"
									className="inputs"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
								/>
							</div>
							<div className="flex flex-col gap-1">
								<label htmlFor="password" className="text-cl-blue font-gil-mid">
									Password
								</label>
								<input
									type="password"
									id="password"
									className="inputs"
									onChange={(e) => setPassword(e.target.value)}
									value={password}
								/>
							</div>
							<button
								type="submit"
								className="py-2 px-7 rounded-lg tracking-wider bg-cd-blue text-white font-gil-mid"
								disabled={loading}
							>
								Login
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
