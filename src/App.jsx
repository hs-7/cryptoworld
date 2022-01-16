import React from 'react';
import { Routes, Route, Link} from "react-router-dom";
import { Layout, Typography, Space} from 'antd';

import { Navbar, Exchanges, Homepage, News, Cryptocurrencies, Cryptodetails} from "./Components"

export default function App() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route path="/" element={<Homepage/>}>
                            </Route>
                            <Route path="/exchanges" element={<Exchanges/>}>
                            </Route>
                            <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}>
                            </Route>
                            <Route path="/crypto/:coinId" element={<Cryptodetails/>}>
                            </Route>
                            <Route path="/news" element={<News/>}>
                            </Route>
                        </Routes>
                    </div>
                </Layout>
                
                <div className="footer">
                <Typography.Title level={5} style={{color:"white", textAlign:"center"}}>
                    Cryptoworld <br/>
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/Exchanges">Exchanges</Link>
                    <Link to="/News">News</Link>
                </Space>
                </div>
            </div>
        </div>
    )
}
