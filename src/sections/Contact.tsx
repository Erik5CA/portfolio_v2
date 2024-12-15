import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [name]: value });
  };

  const notifySuccess = () => {
    toast.success("Message sent successfully!");
  };
  const notifyError = () => {
    toast.error("Something went wrong! Try again.");
  };

  // service_uic5ckl

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          to_email: "erik.castillo.anzures@gmail.com",
          to_name: "Erik Castillo",
          message: form.message,
        },
        PUBLIC_KEY
      );
      notifySuccess();
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.log(error);
      notifyError();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      {/* <ToastContainer position="bottom-right" autoClose={5000} theme="dark" /> */}
      <div className="relative flex items-center justify-center flex-col py-8">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 h-full w-full"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-white-600 text-lg mt-3">Send me a message.</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="field-input"
                placeholder="Your name"
                required
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="field-input"
                placeholder="Your email"
                required
              />
            </label>
            <label htmlFor="" className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="field-input"
                placeholder="Your message"
                required
                rows={5}
              />
            </label>

            <button type="submit" className="field-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
              {!isLoading && (
                <img
                  src="/assets/arrow-up.png"
                  alt="arrow"
                  className="field-btn_arrow"
                />
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
