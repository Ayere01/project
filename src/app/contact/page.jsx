import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

export default function Contact() {
  return (
    <div>
    <h2>Contact us</h2>
      <div>
      Get in touch, we respond to all emails within 48 hours.
      </div>
      <div>
        <MdOutlineMail/>
        <a href="mailto:ayeremonye@live.com">ayeremonye@live.com</a>
      </div>
      <div>
        <MdOutlinePhone/>
        <a href="tel:+2349095628690">+2349095628690</a>
      </div>
      <div>
        <GrLocation/>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8100221543946!2d3.3750539752189668!3d6.545656922904998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d669383b09b%3A0xd682b6420628688b!2sAnfield%20Apartments!5e0!3m2!1sen!2sus!4v1708618206959!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">our office is at</iframe>
      </div>

    </div>
  )
}
