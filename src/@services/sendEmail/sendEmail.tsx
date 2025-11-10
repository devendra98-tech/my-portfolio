import axios, { AxiosResponse } from "axios";

const EMAIL_API_URL = "https://api.emailjs.com/api/v1.0/email/send";

export type EmailPayload = {
  service_id: string;
  template_id: string;
  user_id: string;
  template_params: Record<string, string>;
};

export const sendEmail = (payload: EmailPayload): Promise<AxiosResponse> => {
  return axios.post(EMAIL_API_URL, payload);
};
