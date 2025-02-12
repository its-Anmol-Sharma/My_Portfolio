import React from 'react'
import styles from "../Contact/contect.module.css"  
import MediaLinks from './MediaLinks'

export const Contact = () => {
  return (
   <footer id="Contact" className={styles.Container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to reach out</p>
    </div>
    <MediaLinks/>
   </footer>
  )
}
