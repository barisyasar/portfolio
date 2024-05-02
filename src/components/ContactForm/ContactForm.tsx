"use client";
import { TContactSchema, contactSchema } from "@/types/contact.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name")}
          type="text"
          placeholder="Name"
          className="card--glass"
        />
        {errors.name && (
          <div className="text-red-500 m-2">{`${errors.name.message}`}</div>
        )}
        <input
          {...register("surname")}
          type="text"
          placeholder="Surname"
          className="card--glass"
        />
        {errors.surname && (
          <div className="text-red-500 m-2">{`${errors.surname.message}`}</div>
        )}
        <input
          type="text"
          {...register("email")}
          placeholder="E-mail"
          className="card--glass"
        />
        {errors.email && (
          <div className="text-red-500 m-2">{`${errors.email.message}`}</div>
        )}
        <input
          {...register("subject")}
          type="text"
          placeholder="Subject"
          className="card--glass"
        />
        {errors.subject && (
          <div className="text-red-500 m-2">{`${errors.subject.message}`}</div>
        )}
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Message"
          className="card--glass"
        />
        {errors.message && (
          <div className="text-red-500 m-2">{`${errors.message.message}`}</div>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="card--glass w-24 h-10 rounded-lg mt-2 mx-auto block active:opacity-90 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
        {errors.root && (
          <div className="text-red-500 my-2 text-center">{`${errors.root.message}`}</div>
        )}
        {isSubmitSuccessful && !isDirty && (
          <div className="text-green-500 my-2 text-center">
            Your message is sent.
          </div>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
