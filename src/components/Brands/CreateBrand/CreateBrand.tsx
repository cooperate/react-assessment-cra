import React, { useState, useContext } from "react";
import AddBrandButton from "../AddBrandButton/AddBrandButton";
import styled from '@emotion/styled';
import { Card, Form } from "../../../App";

const CreateBrand: React.FC = () => {
  const [brandName, setBrandName] = useState<string>("");

  return (
    <Card>
      <h3>Create Brand</h3>
      <Form onSubmit={(e) => e?.preventDefault()}>
        <label htmlFor="brand-name">Brand Name:</label>
        <input
          type="text"
          id="brand-name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <AddBrandButton brandName={brandName} />
      </Form>
    </Card>
  );
};

export default CreateBrand;
