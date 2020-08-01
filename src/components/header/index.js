import React, { Component } from 'react'
import Link from '../link'
import getNavigation from '../../utils/navigation'
import logo from '../images/white-origami-bird.png'
import UserContext from '../../Context'

import styles from './index.module.css'

class Header extends Component {
    static contextType = UserContext

    render() {
        const {
            user
        } = this.context

        const links = getNavigation(user)

        return (
            <header className={styles.navigation}>
                <img alt="logo" src={logo} className={styles.logo} />
                {
                    links.map(navEl => {
                        return (
                            <Link
                                key={navEl.title}
                                href={navEl.link}
                                title={navEl.title}
                                type="header"
                            />
                        )
                    })
                }
            </header>
        )
    }
}

export default Header