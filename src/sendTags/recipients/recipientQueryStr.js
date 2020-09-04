export default function recipientQueryStr(type, recipients, qualifier) {
  // If no recipient is specified
  if (recipients === '') {
    return 'Please enter a recipient';
  }

  // Set query for and / or search parameter
  let query = '';
  query = qualifier === 'and' ? '/search?' : '/search_or?';

  switch (type) {
    case 'firstName':
      query += `firstName=${recipients.trim()}`;
      break;
    case 'lastName':
      query += `lastName=${recipients.trim()}`;
      break;
    case 'organizationId':
      // Replace white space for search
      const org = recipients.trim().replace(' ', '%20');
      query += `organizationId=${org}`;
      break;
    case 'tags': {
      // Split tags into array with trimmed white space
      let tags = recipients.split(',').map((item) => item.trim());
      // Search through API's array
      // Add wildcard '*' to search for tag
      tags.forEach((item, i) => {
        i === 0
          ? (query += `tags[]=*${item}*`)
          : (query += `&tags[]=*${item}*`);
      });
      break;
    }
    default:
      query = 'queryError';
  }
  return query;
}
