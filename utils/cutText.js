module.exports = (content, maxLength) => {
  if (content.length < 1) return 'Error';
  if (content.length <= maxLength) return content;
  if (maxLength <= 0) return 'Error';
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
