import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'


const Signup = () => {
    const [data,setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: 0,
        password: "",
        confirmPaswword: ""
    });
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget : input})=>{
        setData({...data,[input.name]:input.value});
    };
    
  return (
    <div>
        <div className="signup_container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="signup_form_container">
                        <div className="left">
                            <h1>Welcome Back</h1>
                            <Link to ="/login">
                                <button type='button' className="white_butn">
                                    Sign In
                                </button>
                            </Link>
                        </div>
                        <div className="right">
                           <form className="form_container" onSubmit={handleSubmit}>
                                <h1>Create Account</h1>
                                <input
							        type="text"
							        placeholder="First Name"
							        name="firstName"
							        onChange={handleChange}
							        value={data.firstName}
							        required
							        className={styles.input}
						        />
						        <input
							        type="text"
							        placeholder="Last Name"
							        name="lastName"
							        onChange={handleChange}
							        value={data.lastName}
							        required
							        className={styles.input}
						        />
						        <input
							        type="email"
							        placeholder="Email"
							        name="email"
							        onChange={handleChange}
							        value={data.email}
							        required
							        className={styles.input}
						        />
						        <input
							        type="password"
							        placeholder="Password"
							        name="password"
							        onChange={handleChange}
							        value={data.password}
							        required
							        className={styles.input}
						        />
						        {error && <div className={styles.error_msg}>{error}</div>}
						        <button type="submit" className={styles.green_btn}>
							        Sign Up
						        </button>
					        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup