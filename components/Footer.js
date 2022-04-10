import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/footer.module.css'
function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                <h1 className={styles.title}>AVOCADO CREATIVE.</h1>
                <h1 className={styles.linkTitle}>
                    <a passHref href='/contact'>

                        <span className={styles.linkText}>Work with us</span>
                        <Image src='/img/link.png' width="40px" height="40px" alt='' />
                    </a>
                </h1>
            </div>
            <div className={styles.cards}>
                <div className={styles.cardItem}>
                    12 ADAM STREET WRT <br /> ADDIS
                </div>
                <div className={styles.cardItem}>
                    CONTACT@AMAN.DEV <br /> ADDIS
                </div>
            </div>
            <div className={styles.cardS}>
                <div className={styles.cardItem}>
                    12 ADAM STREET WRT <br /> ADDIS
                </div>
                <div className={styles.cardItem}>
                    CONTACT@AMAN.DEV <br /> ADDIS
                </div>
            </div>
        </div>
    )
}

export default Footer