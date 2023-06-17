import PropTypes from 'prop-types';
import styles from 'components/TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.transactionHistory_thead}>
        <tr>
          <th className={styles.table_head}>Type</th>
          <th className={styles.table_head}>Amount</th>
          <th className={styles.table_head}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={styles.table_data}>{type}</td>
            <td className={styles.table_data}>{amount}</td>
            <td className={styles.table_data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
