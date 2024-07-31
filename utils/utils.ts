const formatState = (state: string) => {
  switch (state.toUpperCase()) {
    case 'ALL':
      return 'All Trainings';
    case 'COMPLETED':
      return 'Completed';
    case 'IN_PROGRESS':
      return 'In Progress';
    case 'PENDING':
      return 'Pending';
    default:
      return state;
  }
};

const parseMessage = (message: string) => {
  const nameMatch = message.match(/Dear\s(.+?),/);
  const userName = nameMatch ? nameMatch[1].trim() : '';

  const linkMatch = message.match(/https?:\/\/[^\s]+/);
  const link = linkMatch ? linkMatch[0] : '';

  const text = message
    .replace(/Dear\s.+?,/, '')
    .replace(link, '')
    .trim();

  return { userName, text, link };
};

export { formatState, parseMessage };
