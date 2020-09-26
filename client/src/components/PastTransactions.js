import React, { useState, useEffect, Fragment } from "react";
import { Row, Col, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";

import "./PastTransactions.css";
const pastTransactions = [
    {
        from: "You",
        to: "Lester",
        amount: 100,
        date: "12 Sep 2020",
    },
    {
        from: "Lester",
        to: "You",
        amount: 110,
        date: "2 Sep 2020",
    },
    {
        from: "You",
        to: "Nigel",
        amount: 1,
        date: "1 Sep 2020",
    },
    {
        from: "You",
        to: "Anthony",
        amount: 1,
        date: "1 Sep 2020",
    },
];
export default function PastTransactions(props) {
    const [transactions, setTransactions] = useState(pastTransactions);
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
                    <Row
                        className="transaction-row"
                        align="top"
                        justify="center"
                    >
                        <Col span={4} className="col-center">
                            {renderAvatar(item.from)}
                            <span className="text-center">From: </span>
                            <h4 className="text-center text-bold">
                                {item.from}
                            </h4>
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
        <div style={{ paddingTop: 20 }}>
            <strong>Past Transactions</strong>
            {renderCards()}
        </div>
    );
}
