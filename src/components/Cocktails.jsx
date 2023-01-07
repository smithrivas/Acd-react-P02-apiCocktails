
const Cocktails = ({data})=>{  
    return(        
        <div className="drink-card">
            <img src={data.strDrinkThumb} alt="" />
            <h3>{data.strDrink}</h3>
            <p>{data.strInstructions}</p>
        </div>        
    )
}

export default Cocktails