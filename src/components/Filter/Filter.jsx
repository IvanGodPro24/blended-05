import { useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { changeFilter } from '../../redux/filter/slice';


const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input
      placeholder="What currency are you looking for?🧐"
      className={styles.input}
      onChange={(e) => dispatch(changeFilter(e.target.value.toLowerCase()))}
    />
  );
};

export default Filter;
