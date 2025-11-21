import React, { useRef } from 'react';

const UnControlledField = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const handleSubmit=e=>{
        e.preventDefault();
        const email= emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email,password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" ref={emailRef} name=""  placeholder='Email'/>
                <br />
                <input type="password" ref={passwordRef} name="" placeholder='password'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UnControlledField;