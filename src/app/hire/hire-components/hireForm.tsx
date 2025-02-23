// src/components/HireForm.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from '@/styles/pages/hire-components/hireForm.module.scss';

type FormData = {
  service: string; // Changed to single string
  industry: string; // Changed to single string
  hub: string; // Changed to single string
  name: string;
  email: string;
  company?: string;
  tasks: string;
  hours: string;
  budget?: string;
};

interface HireFormProps {
  onSubmit: () => void;
}

const HireForm: React.FC<HireFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      service: '',
      industry: '',
      hub: '',
      name: '',
      email: '',
      company: '',
      tasks: '',
      hours: '',
      budget: '',
    },
  });

  const submitHandler = async (data: FormData) => {
    const response = await fetch('/api/hire', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      onSubmit();
    } else {
      console.error('Submission failed');
    }
  };

  return (
    <form className={styles.hireForm} onSubmit={handleSubmit(submitHandler)}>
      <h2 className={styles.formTitle}>Tell Us About Your Needs</h2>

      <div className={styles.formGrid}>
        {/* Service */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="service">Service *</label>
          <select
            id="service"
            {...register('service', { required: 'Please select a service' })}
            className={styles.selectInput}
          >
            <option value="">Select a Service</option>
            <option value="AI-Powered Business Automation">AI-Powered Business Automation</option>
            <option value="Tech & IT Virtual Assistance">Tech & IT Virtual Assistance</option>
            <option value="Admin & Executive Assistance">Admin & Executive Assistance</option>
            <option value="Finance & Bookkeeping">Finance & Bookkeeping</option>
            <option value="Research & Analysis">Research & Analysis</option>
          </select>
          {errors.service && <span className={styles.error}>{errors.service.message}</span>}
        </div>

        {/* Industry */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="industry">Industry *</label>
          <select
            id="industry"
            {...register('industry', { required: 'Please select an industry' })}
            className={styles.selectInput}
          >
            <option value="">Select an Industry</option>
            <option value="Tech/SaaS">Tech/SaaS</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Education">Education</option>
            <option value="Nonprofits">Nonprofits</option>
            <option value="Legal">Legal</option>
            <option value="Other">Other</option>
          </select>
          {errors.industry && <span className={styles.error}>{errors.industry.message}</span>}
        </div>

        {/* Business Hub */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="hub">Business Hub *</label>
          <select
            id="hub"
            {...register('hub', { required: 'Please select a hub' })}
            className={styles.selectInput}
          >
            <option value="">Select a Business Hub</option>
            <option value="Operations">Operations</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="R&D">R&D</option>
            <option value="Customer Support">Customer Support</option>
            <option value="Other">Other</option>
          </select>
          {errors.hub && <span className={styles.error}>{errors.hub.message}</span>}
        </div>

        {/* Name */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Name *</label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            {...register('name', { required: 'Name is required' })}
            className={styles.textInput}
          />
          {errors.name && <span className={styles.error}>{errors.name.message}</span>}
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            {...register('email', { 
              required: 'Email is required', 
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } 
            })}
            className={styles.textInput}
          />
          {errors.email && <span className={styles.error}>{errors.email.message}</span>}
        </div>

        {/* Company */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="company">Company (optional)</label>
          <input
            id="company"
            type="text"
            placeholder="Your Company"
            {...register('company')}
            className={styles.textInput}
          />
        </div>

        {/* Tasks/Goals */}
        <div className={styles.formGroupFull}>
          <label className={styles.label} htmlFor="tasks">Tasks/Goals *</label>
          <textarea
            id="tasks"
            placeholder="E.g., automate CRM, manage listings"
            {...register('tasks', { required: 'Please specify your tasks or goals' })}
            className={styles.textareaInput}
          />
          {errors.tasks && <span className={styles.error}>{errors.tasks.message}</span>}
        </div>

        {/* Hours/Week */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="hours">Hours/Week *</label>
          <select
            id="hours"
            {...register('hours', { required: 'Please select hours per week' })}
            className={styles.selectInput}
          >
            <option value="">Select Hours/Week</option>
            <option value="5-10">5-10</option>
            <option value="10-20">10-20</option>
            <option value="20-30">20-30</option>
            <option value="30+">30+</option>
          </select>
          {errors.hours && <span className={styles.error}>{errors.hours.message}</span>}
        </div>

        {/* Budget */}
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="budget">Budget (optional)</label>
          <select
            id="budget"
            {...register('budget')}
            className={styles.selectInput}
          >
            <option value="">Select Budget</option>
            <option value="<$500/mo">Less than $500/mo</option>
            <option value="$500-$1000/mo">$500-$1000/mo</option>
            <option value="$1000+/mo">$1000+/mo</option>
          </select>
        </div>
      </div>

      <button type="submit" className={styles.submitButton}>
        Submit & Proceed
      </button>
    </form>
  );
};

export default HireForm;