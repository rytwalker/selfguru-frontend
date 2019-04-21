import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Message from '../components/Message';
import UserBar from '../components/UserBar';

const Dashboard = () => (
  <Layout>
    <UserBar />
    {/* MESSAGES */}
    <Messages>
      <Message title="+ Add new message" newMessage />
      <Message title="yinz are loved" />
    </Messages>
  </Layout>
);

const Messages = styled.div`
  width: 100%;
`;

export default Dashboard;
