function getMedia(apiData, response) {
  const media = [];
  apiData.forEach((child) => {
    media.push(child.val());
  });
  response.send(media);
}

module.exports = getMedia;
