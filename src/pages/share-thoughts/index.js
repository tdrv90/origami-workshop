import React from 'react'
import PageLayout from '../../components/page-layout'
import styles from './index.module.css'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'

const ShareThoughtsPage = () => {
    return (
        <PageLayout>
            <Title title='Share your thoughts...' />
            <textarea>Publication...</textarea>
            <SubmitButton title="Submit" />
        </PageLayout>
    )
}

export default ShareThoughtsPage