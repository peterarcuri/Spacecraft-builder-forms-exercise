import ItemCard from '../components/ItemCard.jsx';
import ItemAction from '../components/ItemAction.jsx';

import styles from './InventoryDisplay.module.css';

const InventoryDisplay = ({ inventory, onDeleteItem }) => {
  return (
    <div>
      <h2>Inventory</h2>
      {inventory.map((item, index) => (
        <div key={item.id} className={styles.itemContainer}>
          <div>
            <ItemCard
              name={item.name}
              quantity={item.quantity}
              purpose={item.purpose}
            />
          </div>

          <div>
            <ItemAction itemId={item.id} onDeleteItem={onDeleteItem} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryDisplay;
