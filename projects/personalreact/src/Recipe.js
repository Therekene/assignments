import React, { Component } from 'react'
import axios from 'axios'

class Recipe extends Component {
    constructor(){
        super()
        this.state = {
        
        }

    }
    
    componentDidMount(){
        
        if (this.props.location.state.strAlcoholic){
            
        } else {
            
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.location.state.idDrink}`)
                .then( res => {
                    console.log(this.props.location.state)
                    // console.log(res.data.drinks[0])
                    this.props.location.state = {
                        ...this.props.location.state,
                        ...res.data.drinks[0]

                    }
                    this.setState({

                    })
                    
                })
                .catch (err => console.log(err))
        }
    }


    render(){
        
        return (
        <div className= 'recDiv'>
            <h1 className= 'recTitle'>Recipe for {this.props.location.state.strDrink}</h1>
            <img className='rcpimg' src={this.props.location.state.strDrinkThumb}></img>
            <div className= 'recIng'>
                <h1 className='recIng'>Ingredients:</h1>
                {this.props.location.state.strMeasure1 && this.props.location.state.strIngredient1 ?
                    <div className = 'notadiv'>
                    <h2 className= 'recIngs'>{this.props.location.state.strMeasure1} {this.props.location.state.strIngredient1} </h2> 
                    <img className = 'ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient1.toLowerCase()}.png`} />
                    </div> :
                    <h2> N/A </h2>}

                <h2 className= 'recIngs'>{this.props.location.state.strMeasure2} {this.props.location.state.strIngredient2}</h2>
                {this.props.location.state.strIngredient2 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient2.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure3} {this.props.location.state.strIngredient3}</h2>
                {this.props.location.state.strIngredient3 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient3.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure4} {this.props.location.state.strIngredient4}</h2>
                {this.props.location.state.strIngredient4 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient4.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure5} {this.props.location.state.strIngredient5}</h2>
                {this.props.location.state.strIngredient5 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient5.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure6} {this.props.location.state.strIngredient6}</h2>
                {this.props.location.state.strIngredient6 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient6.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure7} {this.props.location.state.strIngredient7}</h2>
                {this.props.location.state.strIngredient7 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient7.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure8} {this.props.location.state.strIngredient8}</h2>
                {this.props.location.state.strIngredient8 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient8.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure9} {this.props.location.state.strIngredient9}</h2>
                {this.props.location.state.strIngredient9 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient9.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure10} {this.props.location.state.strIngredient10}</h2>
                {this.props.location.state.strIngredient10 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient10.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure11} {this.props.location.state.strIngredient11}</h2>
                {this.props.location.state.strIngredient11 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient11.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure12} {this.props.location.state.strIngredient12}</h2>
                {this.props.location.state.strIngredient12 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient12.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure13} {this.props.location.state.strIngredient13}</h2>
                {this.props.location.state.strIngredient13 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient13.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure14} {this.props.location.state.strIngredient14}</h2>
                {this.props.location.state.strIngredient14 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient14.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{this.props.location.state.strMeasure15} {this.props.location.state.strIngredient15}</h2>

                {this.props.location.state.strIngredient15 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${this.props.location.state.strIngredient15.toLowerCase()}.png`} />}
            </div>
            <div className= 'recInst'>
            <h1 className='recInst'>Instructions</h1>
            <h2 className= 'recIngs'>{this.props.location.state.strInstructions}</h2>
            </div>
        </div>
    )
}
}

export default Recipe

