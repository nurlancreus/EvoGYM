import { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  useForm,
  FieldError,
  FieldErrorsImpl,
  Merge,
  FieldValues,
} from "react-hook-form";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Heading from "@/shared/Heading";

import { SelectedPage } from "@/model/types";

type ContactProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

const inputStyles =
  "w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white placeholder:uppercase";

export default function Contact({ setSelectedPage }: ContactProps) {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section
      id="contactus"
      className="mx-auto w-5/6 pb-16 pt-12 md:pb-44 md:pt-28"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading>
            <span className="text-primary-500">Join now</span> to get in shape
          </Heading>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>
        {/* Form And Image */}
        <div className="mt-10 flex flex-col justify-between gap-16 md:flex-row md:gap-8">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              action="https://formsubmit.co/a8cfd02f9688e5ae91a65914f9d1a676"
              method="POST"
              onSubmit={onSubmit}
              target="_blank"
            >
              {/* Name */}
              <InputWrapper error={errors?.name?.message}>
                <input
                  type="text"
                  id="name"
                  className={inputStyles}
                  placeholder="name"
                  {...register("name", {
                    required: "This field is required",
                    maxLength: {
                      value: 100,
                      message: "Max length is 100 char.",
                    },
                  })}
                />
              </InputWrapper>

              {/* Email */}
              <InputWrapper error={errors?.email?.message}>
                <input
                  type="email"
                  id="email"
                  className={inputStyles}
                  placeholder="email"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address.",
                    },
                  })}
                />
              </InputWrapper>

              {/* Message */}
              <InputWrapper error={errors?.message?.message}>
                <textarea
                  id="message"
                  className={inputStyles}
                  rows={4}
                  cols={50}
                  placeholder="message"
                  {...register("message", {
                    required: "This field is required.",
                    maxLength: {
                      value: 2000,
                      message: "Max length is 2000 char.",
                    },
                  })}
                />
              </InputWrapper>

              {/* Submit */}
              <button
                type="submit"
                className="mt-5 w-full rounded-lg bg-secondary-500 px-20 py-3 uppercase transition duration-500 hover:text-white sm:w-auto"
              >
                Submit
              </button>
            </form>
          </motion.div>

          <motion.div
            className="basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

type InputWrapperProps<T extends FieldValues> = {
  children: ReactNode;
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<T>>
    | undefined;
};

function InputWrapper<T extends FieldValues>({
  children,
  error,
}: InputWrapperProps<T>) {
  return (
    <div className="mb-5">
      {children}
      {error ? (
        <p className="mt-1 text-primary-500">{error as string}</p>
      ) : null}
    </div>
  );
}
