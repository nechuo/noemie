import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Input, Form } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const EditMode = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = (test) => {
    form
      .validateFields()
      .then((values) => {
        if (values.password === process.env.REACT_APP_EDIT_MODE_PASSWORD) {
          setIsModalVisible(false);
          navigate("/");
          props.setIsEditMode(true);
        } else {
          form.setFields([{ name: "password", errors: ["Invalid password!"] }]);
        }
      })
      .catch(() => {});
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
    navigate("/");
  };

  return (
    <>
      <Modal
        onOk={handleSubmit}
        title="Enter edit mode"
        onCancel={handleCancel}
        visible={isModalVisible}
      >
        <Form form={form}>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              onPressEnter={handleSubmit}
              placeholder="Please input your password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditMode;
