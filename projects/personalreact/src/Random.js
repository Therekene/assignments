import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Random extends Component {
    constructor() {
        super()
        this.state = {
            drinks:[]
        }
    }

    componentDidMount(){
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => {
            this.setState({
                drinks: res.data.drinks
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        const mappedDrinks = this.state.drinks.map(cocktail => {
            return(
                <Link to={{pathname: `/recipe/${cocktail.idDrink}`, state: {...cocktail}}} key={cocktail.idDrink}>
                    <h1 className='randoTitle' >{cocktail.strDrink}</h1>
                    <button className = 'randoImg' style = {{ backgroundImage : `url(${cocktail.strDrinkThumb})`}}></button>
                </Link>
            )
        })
        return (
            <div className='randoDiv'>
                
                <h1 className= 'randoTitle'> Your Random drink is....</h1>
                {mappedDrinks}
            </div >
        )
    }
}

export default Random