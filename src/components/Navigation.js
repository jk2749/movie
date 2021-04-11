import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
function Navigation(){
    return (
        <div className="nav">
            {/* <a href="/">Home</a> &nbsp;&nbsp;&nbsp;
             <a href="/about">About</a> */}
            <Link to="/">CINEMAHOME</Link>
        </div>
    );
};

export default Navigation;