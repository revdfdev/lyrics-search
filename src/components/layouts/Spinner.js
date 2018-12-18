import React from 'react';
import '../../App.css';
import spinner from '../../assets/spinner.gif';

const Spinner = (props) => {
    return (
    	<div>
    		<img src={spinner} 
    			alt="Loading ..." 
    			className="spinner-image" />
    	</div>        
    );
};

export default Spinner;

