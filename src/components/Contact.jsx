import React from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2';
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
//template_9f0fg3f
//service_v2wnm3d
//qQPC-QDhQGySyyjKe

const Contact = () => {
  const formRef = React.useRef();
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = React.useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      Swal.fire({
        icon: "error",
        title: "Incomplete Form",
        text: "Please fill in all the required fields.",
        showConfirmButton: false,
        timer: 3000,
      });
      return; // Stop the submission
    }
    setLoading(true);
    emailjs.send("service_v2wnm3d", "template_9f0fg3f", {
      from_name: form.name,
      to_name: "Aradhya",
      from_email: form.email,
      message: form.message,
    },
    'qQPC-QDhQGySyyjKe'
    ).then(()=>{
      setLoading(false);
      Swal.fire({
        icon: 'success',
        title: 'Thank you',
        text: 'I will get back to you as soon as possible.',
        showConfirmButton: false,
        timer: 3000,
      });
      setForm({
        name: "",
        email: "",
        message: "",
      },(err)=>{
        setLoading(false);
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          text: 'Please try again.',
          showConfirmButton: false,
          timer: 3000,
        });
      });
    });
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 0.1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch </p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="What's your email?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              placeholder="What's do you want to say?"
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 0.1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
