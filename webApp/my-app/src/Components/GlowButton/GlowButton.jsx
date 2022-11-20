import React from 'react'
import styles from "./GlowButton.module.scss"

export default function GlowButton() {
  return (
    <section className={styles.GlowButton}>
        <span className={styles.glowing_txt}>
            j
            <span className={styles.faulty_letter}>C</span>
            olaco
            <br />
            <span className={styles.faulty_letter}>.d</span>
            e
            <span className={styles.faulty_letter}>v</span>
        </span>
    </section>
  )
}
