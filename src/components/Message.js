import React, { useState } from 'react';
import styled from 'styled-components';

const Message = ({ title, newMessage }) => {
  const [message, setMessage] = useState(title);
  const [editMessage, setEditMessage] = useState(false);
  return (
    <StyledMessage>
      <MessageTab onClick={() => setEditMessage(!editMessage)}>
        {message}
      </MessageTab>
      {editMessage && (
        <form>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              name="message"
              id="message"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">To:</label>
            <p>rytwalker</p>
          </div>
          <div className="form-group">
            <label htmlFor="message">Send it:</label>
            <p>Today April 21st, 2019 at 8:00pm</p>
          </div>
          <button type="submit">Update</button>
          <button>Delete</button>
        </form>
      )}
    </StyledMessage>
  );
};

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageTab = styled.div`
  padding: 2rem 0;
  cursor: pointer;
`;

export default Message;
