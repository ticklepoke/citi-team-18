import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Card, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import { pastTransactions } from "../data";
import "./PastTransactions.css";
const { Title, Text } = Typography;

// {
//   from: "Lester",
//   to: "You",
//   amount: 110,
//   date: "2 Sep 2020",
// },

const avatarMap = {
  Lester: () => (
    <Avatar
      size="large"
      style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
    >
      L
    </Avatar>
  ),
  Anthony: () => (
    <Avatar
      size="large"
      style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
    >
      A
    </Avatar>
  ),
  "Guo Xiong": () => (
    <Avatar
      size="large"
      style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
    >
      GX
    </Avatar>
  ),
  "Chen Qiu": () => (
    <Avatar
      size="large"
      style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
    >
      CQ
    </Avatar>
  ),
  You: () => (
    <Avatar
      size="large"
      style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
    >
      Y
    </Avatar>
  ),
  Nigel: () => (
    <Avatar
      size="large"
      style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
    >
      N
    </Avatar>
  ),
};
export default function PastTransactions(props) {
  const { transactions } = props;

  useEffect(() => {
    console.log(props);
  });

  const renderCards = () => {
    const cards = transactions.map((item) => {
      if (item.from === "You") {
        return (
          <Card
            style={{
              borderWidth: 0,
              borderRadius: 7,
              boxShadow: "0px 3px 16px -4px rgba(5,3,9,0.5)",
            }}
            className="transaction-card"
          >
            <Row align="top">
              <Col span={3}>{avatarMap[item.to]()}</Col>
              <Col span={16}>
                <Text style={{ fontSize: 23 }}>{`To ${item.to}`}</Text>
              </Col>
              <Col style={{ flex: 1, flexDirection: "column" }} span={4}>
                <div>
                  <Text style={{ fontSize: 23 }}>{`SGD $${item.amount}`}</Text>
                </div>
                <Text style={{ fontSize: 18, color: "#666" }}>{item.date}</Text>
              </Col>
            </Row>
          </Card>
        );
      } else {
        return (
          <Card
            style={{
              borderWidth: 0,
              borderRadius: 7,
              boxShadow: "0px 3px 16px -4px rgba(5,3,9,0.5)",
            }}
            className="transaction-card"
          >
            <Row className="transaction-row" align="top">
              <Col span={3}>{avatarMap[item.from]()}</Col>
              <Col span={16}>
                <Text style={{ fontSize: 23 }}>{`From ${item.from}`}</Text>
              </Col>
              <Col span={4}>
                <div>
                  <Text
                    style={{ fontSize: 23, color: "#87BBA2" }}
                  >{`SGD $${item.amount}`}</Text>
                </div>
                <div>
                  <Text style={{ fontSize: 18, color: "#666" }}>
                    {item.date}
                  </Text>
                </div>
              </Col>
            </Row>
          </Card>
        );
      }
    });

    return cards;
  };
  return (
    <div style={{ paddingTop: 30, marginBottom: 30 }}>
      <Title level={2}> Past Transactions </Title> {renderCards()}
    </div>
  );
}
