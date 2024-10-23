import React, { useState } from "react";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("message", message);
    data.append("access_key", "0d0817fe-fb5a-462a-922d-049db623bdd0");

    const json = JSON.stringify(Object.fromEntries(data));

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);
    if (res.success) {
      alert(res.message);
      setFormData({ name: '', email: '', message: '' }); // Clear form after submission
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center gap-20 mx-4 md:mx-20 lg:mx-40 my-20">
      <div className="relative">
        <h1 className="text-5xl font-semibold px-8">Get in touch</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-24">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-transparent bg-clip-text">
            Let's talk
          </h1>
          <p className="max-w-lg text-gray-300 text-lg leading-relaxed">
            I’m always excited to work on new projects, whether it’s building a
            dynamic web app or exploring new tech innovations. If you’re looking
            for a passionate developer to collaborate with, or if you just want
            to talk about coding or gaming, feel free to reach out!
          </p>
          <div className="flex flex-col gap-8 text-gray-300 text-xl">
            <div className="flex items-center gap-4">
              <img src={mail_icon} alt="Email" className="w-6 h-6" />
              <p>narutobibek000@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={call_icon} alt="Call" className="w-6 h-6" />
              <p>9810121270</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={location_icon} alt="Location" className="w-6 h-6" />
              <p>Sunakothi, Lalitpur</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <label className="text-gray-300 text-lg font-medium" htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onChange}
            placeholder="Enter your name"
            className="w-full md:w-[700px] h-16 px-4 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
            required
          />
          <label className="text-gray-300 text-lg font-medium" htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Enter your email"
            className="w-full md:w-[700px] h-16 px-4 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
            required
          />
          <label className="text-gray-300 text-lg font-medium" htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            value={formData.message}
            onChange={onChange}
            placeholder="Enter your message"
            className="w-full md:w-[650px] p-6 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            disabled={loading} // Disable the button while loading
            className={`w-48 py-3 bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Submitting...' : 'Submit now'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
