import React from 'react';
import ReactDOM from 'react-dom';

import Appp from './App';

const indexlive = () => {
    return (
        ReactDOM.render(<Appp />, document.getElementById('root'))     
    )
}

export default indexlive;