import React from 'react'
import PageLayout from '../../components/page-layout'
import styles from './index.module.css'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import Origamis from '../../components/origamis'

const ShareThoughtsPage = () => {
    return (
        <PageLayout>
            <Title title='Share your thoughts...' />
            <div className={styles.container}>
                <div>
                    <textarea className={styles.textarea} defaultValue='Publication...'></textarea>
                </div>
                <div>
                    <SubmitButton title="Submit" />
                </div>
                <Origamis length={3} />
            </div>
        </PageLayout>
    )
}

export default ShareThoughtsPage