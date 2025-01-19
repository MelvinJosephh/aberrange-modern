// pages/get-quote.tsx
'use client';

import React, { useState } from "react";
import { TextField, Button, MenuItem, Select, InputLabel, InputAdornment, FormControl } from "@mui/material";
import axios from "axios";
import styles from '@/styles/pages/get-quote.module.scss'; // SCSS module import

const GetQuote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    service: "",
    projectOverview: "",
    budget: "",
    timeline: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.service || !formData.projectOverview) {
      setErrorMessage("Please fill in all required fields.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setErrorMessage("");
      try {
        // Send form data to the backend
        const response = await axios.post("http://localhost:5000/api/quote", formData);
        console.log(response.data);
        setIsSubmitted(true); // Set form as submitted on success
      } catch (error) {
        console.error("There was an error submitting the form", error);
        setErrorMessage("There was an error submitting the form. Please try again later.");
      }
    }
  };

  return (
    <div className={styles['get-quote']}>
      <h2>Get a Quote</h2>
      {isSubmitted ? (
        <p>Thank you! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="contact-info">
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              required
              type="email"
              margin="normal"
            />
            <TextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              type="tel"
              margin="normal"
            />
          </div>

          <div className="company-info">
            <TextField
              label="Company Name (Optional)"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Website URL (Optional)"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </div>

          <FormControl fullWidth margin="normal">
            <InputLabel>Service Interested In</InputLabel>
            <Select
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <MenuItem value="">Select Service</MenuItem>
              <MenuItem value="academic-writing">Academic Writing</MenuItem>
              <MenuItem value="branding">Branding</MenuItem>
              <MenuItem value="web-development">Web Development</MenuItem>
              <MenuItem value="bug-fixing">Bug Fixing</MenuItem>
              <MenuItem value="virtual-assistance">Virtual Assistance</MenuItem>
              <MenuItem value="project-management">Project Management</MenuItem>
              <MenuItem value="product-management">Product Management</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Quick overview of your project"
            name="projectOverview"
            value={formData.projectOverview}
            onChange={handleInputChange}
            fullWidth
            required
            multiline
            rows={4}
            margin="normal"
          />

          <div className="budget-field">
            <TextField
              label="Do you have a Budget in mind?"
              name="budget"
              value={formData.budget}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
            />
          </div>

          <FormControl fullWidth margin="normal">
            <InputLabel>Timeline</InputLabel>
            <Select
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
            >
              <MenuItem value="ASAP">ASAP</MenuItem>
              <MenuItem value="Within a month">Within a month</MenuItem>
              <MenuItem value="3-6 months">3-6 months</MenuItem>
              <MenuItem value="6+ months">6+ months</MenuItem>
            </Select>
          </FormControl>

          {errorMessage && <p className="error">{errorMessage}</p>}

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default GetQuote;
