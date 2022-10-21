import React, { useEffect,useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Transition } from '@headlessui/react';
export default function Contact(prop) {
  const [isShowing, setIsShowing] = useState(false)
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(true);
  },[]);
  useEffect(() => {
    // Update the document title using the browser API
    setIsShowing(prop.isShowing);
  },[prop.isShowing]);

  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [message, setMessage] = useState("");

  const handleEmail = (e) => {
    console.log("handle change?");
    setEmail(e.target.value);
  };
  const handleName = (e) => {
    console.log("handle change?");
    setName(e.target.value);
  };
  const handleMsg = (e) => {
    console.log("handle change?");
    setMessage(e.target.value);
  };
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(e.target, "submit!", form.current);
    let result = await emailjs.sendForm(
      "service_3l5kfbj",
      "template_7630s4a",
      form.current,
      "b3A_HBPJ0CCCA_D0d"
    );
    // .then(
    //   (result) => {
    //     console.log(result.text);
    //     setContact({
    //       email:"",
    //       name:"",
    //       message:""
    //     });
    //   },
    //   (error) =>{
    //       console.log(error.text);
    //   }
    // );
  };

  return (
    <div className="justify-center items-center content-center p-32">
      <Transition
          show={isShowing}
          enter="transition-opacity duration-750"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-750"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >

    <form ref={form} onSubmit={sendEmail} className="emailForm flex flex-col">
      <label htmlFor="nameInput" className="labelContact ">
        Name:
      </label>
      <input
        className = "bg-slate-50"
        value={name}
        type="text"
        name="from_name"
        id="nameInput"
        placeholder="Your name here!"
        onChange={handleName}
      />
      <label htmlFor="reply_to" className="labelContact">
        Email:
      </label>
      <input
      className = "bg-slate-50"
        value={email}
        type="email"
        name="reply_to"
        id="reply_to"
        placeholder="Your email here!"
        onChange={handleEmail}
      />
      <label htmlFor="messageInput" className="labelContact">
        Message:
      </label>
      <textarea
      className = "bg-slate-50 h-40"
        value={message}
        name="message"
        id="messageInput"
        placeholder="What would you like to tell me?"
        onChange={handleMsg}
      />
      <input className="contactBtn" type="submit" value="Send" />
    </form>
    </Transition>
    </div>
  );
}
