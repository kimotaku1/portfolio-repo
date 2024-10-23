import React from "react";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0d0817fe-fb5a-462a-922d-049db623bdd0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center gap-10 lg:gap-20 mx-40 my-20"
    >
      <div className="relative">
        <h1 className="text-5xl font-semibold px-6 w-80">Get in touch</h1>
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
          <label className="text-gray-300 text-lg font-medium">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="w-full md:w-[700px] h-16 px-4 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
          />
          <label className="text-gray-300 text-lg font-medium">
            Your Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="w-full md:w-[700px] h-16 px-4 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
          />
          <label className="text-gray-300 text-lg font-medium">
            Write your message here
          </label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            className="w-11/12 md:w-[650px] p-6 rounded-md bg-[#32323c] text-gray-400 text-lg focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-48 py-3 bg-gradient-to-r from-[#DF8908] to-[#B415FF] text-white text-lg font-medium rounded-full cursor-pointer transform hover:scale-105 transition-transform"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
