import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div id="wd-signin-screen" className="p-4">
            <h3>Sign in</h3>
            <input 
                id="wd-username" 
                placeholder="username" 
                className="form-control mb-2" 
            />
            <input 
                id="wd-password" 
                placeholder="password" 
                type="password" 
                className="form-control mb-3" 
            />
            <Link 
                id="wd-signin-btn" 
                to="/Kanbas/Account/Profile" 
                className="btn btn-primary w-100 mb-2"
            >
                Sign in
            </Link>
            <Link 
                id="wd-signup-link" 
                to="/Kanbas/Account/Signup" 
                className="text-decoration-none"
            >
                Sign up
            </Link>
        </div>
    );
}
