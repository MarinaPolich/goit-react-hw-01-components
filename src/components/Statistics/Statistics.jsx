import PropTypes from "prop-types";
import {
  StatisticsBox,
  StatList,
  StatItem,
  StatPercentage,
  getRandomColor,
} from "./Statistics.styled";

const Statistics = ({ title, stats = [] }) => {
  return (
    <StatisticsBox>
      {title && <h2 style={{ textTransform: "uppercase" }}>{title}</h2>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id} style={{ backgroundColor: `${getRandomColor()}` }}>
            <span className="label">{label}</span>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsBox>
  );
};

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

export default Statistics;
