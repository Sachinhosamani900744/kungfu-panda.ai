import React, { useState } from 'react';
import fetch from 'isomorphic-fetch';
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

   
    // Implement form submission logic here (e.g., send data to server)
    console.log('Form submitted:', formData);

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <img src="/login.png" alt="Contact Us" className="contact-image" />
      <div className='form-container'></div>
    

    <form className="contact-form" onSubmit={handleSubmit}>
    
    
    <div className="eapps-form-header-picture">
    
      <div className="eapps-form-header-info">
        
            <div className="eapps-form-header-title" > <center><h1>Contact Us</h1> </center></div>
        
          <div className="eapps-form-header-text"><h4>Leave your message and we'll get back to you shortly.</h4></div>
        
    </div>

</div><br></br><br></br>
      <div className="form-group">
        <label htmlFor="name"><h4> Your Name *</h4></label>
        <input
          type="text"
          id="name"
          name=" user name"
          placeholder='Kunfu panda'
          value={formData.name}
          onChange={handleChange}
          required
      
        />
      </div>
      <div className="form-group">
        <label htmlFor="email"><h4>Email Address *</h4></label>
        <input
          type="email"
          id="email"
          name=" user email"
          placeholder='kungfupanda@gmail.com'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message"><h4> Your Message *</h4></label>
        <textarea
          id="message"
          name="message"
          placeholder='Tell us briefly about your needs'
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Send Message</button>
    </form>
    </div>
  );
};

export default ContactForm;