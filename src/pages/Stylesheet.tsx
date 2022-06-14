import '@styles/myStyles.css'
import styles from '@styles/test.module.css'
import React from 'react'
export const Stylesheet = ({ className }) => {
  return (
    <>
      <h1 className={`${className} font-size-70`}>Stylesheet</h1>
      <h2 className={styles.success}>Success Message</h2>
    </>
  )
}

