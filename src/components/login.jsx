import React, {useState}  from 'react';
import Reqres from '../services/reqres';


const Login = ({ loginUser }) => {

    const reqres = new Reqres();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelEmailChange = (ev) => {
        setEmail(ev.target.value);
    }

    const handelPasswordChange = (ev) => {
        setPassword(ev.target.value);
    }


    const onSubmit = (ev) => {
        ev.preventDefault();
        loginUser(true);
        reqres.login({email, password})
        .then((res) => {
            localStorage.setItem('reqresToken', res.token)
        });
    }

    return (
        <form onSubmit={onSubmit}>
                <h1>შესვლა</h1>
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
                <button>შესვლა</button>
        </form>

    );
}

export default Login;