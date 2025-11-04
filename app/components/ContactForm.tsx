"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Send, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // ✅ Validation
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Please enter a valid phone number";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✉️ Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setShowError(false);

    try {
      await emailjs.send(
        "service_dplixx7",
        "template_vnmtxrm",
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "mKS4KO-qs-WXic_d1"
      );

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setShowSuccess(false), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setShowError(true);
      setTimeout(() => setShowError(false), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData])
      setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#FFFDF9] via-[#FFF6EA] to-[#FFEBD2]">
      <div
        ref={ref}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 0.6,
          }}
          className="text-center mb-12 will-change-transform transform-gpu"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#1E1E1E] mb-4">
            Let’s Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F9A826] to-[#F95738] mx-auto rounded-full mb-6" />
          <p className="text-lg text-[#555]">
            Send us a message and we’ll get back to you shortly.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            delay: 0.1,
            duration: 0.6,
          }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg border border-[#F4EDE4] p-8 md:p-12 will-change-transform transform-gpu"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            id="contact"
          >
            {["name", "email", "phone", "subject"].map((field) => (
              <div key={field}>
                <label
                  htmlFor={field}
                  className="block font-semibold mb-2 text-[#1E1E1E]"
                >
                  {field[0].toUpperCase() + field.slice(1)}{" "}
                  <span className="text-[#F95738]">*</span>
                </label>
                <input
                  id={field}
                  name={field}
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  value={(formData as any)[field]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-500 ease-out ${
                    errors[field as keyof FormData]
                      ? "border-[#F95738]"
                      : "border-gray-200 focus:border-[#F9A826] focus:shadow-[0_0_0_3px_rgba(249,168,38,0.15)]"
                  }`}
                />
                {errors[field as keyof FormData] && (
                  <p className="text-[#F95738] text-sm mt-1">
                    {errors[field as keyof FormData]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block font-semibold mb-2 text-[#1E1E1E]"
            >
              Message <span className="text-[#F95738]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none resize-none transition-all duration-500 ease-out ${
                errors.message
                  ? "border-[#F95738]"
                  : "border-gray-200 focus:border-[#F9A826] focus:shadow-[0_0_0_3px_rgba(249,168,38,0.15)]"
              }`}
            />
            {errors.message && (
              <p className="text-[#F95738] text-sm mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
            className="w-full bg-gradient-to-r from-[#F9A826] to-[#F95738] hover:opacity-90 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-md flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-50 will-change-transform transform-gpu"
          >
            <Send className="w-5 h-5" />
            <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
          </motion.button>
        </motion.form>

        {/* Toasts */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed bottom-8 right-8 bg-green-500 text-white p-5 rounded-2xl shadow-lg flex items-center space-x-3 z-50 will-change-transform transform-gpu"
            >
              <CheckCircle className="w-6 h-6" />
              <div>
                <h3 className="font-bold text-lg">Message sent!</h3>
                <p className="text-sm opacity-90">We'll be in touch soon.</p>
              </div>
            </motion.div>
          )}

          {showError && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="fixed bottom-8 right-8 bg-[#F95738] text-white p-5 rounded-2xl shadow-lg flex items-center space-x-3 z-50 will-change-transform transform-gpu"
            >
              <XCircle className="w-6 h-6" />
              <div>
                <h3 className="font-bold text-lg">Something went wrong</h3>
                <p className="text-sm opacity-90">Please try again later.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
