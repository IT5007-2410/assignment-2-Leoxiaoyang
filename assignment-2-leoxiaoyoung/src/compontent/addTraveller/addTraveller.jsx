import React from 'react';
import {Button, Form, Input, Modal} from "antd";


const AddTraveller = ( {data,showModal,setSm} ) => {

    const [form] = Form.useForm();

    const handleCloseModal = ( ) => {
        setSm(false) // 修改父组件的Modal渲染状态
    }

    //
    const handleAddTraveller = async () => {
        const value = await form.validateFields();
        let newKey;

        // 首先找到当前最大的key值
        const maxKey = data.length > 0 ? Math.max(...data.map(item => item.key)) : 0;

        // 新增的key值是最大key值加1
        newKey = maxKey + 1;

        // 创建新元素
        const newItem = {
            key: newKey,
            ...value,
        };

        data.push(newItem);
        handleCloseModal()
    };

    // useEffect(() => {
    //     console.log(data,showModal,setSm)
    // }, [data,showModal,setSm]);

    return (
        <>
            <Modal
                title="Add Traveller"
                open={showModal}
                onCancel={handleCloseModal}
                footer={[
                    <Button key="close" onClick={handleCloseModal}>Cancel</Button>,
                    <Button key="add" onClick={handleAddTraveller}>Add</Button>
                ]}
            >
                <Form
                    form={form}
                >
                    <Form.Item
                        name="name"
                        label="Name"
                        rules={[{ required: true, message: "Please enter the name" }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="phone"
                        label="Phone"
                        rules={[{ required: true, message: "Please enter the phone number" }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="seatStatus"
                        label="Seat Status"
                        rules={[{ required: true, message: "Please enter the seat status" }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="seatNumber"
                        label="Seat Number"
                        rules={[{ required: true, message: "Please enter the Seat Number" }]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        name="date"
                        label="Date"
                        rules={[{ required: true, message: "Please enter the Date" }]}
                    >
                        <Input/>
                    </Form.Item>
                </Form>

            </Modal>
        </>
    )
}

export default AddTraveller;