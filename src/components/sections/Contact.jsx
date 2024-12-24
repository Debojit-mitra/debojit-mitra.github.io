import { motion } from "framer-motion";
import { Mail, Instagram, MapPin, Send } from "lucide-react";
import { useState, useEffect } from "react";

// Separate FormInput component with improved handling
const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
  value,
  onChange,
  textarea,
}) => {
  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-light-nebula dark:bg-dark-nebula border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all";

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={`${inputClasses} min-h-[120px] resize-y`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "debojit16mitra@gmail.com",
      link: "mailto:debojit16mitra@gmail.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      content: "Connect with me on Instagram",
      target: "_blank",
      rel: "noopener noreferrer",
      link: "https://www.instagram.com/its_me_debojit",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Guwahati, Assam India",
      target: "_blank",
      rel: "noopener noreferrer",
      link: "https://maps.app.goo.gl/Dt8SauiNAdkXkXAg9",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.subject || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    const mailtoLink = `mailto:debojit16mitra@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  if (!isMounted) return null;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute -left-64 top-32 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -right-64 bottom-32 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Drop me a message and I'll get back to you as soon as possible.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="order-2 md:order-1">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.target}
                  rel={info.rel}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-light-nebula dark:bg-dark-nebula hover:bg-opacity-70 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                label="Name"
                name="name"
                placeholder="Your name"
                required
                value={formData.name}
                onChange={handleInputChange}
              />
              <FormInput
                label="Subject"
                name="subject"
                placeholder="What's this about?"
                required
                value={formData.subject}
                onChange={handleInputChange}
              />
              <FormInput
                label="Message"
                name="message"
                placeholder="Your message here..."
                textarea
                required
                value={formData.message}
                onChange={handleInputChange}
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-blue-500 text-white rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
                type="submit"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
