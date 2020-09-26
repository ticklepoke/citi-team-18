import React from "react";
import { Button, Row, Col, Typography } from "antd";
import PastTransactions from "./PastTransactions";
import ButtonWithModal from "./ButtonWithModal";
import { HistoryOutlined, SettingOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;
const Transaction = () => (
  <Row style={{ paddingTop: 20 }} className="background-light-grey">
    <Col span={4}></Col>
    <Col span={16}>
      {" "}
      <Title style={{ color: "#120309" }} level={2}>
        {" "}
        Welcome Back, Zhi Wei
      </Title>
      <Row
        style={{
          width: "100%",
          backgroundColor: "#2392cc",
          minHeight: 250,
          borderRadius: 14,
          boxShadow: "-4px 3px 16px -4px rgba(35,146,204,0.86)",
          marginVertical: 40,
          marginTop: 30,
        }}
      >
        <Row style={{ padding: 20, flex: 1, flexDirection: "column" }}>
          <Text
            style={{
              position: "relative",
              top: 10,
              marginTop: 10,
              color: "#F6F7EB",
              fontSize: 28,
            }}
          >
            Account Balance
          </Text>
          <Text
            level={2}
            style={{ marginTop: 0, color: "#F6F7EB", fontSize: 67 }}
          >
            {" "}
            $1890.30{" "}
          </Text>
        </Row>

        {/* <Col md={8} sm={24} className="justify-center modal-button-container">
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
          <h1 className="text-white text-center text-padding-top">Settings</h1>
        </Col> */}
      </Row>
      <ButtonWithModal />
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
