import React from 'react';
import MagicBall from './components/magic-ball/MagicBall';
import './style.css';

const App = () => {
    return (
        <div>
            <h1 className="animated zoomIn">Magic 8 Ball</h1>
            <MagicBall/>
        </div>
    );
};

export default App;
