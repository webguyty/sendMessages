export default function recipientFormat(recipients) {
  // If no recipients are found
  if (recipients.length === 0) {
    return 'No recipients found, please search again';
  }

  // Format names for recipients - First and Last name
  let sendTo = '';
  recipients.forEach((recipient, i, arr) => {
    sendTo += recipient.firstName + ' ' + recipient.lastName;

    // Add commas to separate name
    if (i !== arr.length - 1) {
      sendTo += ', ';
    }
  });

  return sendTo;
}
