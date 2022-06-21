import './login.css'
export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">Sociality</h3>
            <span className="loginDesc">Connect with people and become a Social Being on Sociality</span>
            </div>
            <div className="loginRight">
              <div className="loginBox">
                  <input placeholder="Email" className="loginEmail" />
                  <input placeholder="Password" className="loginPass" />
                  <button className="loginButton">Login</button>
                  <span className="loginForgotPass">Forgot Password?</span>
                  <button className="registerButton">Sign Up</button>
              </div>
            </div>
        </div>
    </div>
  )
}
