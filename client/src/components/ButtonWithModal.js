import React, { Fragment, useState } from "react";
import { Form, InputNumber, Button, Modal, Typography, Cascader } from "antd";

import { SendOutlined, DoubleLeftOutlined } from "@ant-design/icons";

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

const NewTransactionForm = ({ visible, onNewTransaction, onCancel }) => {
  const [form] = Form.useForm();

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
      okText="Send"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
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

  const onNewTransaction = (data) => {
    console.log("hellodata, ", data);
  };
  return (
    <Fragment>
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
    </Fragment>
  );
};
export default NewTransactionButton;
