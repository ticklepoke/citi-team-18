import React, { Fragment, useState } from "react";
import {
  Form,
  InputNumber,
  Button,
  Modal,
  Typography,
  Cascader,
  message,
  Row,
} from "antd";

import {
  LoadingOutlined,
  SendOutlined,
  DoubleLeftOutlined,
} from "@ant-design/icons";

const { Text } = Typography;
const options = [
  {
    value: "Nigel",
    label: "Nigel",
  },
  {
    value: "Anthony",
    label: "Anthony",
  },
  {
    value: "Lester",
    label: "Lester",
  },
  {
    value: "Chen Qiu",
    label: "Chen Qiu",
  },
  {
    value: "Guo Xiong",
    label: "Guo Xiong",
  },
];

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const NewTransactionForm = ({ visible, onNewTransaction, onCancel }) => {
  const [form] = Form.useForm();
  const [formState, setFormState] = useState("BEFORE_SEND");
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }

  function filter(inputValue, path) {
    return path.some(
      (option) =>
        option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );
  }

  return (
    <Modal
      visible={visible}
      title="New Transaction"
      okText={formState === "SENDING" ? "Sending..." : "Send"}
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(async (values) => {
            setFormState("SENDING");
            await sleep(2000);
            onNewTransaction(values);
            setFormState("BEFORE_SEND");
            form.resetFields();
            message.success("Transaction Successful");
            console.log("values", values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              message: "Please input your amount!",
            },
          ]}
        >
          <InputNumber
            defaultValue={0}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            type="amount"
            placeholder="Enter Amount"
          />
        </Form.Item>
        <Form.Item
          name="recepient"
          label="Recepient"
          rules={[
            {
              required: true,
              message: "Please select your recepient!",
            },
          ]}
        >
          <Cascader
            name="recepient"
            options={options}
            onChange={onChange}
            placeholder="Please select"
            showSearch={{ filter }}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
const NewTransactionButton = (props) => {
  const [visible, setVisible] = useState(false);
  const { newTransactionMock } = props;
  const onNewTransaction = (data) => {
    console.log("hellodata, ", data);
    newTransactionMock({
      from: "You",
      to: data.recepient[0],
      amount: data.amount,
      date: "26 Sep 2020",
    });
  };
  return (
    <Row style={{ marginTop: 20 }}>
      <Button
        type="primary"
        style={{
          marginTop: "16px",
          padding: "0 15px 0 15px",
          borderRadius: 6,
        }}
        onClick={() => {
          setVisible(true);
        }}
        size="large"
        icon={<SendOutlined style={{ fontSize: "11px" }} />}
      >
        Send
      </Button>
      <Button
        type="primary"
        style={{
          marginTop: "16px",
          padding: "0 15px 0 15px",
          borderRadius: 6,
          marginLeft: 10,
        }}
        onClick={() => {
          setVisible(true);
        }}
        size="large"
        icon={<DoubleLeftOutlined style={{ fontSize: "11px" }} />}
      >
        Request
      </Button>

      <NewTransactionForm
        visible={visible}
        onNewTransaction={onNewTransaction}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </Row>
  );
};
export default NewTransactionButton;
