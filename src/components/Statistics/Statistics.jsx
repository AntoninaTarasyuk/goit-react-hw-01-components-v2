import { PropTypes } from 'prop-types';
import { SWrap, STitle, SList, SItem, SLabel, SPercentage } from './Statistics.styled'

export default function Statistics({ title, stats }) {
  return <SWrap>
    {title && <STitle>{title}</STitle>}
    <SList>
      {stats.map(({ id, label, percentage }) => (
        <SItem key={id} style={{backgroundColor: getRandomColor()}}>
          <SLabel>{label}</SLabel>
          <SPercentage>{percentage}%</SPercentage>
        </SItem>
      ))}
    </SList>
  </SWrap>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};