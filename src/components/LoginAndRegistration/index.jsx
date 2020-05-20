import React, { useState } from 'react';

import Reqres from '../../services/reqres';

const LoginAndRegistration = () => {

    const reqres = new Reqres();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userRegistration = (ev) => {
        reqres.registration({ email, password })
            .then((resp) => {
                console.info(resp);
                if (!resp.error) {
                    document.getElementById("registration").remove()
                    document.querySelector('form h1').innerText = 'ავტორიზაცია'
                    alert('თქვენ წარმატებით გაიარეთ რეგისტრაცია!')
                    document.querySelector('form p.error').innerText = ''
                } else {
                    document.querySelector('form p.error').innerText = resp.error
                }
            })
    }

    const userLogin = (ev) => {
        reqres.login({ email, password })
            .then((resp) => {
                console.info(resp);
                if (!resp.error) {
                    localStorage.setItem('reqresToken', resp.token)
                    alert('თქვენ წარმატებით გაიარეთ ავტორიზაცია!')
                    document.querySelector('form p.error').innerText = ''

                    window.location.reload(false);
                } else {
                    document.querySelector('form p.error').innerText = resp.error
                }
            })
    }

    return (
        <>
            <div className='middle'>
                <div className='form-wrapper'>
                    <form>
                        <h1>ავტორიზაცია / რეგისტრაცია</h1>
                        <ul>
                            <li>
                                <input type="text"
                                    name='email'
                                    placeholder="ელ-ფოსტა"
                                    onChange={(event) => setEmail(event.target.value)}
                                    value={email}
                                />
                            </li>
                            <li>
                                <input type="password"
                                    name='password'
                                    placeholder="პაროლი"
                                    onChange={(event) => setPassword(event.target.value)}
                                    value={password}
                                />
                            </li>
                            <li>
                                <div onClick={event => userLogin()} className='btn' id='login'>ავტორიზაცია</div>
                                <div onClick={event => userRegistration()} className='btn' id='registration'>რეგისტრაცია</div>
                            </li>
                        </ul>
                        <p className='error'></p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginAndRegistration;