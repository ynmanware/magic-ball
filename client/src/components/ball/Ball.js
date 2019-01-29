import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Ball = (props) => (
    <div>
        <div className="ball">
            <div className="inner_circle">
                {props.answer ? (<div className="animated zoomIn answer"> {props.answer} </div>) : (<div className="number8"> 8 </div>)}
            </div>
        </div>
    </div>
);

Ball.propTypes = {
    answer: PropTypes.string,
};

export default Ball;