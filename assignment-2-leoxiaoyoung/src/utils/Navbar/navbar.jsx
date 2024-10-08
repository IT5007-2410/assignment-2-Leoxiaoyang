import React, {useState} from 'react';
import {Menu} from 'antd';
import AddTraveller from "../../compontent/addTraveller/addTraveller";
const items = [
    {
        label: 'Add Traveller',
        key: 'add',
        icon: <i className="iconfont icon-add" />
    }

];

const Navbar = ({ onVisibleChange,data,setTraveller }) => {
    const [current, setCurrent] = useState('mail');
    const [showModal, setShowModal] = useState(false);

    const onClick = (e) => {
        setCurrent(e.key);
        if (e.key === 'add') {
            onVisibleChange(false);
            setShowModal(true)
        }else if (e.key === 'del') {
            // onVisibleChange(false)
        }
    };
    const setSm = (newShowModal) => {
        setShowModal(newShowModal);
    }

    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <AddTraveller data={data} setTraveller={setTraveller} showModal={showModal} setSm={setSm}/>
        </>
    );
};

export default Navbar;