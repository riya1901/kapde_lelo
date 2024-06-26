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
    console.log("temp", temp)



    const handleloginChange = (e) => {

        const { name, value, type, checked } = e.target;
        setloginValues({
            ...loginValues,
            [name]: type === 'checkbox' ? checked : value,
        });
        console.log(loginValues)
    };
    const handlesigninChange = (e) => {

        const { name, value, type, checked } = e.target;
        setsigninValues({
            ...signinValues,
            [name]: type === 'checkbox' ? checked : value,
        });
        console.log(signinValues)
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("calling get user", loginValues)
        await dispatch(getUser(loginValues))
        console.log("called get user")
        if (Object.keys(temp).length == 0) {
            console.log("user not found")
            setuserfound(false)
        }
        else {
            setTimeout(() => {

                if (temp._id == "") {
                    console.log("user foud not", temp)
                    setuserfound(false)
                }
                else {
                    console.log("user is here")
                    console.log("user =", temp._id)
                }
            }, 500);
        }

    }
    const handleSignin=async (e)=>{
        e.preventDefault();
        console.log("calling new user", signinValues)
        await dispatch(newUser(signinValues));
        console.log("new user registered")
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