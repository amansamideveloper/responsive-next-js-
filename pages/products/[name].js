import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { data } from '../../data'
import styles from '../../styles/product.module.css'
const Product = ({ product }) => {
    return (
        <div className={styles.container}>
            <div className={styles.cardL}>
                {product.images.map((img) => (
                    <div key={img.id} className={styles.imgContainer} >
                        <Image src={img.url} objectFit='cover' layout='fill' alt='' />
                    </div>
                ))}
            </div>

            <div className={styles.cardS}>
                <div className={styles.title}>{product.title}</div>
                <p className={styles.desc}>{product.longDesc}</p>
                <button className={styles.button}>
                    <Link href='/contact'>Contact</Link>
                </button>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const products = data
    const paths = products.map(item => {
        return {
            params: { name: item.name },
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (ctxt) => {
    const name = ctxt.params.name

    const product = data.filter((item) => item.name === name)[0]

    return {
        props: {
            product
        }
    }
}
export default Product