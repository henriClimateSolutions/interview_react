import '../css/Login.css'

export const FormField = ({ type, field }) => {
	return (
		<div className="w-full flex flex-col items-start gap-1">
			<h3 >{field}:</h3>
			<input autoComplete='new-password' type={type} className="field-input bg-amber-50 text-black" />
		</div>
	)
}

export const Login = () => {
	return (
		<div id='login-wrapper'>
			<article id='login'>
				<h1>Login</h1>
				<div id='fields'>
					<FormField type={"text"} field={"Username"} />
					<FormField type={"password"} field={"Password"} />
				</div>
				<button>Submit</button>
			</article>
		</div>
	)
}
