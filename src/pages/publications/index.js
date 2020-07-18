import React, { Component } from 'react'
import PageLayout from '../../components/page-layout'
import Origam from '../../components/origam'
import Title from '../../components/title'

import styles from './index.module.css'

class Publications extends Component {
  constructor(props) {
    super(props)

    this.state = {
      origamis: []
    }
  }

  getOrigamis = async () => {
    const promise = await fetch('http://localhost:9999/api/origami')
    const origamis = await promise.json()
    this.setState({
      origamis
    })
  }

  renderOrigamis() {
    const { origamis } = this.state

    return origamis.map((origam, index) => {
      return (
        <Origam key={origam._id} index={index} {...origam} />
      )
    })
  }

  componentDidMount() {
    this.getOrigamis()
  }

  render() {
    return (
      <PageLayout>
        <div className={styles.container}>
          <Title title='Publications' />
          <div className={styles["origamis-wrapper"]}>
            {this.renderOrigamis()}
          </div>
        </div>
      </PageLayout>
    )
  }
}

export default Publications