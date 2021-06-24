import PropTypes from 'prop-types';
import classes from './Rows.module.css';

export function TableHead(props) {
  const { headData } = props;

  return (
    <thead className={classes.Head}>
      <tr>
        {headData.map((tdText) => (
          <td key={tdText} className={classes.HeadCeil}>
            {tdText}
          </td>
        ))}
      </tr>
    </thead>
  );
}

TableHead.propTypes = {
  headData: PropTypes.instanceOf(Array).isRequired,
};
