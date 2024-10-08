import React, { useEffect, useState } from 'react';
import { Table, Badge, Button, Space, Modal, Radio } from 'antd';

const View = ({traveller,setTraveller}) => {
    const [data, setData] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);  
    const [selectedTraveller, setSelectedTraveller] = useState(null); 
    const [unreservedTravellers, setUnreservedTravellers] = useState([]); 
    // eslint-disable-next-line
    const [currentSeat, setCurrentSeat] = useState(null); // 当前选择的座位

    const columns = [
        {
            title: 'Seat Number',
            dataIndex: 'seatNumber',
            key: 'seatNumber',
            render: text => <Badge status="success" text={text} />,
        },
        {
            title: 'status',
            dataIndex: 'status',
            key: 'status',
            render: text => (
                <Space>
                    {text === 'No reserved' ? <Badge status="success" text={text} /> : <Badge status="error" text={text} />}
                </Space>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Button type="primary" disabled={record.status === 'Reserved'} onClick={() => handleOpenModal(record)}>
                    Reserved
                </Button>
            ),
        },
    ];

    
    const handleOpenModal = (record) => {
        // 将当前的座位保存，以便后续预订
        setCurrentSeat(record);

        // 获取未预订的旅客信息
        const unreserved = traveller.filter(traveller => traveller.seatStatus === 'No reserved');
        setUnreservedTravellers(unreserved);
        setIsModalVisible(true);  // 打开模态框
    };

    // 确认预订
    const handleOk = () => {
        if (selectedTraveller) {
            const selectKey = selectedTraveller.key // 确定被删除key
            const item =  traveller.map(item => {
                // console.log(item.key)
                if (selectKey === item.key) {
                    item["seatStatus"] = "Reserved";
                }
                return item;
            })
            setTraveller(item)
        }
        setIsModalVisible(false);  // 关闭模态框
    };

    // 取消操作
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    // 选择旅客时触发
    const onTravellerChange = (e) => {
        setSelectedTraveller(e.target.value);  // 保存选中的旅客信息
    };

    useEffect(() => {
        console.log(typeof traveller,traveller);
        const  data  = traveller;
        let newData = [];
        let tempData;
        for (let item = 0; item < data.length; item++) {
            tempData = { key: data[item].key, seatNumber: data[item].seatNumber, status: data[item].seatStatus };
            newData.push(tempData);
        }
        setData(newData);
    }, [traveller]);

    return (
        <>
            <Table columns={columns} dataSource={data} pagination={false} size="large" />

            {/* 模态框 */}
            <Modal
                title="Choose traveller"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Comfirm"
                cancelText="Cancel"
            >
                <Radio.Group onChange={onTravellerChange} value={selectedTraveller}>
                    {unreservedTravellers.map(traveller => (
                        <Radio key={traveller.key} value={traveller}>
                            {traveller.name} - {traveller.phone}
                        </Radio>
                    ))}
                </Radio.Group>
            </Modal>
        </>
    );
};

export default View;
