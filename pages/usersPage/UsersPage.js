import React, {useState} from 'react';
import {logDOM} from "@testing-library/react";
import UserList from "../../components/userList/UserList";

function UserPage(props) {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [div, setDiv] = useState(false)


    const fetchUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
    }


    const showInfo = (e) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${e.target.dataset.id}`)
            .then(response => response.json())
            .then(data => setUser(data))
        setDiv(true)
    }

    return (
        <div>
            <button onClick={fetchUsers}>get</button>
            <UserList userList={users} getUser={showInfo} user={user}/>

            <div  onClick={() => setDiv(false)}>
                <div  onClick={(e) => e.stopPropagation()}>
                    <span>{user.name}</span>
                    <span>{user.username}</span>
                    <span>{user.email}</span>
                </div>
            </div>
        </div>
    );
}

export default UserPage;