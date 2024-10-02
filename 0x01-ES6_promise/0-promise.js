// 0-promise.js
const getResponseFromAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Response from API");
    }, 1000); // Simulating a delay of 1 second
  });
};

export default getResponseFromAPI;

