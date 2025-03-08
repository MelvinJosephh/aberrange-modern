"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import styles from "@/styles/dashboard/hiring-requests.module.scss";

export default function HiringRequests() {
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        fetchData("hiring-requests")
            .then(setRequests)
            .catch(console.error);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hiring Requests</h1>
            <ul className={styles.list}>
                {requests.map((req) => (
                    <li key={req.id} className={styles.item}>
                        <p><strong>{req.title}</strong> - {req.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
