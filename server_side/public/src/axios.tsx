import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI || `https://us-central1-prooven1-95022.cloudfunctions.net/`
});


// export default axios.create({
//   baseURL: process.env.REACT_APP_BACKEND_URI || `https://us-central1-prooven1-95022.cloudfunctions.net/`,
//   timeout: 60000,
//   headers: {
//     common: {
//       'Content-Type': 'application/json',
//       'accept-language': 'en_US',
//     },
//   },
// });


