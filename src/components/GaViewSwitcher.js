import React, {useState, useEffect, Component} from 'react';
import ReactDOM from 'react-dom';
import GaFormFunc from './GaFormFunc';
import GaResults from './GaResults';

const GaViewSwitcher = (props) => {
    const [plan, setPlan] = useState(null);
    
    return plan ? (
        <div>
            <GaResults plan={plan} />
        </div>
    ) : (
        <div>
            <GaFormFunc getPlan={plan => setPlan(plan)} />
        </div>
    );
    
};

export default GaViewSwitcher;