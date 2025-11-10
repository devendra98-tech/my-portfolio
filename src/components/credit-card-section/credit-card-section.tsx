import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useRef } from "react";
import * as Yup from "yup";
import { useGsapReveal } from "../../hooks/useGsapReveal";

type CardFormValues = {
  cardHolder: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
};

const initialValues: CardFormValues = {
  cardHolder: "",
  cardNumber: "",
  expiry: "",
  cvc: "",
};

const validationSchema = Yup.object({
  cardHolder: Yup.string().required("Name on card is required"),
  cardNumber: Yup.string()
    .matches(/^\d{13,19}$/, "Enter a valid card number")
    .required("Card number is required"),
  expiry: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Use MM/YY format")
    .required("Expiry is required"),
  cvc: Yup.string()
    .matches(/^\d{3,4}$/, "Enter a valid CVC")
    .required("CVC is required"),
});

export default function CreditCard() {
  const containerRef = useRef<HTMLElement | null>(null);
  useGsapReveal(containerRef);

  const handleSubmit = (
    values: CardFormValues,
    { resetForm }: FormikHelpers<CardFormValues>
  ) => {
    console.info("Payment preview submitted", values);
    resetForm();
  };

  return (
    <section className="contact" id="payment-preview" ref={containerRef}>
      <div className="max-width">
        <h2 className="" style={{ textAlign: "center" }} data-animate="fade">
          Card Details
        </h2>
        <div className="contact-content">
          <div className="column right" data-animate="fade">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <>
                  <Form noValidate>
                    <div id="form-container" className="form-container">
                      <div className="field">
                        <Field
                          type="text"
                          name="cardHolder"
                          placeholder="Enter Name on the Card*"
                          className="custom-field"
                          disabled={isSubmitting}
                        />
                        <ErrorMessage
                          name="cardHolder"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="field">
                        <Field
                          type="text"
                          name="cardNumber"
                          placeholder="Enter Card Number*"
                          className="custom-field"
                          maxLength={19}
                          disabled={isSubmitting}
                        />
                        <ErrorMessage
                          name="cardNumber"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div className="fields">
                        <div className="field name">
                          <Field
                            type="text"
                            name="expiry"
                            placeholder="MM / YY*"
                            className="custom-field"
                            disabled={isSubmitting}
                          />
                          <ErrorMessage
                            name="expiry"
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
                            disabled={isSubmitting}
                          />
                          <ErrorMessage
                            name="cvc"
                            component="div"
                            className="error"
                          />
                        </div>
                      </div>

                      <div className="button-area">
                        <button type="submit" disabled={isSubmitting}>
                          Preview payment
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
    </section>
  );
}
