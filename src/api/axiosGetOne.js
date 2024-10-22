import axios from 'axios';

async function axiosGetOne(id) {
  const response = await axios.get(
    `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
  );
  return response.data;
}

export default axiosGetOne;
