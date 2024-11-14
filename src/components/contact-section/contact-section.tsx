import React, { useRef, useState } from "react";
import { sendEmail } from "../../@services";
import { Formik, Form, Field, ErrorMessage } from "formik";
import contactFormvalidationSchema from "./contact-form-validations";
import Loader from "../loader/loader";
import Toast from "../tost";
type ToastType = "success" | "warning" | "error" | "info";

export default function ContactSection() {
  const formik = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<ToastType>("success");
  const [initialValues] = useState<any>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function handleRef(e: any) {
    formik.current = e;
  }
  const sendMessage = async (params: any, resetForm: any) => {
    setLoading(true);
    const payLoad = {
      service_id: "service_970foha",
      template_id: "template_7bymmuf",
      user_id: "FOhxzVTlNeRwpMLg7",
      template_params: {
        ...params,
      },
    };
    await sendEmail(payLoad).then((res: any) => {
      if (res) {
        if (res && res.status === 200) {
          resetForm();
          setToastMessage("Message sent successfully!");
          setToastType("success");

          setLoading(false);
        } else {
          setLoading(false);
          setToastMessage("Something went wrong!");
          setToastType("error");
        }
      }
    });
  };
  const handleSubmit = (data: any, { resetForm }: any) => {
    sendMessage(data, resetForm);
  };
  return (
    <section
      className="contact"
      id="contact"
      style={{ backgroundColor: " #f9f9f9" }}
    >
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Don't be shy</div>
            <p>
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Devendra Golakoti</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Hyderabad</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">mrgolakoti@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            <Formik
              validationSchema={contactFormvalidationSchema}
              onSubmit={handleSubmit}
              initialValues={initialValues}
              innerRef={(e: any) => handleRef(e)}
            >
              {({ ...formikSubmit }: any) => (
                <>
                  <Form className={loading ? "opacity-on-load" : ""}>
                    {loading && (
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
                            disabled={loading}
                            className="custom-field"
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
                            disabled={loading}
                            className="custom-field"
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
                          disabled={loading}
                          className="custom-field"
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
                          disabled={loading}
                          className="custom-field"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div
                        className={
                          loading ? "button-area btn-disable" : "button-area"
                        }
                        onClick={formikSubmit.handleSubmit}
                      >
                        <button type="submit" disabled={loading}>
                          Send message
                        </button>
                      </div>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {toastMessage && <Toast message={toastMessage} type={toastType} />}
    </section>
  );
}
