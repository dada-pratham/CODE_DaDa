import React from 'react';
import { Form, Button } from 'react-bootstrap';
import contact from '../assets/contact.png';


function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center section-title mb-4">Let's Talk About Everything!</h2>
        <div className="row align-items-center">
          {/* Left Side - Text and Image */}
          <div className="col-md-6 mb-4">

            <img src= {contact} alt="Contact" className=" contact-image" />
          </div>

         {/* Right Side - Contact Form */}
         <div className="col-md-6">
           <Form className="contact-form">
             <Form.Group controlId="formName" className="mb-3">
               <Form.Control type="text" placeholder="Your name" />
             </Form.Group>
         
             <Form.Group controlId="formEmail" className="mb-3">
               <Form.Control type="email" placeholder="Email" />
             </Form.Group>
         
             <Form.Group controlId="formMobile" className="mb-3">
               <Form.Control type="tel" placeholder="Mobile" />
             </Form.Group>
         
             <Form.Group controlId="formDob" className="mb-3">
               <Form.Control type="text" placeholder="DOB" />
             </Form.Group>
         
             <Form.Group controlId="formCollege" className="mb-3">
               <Form.Control type="text" placeholder="College" />
             </Form.Group>
         
             <Form.Group controlId="formYear" className="mb-3">
              <Form.Select defaultValue="">
                <option value="" disabled>Select Current Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </Form.Select>
             </Form.Group>

         
             <Form.Group controlId="formDepartment" className="mb-3">
               <Form.Control type="text" placeholder="Department" />
             </Form.Group>
         
             <Form.Group controlId="formMessage" className="mb-3">
               <Form.Control as="textarea" rows={4} placeholder="Write your message" />
             </Form.Group>
         
             <Button variant="dark" type="submit">Send Message</Button>
           </Form>
         </div>
         
        </div>
      </div>
    </section>
  );
}

export default Contact;
