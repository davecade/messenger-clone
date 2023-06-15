import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [state, setState] = useState({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        image: "",
    });

    const inputHandle = (e) => {
        setState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="register">
            <div className="card">
                <div className="card-header">
                    <h3>Register</h3>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="User Name"
                                id="username"
                                onChange={inputHandle}
                                name={"userName"}
                                value={state.userName}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                id="email"
                                onChange={inputHandle}
                                name={"email"}
                                value={state.email}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                id="password"
                                onChange={inputHandle}
                                name={"password"}
                                value={state.password}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                id="confirmPassword"
                                onChange={inputHandle}
                                name={"confirmPassword"}
                                value={state.confirmPassword}
                            />
                        </div>
                        <div className="form-group">
                            <div className="file-image">
                                <div className="image"></div>
                                <div className="file">
                                    <label htmlFor="image">Select Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        name={"image"}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                value="register"
                                className="btn"
                            />
                        </div>

                        <div className="form-group">
                            <span>
                                <Link to="/messenger/login">
                                    Login Your Account
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
