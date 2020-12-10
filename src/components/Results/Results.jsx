import React from 'react';
import './Results.css'

const Results = ({results}) => {

    return (
        <ul className='results' data-testid='results'>
            {results && results.map(item => <li className='results__item'>{item}</li>)}
        </ul>
    );
}

export default Results;
