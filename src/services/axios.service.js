import APIrequest from "../utils/config/axios.config";

export default function getRandomChist() {
  return APIrequest.get("/jokes/random", {
    validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
    },
  });
}
