import axios from "axios";

const service = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com/users"
});

const errHandler = err => {
  console.error(err.response.data);
  throw err.response.data;
};

export function signUp(userInfo) {
  return service
    .post("", userInfo)
    .then(res => {
      return res;
    })
    .catch(errHandler);
}
