import PropTypes from 'prop-types';
import { Table, THead, THeadItem, TBody, TBodyItem } from './TransactionHistory.styled'

export default function TransactionsTable({ items }) {
  return <Table>
    <THead>
      <tr>
        <THeadItem>Type</THeadItem>
        <THeadItem>Amount</THeadItem>
        <THeadItem>Currency</THeadItem>
      </tr>
    </THead>

    {items.map(({ id, type, amount, currency }) => (
      <TBody key={id}>
        <tr>
          <TBodyItem>{type}</TBodyItem>
          <TBodyItem>{amount}</TBodyItem>
          <TBodyItem>{currency}</TBodyItem>
        </tr>
      </TBody>
    ))}
  </Table>
}

TransactionsTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};