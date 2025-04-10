"use client";

import SectionHeader from "../../components/SectionHeader";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Bug } from "@phosphor-icons/react";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
        honeypot: "", // Honeypot field
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errors, setErrors] = useState({
        email: "",
        subject: "",
        message: "",
    });
    const [submissionCount, setSubmissionCount] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;

        // Validate fields
        if (id === "email") {
            setErrors((prev) => ({
                ...prev,
                email: validateEmail(value) ? "" : "Please enter a valid email address.",
            }));
        } else if (id === "subject") {
            setErrors((prev) => ({
                ...prev,
                subject: value.length > 100 ? "Subject cannot exceed 100 characters." : "",
            }));
        } else if (id === "message") {
            setErrors((prev) => ({
                ...prev,
                message: value.length > 500 ? "Message cannot exceed 500 characters." : "",
            }));
        }

        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const updateSubmissionCount = () => {
        setSubmissionCount(submissionCount + 1);
        if (submissionCount >= 4) {
            setShowPopup(true);
            setSubmissionCount(0);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check honeypot field
        if (formData.honeypot) {
            console.warn("Honeypot field filled. Possible bot detected.");
            return;
        }

        // Final validation before submission
        if (!validateEmail(formData.email)) {
            setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
            return;
        }
        if (formData.subject.length > 100) {
            setErrors((prev) => ({ ...prev, subject: "Subject cannot exceed 100 characters." }));
            return;
        }
        if (formData.message.length > 500) {
            setErrors((prev) => ({ ...prev, message: "Message cannot exceed 500 characters." }));
            return;
        }

        setIsSubmitting(true);

        try {
            await emailjs.send(
                "service_g8kwumh", // Replace with your EmailJS service ID
                "template_i6om9qm", // Replace with your EmailJS template ID
                formData,
                "rY6qPSQHQqc5_dZnT" // Replace with your EmailJS user ID
            );
            setSuccessMessage("Your message has been sent successfully!");
            setFormData({ email: "", subject: "", message: "", honeypot: "" });
            setErrors({ email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Failed to send message:", error);
            setSuccessMessage("Failed to send your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex">
            <div className="mx-auto w-full text-center">
                <SectionHeader title="Contact Me" />
                <div className="mx-auto w-full max-w-screen-md pb-16">
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-400 sm:text-3xl md:text-3xl dark:text-gray-300">
                        Have a question, feedback, or just want to say hi? Drop me a message below!
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        {/* Honeypot Field */}
                        <input
                            type="text"
                            id="honeypot"
                            value={formData.honeypot}
                            onChange={handleChange}
                            className="hidden"
                            aria-hidden="true"
                        />
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow-sm bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@example.com"
                                required
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="block p-3 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let me know how I can help you"
                                required
                            />
                            {errors.subject && (
                                <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                            )}
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-300"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                className="block p-2.5 w-full text-xl text-gray-900 bg-gray-100 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a message..."
                                required
                            ></textarea>
                            {errors.message && (
                                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            onClick={() => updateSubmissionCount()}
                            disabled={isSubmitting}
                            className={`py-3 px-5 text-xl font-medium text-center text-white rounded-lg ${
                                isSubmitting
                                    ? "bg-gray-500 cursor-not-allowed"
                                    : "bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            }`}
                        >
                            {isSubmitting ? "Sending..." : "Send message"}
                        </button>
                    </form>
                    {successMessage && (
                        <p className="mt-4 text-center text-sm font-medium text-green-500 dark:text-green-400">
                            {successMessage}
                        </p>
                    )}
                </div>
            </div>

            {/* Popup Modal */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                        <Bug size={48} className="text-gray-800 dark:text-gray-200 mx-auto mb-4" />
                        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                            Oh, another bug. Neat!
                        </p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="mt-4 px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
