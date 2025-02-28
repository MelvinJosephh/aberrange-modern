"use client";
import { useEffect, useState } from "react";
import { fetchData } from "../../services/api";
import styles from "@/styles/dashboard/quotes.module.scss";

export default function QuotesPage() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetchData("quotes")
            .then(setQuotes)
            .catch(console.error);
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Service Requests (Quotes)</h1>
            <ul className={styles.list}>
                {quotes.map((quote) => (
                    <li key={quote.id} className={styles.item}>
                        <p><strong>{quote.serviceName}</strong> - {quote.price} USD</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
