import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";


const Login = () => {

    const { signIn } = useContext(AuthContext)
    // const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || "/";

    const handleSignIn = e => {
        e.preventDefault();
        // console.log(e.target);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userInfo = { email, password }
        console.log(userInfo);

        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
                // navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });



    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Login to explore a world of sizzling delights, curated dishes, and unforgettable dining experiences.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignIn} className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;