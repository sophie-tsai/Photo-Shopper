function getImagesPromise(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let dataToExtract = data;
      if (url.includes("search")) {
        dataToExtract = data.results;
      }
      const filteredData = dataToExtract.map((photo) => extract(photo));
      return filteredData;
    });
  function extract(photo) {
    return {
      id: photo.id,
      url: photo.urls.regular,
      alt: photo.alt_description,
      photographer: photo.user.name,
      isFavorite: false,
    };
  }
}

function getLatestImagesPromise(queryPage) {
  const latestImagesUrl = `https://api.unsplash.com/photos?&per_page=30&page=${queryPage}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
  return getImagesPromise(latestImagesUrl);
}

function getSearchImagesPromise(searchKeyWords, queryPage) {
  const searchUrl = `https://api.unsplash.com/search/photos?&query=${searchKeyWords}&per_page=30&page=${queryPage}&order_by=popular&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
  return getImagesPromise(searchUrl);
}

export { getLatestImagesPromise, getSearchImagesPromise };

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const imgPromises = data.map((img) => {
//       return new Promise(function (resolve) {
//         const image = new Image();
//         image.src = img.url;
//         image.onload = () => {
//           resolve();
//         };
//       });
//     });
//     Promise.all(imgPromises).then(() => setAllPhotos(data));
//   });
