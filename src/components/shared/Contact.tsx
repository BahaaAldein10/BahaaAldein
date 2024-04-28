"use client";

import { contacts } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import Title from "./Title";

async function Contact() {
  return (
    <section id="contact" className="mt-5">
      <div className="container">
        {/* =======| TITLE |======= */}
        <Title
          mainTitle="Let's Stay Connected"
          subTitle="Reach Out to a MERN Stack Wizard"
          smallTitle="Connect with Me and Let's Create Something Amazing!"
        />

        {/* =======| CONTACTS |======= */}
        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center gap-4 py-4">
                <div className="p-2 bg-primary rounded-full">
                  <Image
                    src={contact.image}
                    alt={contact.title}
                    width={1000}
                    height={1000}
                    className="sm:w-8 w-6"
                  />
                </div>

                <div>
                  <h1 className="pg-24">{contact.title}</h1>

                  <Link href={contact.url} target="_blank" className="pg-16">
                    {contact.description}
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
