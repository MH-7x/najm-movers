"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Phone, X, MailWarningIcon } from "lucide-react";
import { SendMail } from "@/lib/FormSubmission";

interface QuoteFormProps {
  title?: string;
  subtitle?: string;
  variant?: "default" | "dark" | "light";
}

export interface FormDataType {
  name: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  moveType: string;
  date?: string;
  size?: string;
  message?: string;
}

export default function QuoteForm({
  title = "Get a Free Moving Quote",
  subtitle = "Fill out the form below and we'll get back to you within 30 minutes.",
  variant = "default",
}: QuoteFormProps) {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    phone: "",
    movingFrom: "",
    movingTo: "",
    moveType: "",
    date: "",
    size: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setErrorMsg(null);
    e.preventDefault();
    console.log("Form Data ::", formData);
    try {
      const response = await SendMail({ data: { ...formData } });

      if (response.success) {
        setSubmitted(true);
      }
      if (response.error) {
        setErrorMsg(response.error);
      }
    } catch (error) {
      setErrorMsg(
        error instanceof Error ? error.message : "An error occurred.",
      );
    }
  };

  const isDark = variant === "dark";
  const labelClass = isDark
    ? "text-blue-100 font-medium text-sm"
    : "text-brand-secondary font-medium text-sm";
  const inputClass = `w-full px-4 py-3 rounded-lg border ${isDark ? "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-[#FF2828]" : "bg-white border-gray-200 text-brand-secondary placeholder:text-gray-400 focus:border-[#00357A]"} outline-none transition-colors text-sm`;

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 fixed bg-white/70 max-w-xl mx-auto shadow-2xl backdrop-blur-lg w-11/12 rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          onClick={(_) => {
            setSubmitted(false);
            window.location.reload();
          }}
          className="w-10 h-10 cursor-pointer bg-gray-200 rounded-full absolute top-3 right-3 flex items-center justify-center"
        >
          <X />
        </div>
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3
          className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-brand-secondary"}`}
        >
          Quote Request Received!
        </h3>
        <p className={isDark ? "text-blue-200" : "text-brand-text"}>
          We&apos;ll get back to you within 30 minutes. For immediate
          assistance, call{" "}
          <a
            href="tel:+971554495331"
            className="text-brand-primary font-semibold"
          >
            +971 55 4495331
          </a>
        </p>
      </div>
    );
  }

  return (
    <div>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2
              className={`text-2xl font-bold mb-2 ${isDark ? "text-white" : "text-brand-secondary"}`}
            >
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              className={`text-sm ${isDark ? "text-blue-200" : "text-brand-text"}`}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <div>
            <label className={labelClass}>Full Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+971-XX-XXXXXXX"
              value={formData.phone}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Moving From *</label>
            <input
              type="text"
              name="movingFrom"
              required
              placeholder="Area / Emirate"
              value={formData.movingFrom}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Moving To *</label>
            <input
              type="text"
              name="movingTo"
              required
              placeholder="Area / Emirate"
              value={formData.movingTo}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="moveType" className={labelClass}>
              Type of Move *
            </label>
            <select
              name="moveType"
              id="moveType"
              required
              value={formData.moveType}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select type</option>
              <option value="home">Home / Apartment</option>
              <option value="villa">Villa</option>
              <option value="office">Office / Commercial</option>
              <option value="furniture">Furniture Only</option>
              <option value="storage">Storage</option>
            </select>
          </div>
          <div>
            <label htmlFor="date" className={labelClass}>
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="size" className={labelClass}>
            Home/Office Size
          </label>
          <select
            name="size"
            id="size"
            value={formData.size}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select size</option>
            <option value="studio">Studio</option>
            <option value="1bhk">1 BHK</option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="4bhk+">4 BHK+</option>
            <option value="villa">Villa (3–5 Bedrooms)</option>
            <option value="office-small">Small Office (1–10 people)</option>
            <option value="office-medium">Medium Office (10–50 people)</option>
            <option value="office-large">Large Office (50+ people)</option>
            <option value="few-items">Few Items Only</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Additional Notes</label>
          <textarea
            name="message"
            rows={3}
            placeholder="Any special items, requests, or details about your move..."
            value={formData.message}
            onChange={handleChange}
            className={inputClass + " resize-none"}
          />
        </div>
        {errorMsg && (
          <div className="w-full p-4 rounded-2xl bg-red-200 text-red-700 flex items-center gap-2">
            <MailWarningIcon />
            <p className=" text-sm">{errorMsg}</p>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            size={"lg"}
            className="flex-1 bg-brand-primary hover:bg-[#cc1f1f] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <Send size={16} />
            Get My Free Quote
          </Button>
          <a href="tel:+971554495331" className="md:w-max w-full">
            <Button size={"lg"} variant={"secondary"} className="w-full">
              <Phone size={16} />
              Call Instead
            </Button>
          </a>
        </div>
      </form>
    </div>
  );
}
