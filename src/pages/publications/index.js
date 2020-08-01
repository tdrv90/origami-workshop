import React from 'react'
import PageLayout from '../../components/page-layout'
import Origamis from '../../components/origamis'
import Title from '../../components/title'
import styles from './index.module.css'

const Publications = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <Title title='Publications' />
        <Origamis />
      </div>
    </PageLayout>
  )
}

export default Publications