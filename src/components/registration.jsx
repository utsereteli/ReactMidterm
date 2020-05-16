import React, {useState}  from 'react';
import Reqres from '../services/reqres';

const Registration = () => {

    const reqres = new Reqres();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (ev) => {
        ev.preventDefault();
        reqres.registration({email, password})
        .then((rep) => {
            console.info(rep);
        });
    }

    const handelEmailChange  = (ev) => {
        setEmail(ev.target.value);
    }

    const handelPasswordChange = (ev) => {
        setPassword(ev.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
                <h1>რეგისტრაცია</h1>
                <input type="text" 
                    placeholder="ელ-ფოსტა"
                    onChange={handelEmailChange}
                    value={email}
                    />
                <input type="password" 
                    placeholder="პაროლი"
                    onChange={handelPasswordChange}
                    value={password}
                    />
                <button>რეგისტრაცია</button>
        </form>

    );
}

export default Registration;