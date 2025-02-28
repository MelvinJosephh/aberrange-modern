import styles from "./reports.module.scss";

const ReportsPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Reports Dashboard</h1>
            <p className={styles.description}>
                View and manage all system reports, including hiring, consultation, and service requests.
            </p>

            <div className={styles.reportList}>
                <div className={styles.reportCard}>
                    <h2>Hiring Reports</h2>
                    <p>Summary of all hiring activities.</p>
                </div>
                <div className={styles.reportCard}>
                    <h2>Consultation Reports</h2>
                    <p>Insights on consultation requests.</p>
                </div>
                <div className={styles.reportCard}>
                    <h2>Service Requests</h2>
                    <p>Track all service quotes and requests.</p>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
