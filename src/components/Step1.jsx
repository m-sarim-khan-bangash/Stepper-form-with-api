import React from "react";

const Step1 = ({ formik }) => {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && <p>{formik.errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && <p>{formik.errors.lastName}</p>}
      </div>
    </div>
  );
};

export default Step1;
