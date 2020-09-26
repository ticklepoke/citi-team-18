import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Card, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { pastTransactions } from "../data";
import "./PastTransactions.css";
const { Title } = Typography;

export default function PastTransactions(props) {
  const { transactions } = props;
  const renderAvatar = (You) => {
    if (You == "You") {
      return (
        <Avatar
          size="large"
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        />
      );
    } else {
      return <Avatar icon={<UserOutlined />} size="large" />;
    }
  };

  useEffect(() => {
    console.log(props);
  });

  const renderCards = () => {
    const cards = transactions.map((item) => {
      return (
        <Card className="transaction-card">
          <Row className="transaction-row" align="top" justify="center">
            <Col span={4} className="col-center">
              {renderAvatar(item.from)}
              <span className="text-center">From: </span>
              <h4 className="text-center text-bold">{item.from}</h4>
            </Col>
            <Col span={16}>
              <h3 className="label-amount">Amount</h3>
              <h2 className="amount">SGD {item.amount}</h2>
              <h5 className="text-center">{item.date}</h5>
            </Col>
            <Col span={4} className="col-center">
              {renderAvatar(item.to)}
              <span className="text-center"> To: </span>
              <h4 className="text-center text-bold">{item.to}</h4>
            </Col>
          </Row>
        </Card>
      );
    });

    return cards;
  };
  return (
    <div style={{ paddingTop: 30 }}>
      <Title level={2}> Past Transactions </Title> {renderCards()}
    </div>
  );
}
