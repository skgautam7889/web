import React, { useState } from 'react';
import Swal from 'sweetalert2';
const Login = ({ setIsAuthenticated }) => {
    const adminEmail = 'skgautam7889@gmail.com';
    const adminPassword = 'skgautam7889';
    const [email, setEmail] = useState(adminEmail);
    const [password, setPassword] = useState(adminPassword);

    const handleLogin = event => {
        event.preventDefault();
        console.log("email===>", email);
        console.log("password===>", password);
        if (email === adminEmail && password === adminPassword) {
            Swal.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                  Swal.showLoading();
                },
                willClose: () => {
                  localStorage.setItem('is_authenticated', true);
                  setIsAuthenticated(true);
        
                  Swal.fire({
                    icon: 'success',
                    title: 'Successfully logged in!',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                },
              });
        } else {
            // alert("Incorrect email or password.");
            Swal.fire({
                timer: 1500,
                showConfirmButton: false,
                willOpen: () => {
                  Swal.showLoading();
                },
                willClose: () => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Incorrect email or password.',
                    showConfirmButton: true,
                  });
                },
              });
        }
    }

    return (
        <section className="vh-100" >
            <div className="container py-4 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-2-strong">
                            <form onSubmit={handleLogin}>
                                <div className="card-body p-5 text-center">
                                    <h3 className="mb-5">Sign in</h3>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typeEmailX-2">Email</label>
                                        <input
                                            type="text"
                                            id="typeEmailX-2"
                                            className="form-control form-control-lg"
                                            placeholder="admin@example.com"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="typePasswordX-2">Password</label>
                                        <input
                                            type="password"
                                            id="typePasswordX-2"
                                            className="form-control form-control-lg"
                                            placeholder="qwerty"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                    <hr className="my-4 " />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Login;