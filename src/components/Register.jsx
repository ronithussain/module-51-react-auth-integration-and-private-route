import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password)

        //Sign up email and password
        createUser(email, password)
        .then((result)=> {
            console.log(result.user)
        })
        .catch((error) => {
            console.log('ERROR', error.message)
        })
        
        

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl font-bold">Register now!</h2>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="name"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name='email'
                                type="email" 
                                placeholder="email" 
                                className="input input-bordered" 
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name='password'
                                type="password" 
                                placeholder="password" 
                                className="input input-bordered" 
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='ml-2 mr-2 mb-2 '>Already have an account? Please <Link to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;