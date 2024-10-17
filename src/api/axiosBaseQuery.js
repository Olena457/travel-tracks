// import axios from 'axios';

// const axiosBaseQuery = ({ baseUrl } = { baseUrl: '' }) => async ({
//   url,
//   method,
//   data,
//   params,
// }) => {
//   try {
//     const result = await axios({ url: baseUrl + url, method, data, params });
//     return { data: result.data };
//   } catch (axiosError) {
//     let err = axiosError;
//     return {
//       error: { status: err.response?.status, data: err.response?.data },
//     };
//   }
// };

// export default axiosBaseQuery;
import axios from 'axios';

export const campApi = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers',
});
