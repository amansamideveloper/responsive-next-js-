import React from 'react'
import Image from 'next/image'
import styles from '../styles/intro.module.css'
import Circle from './Circle'
const Intro = () => {
    return (
        <div className={styles.container}>

            <div className={styles.card}>
                <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
                <Circle backgroundColor="#01c686" right="-40vh" />
                <h1 className={styles.title}>
                    <span className={styles.brand}>AVOCADO</span> DIGITAL PRODUCT AGENCY</h1>
                <p className={styles.desc}>
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </p>
                <button className={styles.button}>Descover</button>
            </div>
            <div className={styles.card}>
                <Image src="/img/Avocado.png"
                    width="100%"
                    height="100%"
                    layout='fill'
                    objectFit='contain'
                />
            </div>
        </div>
    )
}

export default Intro