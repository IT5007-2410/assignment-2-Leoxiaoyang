import React, { useState } from "react";
import { Layout,Typography  } from 'antd';
import View from "../../compontent/view/view"
import './index.css';
import Navbar from '../../utils/Navbar/navbar';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: '10vh', // 使用视口高度单位
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const contentStyle = {
    display: 'flex', // 使用 Flexbox 布局
    flexDirection: 'column', // 子元素垂直排列
    justifyContent: 'center', // 子元素在容器中居中
    minHeight: '100vh', // 最小高度视口高度
    padding: 0, // 移除内边距
    backgroundColor: '#0958d9', // 确保背景颜色在这里设置
};

const siderStyle = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};
const { Title } = Typography;

const Home = () => {
    const [travellers, setTravellers] = useState([
        {
            key:0,
            name: "Leo",
            phone: "13800138000",
            seatStatus: "Reserved",
            seatNumber: "1A",
            date: "2024-09-05"
        },
        {
            key:1,
            name: "Jack",
            phone: "13800138001",
            seatStatus: "Reserved",
            seatNumber: "2B",
            date: "2024-09-06"
        },
        {
            key:2,
            name: "Janice",
            phone: "13800138002",
            seatStatus: "No reservation",
            seatNumber: "3C",
            date: "2024-09-07"
        },
        {
            key:3,
            name: "Jenny",
            phone: "13800138003",
            seatStatus: "No reservation",
            seatNumber: "4D",
            date: "2024-09-08"
        },
        {
            key:4,
            name: "Susan",
            phone: "13800138004",
            seatStatus: "NO reservation",
            seatNumber: "5E",
            date: "2024-09-09"
        },
        {
            key:5,
            name: "Harry",
            phone: "13800138005",
            seatStatus: "Reserved",
            seatNumber: "6F",
            date: "2024-09-10"
        },
        {
            key:6,
            name: "Wang",
            phone: "13800138006",
            seatStatus: "NO reservation",
            seatNumber: "7G",
            date: "2024-09-11"
        },
        {
            key:7,
            name: "Feng",
            phone: "13800138007",
            seatStatus: "Reserved",
            seatNumber: "8H",
            date: "2024-09-12"
        },
        {
            key:8,
            name: "Ray",
            phone: "13800138008",
            seatStatus: "No reservation",
            seatNumber: "9I",
            date: "2024-09-13"
        },
        {
            key:9,
            name: "Cathy",
            phone: "13800138009",
            seatStatus: "Reserved",
            seatNumber: "10J",
            date: "2024-09-14"
        }
    ]);
    const [visible, setVisible] = useState(true);

    const recomposeVisible = (visible) => {
        setVisible(visible);
    }

    const setTraveller = (newData) => {
        setTravellers(newData);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}> {/* 最小高度为视口的100% */}
            <Sider style={siderStyle}>Sider</Sider>
            <Layout>
                <Header style={headerStyle}>
                    <Navbar onVisibleChange={recomposeVisible} data={travellers} setTraveller={setTraveller}/>
                </Header>
                <Content style={contentStyle}>
                    <Title style={siderStyle} level={2}>Train seat reservation status</Title>
                    <View traveller={travellers} setTraveller={setTraveller}/>
                </Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout>
 
    )
}

export default Home;    