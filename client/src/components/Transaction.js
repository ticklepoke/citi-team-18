import React, { useState } from "react";
import { Button, Row, Col, Typography } from "antd";
import PastTransactions from "./PastTransactions";
import ButtonWithModal from "./ButtonWithModal";
import { HistoryOutlined, SettingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { clearToken } from "../ProtectedRoute";
import { pastTransactions } from "../data";

const { Title, Text } = Typography;
const Transaction = () => {
  const history = useHistory();
  const [transactions, setTransactions] = useState(pastTransactions);
  const [balance, setBalance] = useState(1890.3);

  const logout = () => {
    history.push("/login");
    clearToken();
  };

  function newTransactionMock(transaction) {
    setTransactions([transaction, ...pastTransactions]);
    setBalance((state) => state - transaction.amount);
  }
  return (
    <Row style={{ paddingTop: 20 }} className="background-light-grey">
      <Col span={4}></Col>
      <Col span={16}>
        {" "}
        <div className="justify-center-around">
          <Title level={2}> Welcome Back, Zhi Wei</Title>
          <Button
            onClick={logout}
            style={{
              padding: "0 15px 0 15px",
              borderRadius: 6,
            }}
            type="primary"
          >
            Logout
          </Button>
        </div>
        <Row
          style={{
            width: "100%",
            backgroundImage: "linear-gradient(#24C6DC,#514A9D)",
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
                top: 7,
                marginTop: 10,
                color: "#F6F7EB",
                fontSize: 28,
              }}
            >
              Account Balance
            </Text>
            <Text
              level={2}
              style={{ marginTop: 0, color: "#F6F7EB", fontSize: 78 }}
            >
              {`$${parseFloat(balance).toFixed(2)}`}
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
        <ButtonWithModal newTransactionMock={newTransactionMock} />
      </Col>
      <Col span={4}></Col>
      <Col span={4}></Col>
      <Col span={16}>
        <PastTransactions transactions={transactions} />
      </Col>
      <Col span={4}></Col>
    </Row>
  );
};

export default Transaction;
