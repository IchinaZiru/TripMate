import React, { useState, useEffect } from 'react';
import axios from 'axios';

type User = {
    id: number;
    name: string;
    email: string;
};

const Testbd = () => {
    const [users, setUsers] = useState<User[]>([]); // 型を明示的に定義

    useEffect(() => {
        axios.get('http://localhost:3000/api/users')
            .then(response => {
                setUsers(response.data); // データを設定
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Testbd;
