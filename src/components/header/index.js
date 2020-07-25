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
            loggedIn,
            user
        } = this.context

        const links = getNavigation(loggedIn, user)

        return (
            <header className={styles.navigation}>
                <img src={logo} className={styles.logo} />
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