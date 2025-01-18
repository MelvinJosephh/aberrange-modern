import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled Button using global CSS variables
export const StyledButton = styled(Button)(({ theme }) => ({
  padding: '15px 40px', // Default padding
  backgroundColor: 'var(--primary-color)', // Use primary global color
  color: '#fff', // White text for readability
  textTransform: 'none', // Preserve text case
  fontSize: '16px', // Standard font size
  borderRadius: '8px', // Rounded edges for a modern look
  transition: 'all 0.3s ease-in-out', // Smooth hover and focus transitions
  whiteSpace: 'normal', // Allow text to wrap inside the button
  textAlign: 'center', // Ensure text is centered
  width: 'auto', // Allow width to adapt to content
  maxWidth: '100%', // Prevent button from exceeding parent container width

  '&:hover': {
    backgroundColor: 'var(--secondary-color)', // Change background on hover
    boxShadow: '0 13px 27px 0 rgb(245 78 162 / 25%)', // Soft hover shadow
  },

  '&:focus-visible': {
    outline: '2px solid var(--secondary-color)', // Clear focus ring
    outlineOffset: '4px', // Offset for visibility
  },

  '&:disabled': {
    backgroundColor: 'var(--disabled-color)', // Disabled background
    color: 'var(--disabled-text-color)', // Disabled text color
    opacity: 0.7, // Reduce opacity for clarity
    cursor: 'not-allowed', // Indicate disabled state
  },

  // Responsive design using Material-UI breakpoints
  [theme.breakpoints.down('sm')]: {
    width: '100%', // On smaller screens, make button fill the width
    padding: '12px', // Adjust padding for mobile
    fontSize: '14px', // Smaller font size for compact layouts
    borderRadius: '6px', // Slightly smaller border radius for mobile
  },

  [theme.breakpoints.up('md')]: {
    padding: '15px 40px', // Larger padding for medium and above screens
    fontSize: '16px', // Larger font size for readability
  },
}));

// Styled TextField using global CSS variables
export const StyledTextField = styled(TextField)(({ }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--primary-color)', // Border color from global variables
    },
    '&:hover fieldset': {
      borderColor: 'var(--secondary-color)', // Border color on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--primary-color)', // Border color when focused
    },
  },
  '& .MuiInputBase-input': {
    fontSize: '16px', // Adjust font size as needed
    padding: '10px', // Adjust input padding
  },
  '& .MuiFormLabel-root': {
    fontSize: '14px', // Adjust label size
    color: 'var(--primary-color)', // Label color using global primary color
  },
}));
