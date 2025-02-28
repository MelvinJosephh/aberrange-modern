"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import styles from "@/styles/dashboard/consultations.module.scss";

export default function ConsultationRequests() {
    const [consultations, setConsultations] = useState([]);

    useEffect(() => {
        fetchData("consultations")
            .then(setConsultations)
            .catch(console.error);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Consultation Requests</h1>
            <ul className={styles.list}>
                {consultations.map((consult) => (
                    <li key={consult.id} className={styles.item}>
                        <p><strong>{consult.clientName}</strong> - {consult.date}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
