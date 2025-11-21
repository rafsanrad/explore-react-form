import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name,nameOnChange]=useInputField('');
    const [email,emailOnChange]=useInputField('');
    const [password,passwordOnChange]=useInputField('');
    const handleSubmit=e=>{
        e.preventDefault();
        console.log('submit',name,email,password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} placeholder='Name'/>
                <br />
                <input type="email" defaultValue={email} onChange={emailOnChange} placeholder='Email'/>
                <br />
                <input type="password" defaultValue={password} onChange={passwordOnChange} name="" placeholder='Password'/>
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;