import React from 'react';

const Career = () => {
  return (
    <section className="contact-us">
      <h2>Contact Us</h2>
      <p>
        TechTrek is a leading innovator in the technology industry. We specialize in developing and
        selling cutting-edge gadgets and devices that make everyday life easier and more fun. Our
        passionate team of inventors and engineers constantly strives to create new products that
        leverage the latest technological advancements to improve the lives of our customers.
      </p>
      <p>Have any questions about TechTrek X? Reach out to us!</p>
      <form id="contact-form">
        <div className="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <h3>Other Ways to Contact Us</h3>
        <ul>
          <li>
            <a href="tel:+1234567890">Phone: +1 (234) 567-8900</a>
          </li>
          <li>
            <a href="mailto:support@techtrek.com">Email: support@techtrek.com</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Career;
