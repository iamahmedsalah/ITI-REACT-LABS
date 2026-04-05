export   const formatDate = (d) => {
    if (d === undefined || d === null || d === '') return '';
    if (d === 'TBD') return 'TBD';
    const date = new Date(d);
    if (Number.isNaN(date.getTime())) return String(d);
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  };