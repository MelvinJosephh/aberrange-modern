'use client';

import React, { useState, ChangeEvent } from "react";
import { useStepContext } from "@/context/step-context";
import StepTemplate from "../../shared/step-template";
import { StyledTextField } from "../../../shared/styled-component";
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
  const { formData } = useStepContext();
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
          "http://localhost:5000/api/submit-hiring-form",
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
      title="Success! Let's connect you with talent."
      options={[]}
      selectedOption={""} // Provide an empty string or default value for selectedOption
      setSelectedOption={() => {}} // Provide a no-op function for setSelectedOption
      onBack={onBack}
      onNext={handleSubmit} // Link handleSubmit here
      isFinalStep={true}
    >
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
