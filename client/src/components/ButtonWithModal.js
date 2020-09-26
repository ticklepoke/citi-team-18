import React from "react";
import { Modal, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

class ButtonWithModal extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <Button className="modal-button" onClick={this.showModal}>
                    <SendOutlined className="text-white icon-large" />
                    <h1 className="text-white text-center text-padding-top">
                        New Transaction
                    </h1>
                </Button>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </>
        );
    }
}
export default ButtonWithModal;
