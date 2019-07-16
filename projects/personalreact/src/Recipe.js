import React from 'react'

const Recipe = (props) => {
    
    console.log (props.location)
    return (
        <div className= 'recDiv'>
            <h1 className= 'recTitle'>Recipe for {props.location.state.strDrink}</h1>
            <img className='rcpimg' src={props.location.state.strDrinkThumb}></img>
            <div className= 'recIng'>
                <h1 className='recIng'>Ingredients:</h1>
                {props.location.state.strMeasure1 && props.location.state.strIngredient1 ?
                    <div>
                    <h2 className= 'recIngs'>{props.location.state.strMeasure1} {props.location.state.strIngredient1} </h2> 
                    <img className = 'ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient1.toLowerCase()}.png`} />
                    </div> :
                    <h2> N/A </h2>}

                <h2 className= 'recIngs'>{props.location.state.strMeasure2} {props.location.state.strIngredient2}</h2>
                {props.location.state.strIngredient2 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient2.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure3} {props.location.state.strIngredient3}</h2>
                {props.location.state.strIngredient3 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient3.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure4} {props.location.state.strIngredient4}</h2>
                {props.location.state.strIngredient4 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient4.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure5} {props.location.state.strIngredient5}</h2>
                {props.location.state.strIngredient5 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient5.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure6} {props.location.state.strIngredient6}</h2>
                {props.location.state.strIngredient6 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient6.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure7} {props.location.state.strIngredient7}</h2>
                {props.location.state.strIngredient7 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient7.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure8} {props.location.state.strIngredient8}</h2>
                {props.location.state.strIngredient8 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient8.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure9} {props.location.state.strIngredient9}</h2>
                {props.location.state.strIngredient9 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient9.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure10} {props.location.state.strIngredient10}</h2>
                {props.location.state.strIngredient10 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient10.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure11} {props.location.state.strIngredient11}</h2>
                {props.location.state.strIngredient11 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient11.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure12} {props.location.state.strIngredient12}</h2>
                {props.location.state.strIngredient12 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient12.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure13} {props.location.state.strIngredient13}</h2>
                {props.location.state.strIngredient13 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient13.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure14} {props.location.state.strIngredient14}</h2>
                {props.location.state.strIngredient14 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient14.toLowerCase()}.png`} />}
                <h2 className= 'recIngs'>{props.location.state.strMeasure15} {props.location.state.strIngredient15}</h2>

                {props.location.state.strIngredient15 && <img className='ingimg' src ={`https://www.thecocktaildb.com/images/ingredients/${props.location.state.strIngredient15.toLowerCase()}.png`} />}
            </div>
            <div className= 'recInst'>
            <h1 className='recInst'>Instructions</h1>
            <h2 className= 'recIngs'>{props.location.state.strInstructions}</h2>
            </div>
        </div>
    )
}


export default Recipe

