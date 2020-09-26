import React from "react";
import { Button, Row, Col, Typography } from "antd";
import PastTransactions from "./PastTransactions";
import ButtonWithModal from "./ButtonWithModal";
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
          height: 200,
          borderRadius: 14,
          boxShadow: "box-shadow: -4px 3px 24px 0px rgba(28,128,187,0.41);",
        }}
      ></Row>
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
