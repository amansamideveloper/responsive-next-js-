import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <div className={styles.container}>
            <Link href="/">AV0CAD0</Link>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Link href="/products/design">Desing</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/development">Developent</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/products/production">Production</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href="/contact">Contact</Link>
                </li>

            </ul>
            <div className={styles.humberger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul onClick={() => setOpen(false)} className={styles.menu} style={{ right: open ? "0px" : "-50vw" }}>
                <li className={styles.menuItem}>
                    <Link href="/products/design">Desing</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/development">Development</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/products/product">Production</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar