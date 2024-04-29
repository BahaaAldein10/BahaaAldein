"use client";

import { testimonials } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Title from "./Title";

function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-x-hidden">
      <div className="container">
        {/* =======| TITLE |======= */}
        <Title
          mainTitle="Voices of Satisfaction"
          subTitle="Testimonials from Delighted Clients"
          smallTitle="Building Trust and Leaving Smiles"
        />

        {/* =======| CARD |======= */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotate: 90, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
        >
          <Swiper
            navigation={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="relative mt-10 lg:w-[70%] w-full glass-card rounded-2xl"
          >
            <div className="absolute top-10 right-10 flex justify-end">
              <Image
                src="/elements/quote.png"
                alt="quote"
                width={40}
                height={40}
              />
            </div>

            {testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="p-10 mb-2 text-center cursor-grab"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={1000}
                  height={1000}
                  className="m-auto w-[150px] rounded-full"
                />

                <h1 className="mt-4 text-5">{testimonial.name}</h1>

                <div className="flex-center gap-1 mt-1">
                  {[...Array(4)].map((_, index) => (
                    <Image
                      key={index}
                      src="/elements/star.png"
                      alt="star"
                      width={20}
                      height={20}
                    />
                  ))}
                  <Image
                    src="/elements/half_star.png"
                    alt="half_star"
                    width={20}
                    height={20}
                  />
                </div>

                <h2 className="mt-4 pg-16">{testimonial.testimonial}</h2>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* =======| GRADIENT |======= */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="gradient02"
      />
    </section>
  );
}

export default Testimonials;
