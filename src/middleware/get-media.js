function getMedia(apiData, response) {
  let media;
  apiData.forEach((child) => {
    media = child;
  });
  response.send(media);
}

module.exports = getMedia;
