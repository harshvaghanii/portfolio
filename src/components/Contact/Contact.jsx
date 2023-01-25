import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

// End of Imports

const Contact = () => {
    const form = useRef();
    const [sendMessage, setSendMessage] = useState(false);
    const [emailStatus, setEmailStatus] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setSendMessage(true);
        emailjs
            .sendForm(
                "service_e76jt6u",
                "template_l1b25r9",
                form.current,
                "uKQve3n_ZTWMLSrMg"
            )
            .then(
                (result) => {
                    setEmailStatus(true);
                    setTimeout(() => {
                        setEmailStatus(false);
                    }, 3000);
                    form.current.reset();
                    setSendMessage(false);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact-form">
            {/* Left Section Same as Work Section */}
            <div className="w-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact Me</span>
                    <div
                        className="blur s-blur1"
                        style={{
                            background: "#ABF1FF94",
                        }}
                    ></div>
                </div>
            </div>

            {/* Right Side */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input
                        required
                        disabled={sendMessage}
                        type="text"
                        name="user_name"
                        className="user"
                        placeholder="Name"
                    />
                    <input
                        required
                        disabled={sendMessage}
                        type="email"
                        name="user_email"
                        className="user"
                        placeholder="Email"
                    />
                    <textarea
                        required
                        disabled={sendMessage}
                        name="message"
                        className="user"
                        placeholder="Message"
                    />
                    <input
                        disabled={sendMessage}
                        type="submit"
                        value="Send"
                        className="button f-button"
                    />
                    <span
                        style={{
                            color: "var(--orange)",
                            fontSize: "2rem",
                        }}
                    >
                        {emailStatus && "Thanks for contacting me!"}
                    </span>
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
