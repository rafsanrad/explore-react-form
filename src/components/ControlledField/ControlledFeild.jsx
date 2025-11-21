import React, { useState } from 'react';

const CntrolledFeild = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name,email,password);

    }
    const handleEmailOnChange=e=>{
        setEmail(e.target.value)
    }
    const handleNameOnChange=e=>{
        setName(e.target.value);
    }
    const handlePasswordOnChange=(e)=>{
        console.log(e.target.value)
        setPassword(e.target.value)
        if(password.length<6){
            setError("password must be 6 characters or longer")
        }
        else{
            setError('')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Name' onChange={handleNameOnChange} defaultValue={name} />
                <br />
                <input type="email" name="email" placeholder='Email' onChange={handleEmailOnChange} defaultValue={email}required/>
                <br />
                <input type="password" name="password" placeholder='Password' onChange={handlePasswordOnChange} defaultValue={password} required/>
                <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default CntrolledFeild;