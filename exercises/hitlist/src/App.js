import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            hitlist: []

        }
    }

    componentDidMount = () => {
        axios.get('https://s3.amazonaws.com/v-school/data/hitlist.json')
            .then(res => this.setState({
                hitlist: res.data
            }))

            .catch(err => console.log(err))
    }
    render() {
        const mappedList = this.state.hitlist.map((target, i) => {

            return (

                <div className='targetdiv' key= {i} style = {{backgroundImage: `url(${target.image})`}}>
                    <h1>{target.name}</h1>

                </div>

            )
        })
        return (
            <div className= 'pagediv'>
                <h1 className='title'> The Don's Offer List</h1>
                {mappedList}
            </div>
        )
    }



}
export default App