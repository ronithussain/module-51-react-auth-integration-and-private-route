import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { auth } from '../firebase.init';

const Login = () => {
    const navigate = useNavigate();//jokhon user email pass diye login korbe tokhon jeno homePage e niye jay.
    const {loginUser, signInWithGoogle} = useContext(AuthContext);



    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        // Login user
        loginUser(email, password)
        .then((result) => {
            console.log(result.user)
            e.target.reset(); //email pass deyar por field jeno clean hoye jay.
            navigate('/');
        })
        .catch((error) => {
            console.log('ERROR', error.message);
        })
    }

    const handleGoogleSignIn =() => {
        signInWithGoogle()
        .then((result) => {
            console.log(result.user)
            navigate('/profile')
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl font-bold">Login now!</h2>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                            name='email'
                            type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            name='password'
                            type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='m-4'>New to this website? please <Link to='/register'>Register</Link></p>
                    <div className='text-center m-4'>
                        <button onClick={handleGoogleSignIn} className='btn btn-wide btn-error '>Sign in with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;