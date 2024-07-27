"use client";

import { TContactSchema, contactSchema } from "@/types/contact.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const variants = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: "100%",
    opacity: 1,
  },
};

function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting, errors, isSubmitSuccessful, isDirty },
    setError,
  } = useForm<TContactSchema>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: TContactSchema) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "applicaiton/json",
      },
    });

    if (res.ok) {
      reset();
    } else {
      setError("root", {
        message: "Your message could not submitted.",
      });
    }
  };

  return (
    <div className="container max-w-screen-md">
      <motion.form
        // className="flex flex-col items-center"
        viewport={{ once: true, amount: 0.4 }}
        initial="initial"
        whileInView="animate"
        onSubmit={handleSubmit(onSubmit)}
        transition={{
          staggerChildren: 0.3,
        }}
      >
        <motion.input
          variants={variants}
          {...register("name")}
          type="text"
          placeholder="Name"
          className="card--glass"
        />
        {errors.name && (
          <div className="text-red-500 m-2">{`${errors.name.message}`}</div>
        )}
        <motion.input
          variants={variants}
          {...register("surname")}
          type="text"
          placeholder="Surname"
          className="card--glass"
        />
        {errors.surname && (
          <div className="text-red-500 m-2">{`${errors.surname.message}`}</div>
        )}
        <motion.input
          variants={variants}
          type="text"
          {...register("email")}
          placeholder="E-mail"
          className="card--glass"
        />
        {errors.email && (
          <div className="text-red-500 m-2">{`${errors.email.message}`}</div>
        )}
        <motion.input
          variants={variants}
          {...register("subject")}
          type="text"
          placeholder="Subject"
          className="card--glass"
        />
        {errors.subject && (
          <div className="text-red-500 m-2">{`${errors.subject.message}`}</div>
        )}
        <motion.textarea
          variants={variants}
          {...register("message")}
          rows={3}
          placeholder="Message"
          className="card--glass"
        />
        {errors.message && (
          <div className="text-red-500 m-2">{`${errors.message.message}`}</div>
        )}
        <motion.button
          variants={variants}
          disabled={isSubmitting}
          type="submit"
          className="card--glass h-10 rounded-xl mt-3 block active:opacity-90 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </motion.button>
        {errors.root && (
          <div className="text-red-500 my-2 text-center">{`${errors.root.message}`}</div>
        )}
        {isSubmitSuccessful && !isDirty && (
          <div className="text-green-500 my-2 text-center">
            Your message is sent.
          </div>
        )}
      </motion.form>
    </div>
  );
}

export default ContactForm;
