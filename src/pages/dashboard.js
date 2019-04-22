import React from 'react';
// import styled from 'styled-components';
import Layout from '../components/layout';
import UserBar from '../components/UserBar';
import Messages from '../components/Messages';
import MobileDashboardMenu from '../components/MobileDashboardMenu';

const Dashboard = () => (
  <Layout>
    <UserBar />
    {/* MESSAGES */}
    <Messages />
    <MobileDashboardMenu />
  </Layout>
);

export default Dashboard;
