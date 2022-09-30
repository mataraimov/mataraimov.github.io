import React from 'react';
import { useRef } from 'react';
import styles from './Search.module.scss';
import { searchContext } from '../../App';
import debounce from 'lodash.debounce';

const Seach = () => {
  const inputRef = useRef();
  const [value, setvalue] = React.useState('');
  const { setsearchValue } = React.useContext(searchContext);
  const updateValue = React.useCallback(
    debounce((str) => {
      setsearchValue(str);
    }, 500),
    [],
  );
  const onChangeInput = (e) => {
    setvalue(e.target.value);
    updateValue(e.target.value);
  };
  return (
    <div className={styles.div}>
      <div className={styles.set}>
        <input
          ref={inputRef}
          value={value}
          onChange={onChangeInput}
          type="text"
          placeholder="Search"
          className={styles.inp}
        />
        {value && (
          <button
            className={styles.btn}
            onClick={() => {
              setvalue('');
              setsearchValue('');
              inputRef.current.focus();
            }}
          >
            <span class="material-symbols-outlined">backspace</span>
          </button>
        )}
      </div>
      <hr />
    </div>
  );
};
export default Seach;
