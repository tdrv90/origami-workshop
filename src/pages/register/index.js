import React, { Component } from 'react'
import PageLayout from '../../components/page-layout'
import Title from '../../components/title'
import SubmitButton from '../../components/button/submit-button'
import Input from '../../components/input'

import styles from './index.module.css'

class RegisterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            repassword: ''
        }
    }

    handleChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        const {
            username,
            password
        } = this.state

        try {
            const promise = await fetch('http://localhost:9999/api/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    username,
                    password
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const authToken = promise.headers.get('Authorization')
            document.cookie = `x-auth-token=${authToken}`

            const response = await promise.json()

            console.log(response)

            if (response.username && authToken) {
                this.props.history.push('/')
            }
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        const {
            username,
            password,
            repassword
        } = this.state

        return (
            <PageLayout>
                <form className={styles.container} onSubmit={this.handleSubmit}>
                    <Title title='Register' />
                    <div className={styles['form-control']}>
                        <Input
                            value={username}
                            onChange={(e) => this.handleChange(e, 'username')}
                            label='Username'
                            id='username' />
                        <Input
                            type='password'
                            value={password}
                            onChange={(e) => this.handleChange(e, 'password')}
                            label='Password'
                            id='password' />
                        <Input
                            type='password'
                            value={repassword}
                            onChange={(e) => this.handleChange(e, 'repassword')}
                            label='Repassword'
                            id='repassword' />
                    </div>
                    <SubmitButton title='Register' />
                </form>
            </PageLayout >
        )

    }
}

export default RegisterPage