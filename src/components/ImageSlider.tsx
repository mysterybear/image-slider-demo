import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import wrap from "../utils/wrap"
import ChevronLeft from "./ChevronLeft"
import css from "./ImageSlider.module.css"
import Img from "gatsby-image"
import { ImageSharp } from "../typings/graphql-types"

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

interface Props {
  images: ImageSharp[]
}

export const ImageSlider = ({ images }: Props) => {
  const [[page, direction], setPage] = useState([0, 0])

  const index = wrap(0, images.length, page)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className={css.root}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          className={css.current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1)
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1)
            }
          }}
        >
          <Img fluid={images[index].fluid} />
        </motion.div>
      </AnimatePresence>
      <div className={css.next} onClick={() => paginate(1)}>
        <ChevronLeft />
      </div>
      <div className={css.prev} onClick={() => paginate(-1)}>
        <ChevronLeft />
      </div>
    </div>
  )
}
