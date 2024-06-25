import React, { useState } from 'react'
import "./profileinfo.css"
import { useDispatch } from 'react-redux';
import { clearUser, setCart, updateUser } from '../../Store/action';
import { Link, useNavigate } from 'react-router-dom';
function Profileinfo({ user, setisuser }) {
    const [userdata, setuserdata] = useState(user);
    const [isedit, setisedit] = useState(false);
    const dispatch=useDispatch();
    const navigate = useNavigate();

    const handChange = (e) => {

        const { name, value, type, checked } = e.target;
        setuserdata({
            ...userdata,
            [name]: type === 'checkbox' ? checked : value,
        });
        console.log(userdata)
    };
    const handlsave = async (e) => {

        e.preventDefault();
        console.log("calling update user",userdata )
        await dispatch(updateUser(userdata._id,userdata))
        const save= JSON.stringify(userdata)
        
      localStorage.setItem('user', save);

        console.log("called update user")
        setisedit(false)

    }
    const handleSingnout=async(e)=>{
        e.preventDefault();
        console.log("clear user called")

        await dispatch(clearUser());
        console.log("user cleared")
        await localStorage.removeItem('user');
        console.log("local user cleared")
        
        console.log("card app-user", user)
        await dispatch(setCart(0));
        setTimeout(()=>{
            setisuser(false);
        },500)



    }

console.log("userinfo",userdata)

    return (
        <>

            <div id="personalinfo" className="userinfo">
                <p className="title">Personal Information</p>

                <span>
                    <p>First Name:</p>
                    <input className={isedit ? "edit" : ""} name="firstName" placeholder="name" type="name" onChange={handChange} value={userdata.firstName} />
                </span>
                <span>
                    <p>Last Name:</p>


                    <input className={isedit ? "edit" : ""} name="lastName" placeholder="name" type="name" onChange={handChange} value={userdata.lastName} />
                </span>
                <span>
                    <p>Email:</p>
                    <input className={isedit ? "edit" : ""} name="email" placeholder="email" type="email" onChange={handChange} value={userdata.email} />

                </span>
                <span>

                    <p>Phone:</p>
                    <input className={isedit ? "edit" : ""} name="phone" placeholder="phone" type="phone" onChange={handChange} value={userdata.phone} />
                </span>


            </div>
            <div id="Address" className="userinfo">
                <p className="title">Address </p>

                <span style={{ width: "100%" }}>
                    <p style={{ width: "10.5%" }}>Address 1:</p>
                    <input className={isedit ? "edit" : ""} style={{ width: "90%" }} name="address1" placeholder="address 1" type="address1" onChange={handChange} value={userdata.address1} />
                </span>
                <span style={{ width: "100%" }}>
                    <p style={{ width: "10.5%" }}>Address 2:</p>


                    <input className={isedit ? "edit" : ""} style={{ width: "90%" }} name="address2" placeholder="address 2" type="address2" onChange={handChange} value={userdata.address2} />
                </span>
                <span>
                    <p>City:</p>
                    <input className={isedit ? "edit" : ""} name="city" placeholder="city" type="city" onChange={handChange} value={userdata.city} />

                </span>
                <span>

                    <p>State:</p>
                    <input className={isedit ? "edit" : ""} name="state" placeholder="state" type="state" onChange={handChange} value={userdata.state} />
                </span>
                <span>

                    <p>Pin code:</p>
                    <input className={isedit ? "edit" : ""} name="pinCode" placeholder="pinCode" type="pinCode" onChange={handChange} value={userdata.pinCode} />
                </span>


            </div>
            <div className="profilebtn">
                {!isedit ? (<div className="edit">

                    <button className="edit-button" onClick={() => { setisedit(true) }}>
                        <svg className="edit-svgIcon" viewBox="0 0 512 512">
                            <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                        </svg>
                    </button>
                </div>

                ) : (<div className="save">
                    <button className="edit-button" onClick={handlsave}>
                        <svg className="edit-svgIcon" viewBox="0 0 512 512">
                            <path d="M391.914,512H65.125c-29.517,0-53.53-24.013-53.53-53.53V53.53C11.597,24.013,35.608,0,65.125,0h381.75c29.517,0,53.53,24.013,53.53,53.53v374.092c0,8.831-7.16,15.99-15.99,15.99s-15.99-7.159-15.99-15.99V53.53c0-11.884-9.667-21.551-21.551-21.551H65.125c-11.884,0-21.551,9.667-21.551,21.551v404.94c0,11.884,9.667,21.551,21.551,21.551 h326.789c8.829,0,15.99,7.159,15.99,15.99C407.903,504.841,400.745,512,391.914,512z" />
                            <rect x="148.865" y="15.99" style={{ fill: "#CEE8FA" }} width="214.261" height="128.397" />
                            <g>
                                <path d="M363.131,160.375H148.869c-8.829,0-15.99-7.159-15.99-15.99V15.99c0-8.831,7.16-15.99,15.99-15.99	h214.261c8.829,0,15.99,7.159,15.99,15.99v128.395C379.12,153.216,371.962,160.375,363.131,160.375z M164.859,128.395h182.282V31.979H164.859V128.395z" />
                                <path d="M305.035,100.9c-8.829,0-15.99-7.159-15.99-15.99V15.99c0-8.831,7.16-15.99,15.99-15.99s15.99,7.159,15.99,15.99v68.92C321.025,93.741,313.867,100.9,305.035,100.9z" />
                            </g>
                            <rect x="120.083" y="300.638" style={{ fill: "#CEE8FA" }} width="271.824" height="195.202" />
                            <g>
                                <path d="M391.914,511.827H120.086c-8.829,0-15.99-7.159-15.99-15.99V300.631c0-8.831,7.16-15.99,15.99-15.99h271.827c8.829,0,15.99,7.159,15.99,15.99v195.207C407.903,504.669,400.745,511.827,391.914,511.827z M136.076,479.848h239.848V316.621H136.076V479.848z" />
                                <path d="M202.168,376.456h-82.081c-8.829,0-15.99-7.159-15.99-15.99s7.16-15.99,15.99-15.99h82.081c8.829,0,15.99,7.159,15.99,15.99S210.999,376.456,202.168,376.456z" />
                                <path d="M287.979,443.612H120.086c-8.829,0-15.99-7.159-15.99-15.99c0-8.831,7.16-15.99,15.99-15.99h167.893c8.829,0,15.99,7.159,15.99,15.99C303.969,436.454,296.81,443.612,287.979,443.612z" />
                            </g>
                        </svg>
                    </button>
                </div>
                )}
                <div className="signout"onClick={handleSingnout} >
                

                    <button  > Sign-out
                    </button>
               

                </div>
            </div>


        </>



    )
}

export default Profileinfo