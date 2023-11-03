import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="mt-[100px]">
      <header>
        <h2 className="section-title">Contact</h2>
        <p className="text-slate-400 text-center">
          You can reach me in different ways
        </p>
      </header>

			<ContactForm />
    </section>
  );
};

export default Contact;
