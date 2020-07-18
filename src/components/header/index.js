import React from 'react'
import Link from '../link'
import getNavigation from '../../utils/navigation'

import styles from './index.module.css'
import logo from '../images/white-origami-bird.png'

const Header = () => {
    const links = getNavigation()
    return (
        <header className={styles.navigation}>
            <img src={logo} className={styles.logo} />
            {
                links.map(navEl => {
                    return (
                        <Link href={navEl.link} title={navEl.title} type="header" />
                    )
                })
            }
        </header>
    )
}

export default Header