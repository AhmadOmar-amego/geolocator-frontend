import React, {useState} from 'react';
import {Button, Card, Form, Input, Modal} from "antd";
import axios from 'axios';

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */


const Home = () => {
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState(null);
    // const [error, setError] = useState(null);

    const urlPath ='http://localhost:3000/location-creation-logic'

    const onFinish = (values: any) => {
        console.log(values);
        // setIsModalOpen(true);

        try {
            const res = axios.post(urlPath, {address, email});
            console.log('res',res)
            setResponse(res);

            success()
        } catch (err: any) {
            console.log('err',err)
            // setError(err.response ? err.response.data : 'An error occurred');
        }

    };


    const success = () => {
        Modal.success({
            content: ' "Geolocation: 342325, 2342342").',
            title: "Your Geolocation is:  ",
            okText: "Great !"
        });
    };
    return (
        <>
            <Card title="
    GeoLocator Application with Email Functionality and Database Integration
    " bordered={false} style={{width: 1000, backgroundColor: "#F0F2F5"}}>

                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{maxWidth: 600}}
                    validateMessages={validateMessages}
                >
                    <Form.Item name={['user', 'address']} label="Address" rules={[{required: true}]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email Address (optional)" rules={[{type: 'email'}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </>
    );
};

export default Home;
