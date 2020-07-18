import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Footer = (type) => {
    const links = getNavigation()
    return (
        <footer className={styles.container}>
            <div>
                {
                    links.map(navEl => {
                        return (
                            <Link href={navEl.link} title={navEl.title} type="footer" />
                        )
                    })
                }
                <p className={styles.paragraph}>Software University</p>
            </div>
        </footer>
    )
}

export default Footer