import React from "react";
import styles from "@/styles/modal-pages/item-detail.module.scss";  // Import styles as a module

interface ItemDetailProps {
  title: string;
  description: string;
  actionLabel: string;
  onActionClick: () => void;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ title, description, actionLabel, onActionClick }) => {
  return (
    <div className={styles.itemDetail}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button className={styles.itemDetailActionBtn} onClick={onActionClick}>{actionLabel}</button>
    </div>
  );
};

export default ItemDetail;
