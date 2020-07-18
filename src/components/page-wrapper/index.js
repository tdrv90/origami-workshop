import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Aside from '../aside'

import styles from './index.module.css'

const PageWrapper = (props) => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <Aside />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default PageWrapper