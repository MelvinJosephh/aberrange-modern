'use client';

import React, { useState, ChangeEvent } from "react";
import { useHireTalent } from "../context/hire-talent-context"; // Use the updated context
import StepTemplate from "../components/step-template";
import { StyledTextField } from "../../shared/styled-component";
import "@/styles/hire-talent/step-eight.module.scss";
import axios from "axios";

interface Step8SuccessProps {
  onBack: () => void;
}

interface ContactInfo {
  email: string;
  companyName: string;
  contactName: string;
  phoneNumber: string;
}

const Step8Success: React.FC<Step8SuccessProps> = ({ onBack }) => {
  const { formData } = useHireTalent(); // Use the hiretalent context
  const { startDate } = formData;

  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    email: "",
    companyName: "",
    contactName: "",
    phoneNumber: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (
      contactInfo.email &&
      contactInfo.companyName &&
      contactInfo.contactName &&
      contactInfo.phoneNumber
    ) {
      const hiringData = { ...formData, contactInfo };

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/submit-hiring-form`,
          hiringData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200 || response.status === 201) {
          alert("Form submitted successfully!");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("An error occurred while submitting the form.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <StepTemplate
      options={[]} // Empty options as no selection is needed for this step
      selectedOption={""} // Empty as no selected option needed
      onSelect={() => { } } // No-op for the select handler
      onBack={onBack} // onBack logic stays
      onNext={handleSubmit} // Link the handleSubmit to onNext here
      isFinalStep={true} // Mark this as the final step
      title={""}    >
      <div className="form-container">
        <p className="form-description">
          Please provide your contact details below to connect with the best talent.
          {startDate && <p>Start date: {startDate}</p>}
        </p>
        <form>
          <div className="form-field">
            <StyledTextField
              label="Email Address"
              type="email"
              id="email"
              name="email"
              value={contactInfo.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="form-field">
            <StyledTextField
              label="Company Name"
              type="text"
              id="companyName"
              name="companyName"
              value={contactInfo.companyName}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="form-field">
            <StyledTextField
              label="Your Name"
              type="text"
              id="contactName"
              name="contactName"
              value={contactInfo.contactName}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
          <div className="form-field">
            <StyledTextField
              label="Phone Number"
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={contactInfo.phoneNumber}
              onChange={handleChange}
              required
              fullWidth
            />
          </div>
        </form>
      </div>
    </StepTemplate>
  );
};

export default Step8Success;
