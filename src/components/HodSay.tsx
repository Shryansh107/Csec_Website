"use client"
import React from "react"
import { Poppins, Sansita } from "next/font/google"
import { motion } from "framer-motion"
import "../../src/components/css/about.css"

const poppins = Poppins({
    subsets: ["latin-ext"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins",
})

const sansita = Sansita({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700"],
})

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

const HodSay = () => {
    return (
        <section className={`about-section ${poppins.variable} p-4 md:p-8`}>
            <motion.div
                className="about-container"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <div className="bg-[#f4f0eb] flex flex-col md:flex-row justify-center items-center p-6 sm:p-8 md:p-12 lg:p-16 mt-8 md:mt-12 lg:mt-0 gap-10">
                    <motion.div
                        className="flex justify-center items-center md:w-1/3 lg:w-1/4"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <img
                            src="https://portfolios.nith.ac.in/uploads/member_details/62.jpg"
                            className="border rounded-xl w-full md:w-[12rem] md:h-[12rem]"
                            alt="HOD"
                        />
                    </motion.div>
                    <motion.div
                        className="flex flex-col justify-center items-center md:w-2/3"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <div className="max-w-screen-lg w-full">
                            <h2 className="text-2xl md:text-3xl font-bold tracking-wide pb-4 sm:pb-6 lg:pb-8 text-center md:text-left">
                                <span className="pl-4">
                                    Message from HOD
                                </span>
                            </h2>
                            <div className="text-base md:text-lg lg:text-xl tracking-wider text-justify md:text-left">
                                <p className="font-bold md:text-2xl text-xl">Greetings to all</p>
                                <br/>
                                
                                <p className="mt-10 text-lg">
                                    It is with great pleasure that I write this in the capacity of the Head of the Department (HOD) of the Computer Science and Engineering (CSE) Department at NIT Hamirpur. I thank all the faculty members, students, and staff of our esteemed department for their continuous efforts every day in maintaining the excellence and reputation of our department.
                                </p>
                                <br/>
                                <span className="text-end font-bold text-lg mt-6 block md:inline-block">- Dr. Siddhartha Chauhan</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default HodSay