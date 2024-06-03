import React from 'react';
import {CardAntdI} from "./interface";
import {Card as CardAntd} from 'antd'

const Card = (CardAntdI: CardAntdI) => {
    return (
        <CardAntd {...CardAntdI}/>
    );
};

export default Card;
