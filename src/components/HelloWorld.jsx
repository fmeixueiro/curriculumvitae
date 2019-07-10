import React, { useState }  from 'react';

const HelloWorld = () =>{
    //Se puede enviar un objeto en useState()
    const [active, setActive]= useState(true);

    const handleClick= () =>{
        setActive(!active);
    }

    return(
        <div>
            <button onClick={handleClick}>Ocultar</button>
            {active &&
                <h1>HolaMundo State</h1>
            }
        </div>
    );
}

export default HelloWorld;