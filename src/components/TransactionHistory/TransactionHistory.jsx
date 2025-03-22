import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.table}>
      <thead className={s.tableTitle}>
        <tr>
          <th className={s.titleItem}>Type</th>
          <th className={s.titleItem}>Amount</th>
          <th className={s.titleItem}>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody className={s.tableItem} key={item.id}>
          <tr>
            <td className={s.tableType}>{item.type}</td>
            <td className={s.tableAmount}>{item.amount}</td>
            <td className={s.tableCurrency}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default TransactionHistory;
