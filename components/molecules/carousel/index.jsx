import React, { useRef } from "react"
import cx from "classnames"
import styles from './style.module.scss'
import ArrowLeft from "@/public/left.svg"
import ArrowRight from "@/public/right.svg"
import Image from "next/image"
import PropTypes from 'prop-types'


const Carousel = ({ children, className, title }) => {
  const ref = useRef(null)
  const scroll = scrollOffset => {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <div>
      <div className={styles.header_container}>
        <h3 className={styles.header_container__title}>{title}</h3>
      </div>
      <div className={styles.body_container}>
        <div
          className={cx(
            styles.carousel,
            children.length < 3 ? styles.center : "",
            className
          )}
          ref={ref}
        >
          {children}
        </div>
        {children.length > 1 ? (
          <div className={styles.navigation__left} onClick={() => scroll(-200)}>
            <Image src={ArrowLeft} width={40} height={40} />
          </div>
        ) : null}

        {children.length > 1 ? (
          <div className={styles.navigation__right} onClick={() => scroll(200)}>
            <Image src={ArrowRight} width={40} height={40} />
          </div>
        ) : null}
      </div>
    </div>
  )
}

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className : PropTypes.string,
  title: PropTypes.string,
}

export default Carousel

