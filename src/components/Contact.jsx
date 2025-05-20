import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import contact from '../assets/contact.jpg';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState({ isVisible: false, message: '', type: 'success' });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    college: "",
    year: "",
    department: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_ob7i3pr',
        'template_kq5y7wd',
        formData,
        '-sDgiWCZtkR01d42T'
      )
      .then(
        (response) => {
          setPopup({
            isVisible: true,
            message: 'Your message has been sent successfully!',
            type: 'success'
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            dob: "",
            college: "",
            year: "",
            department: "",
            message: ""
          });
        },
        (err) => {
          setPopup({
            isVisible: true,
            message: 'Failed to send message. Please try again.',
            type: 'danger'
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center section-title mb-4">Let's Talk About Everything!</h2>
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6 mb-4">
            <img src={contact} alt="Contact" className="contact-image" />
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-md-6">
            {popup.isVisible && (
              <Alert variant={popup.type} onClose={() => setPopup({ isVisible: false })} dismissible>
                {popup.message}
              </Alert>
            )}

            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Mobile" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder="DOB" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text" name="college" value={formData.college} onChange={handleChange} placeholder="College" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Select name="year" value={formData.year} onChange={handleChange} required>
                  <option value="" disabled>Select Current Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control as="textarea" name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Write your message" required />
              </Form.Group>

              <Button variant="dark" type="submit" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : 'Send Message'}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
