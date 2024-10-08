import React, { useState } from 'react';
import { Table, Badge, Button, Modal } from 'antd';

/** recomposeVisible 函数控制disPlayTraveller组件的显示与隐藏
 *   visible 读取父组件属性确定是否渲染
 *  travellers 数据为home组件定义的
 * */
const DisplayTraveller = ({ visible, travellers, recomposeVisible,setTraveller }) => {
    const [selectedRecord, setSelectedRecord] = useState(null); // 存储被选中的记录
    const [isDeleting, setIsDeleting] = useState(false); // 控制是否正在删除的状态

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Seat Status',
            dataIndex: 'seatStatus',
            key: 'seatStatus',
            render: status => (
                <Badge status={status === 'Reserved' ? 'error' : 'success'} text={status} />
            ),
        },
        {
            title: 'Seat Number',
            dataIndex: 'seatNumber',
            key: 'seatNumber',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button type="danger" onClick={() => handleDelete(record)}>
                    Delete
                </Button>
            ),
        },
    ];

    const handleDelete = (record) => {
        setSelectedRecord(record); // 存储被选中的记录
        setIsDeleting(true); // 显示确认对话框
    };

    const handleConfirm = () => {
        const newTravellers = travellers.filter(item => item.key !== selectedRecord.key);
        setTraveller(newTravellers); // 更新父组件状态
        setSelectedRecord(null); // 重置选中记录
        setIsDeleting(false); // 关闭确认对话框
    };

    const handleClose = () => {
        setSelectedRecord(null); // 重置选中记录
        setIsDeleting(false); // 关闭确认对话框
    };

    return (
        <>
            {visible && (
                <Table columns={columns} dataSource={travellers} rowKey="key" />
            )}
            {isDeleting && selectedRecord && (
                <Modal
                    title="Confirm Deletion"
                    visible
                    onOk={handleConfirm}
                    onCancel={handleClose}
                    okText="Confirm"
                    cancelText="Cancel"
                >
                    Are you sure you want to delete this traveler?
                </Modal>
            )}
            <Button type="primary" onClick={() => recomposeVisible(!visible)}>
                {visible ? 'Hide' : 'Display'} Traveller Information
            </Button>
        </>
    );
};

export default DisplayTraveller;