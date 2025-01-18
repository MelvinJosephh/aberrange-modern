// pages/contact.tsx
'use client';

import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { StyledButton, StyledTextField } from "../shared/styled-component"; // Import your styled components

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface Errors {
  [key: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string): string => {
    let error = "";
    if (name === "firstName" || name === "lastName") {
      if (!value.trim()) {
        error = `${name === "firstName" ? "First" : "Last"} name is required.`;
      } else if (value.length < 3) {
        error = `${
          name === "firstName" ? "First" : "Last"
        } name should be at least three characters long.`;
      } else if (!/^[A-Za-z\s]+$/.test(value)) {
        error = `${
          name === "firstName" ? "First" : "Last"
        } name should contain only letters and spaces.`;
      }
    } else if (name === "email") {
      if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Please enter a valid email address.";
      }
    } else if (name === "phone") {
      if (value.length < 7 || value.length > 15) {
        error = "Phone number should be between 7 and 15 digits long.";
      }
    }
    return error;
  };

  const validateForm = (): Errors => {
    const newErrors: Errors = {};
    Object.keys(formData).forEach((field) => {
        const error = validateField(field as keyof FormData, formData[field as keyof FormData]);
      if (error) {
        newErrors[field] = error;
      }
    });
    return newErrors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          mode: "cors", // Optional: Ensures CORS mode for the request
        });

        const result = await response.json();
        if (response.ok) {
          console.log(result.message); // "Message sent successfully"
          setFormData({
            firstName: "",
            lastName: "",
            companyName: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        } else {
          console.error("Error:", result.message);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Form has errors:", validationErrors);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="First Name"
              name="firstName"
              variant="outlined"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.firstName && touched.firstName}
              helperText={touched.firstName ? errors.firstName : ""}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="Last Name"
              name="lastName"
              variant="outlined"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.lastName && touched.lastName}
              helperText={touched.lastName ? errors.lastName : ""}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="Company Name (Optional)"
              name="companyName"
              variant="outlined"
              value={formData.companyName}
              onChange={handleChange}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.email && touched.email}
              helperText={touched.email ? errors.email : ""}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="Phone Number"
              name="phone"
              variant="outlined"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.phone && touched.phone}
              helperText={touched.phone ? errors.phone : ""}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="What can we help you with?"
              name="subject"
              variant="outlined"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.subject && touched.subject}
              helperText={touched.subject ? errors.subject : ""}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <StyledTextField
              fullWidth
              label="Your Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </Box>

          <StyledButton
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
          >
            Send Message
          </StyledButton>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
