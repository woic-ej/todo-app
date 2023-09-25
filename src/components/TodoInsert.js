import { MdChecklistRtl } from 'react-icons/md';
import { useState, useCallback } from 'react';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //value값 초기화

      //sunmit이벤트의 새로고침을 방지하기 위한 함수
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      ></input>
      <button type="submit">
        <MdChecklistRtl />
      </button>
    </form>
  );
};

export default TodoInsert;
