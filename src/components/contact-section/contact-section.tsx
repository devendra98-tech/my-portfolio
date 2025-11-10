import { FC, useEffect, useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { sendEmail } from "../../@services";
import contactFormvalidationSchema from "./contact-form-validations";
import Loader from "../loader/loader";
import Toast from "../tost";
import { useGsapReveal } from "../../hooks/useGsapReveal";
import type { EmailPayload } from "../../@services/sendEmail/sendEmail";

type ToastType = "success" | "warning" | "error" | "info";
type ContactFormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type InfoRowProps = {
  icon: string;
  head: string;
  subTitle: string;
};

const INFO_ROWS: InfoRowProps[] = [
  { icon: "fas fa-user", head: "Name", subTitle: "Devendra Golakoti" },
  { icon: "fas fa-map-marker-alt", head: "Address", subTitle: "Hyderabad" },
  { icon: "fas fa-envelope", head: "Email", subTitle: "mrgolakoti@gmail.com" },
];

const InfoRow: FC<InfoRowProps> = ({ icon, head, subTitle }) => (
  <div className="row">
    <i className={icon}></i>
    <div className="info">
      <div className="head">{head}</div>
      <div className="sub-title">{subTitle}</div>
    </div>
  </div>
);

type ContactSectionProps = {
  isLoading: boolean;
};

export default function ContactSection({ isLoading }: ContactSectionProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("success");
  const [submissionStatus, setSubmissionStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  useGsapReveal(containerRef, {}, !isLoading);

  useEffect(() => {
    if (!toastMessage) {
      return;
    }
    const timeout = window.setTimeout(() => setToastMessage(""), 3500);
    return () => window.clearTimeout(timeout);
  }, [toastMessage]);

  const handleSubmit = async (
    values: ContactFormValues,
    { resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    setLoading(true);
    setSubmissionStatus("idle");
    const payload: EmailPayload = {
      service_id: "service_970foha",
      template_id: "template_7bymmuf",
      user_id: "FOhxzVTlNeRwpMLg7",
      template_params: values,
    };

    try {
      const response = await sendEmail(payload);
      if (response.status >= 200 && response.status < 300) {
        resetForm();
        setToastMessage("Message sent successfully!");
        setToastType("success");
        setSubmissionStatus("success");
      } else {
        setToastMessage("Something went wrong!");
        setToastType("error");
        setSubmissionStatus("error");
      }
    } catch (error) {
      setToastMessage("Unable to send message right now. Please try again.");
      setToastType("error");
      setSubmissionStatus("error");
      console.error("Email send failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact" ref={containerRef}>
      <div className="max-width">
        <h2 className="title" data-animate="fade">
          Contact me
        </h2>
        <div className="contact-content">
          <div className="column left" data-animate="fade">
            {isLoading ? (
              <div className="contact-skeleton">
                <div className="skeleton skeleton-text skeleton-heading" />
                <div className="skeleton skeleton-text" />
                <div className="skeleton skeleton-text short" />
                <div className="icons">
                  {Array.from({ length: 3 }, (_, index) => (
                    <div className="row" key={index}>
                      <span className="skeleton skeleton-icon" />
                      <div className="info">
                        <div className="skeleton skeleton-text short" />
                        <div className="skeleton skeleton-text shorter" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <div className="text">Don't be shy</div>
                <p>
                  Feel free to get in touch with me. I am always open to
                  discussing new projects, creative ideas or opportunities to be
                  part of your visions.
                </p>
                <div className="icons">
                  {INFO_ROWS.map((row) => (
                    <InfoRow key={row.head} {...row} />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="column right" data-animate="fade">
            {isLoading ? (
              <div className="contact-skeleton">
                <div className="skeleton skeleton-text skeleton-heading" />
                <div className="form-skeleton">
                  {Array.from({ length: 4 }, (_, index) => (
                    <div className="skeleton skeleton-field" key={index} />
                  ))}
                  <div className="skeleton skeleton-button" />
                </div>
              </div>
            ) : (
              <>
                <div className="text">Message me</div>
                <Formik
                  validationSchema={contactFormvalidationSchema}
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => {
                    const isBusy = loading || isSubmitting;

                    return (
                      <>
                        <Form
                          className={isBusy ? "opacity-on-load" : ""}
                          noValidate
                        >
                          {isBusy && (
                            <div className="loader-container">
                              <Loader />
                            </div>
                          )}
                          <div id="form-container" className="form-container">
                            <div className="fields">
                              <div className="field name">
                                <Field
                                  type="text"
                                  name="name"
                                  placeholder="Name*"
                                  disabled={isBusy}
                                />
                                <ErrorMessage
                                  name="name"
                                  component="div"
                                  className="error"
                                />
                              </div>
                              <div className="field email">
                                <Field
                                  type="email"
                                  name="email"
                                  placeholder="Email*"
                                  disabled={isBusy}
                                />
                                <ErrorMessage
                                  name="email"
                                  component="div"
                                  className="error"
                                />
                              </div>
                            </div>
                            <div className="field">
                              <Field
                                type="text"
                                name="subject"
                                placeholder="Subject*"
                                disabled={isBusy}
                              />
                              <ErrorMessage
                                name="subject"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div className="field textarea">
                              <Field
                                as="textarea"
                                name="message"
                                placeholder="Message*"
                                disabled={isBusy}
                              />
                              <ErrorMessage
                                name="message"
                                component="div"
                                className="error"
                              />
                            </div>
                            <div
                              className={`button-area${isBusy ? " btn-disable" : ""}`}
                            >
                              <button type="submit" disabled={isBusy}>
                                Send message
                              </button>
                            </div>
                          </div>
                        </Form>
                        {submissionStatus === "success" && (
                          <div className="submission-status success">
                            Thank you! I’ll reach out shortly to continue the
                            conversation.
                          </div>
                        )}
                        {submissionStatus === "error" && !toastMessage && (
                          <div className="submission-status error">
                            Something went wrong. Please try again or contact me
                            directly.
                          </div>
                        )}
                      </>
                    );
                  }}
                </Formik>
              </>
            )}
          </div>
        </div>
      </div>
      {toastMessage && <Toast message={toastMessage} type={toastType} />}
    </section>
  );
}
