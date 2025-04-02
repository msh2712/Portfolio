import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdLocalPhone } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import Button from './Button';
import emailjs from 'emailjs-com';

function Contact() {
  const [statusMessage, setStatusMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let errorMessage = '';
    if (name === 'name' && !value) {
      errorMessage = 'Name is required';
    } else if (name === 'email' && (!value || !/\S+@\S+\.\S+/.test(value))) {
      errorMessage = 'Valid email is required';
    } else if (name === 'subject' && !value) {
      errorMessage = 'Subject is required';
    } else if (name === 'message' && !value) {
      errorMessage = 'Message cannot be empty';
    }

    setErrors({
      ...errors,
      [name]: errorMessage
    });

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);


    if (validateForm()) {
      emailjs
        .sendForm(
          'mshpatil369!',
          'template_yfldk0l',
          e.target,
          'pSN148DRDskq6iLhL'
        )
        .then(
          (result) => {
            setStatusMessage('Message sent successfully!');
          },
          (error) => {
            setStatusMessage('Failed to send message. Please try again later.');
          }
        );
    }
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Valid email is required';
      isValid = false;
    }
    if (!formData.subject) {
      formErrors.subject = 'Subject is required';
      isValid = false;
    }
    if (!formData.message) {
      formErrors.message = 'Message cannot be empty';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  return (
   <section id='contact'>
      <div className='mb-5'>
      <h1 className='aboutss text-center my-5 py-5 textabout'>
        CONTACT<span> US</span>
      </h1>
     
      <div className='mx-5 mt-5 px-md-5'>
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-4'>
              <div className=' aboutss d-flex'>
                <FaLocationDot className='fs-4 me-3 me-lg-3 ' />
                <div>
                  <h6 className='myname'>Address</h6>
                  <p className='info'>Navagam dindoli udhana surat</p>
                </div>
              </div>
              <div className=' aboutss mt-2 mt-md-4 d-flex'>
                <MdLocalPhone className='fs-4  me-3 me-lg-3' />
                <div>
                  <h6 className='myname'>Call Us</h6>
                  <p className='info'>+91 7069999594</p>
                </div>
              </div>
              <div className=' aboutss mt-2 mt-md-4 d-flex'>
                <TfiEmail className='fs-4 me-3 me-lg-3' />
                <div>
                  <h6 className='myname'>Email Us</h6>
                  <p className='info'>mshpatil369@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='col-lg-8'>
              <form
                onSubmit={sendEmail}
                className='php-email-form aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={200}
              >
                <div className='row'>
                  <div className='col-md-6 mb-2'>
                    <input
                      type='text'
                      name='name'
                      className={`form-control aboutss ${errors.name ? 'is-invalid' : ''}`}
                      placeholder='Your Name'
                      value={formData.name}
                      onChange={handleChange}
                      style={{ borderColor: errors.name ? 'blue' : '' }} // Add blue border when invalid
                    />
                    {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                  </div>
                  <div className='col-md-6 mb-3'>
                    <input
                      type='email'
                      className={`aboutss form-control ${errors.email ? 'is-invalid' : ''}`}
                      name='email'
                      placeholder='Your Email'
                      value={formData.email}
                      onChange={handleChange}
                      style={{ borderColor: errors.email ? 'blue' : '' }} // Blue border on invalid email
                    />
                    {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                  </div>
                  <div className='col-md-12 mb-3'>
                    <input
                      type='text'
                      className={`aboutss form-control ${errors.subject ? 'is-invalid' : ''}`}
                      name='subject'
                      placeholder='Subject'
                      value={formData.subject}
                      onChange={handleChange}
                      style={{ borderColor: errors.subject ? 'blue' : '' }} // Blue border on invalid subject
                    />
                    {errors.subject && <div className='invalid-feedback'>{errors.subject}</div>}
                  </div>
                  <div className='col-md-12 mb-3'>
                    <textarea
                      className={`aboutss form-control ${errors.message ? 'is-invalid' : ''}`}
                      name='message'
                      rows={6}
                      placeholder='Message'
                      value={formData.message}
                      onChange={handleChange}
                      style={{ borderColor: errors.message ? 'blue' : '' }} // Blue border on invalid message
                    />
                    {errors.message && <div className='invalid-feedback'>{errors.message}</div>}
                  </div>
                  <div className='col-md-12 text-center mt-3'>
                    <Button text={'Send Message'} />
                  </div>
                </div>
              </form>
              {statusMessage && <p className='text-center mt-4'>{statusMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  );
}

export default Contact;
