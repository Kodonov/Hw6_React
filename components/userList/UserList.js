import React from 'react';

function UserList({userList, getUser, user}) {
    return (
        <ul>
            {userList.map(
                user =>
                    <li key={user.id}>
                        <span>{user.name}</span>
                        <span>{user.username}</span>
                        <span>{user.email}</span>
                        <button onClick={getUser} data-id={user.id}>show info</button>
                    </li>
            )}
        </ul>



    );
}

export default UserList;