import React, { Component } from 'react'
import Link from '../link'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'

import styles from './index.module.css'

class Footer extends Component {

    static contextType = UserContext

    render() {

        const {
            loggedIn,
            user
        } = this.context

        const links = getNavigation(loggedIn, user)

        return (
            <footer className={styles.container}>
                <div>
                    {
                        links.map(navEl => {
                            return (
                                <Link
                                    key={navEl.title}
                                    href={navEl.link}
                                    title={navEl.title}
                                    type="footer" />
                            )
                        })
                    }
                    <p className={styles.paragraph}>Software University</p>
                </div>
            </footer>
        )
    }
}

export default Footer