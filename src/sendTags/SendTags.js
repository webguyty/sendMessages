import React, { useState } from 'react';
import axios from 'axios';

import recipientQueryStr from './recipients/recipientQueryStr';
import recipientFormat from './recipients/recipientFormat';

export default function SendTags() {
  const [recipients, updateRecipients] = useState('');
  const [qualifier, updateQualifier] = useState('and');
  const [sendTo, updateSendTo] = useState('');
  const [sent, updateSent] = useState(false);
  const [sendType, updateSendType] = useState('tags');

  const APIURL = 'https://sheetdb.io/api/v1/aka2sv6jd00dh';

  const handleChange = (event) => {
    const value = event.target.value;
    switch (event.target.name) {
      case 'sendType':
        updateSendType(value);
        break;
      case 'sendTo':
        updateSendTo(value);
        break;
      case 'qualifier':
        updateQualifier(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get query for recipients
    const query = recipientQueryStr(sendType, sendTo, qualifier);

    // If recipient is omitted from form
    if (query === 'Please enter a recipient') {
      updateRecipients(query);
      updateSent(true);
    } else {
      // Get recipients with query
      const getRecipients = async () => {
        const res = await axios.get(APIURL + query);
        const recipientsFormatted = recipientFormat(res.data);
        updateRecipients(recipientsFormatted);
      };
      getRecipients();
      updateSent(true);
    }
  };

  return (
    <div className='App-sendTags'>
      <div className='container'>
        <form className='message-form' onSubmit={handleSubmit}>
          <h2>Select a recipient to send a message to</h2>

          {/* Select Type */}
          <div className='message-formGroup message-formGroup-labelWidth'>
            <label htmlFor='sendType'>Select Category:</label>
            <select name='sendType' onChange={handleChange} id='sendType'>
              <option value='tags'>Tags</option>
              <option value='firstName'>First Name</option>
              <option value='lastName'>Last Name</option>
              <option value='organizationId'>Organization</option>
            </select>
          </div>

          {/* Enter recipients */}
          <div className='message-formGroup message-formGroup-labelWidth'>
            <label htmlFor='sendTo'>Send message to:</label>
            <input
              type='text'
              name='sendTo'
              onChange={handleChange}
              id='sendTo'
              placeholder={
                sendType === 'tags'
                  ? 'Please separate with commas ("funny, smart")'
                  : 'Enter name'
              }
            />
          </div>

          {/* Radio buttons for AND / OR  */}
          <div className='message-formGroup message-formGroup-radio'>
            <div className='radio-label'>AND/OR:</div>
            <label htmlFor='and' className='message-formGroup-and'>
              And
            </label>
            <input
              type='radio'
              id='and'
              name='qualifier'
              value='and'
              onChange={handleChange}
              checked={qualifier === 'and'}
              className='message-formGroup-and'
            />

            <label htmlFor='or' style={{ marginLeft: '3rem' }}>
              Or
            </label>
            <input
              type='radio'
              id='or'
              name='qualifier'
              value='or'
              onChange={handleChange}
              checked={qualifier === 'or'}
            />
          </div>

          {/* Submit Button  */}
          <input
            type='submit'
            value='Send Messages'
            className='message-button'
          />
        </form>

        {/* Display recipients */}
        {sent && (
          <div className='message-sentToRecip'>Sent to: {recipients}</div>
        )}
      </div>
    </div>
  );
}
