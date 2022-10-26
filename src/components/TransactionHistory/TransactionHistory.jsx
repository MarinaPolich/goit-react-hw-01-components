import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHead,
  TableTh,
  TableTr,
  TableTd,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TableHead>
        <tr>
          <TableTh>Type</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Currency</TableTh>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TableTr key={id}>
            <TableTd>{type}</TableTd>
            <TableTd>{amount}</TableTd>
            <TableTd>{currency}</TableTd>
          </TableTr>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;
