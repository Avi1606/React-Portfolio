/**
 * Validates an email address
 * @param {string} email - The email to validate
 * @returns {boolean} Whether the email is valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates required fields
 * @param {string} value - The value to check
 * @returns {boolean} Whether the value is not empty
 */
export const isRequired = (value) => {
  return value.trim() !== '';
};

/**
 * Validates minimum length
 * @param {string} value - The value to check
 * @param {number} minLength - The minimum length required
 * @returns {boolean} Whether the value meets the minimum length
 */
export const minLength = (value, minLength) => {
  return value.trim().length >= minLength;
};

/**
 * Validates a form object
 * @param {Object} formData - The form data to validate
 * @returns {Object} An object with error messages for each field
 */
export const validateContactForm = (formData) => {
  const errors = {};
  
  if (!isRequired(formData.name)) {
    errors.name = 'Name is required';
  }
  
  if (!isRequired(formData.email)) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Email is not valid';
  }
  
  if (!isRequired(formData.message)) {
    errors.message = 'Message is required';
  } else if (!minLength(formData.message, 10)) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};
