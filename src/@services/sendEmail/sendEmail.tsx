import axios from "axios";

export const sendEmail = async (params: any) => {
  let url: any = `https://api.emailjs.com/api/v1.0/email/send`;
  return axios
    .post(url, params)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
};
