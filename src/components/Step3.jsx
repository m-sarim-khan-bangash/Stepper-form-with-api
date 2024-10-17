import React from "react";

const Step3 = ({ formik }) => {
  return (
    <div>
      <h2>Step 3: Address Details</h2>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        {formik.errors.address && <p>{formik.errors.address}</p>}
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        {formik.errors.city && <p>{formik.errors.city}</p>}
      </div>
    </div>
  );
};

export default Step3;
