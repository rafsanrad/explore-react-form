import React from 'react';
import Special from './Special';
import Freind from './Freind';

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name=='Ratul'&& <Special asset={asset}></Special>
            }
            {
                name=='Rudro'&& <Freind></Freind>
            }
        </div>
    );
};

export default Cousin;