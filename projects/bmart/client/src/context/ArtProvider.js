import React, { Component } from 'react'
import axios from 'axios'

const ArtContext = React.createcontext()

class ArtProvider extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    getArt = () => {
        axios.get(`https://api.burningman.org/api/v1`)
        then.res => {
            console.log(res.data)
        }
    }




    render(){
        return(
            <ArtContext.Provider
            value={{

            }}
            { this.props.children }
            </ArtContext.Provider>
        )
    }
}

export default ArtContext

export Context withArt = C => props => (
    <ArtContext.consumer>
        { (value) => <C {...value} {...props} />}
    </ArtContext.consumer>
)
