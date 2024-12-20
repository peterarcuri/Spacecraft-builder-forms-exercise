import styles from './ItemAction.module.css';

const ItemAction = ({ itemId, onDeleteItem }) => {
  return (
    <>
      <button className={styles.button} onClick={() => onDeleteItem(itemId)}>
        Delete
      </button>
    </>
  );
};

export default ItemAction;
