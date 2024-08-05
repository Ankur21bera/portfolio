import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ab7c34f7-42d6-4790-acbc-9a64988978ca");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
     alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get In Touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
            <h1>Lets Talk</h1>
            <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
            <div className='contact-details'>
                <div className='contact-detail'>
                  <img src={mail_icon} alt="" /> <p>ankurbera07@gmail.com</p>
                </div>
                <div className='contact-detail'>
                    <img src={location_icon} alt="" /> <p>180020001456</p>
                </div>
                <div className='contact-detail'>
                    <img src={call_icon} alt="" /> <p>Noida, India</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label>Your Name</label>
            <input type="text" placeholder='Enter Your Name' name='name' required />
            <label>Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' required/>
            <label>Write Your Message Here</label>
            <textarea name="message" rows="8" placeholder='Enter Your Message Here' id=""></textarea>
            <button type='submit' className='contact-submit'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
