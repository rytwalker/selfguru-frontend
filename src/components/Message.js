import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Message = ({ title, newMessage }) => {
  const [message, setMessage] = useState(title);
  const [startDate, setStartDate] = useState(new Date());
  const [editMessage, setEditMessage] = useState(false);

  function submitMessage(e) {
    e.preventDefault();
    console.log(message);
    console.log(startDate);
  }

  return (
    <StyledMessage onSubmit={submitMessage}>
      <MessageTab onClick={() => setEditMessage(!editMessage)}>
        {message}
      </MessageTab>
      {editMessage && (
        <MessageForm>
          <FromGroup>
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
              name="message"
              id="message"
            />
          </FromGroup>
          <FromGroup>
            <label htmlFor="message">To:</label>
            <p>rytwalker</p>
          </FromGroup>
          <FromGroup>
            <label htmlFor="message">Send it:</label>
            <DatePicker
              selected={startDate}
              onChange={date => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />
          </FromGroup>
          <button type="submit">{newMessage ? 'Add' : 'Update'}</button>
          <button>Delete</button>
        </MessageForm>
      )}
    </StyledMessage>
  );
};

const StyledMessage = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

const MessageTab = styled.div`
  padding: 2rem;
  cursor: pointer;
  border-bottom: 1px solid #fefefe;
`;

const MessageForm = styled.form`
  width: 100%;
  background: #efefef;
  padding: 2rem;
`;

const FromGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  label {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  input {
    font-size: inherit;
    padding: 1rem 1.5rem;
  }
`;

export default Message;
