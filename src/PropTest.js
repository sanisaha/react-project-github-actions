import React, { useContext } from 'react';

const PropTest = ({name, setname}) => {
    return (
        <div>
            <p>name={name}</p>
            <button onClick={()=>setname('jane')}></button>
        </div>
    );
};

export default PropTest;