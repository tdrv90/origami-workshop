import React from 'react'
import Link from '../link'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Aside = () => {
    const links = getNavigation()
    return (
        <aside className={styles.container}>
            {
                links.map(navEl => {
                    return (
                        <Link href={navEl.link} title={navEl.title} type="aside" />
                    )
                })
            }
        </aside>
    )
}

export default Aside