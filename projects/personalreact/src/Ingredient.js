import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

class Ingredient extends Component {
    constructor() {
        super()
        this.state = {
            booze: '',
            drinks: []
        }
    }

    getByAlcohol = () => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.booze}`)
            .then(res => {
                this.setState({
                    drinks: res.data.drinks
                })
            })
            .catch(err => console.log(err))
    }

    handleChange = e => {
        this.setState({
            booze: e.target.value

        })
    }

    render() {
        


        try {

            const mappedDrinks = this.state.drinks.map(cocktail => {
                return (
                    <Link className='searchRes' to={{ pathname: `/recipe/${cocktail.idDrink}`, state: { ...cocktail } }} key={cocktail.idDrink}>
                        <h1>{cocktail.strDrink}</h1>
                        <button className='drinkBtn' style={{ backgroundImage: `url(${cocktail.strDrinkThumb})` }}></button>
                    </Link>
                )
            })

            return (
                <div className='ingDiv'>

                    <input className='inInput' type="text" onChange={this.handleChange} placeholder="Search..."
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.getByAlcohol()
                            }
                        }} />

                    <div className='homesearch'>
                        {mappedDrinks}
                    </div>
                </div>
            )

        } catch {

            return (<div className='ingDiv'>
                <input className='inInput' type="text" onChange={this.handleChange} placeholder="Search..."
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.getByAlcohol()
                        }
                    }} />

                <p className='errmsg'> No results found.</p>
                <p className='errmsg'>Please check spelling and try again.</p>
            </div>

            )
        }


    }
}

export default Ingredient