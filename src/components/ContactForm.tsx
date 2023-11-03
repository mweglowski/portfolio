import { useRef, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID!
    const template_id = "template_sb4p7te"
    const formElement = event.currentTarget
    const public_api_key = process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY

    emailjs
      .sendForm(
        service_id,
        template_id,
        formElement,
        public_api_key
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });

    formRef.current!.reset()
  }

  return (
    <form onSubmit={sendEmail} className="flex flex-col p-4 mt-10" ref={formRef}>
      <h2 className="text-center text-lg text-slate-400 mb-2">EMAIL</h2>
      <div className="flex flex-col gap-4">
        <input
          id="email"
          name="email"
          className="input"
          placeholder="Email"
        />
        <textarea
          id="message"
          name="message"
          className="input resize-none"
          placeholder="Message"
        />
      </div>
      <button type="submit" className="card button m-auto mt-4 py-2 px-7 text-lg">Send</button>
    </form >
  );
};

export default ContactForm;
