import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => { // route guloke user email pass diye login chara dekhte parbe na... 
    const {user, loading} = useContext(AuthContext);
    if(loading){ // browser reload korar shomoy jeno user jey route e thakbe okhaney jeno dekhay. 
        return <div className='text-center'><span className="loading loading-bars loading-lg bg-red-600 "></span></div>
    }
    if(user){ // user jodi login thake tahole dekhaw nahole dekhaio na.
        return children;
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;