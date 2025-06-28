import React, { useState, useEffect } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (result) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        setResult("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const getToastColor = () => {
    if (result.includes("Sending")) return "bg-gray-500"; // gris
    if (result.includes("successfully")) return "bg-green-600"; // vert
    if (result.includes("❌")) return "bg-red-600"; // rouge
    return "bg-gray-500";
  };

  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "Name is required";
    if (!formValues.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      newErrors.email = "Email is invalid";
    if (!formValues.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setResult("Sending...");

    const formData = new FormData();
    formData.append("access_key", "a68580f8-153f-4967-b32e-d31d9be27036");
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("message", formValues.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        setFormValues({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        console.log("Error", data);
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setResult("❌ Submission failed. Try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFocus = () => {
    if (Object.keys(errors).length > 0) {
      setErrors({});
    }
  };

  return (
    <section
      id="contact"
      className='relative w-full px-4 sm:px-6 md:px-[12%] py-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-gray-900 transition-colors'
    >
      {/* Toast Message */}
      {showToast && (
        <div
          className={`fixed bottom-6 right-6 text-white py-2 px-6 rounded-lg shadow-lg z-50 ${getToastColor()}`}
        >
          {result}
        </div>
      )}

      {/* Title + Underline */}
      {/* Title (sans underline) */}
      <div className="text-center w-max mx-auto mb-4">
        <h2 className="text-4xl sm:text-6xl lg:text-[56px] font-extrabold leading-tight font-ovo text-gray-900 dark:text-pink-400  mt-8">
          Get in touch
        </h2>
      </div>

      {/* Subtext */}
      <p className="text-center max-w-2xl mx-auto mt-2 mb-12 text-gray-700 dark:text-gray-300 font-ovo text-lg">
        Have a question or want to work together? Drop me a message — I'd love
        to hear from you!
      </p>

      {/* Form */}
      <form onSubmit={onSubmit} noValidate className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formValues.name}
              onChange={handleChange}
              onFocus={handleFocus}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-pink-400 outline-none transition-all"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formValues.email}
              onChange={handleChange}
              onFocus={handleFocus}
              className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-pink-400 outline-none transition-all"
              // Pour éviter le tooltip natif du navigateur sur email invalide, on peut enlever "required" et gérer en JS
              // required={false}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            value={formValues.message}
            onChange={handleChange}
            onFocus={handleFocus}
            className="w-full p-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-pink-400 outline-none transition-all"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="mt-8 py-3 px-8 flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-all mx-auto"
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="arrow"
            width={16}
            height={16}
            className="w-4"
          />
        </button>
      </form>
    </section>
  );
};

export default Contact;
