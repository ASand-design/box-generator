import React, { useState } from 'react';

const Box = (props) => {
    const [box, setBox] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(box);
    };
    return(
        <form onSubmit = { handleSubmit }>
            <div>
                <label htmlFor = 'box'> Color </label>
                <input onChange = { (e) => setBox(e.target.value) } type = 'text'/>
                <input type = 'submit' value = 'Add'/>
            </div>
        </form>
    );
};
export default Box;