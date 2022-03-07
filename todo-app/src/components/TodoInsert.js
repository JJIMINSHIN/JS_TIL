import React, { useCallback, useState } from "react";
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) =>{
    const [value, setValue] = useState('');

    const onChange = useCallback((e)=>{
        setValue(e.target.value);
    },[]);
    const onSubmit = useCallback((e) => {
        onInsert(value);
        setValue('');

        // 새로고침 방지
        e.preventDefault();
    });

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할일을 입력하세요" value={value} onChange={onChange}></input>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};


export default TodoInsert;