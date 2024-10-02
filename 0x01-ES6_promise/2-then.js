// 2-then.js
const handleResponseFromAPI = (promise) => {
  return promise
    .then(() => {
      console.log("Got a response from the API");
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(() => {
      return new Error();
    });
};

export default handleResponseFromAPI;

