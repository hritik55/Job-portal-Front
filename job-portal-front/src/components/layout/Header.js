import React from 'react';
import { Link } from 'react-router-dom';
import Options from '../auth/Options'

export default function Header() {
    return (
        <div id="header">
           <Link className="logo" to="/"><h1>J.O.B.S</h1></Link>
           <Options />
        </div>
    )
}

