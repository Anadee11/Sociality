import './register.css'
export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
            <h3 className="registerLogo">Sociality</h3>
            <span className="registerDesc">Connect with people and become a Social Being on Sociality</span>
            </div>
            <div className="registerRight">
              <div className="registerBox">
                  <input placeholder="Username" className="registerEmail" />
                  <input placeholder="Email" className="registerEmail" />
                  <input placeholder="Password" className="registerPass" />
                  <input placeholder="Password Again" className="registerPass" />
                  <button className="loginButton">Sign Up</button>
                  <button className="registerButton">Login to your Account</button>
              </div>
            </div>
        </div>
    </div>
  )
}
