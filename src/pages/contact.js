import React from "react";
import H2 from '../components/h2';

export default function Contact() {
  return <section className="body" id="contact">
      <H2 title='Contact' />
      <p style={{textAlign: 'left'}}>For booking or any other inquiries, please contact me at &nbsp;
        <a href= "mailto:xing.limi@icloud.com">xing.limi@icloud.com</a>.
      </p>
    </section>;
}
