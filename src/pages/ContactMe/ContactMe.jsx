import { EmailJSResponseStatus } from 'emailjs-com';
import { useState } from 'react';
import { send } from 'emailjs-com'

function ContactMe() {
  return (
    <div>
      <div>
        <a href="https://www.linkedin.com/in/dunnevan/" target="blank">LinkedIn</a>
      </div>

      <div>
        <a href="https://github.com/dunndealpro" target="blank">Github</a>
      </div>
      <div>
        <a href="public/assets/EvanDunnResume01_21_2023.pdf" download>Resume</a>
      </div>

      <div>
      <a href="mailto:dunn.evan.f@gmail.com?subject='I would love to connect!'&body='Great website and portfolio, let's chat!'" target="blank">Click to Send an Email</a>
      </div>

    </div>

  );
}

export default ContactMe;