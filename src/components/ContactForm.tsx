import React from "react";

const ContactForm = () => {
  return (
    <form onSubmit={() => {}} className="flex flex-col p-4 mt-10">
      <h2 className="text-center text-lg text-slate-400 mb-2">EMAIL</h2>
      {/* INPUTS */}
			<div className="flex flex-col gap-4">
        <div>
          {/* <label htmlFor="email">Email</label> */}
          <input
            id="email"
            name="email"
            className="input"
            placeholder="Email"
          />
        </div>
        <div>
          {/* <label htmlFor="message">Message</label> */}
          <textarea
            id="message"
            name="message"
            className="input flex"
            placeholder="Message"
          />
        </div>
      </div>

			{/* SOCIAL MEDIA LINKS */}
      <h2 className="text-center text-lg text-slate-400 mt-14">SOCIAL MEDIA</h2>
    </form>
  );
};

export default ContactForm;
