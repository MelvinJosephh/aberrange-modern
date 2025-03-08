"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import styles from "@/styles/dashboard/user-management.module.scss";

export default function UserManagement() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData("users")
            .then(setUsers)
            .catch(console.error);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>User Management</h1>
            <ul className={styles.list}>
                {users.map((user) => (
                    <li key={user.id} className={styles.item}>
                        <p><strong>{user.name}</strong> - {user.role}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
