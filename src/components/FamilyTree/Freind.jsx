import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Freind = () => {
    const [money,setMoney]=use(MoneyContext);
    return (
        <div>
            <h3>Freind</h3>
            <p>Family got: {money}</p>
        </div>
    );
};

export default Freind;