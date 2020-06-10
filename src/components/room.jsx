import React from 'react';
import { render } from '@testing-library/react';


function Room() {

    let [running, setRunning] = React.useState(45)
    return (
        <div>Hello from Room, Roo, value is {running}

            <button onClick={() => setRunning(++running)}>Increase</button>
        </div>)
}

export default Room;