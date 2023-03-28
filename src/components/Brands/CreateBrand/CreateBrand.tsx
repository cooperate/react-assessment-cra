import React, { useState, useContext } from "react";
import AddBrandButton from "../AddBrandButton/AddBrandButton";

const CreateBrand: React.FC = () => {
  const [brandName, setBrandName] = useState<string>("");

  return (
    <div>
      <h3>Create Brand</h3>
      <form onSubmit={(e) => e?.preventDefault()}>
        <label htmlFor="brand-name">Brand Name:</label>
        <input
          type="text"
          id="brand-name"
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
        />
        <AddBrandButton brandName={brandName} />
      </form>
    </div>
  );
};

export default CreateBrand;
