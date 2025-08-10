export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validateForm = (formData) => {
  const errors = {}

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters long'
  }

  if (!formData.email || !validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!formData.message || formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long'
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

export const handleContactSubmit = async (formData) => {
  try {
    // send the form data to backend
    // For now, we'll just log it and return success
    console.log('Contact form submitted:', formData)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return {
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    }
  } catch (error) {
    return {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again.'
    }
  }
} 