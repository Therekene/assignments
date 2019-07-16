import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class Home extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            drinks: []
        }
    }

    getByName = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.name}`)
            .then(res => {
                this.setState({
                    drinks: res.data.drinks
                })
            })
            .catch(err => console.log(err))
    }

    handleChange = e => {
        this.setState({
            name: e.target.value

        })
    }


    render() {
        try {
            const mappedDrinks = this.state.drinks.map(cocktail => {
                return (
                    <Link to={{ pathname: `/recipe/${cocktail.idDrink}`, state: { ...cocktail } }} key={cocktail.idDrink}>
                        <h1 className= 'homeRes'>{cocktail.strDrink}</h1>
                        <button className='drinkBtn' style={{ backgroundImage: `url(${cocktail.strDrinkThumb})` }}></button>
                    </Link>
                )
            })
            return (
                <div className='homeDiv'>

                    <input className='nmInput' type="text" onChange={this.handleChange} placeholder="Search..."
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.getByName()
                            }
                        }} />

                    
                    {mappedDrinks}
                </div>
            )
        } catch {

            return (
                <div className='ingDiv'>
                    <input className='inInput' type="text" onChange={this.handleChange} placeholder="Search..."
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.getByAlcohol()
                            }
                        }} />
                    
                    <p className = 'errmsg'> No results found.</p>
                <p>Please check spelling and try again.</p>
                </div>

            )

        }


    }

}


export default Home