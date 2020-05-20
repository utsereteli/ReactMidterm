import React, { useState, useEffect } from 'react';
import Reqres from '../../services/reqres';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userName, setuserName] = useState('');
    const [job, setJob] = useState('');

    const [editModeId, setEditModeId] = useState('');

    const [editEmail, setEditEmail] = useState('');
    const [editFirstName, setEditFirstName] = useState('');
    const [editLastName, setEditLastName] = useState('');

    const reqres = new Reqres();


    useEffect(() => {
        reqres.getUsers(1)
            .then((resp) => {
                setUsers(resp.data);

                setEditEmail(resp.data.email)
                setEditFirstName(resp.data.first_name)
                setEditLastName(resp.data.last_name)
            })
    }, []);


    const onCreateUser = (ev) => {
        ev.preventDefault()
        reqres.createUser({ userName, job })
            .then((resp) => {
                console.info(resp);

                alert('რექვესთი გაიგზავნა!')
            })
    }

    const editUser = (id) => {
        setEditModeId(id);
        let filteredUsers = users.find(e => e.id === id);

        setEditEmail(filteredUsers.email)
        setEditFirstName(filteredUsers.first_name)
        setEditLastName(filteredUsers.last_name)
    }


    const submitEditUser = (userId) => {
        reqres.updateUeser({"name": editFirstName,"job": editFirstName }, userId) // ჯანო job - არ მაქვს დატაში
        .then((resp) => {
            console.info(resp);
            alert('რექვესთი გაიგზავნა!')
        })
        setEditModeId(-1)
    }


    const deleteUser = (userId) => {
        reqres.deleteUser(userId)
        .then(() => {
            setUsers(users.filter(e=> e.id !== userId))
        })
    }


    return (
        <>
            <div className="center">
                <div className="create-user">
                    <form onSubmit={onCreateUser}>
                        <ul>
                            <li><input
                                type="text"
                                onChange={(event) => setuserName(event.target.value)}
                                placeholder='სახელი'
                                required
                            />
                            </li>
                            <li><input
                                type="text"
                                onChange={(event) => setJob(event.target.value)}
                                placeholder='სამუშაო'
                                required
                            />
                            </li>
                            <li><button className='btn'>იუზერის შექმნა</button></li>
                        </ul>
                    </form>
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>ავატარი</th>
                                <th>ელ-ფოსტა</th>
                                <th>სახელი</th>
                                <th>გვარი</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((data) =>
                                <tr key={data.id} id={data.id} mode={data.id === editModeId ? 'edit' : 'view'}>
                                    <td>
                                        <img src={data.avatar} alt="avatar" />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={data.id === editModeId ? editEmail : data.email}
                                            readOnly={data.id !== editModeId ? true : false}
                                            onChange={(event) => setEditEmail(event.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={data.id === editModeId ? editFirstName : data.first_name}
                                            readOnly={data.id !== editModeId ? true : false}
                                            onChange={(event) => setEditFirstName(event.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={data.id === editModeId ? editLastName : data.last_name}
                                            readOnly={data.id !== editModeId ? true : false}
                                            onChange={(event) => setEditLastName(event.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <div className="actions">
                                            <div className="not-edit">
                                                <div className="btn" onClick={() => editUser(data.id)}>რედაქტირება</div>
                                                <div className="btn" onClick={() => deleteUser(data.id)}>წაშლა</div>
                                            </div>

                                            <div className="edit-mode">
                                                <div className="btn" onClick={() => submitEditUser(data.id)}>შეცვლა</div>
                                                <div className="btn" onClick={() => setEditModeId(-1)}>გაუქმება</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Users;