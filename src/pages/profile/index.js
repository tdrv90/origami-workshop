import React, { Component } from 'react'
import PageLayout from '../../components/page-layout'
import Origamis from '../../components/origamis'

import styles from './index.module.css'

class ProfilePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null,
            posts: null,
            error: false
        }
    }

    componentDidMount() {
        this.getUser(this.props.match.params.userid)
    }

    getUser = async (id) => {
        const response = await fetch(`http://localhost:9999/api/user?id=${id}`)

        if (!response.ok) {
            this.props.history.push('/error')
        }

        const user = await response.json()

        this.setState({
            username: user.username,
            posts: user.posts && user.posts.length
        })
    }

    render() {
        const {
            username,
            posts
        } = this.state

        if (!username) {
            return (
                <PageLayout>
                    <div>Loading...</div>
                </PageLayout>
            )
        }

        return (
            <PageLayout>
                <div>
                    <p>User: {username}</p>
                    <p>Posts: {posts}</p>
                </div>

                <Origamis length={3} />
            </PageLayout>
        )
    }
}

export default ProfilePage