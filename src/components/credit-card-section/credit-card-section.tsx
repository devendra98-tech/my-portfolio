import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";

export default function CreditCard() {
  const formik = useRef<any>(null);
  const [initialValues] = useState({
    card_number: "",
    name_on_card: "",
    expiry_month: "",
    cvv: "",
  });
  const handleSubmit = () => {
    ("");
  };
  function handleRef(e: any) {
    formik.current = e;
  }

  return (
    <section
      className="contact"
      id="contact"
      style={{ backgroundColor: " #f9f9f9" }}
    >
      <div className="max-width">
        <h2 className="" style={{ textAlign: "center" }}>
          Card Details
        </h2>
        <div className="contact-content">
          <div className="column right">
            <Formik
              validationSchema={null}
              onSubmit={handleSubmit}
              initialValues={initialValues}
              innerRef={(e: any) => handleRef(e)}
            >
              {({ ...formikSubmit }: any) => (
                <>
                  <Form>
                    <div id="form-container" className="form-container">
                      <div className="field">
                        <Field
                          type="text"
                          name="name_on_card"
                          placeholder="Enter Name on the Card*"
                          className="custom-field"
                        />
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="field">
                        <Field
                          type="text"
                          name="card_number"
                          placeholder="Enter Card Number*"
                          className="custom-field"
                          maxLength={19}
                        />
                        <ErrorMessage
                          name="subject"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="fields">
                        <div className="field name">
                          <Field
                            type="text"
                            name="expiry_month"
                            placeholder="MM / YY*"
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
                            type="text"
                            name="cvc"
                            placeholder="Enter CVC*"
                            className="custom-field"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>

                      <div
                        className={"button-area"}
                        onClick={formikSubmit.handleSubmit}
                      >
                        <button type="submit">Send message</button>
                      </div>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
