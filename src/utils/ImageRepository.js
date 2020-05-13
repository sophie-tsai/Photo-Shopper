function getImagesPromise(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (url.includes("query")) {
        const filteredQueryData = data.results.map((photo) => ({
          id: photo.id,
          url: photo.urls.regular,
          alt: photo.alt_description,
          photographer: photo.user.name,
          isFavorite: false,
        }));
        return filteredQueryData;
      }
      const filteredData = data.map((photo) => ({
        id: photo.id,
        url: photo.urls.regular,
        alt: photo.alt_description,
        photographer: photo.user.name,
        isFavorite: false,
      }));
      return filteredData;
    });
}

function getLatestImagesPromise() {
  const latestImagesUrl = `https://api.unsplash.com/photos?&per_page=29&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
  return getImagesPromise(latestImagesUrl);
}

function getSearchImagesPromise(searchKeyWords) {
  const searchUrl = `https://api.unsplash.com/search/photos?&query=${searchKeyWords}&per_page=29&order_by=popular&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
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
