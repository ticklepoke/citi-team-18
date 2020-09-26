import React, { Fragment, useState } from "react";
import "./Login.css";
import { Card, Steps, Form, Button, Input } from "antd";
import ReactCodeInput from "react-verification-code-input";
import axios from "axios";
import { Redirect } from "react-router-dom";

const { Step } = Steps;
const Login = () => {
    const [step, setStep] = useState(0);
    const [mobile, setMobile] = useState("+65");
    const [sms, setSMS] = useState("");
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(false);

    const submitNumber = async () => {
        try {
            const res = await axios.post("blah", { data: mobile });

            if (res.success) {
                setStep(1);
            }
        } catch (err) {
            setError(true);
        }
    };

    const cancelStep = () => {
        setStep(0);
    };

    const handleMobileChange = (event) => {
        setMobile(event.target.value);
        console.log(event.target.value);
    };

    const submitSMS = async (event) => {
        setSMS(event);
        try {
            const res = await axios.post("sms", { data: sms });

            if (res.success) {
                return <Redirect to="/transaction" />;
            }
        } catch (err) {
            setError(true);
        }
    };

    const renderError = () => {
        if (error) {
            return <span className="text-error">Please try again</span>;
        } else {
            return null;
        }
    };

    const renderStep = () => {
        if (step === 0) {
            return (
                <Form className="form-login">
                    <Form.Item
                        label="Mobile Number"
                        name="mobileNumber"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!",
                            },
                        ]}
                    >
                        <Input
                            placeholder="Enter mobile"
                            value={mobile}
                            onChange={handleMobileChange}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" onClick={submitNumber}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            );
        } else if (step === 1) {
            return (
                <div className="display-flex-center">
                    <div className="sms-form">
                        <label className="sms-label">
                            Please enter the 6-digit pin sent to your number
                        </label>
                        <ReactCodeInput
                            className="code-input"
                            onComplete={submitSMS}
                            autoFocus={true}
                            loading={loading}
                            fieldWidth={50}
                        />
                        <Button
                            className="cancel-button"
                            type="secondary"
                            onClick={cancelStep}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            );
        }
    };
    return (
        <Fragment>
            <div className="bg-main"></div>
            <div className="display-flex-card">
                <Card className="card">
                    <Steps current={step}>
                        <Step key={0} title="Login"></Step>
                        <Step key={1} title="Verification"></Step>
                    </Steps>
                    {renderStep()}
                    {renderError()}
                </Card>
            </div>
        </Fragment>
    );
};

export default Login;
