import "./login.css"

export const Login = () => {
  return (
    <div className="login">
        <span className="loginTitle">Hey Log Yourself In here.....</span>
        <form className="loginForm">
          <label>Email</label>
          <input className='LoginInput' type="email" placeholder="Enter your email...."/>
          <label>Password</label>
          <input className='LoginInput' type="password" placeholder="Enter your password ...."/>
          <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  )
}
