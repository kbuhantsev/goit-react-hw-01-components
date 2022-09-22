import {
  StatTitle,
  StatSect,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';
import PropTypes from 'prop-types';
import { getRandomHexColor } from 'components/utils';

function Statistics({ title, stats }) {
  return (
    <StatSect>
      {!!title ? <StatTitle>{title}</StatTitle> : ''}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: getRandomHexColor() }}>
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatSect>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
