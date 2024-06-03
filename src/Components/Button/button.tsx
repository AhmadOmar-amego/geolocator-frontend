import React from 'react';
import {ButtonAntdI} from "./interface";
import {Button as ButtonAntd} from 'antd'

const Button = (ButtonAntdI: ButtonAntdI) => {
    return (
        <ButtonAntd {...ButtonAntdI}/>
    );
};

export default Button;
