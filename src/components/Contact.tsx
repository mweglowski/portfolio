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

      {/* EMAIL */}
			<ContactForm />

      {/* SOCIAL MEDIA LINKS */}
      <h2 className="text-center text-lg text-slate-400 mt-14">SOCIAL MEDIA</h2>
    </section>
  );
};

export default Contact;
