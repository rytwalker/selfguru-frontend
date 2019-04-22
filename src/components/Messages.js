import React from 'react';
import styled from 'styled-components';
import Message from '../components/Message';

const testMessages = [
  {
    id: 1,
    title: 'Polarised high-level benchmark',
    date: '2018-10-13T10:59:52Z',
  },
  {
    id: 2,
    title: 'Optimized analyzing matrix',
    date: '2018-07-05T04:46:20Z',
  },
  {
    id: 3,
    title: 'Innovative intermediate benchmark',
    date: '2018-09-27T15:32:43Z',
  },
  {
    id: 4,
    title: 'Devolved responsive software',
    date: '2019-03-01T01:49:57Z',
  },
  {
    id: 5,
    title: 'Synergized background collaboration',
    date: '2018-12-29T09:55:06Z',
  },
  {
    id: 6,
    title: 'Multi-channelled systemic analyzer',
    date: '2019-03-22T15:35:03Z',
  },
  {
    id: 7,
    title: 'Object-based optimizing artificial intelligence',
    date: '2018-08-27T04:59:52Z',
  },
  {
    id: 8,
    title: 'Public-key neutral local area network',
    date: '2018-08-15T02:52:40Z',
  },
  {
    id: 9,
    title: 'Assimilated attitude-oriented Graphical User Interface',
    date: '2019-04-03T04:24:39Z',
  },
  {
    id: 10,
    title: 'Fundamental eco-centric array',
    date: '2019-04-08T05:00:18Z',
  },
];

function addToMessages(message) {
  testMessages.unshift(message);
}

const Messages = () => {
  return (
    <StyledMessages>
      <Message title="+ Add new message" newMessage />
      {testMessages.map(msg => (
        <Message
          key={msg.id}
          title={msg.title}
          date={msg.date}
          add={addToMessages}
          totalMessages={testMessages.length}
        />
      ))}
    </StyledMessages>
  );
};

const StyledMessages = styled.div`
  width: 100%;
`;

export default Messages;
