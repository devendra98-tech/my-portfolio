import axios from "axios";
import { SITE } from "../../config/site";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export type ContactMessage = {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck?: boolean;
};

type Web3FormsResponse = {
  success?: boolean;
  message?: string;
  body?: { message?: string };
};

const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError<Web3FormsResponse>(error)) {
    return (
      error.response?.data?.message ||
      error.response?.data?.body?.message ||
      error.message
    );
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Unable to send message";
};

export const sendEmail = async (
  values: ContactMessage,
): Promise<Web3FormsResponse> => {
  const accessKey = SITE.web3formsAccessKey.trim();
  if (!accessKey) {
    throw new Error(
      "Web3Forms access key is missing. Add REACT_APP_WEB3FORMS_ACCESS_KEY and rebuild.",
    );
  }

  try {
    const { data } = await axios.post<Web3FormsResponse>(
      WEB3FORMS_URL,
      {
        access_key: accessKey,
        name: values.name,
        email: values.email,
        subject: values.subject.trim() || "New message from portfolio",
        message: values.message,
        from_name: "Devendra Portfolio",
        replyto: values.email,
        botcheck: values.botcheck ? true : "",
      },
      {
        headers: { "Content-Type": "application/json" },
      },
    );

    if (!data?.success) {
      throw new Error(
        data?.message || data?.body?.message || "Unable to send message",
      );
    }

    return data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};
