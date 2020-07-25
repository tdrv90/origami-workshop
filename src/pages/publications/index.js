import React, { Component } from 'react'
import PageLayout from '../../components/page-layout'
import Origamis from '../../components/origamis'
import Title from '../../components/title'


import styles from './index.module.css'
import UserContext from '../../Context'

class Publications extends Component {
  static contextType = UserContext

  render() {
    console.log(this.context)
    return (
      <PageLayout>
        <div className={styles.container}>
          <Title title='Publications' />
          <Origamis />
        </div>
      </PageLayout>
    )
  }
}

export default Publications