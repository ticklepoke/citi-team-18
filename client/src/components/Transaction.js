import React from "react";
import { Button, Row, Col, Typography } from "antd";
import PastTransactions from "./PastTransactions";
import ButtonWithModal from "./ButtonWithModal";
import { HistoryOutlined, SettingOutlined } from "@ant-design/icons";
const { Title } = Typography;
const Transaction = () => (
    <Row style={{ paddingTop: 20 }} className="background-light-grey">
        <Col span={4}></Col>
        <Col span={16}>
            {" "}
            <Title level={2}> Welcome Back, Zhi Wei</Title>
            <Row
                style={{
                    width: "100%",
                    backgroundColor: "#2392cc",
                    minHeight: 200,
                    borderRadius: 14,
                    boxShadow:
                        "box-shadow: -4px 3px 24px 0px rgba(28,128,187,0.41);",
                }}
            >
                <Col
                    md={8}
                    sm={24}
                    className="justify-center modal-button-container"
                >
                    <ButtonWithModal />
                </Col>
                <Col
                    md={8}
                    sm={24}
                    className="justify-center cursor-pointer modal-button-container"
                >
                    <HistoryOutlined className="text-white icon-large" />
                    <h1 className="text-white text-center text-padding-top">
                        Past Transactions
                    </h1>
                </Col>
                <Col
                    md={8}
                    sm={24}
                    className="justify-center cursor-pointer modal-button-container"
                >
                    <SettingOutlined className="text-white icon-large" />
                    <h1 className="text-white text-center text-padding-top">
                        Settings
                    </h1>
                </Col>
            </Row>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={16}>
            <PastTransactions />
        </Col>
        <Col span={4}></Col>
    </Row>
);

export default Transaction;
