// const Login = ()=>{
//     return (
//         <div>
//             Login
//         </div>
//     )
// }
// export default Login;
import React, { useState } from 'react';
// import axios from 'axios';
// import { setUserSession } from './Utils/Common';

function Login(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);

    // handle button click of login form
    const handleLogin = () => {
        setError(null);
        setLoading(true);
        // axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
        //   setLoading(false);
        //   //setUserSession(response.data.token, response.data.user);
        //   props.history.push('/dashboard');
        // }).catch(error => {
        //   setLoading(false);
        //   if (error.response.status === 401) setError(error.response.data.message);
        //   else setError("Something went wrong. Please try again later.");
        // });
    }

    return (
        // <div>
        //     Login<br /><br />
        //     <div>
        //         Username<br />
        //         <input type="text" {...username} autoComplete="new-password" />
        //     </div>
        //     <div style={{ marginTop: 10 }}>
        //         Password<br />
        //         <input type="password" {...password} autoComplete="new-password" />
        //     </div>
        //     {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        //     <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
        // </div>
        <section className="vh-100" >
            <div className="container py-4 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-5 text-center">

                                <h3 className="mb-5">Sign in</h3>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />

                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />

                                </div>

                                <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>

                                <hr className="my-4" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
//https://www.cluemediator.com/login-app-create-login-form-in-reactjs-using-secure-rest-api#sra
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}

export default Login;