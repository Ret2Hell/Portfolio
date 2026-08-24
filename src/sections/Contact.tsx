import type { ChangeEvent, FormEvent } from "react";
import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState<"success" | "danger">("success");
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    // Web3Forms' client script renders the hCaptcha widget into every
    // element with [data-captcha="true"]. No hCaptcha account needed.
    if (!document.querySelector('script[src*="web3forms.com/client"]')) {
      const script = document.createElement("script");
      script.src = "https://web3forms.com/client/script.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type: "success" | "danger", message: string) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Capture the form element before awaiting — React nulls
    // event.currentTarget after the handler yields.
    const form = e.currentTarget;

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
      });
      const data = await response.json();
      if (!data.success) throw new Error(data.message || "Submission failed");

      setIsLoading(false);
      form.reset();
      showAlertMessage("success", "Your message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      const message =
        error instanceof Error && error.message !== "Failed to fetch"
          ? error.message
          : "Something went wrong. Please try again later.";
      showAlertMessage("danger", message);
    }
  };
  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex w-full max-w-2xl flex-col items-center justify-center p-6 sm:p-10 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Have an engineering challenge, an AI product idea, or an opportunity you'd like to
            discuss? Send me a message.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          {/* --- Web3Forms config (hidden fields) --- */}
          <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
          />
          <input type="hidden" name="subject" value="New message from your portfolio website" />
          <input type="hidden" name="from_name" value="Portfolio Website" />
          {/* Honeypot spam trap: hidden from humans, bots fill it and get silently dropped */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* hCaptcha widget rendered by web3forms.com/client/script.js */}
          <div className="mb-5 flex justify-center">
            <div className="h-captcha" data-captcha="true" data-theme="dark" />
          </div>

          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
