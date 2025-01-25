"use client"

import  React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Poppins, Inria_Serif } from "next/font/google"
import image_loc from "../utils/image_loc.json"
import "./css/gallery.css"

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
  variable: "--font-inria-serif",
})

const Gallery = () => {
  const [hoverIndex, setHoverIndex] = useState(null)
  const [mousePointer, setMousePointer] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e, index) => {
    if (hoverIndex === index) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      setMousePointer({ x, y })
    }
  }

  return (
    <section className={`gallery-section ${poppins.variable} ${inriaSerif.variable}`}>
      <div className="gallery-container">
        <motion.div
          className="teams-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-7xl font-extrabold mb-4 text-gray-400 ${poppins.className}`}>GALLERY</h2>
          <p className={`text-gray-500 max-w-2xl text-3xl mx-auto font-semibold ${inriaSerif.className}`}>
          Capturing moments from our events and activities
          </p>
        </motion.div>

        <div className="masonry-grid">
          {image_loc.map((image, index) => (
            <motion.div
              key={index}
              className="masonry-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onMouseMove={(e) => handleMouseMove(e, index)}
            >
              <div className="image-container">
                <Image
                  src={image.link || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  width={500}
                  height={600}
                  className="gallery-image"
                  style={{
                    transformOrigin: `${mousePointer.x}% ${mousePointer.y}%`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

