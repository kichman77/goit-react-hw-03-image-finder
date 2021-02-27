import axios from "axios";
const key = "18623552-aad7218af3511e8a6a5692c49";

const getFetch = (q, page, perPage) => {
  let url = `https://pixabay.com/api/?q=${q}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`;
  return axios
    .get(url)
    .then((response) => {
      // console.log(response);

      return response.data;
    })
    .then((data) => {
      // console.log(data);
      return data.hits;
    })
    .then((hits) => {
      // console.log(hits);
      return hits;
    });
};
export default {getFetch};
