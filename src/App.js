import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { initialValues } from "./data/mockData";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import {
  step1ValidationSchema,
  step2ValidationSchema,
  step3ValidationSchema,
} from "./schemas/validationSchema";
import "./App.css";

const StepperForm = () => {
  const [step, setStep] = useState(1);

  const currentValidationSchema =
    step === 1
      ? step1ValidationSchema
      : step === 2
      ? step2ValidationSchema
      : step3ValidationSchema;

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: currentValidationSchema,
    onSubmit: async (values) => {
      if (step < 3) {
        setStep(step + 1);
      } else {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          values
        );
        if (response) {
          alert("Form submitted successfully!");
          setStep(1);
          formik.resetForm();
        }
      }
    },
  });

  const handleNext = () => formik.handleSubmit();
  const handlePrevious = () => setStep(step - 1);

  return (
    <form onSubmit={formik.handleSubmit} className="container">
      {step === 1 && <Step1 formik={formik} />}
      {step === 2 && <Step2 formik={formik} />}
      {step === 3 && <Step3 formik={formik} />}

      <div style={{ display: "flex", gap: "10px" }}>
        {step > 1 && (
          <button type="button" onClick={handlePrevious}>
            Back
          </button>
        )}
        <button type="button" onClick={handleNext}>
          {step === 3 ? "Submit" : "Next"}
        </button>
      </div>
    </form>
  );
};

export default StepperForm;
