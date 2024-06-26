import React, { useState } from 'react'
import './login.css'
import { useDispatch, useSelector } from 'react-redux';
import { getUser, newUser } from '../../Store/action';
function Login({ setuser, setkeeplogged }) {
    const dispatch = useDispatch();
    const [loginValues, setloginValues] = useState({
        email: "",
        pass: ""
    });
    const [signinValues, setsigninValues] = useState({
        name: "",
        email: "",
        pass: ""
    });
    const [userfound, setuserfound] = useState(true);

    const temp = useSelector((state) => state.user)



    const handleloginChange = (e) => {

        const { name, value, type, checked } = e.target;
        setloginValues({
            ...loginValues,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    const handlesigninChange = (e) => {

        const { name, value, type, checked } = e.target;
        setsigninValues({
            ...signinValues,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        await dispatch(getUser(loginValues))
        if (Object.keys(temp).length == 0) {
            console.log("user not found")
            setuserfound(false)
        }
        else {
            setTimeout(() => {

                if (temp._id == "") {
                    setuserfound(false)
                }
                
            }, 500);
        }

    }
    const handleSignin=async (e)=>{
        e.preventDefault();
        await dispatch(newUser(signinValues));
    }
    const handlekeeplogged = async (e) => {
        const checked = e.target.checked;
        setkeeplogged(checked);
    }

    return (
        <div>

            <div className="wrapper">
                <div className="card-switch">
                    <label className="switch">
                        <input type="checkbox" className="toggle" />
                        <span className="slider"></span>
                        <span className="card-side"></span>
                        <div className="flip-card__inner">
                            <div className="flip-card__front">
                                <div className="title">Log in

                                </div>
                                <form className="flip-card__form" action="">
                                    <p className={userfound ? "" : "active"}>user not found: check email and password</p>
                                    <input className="flip-card__input" name="email" placeholder="Email" type="email" onChange={handleloginChange} value={loginValues.email} />
                                    <input className="flip-card__input" name="pass" placeholder="Password" type="password" onChange={handleloginChange} value={loginValues.pass} />
                                    <label className='getupdate'>
                                        <input
                                            type="checkbox"
                                            name="getstore"
                                            onChange={handlekeeplogged}


                                        />

                                        keep me logged in
                                    </label>
                                    <button className="flip-card__btn " onClick={handleLogin}>Let`s go!</button>
                                </form>
                            </div>
                            <div className="flip-card__back">
                                <div className="title">Sign up</div>
                                <form className="flip-card__form" action="">
                                    <input className="flip-card__input" placeholder="Name" name="firstName" type="firstName" onChange={handlesigninChange} value={signinValues.firstName} />
                                    <input className="flip-card__input" name="email" placeholder="Email" type="email" onChange={handlesigninChange} value={signinValues.email} />
                                    <input className="flip-card__input" name="pass" placeholder="Password" type="password" onChange={handlesigninChange} value={signinValues.pass} />
                                    <button className="flip-card__btn" onClick={handleSignin}>Confirm!</button>
                                </form>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Login