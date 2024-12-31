import '../App.css';




function Card({Town, City, State, Country, Stars, Price, cardImg}){
    return(           
        <div className='Card'>
            <div className='cardImg'>
                <img src= {cardImg} className='cardImgs'/>
            </div>
            <div className='write-up'>
                <p>{Town}, {City}, {State}, {Country}</p>
                <p>Star rating: {Stars}</p>
                <p>Price: NGN {Price}</p>
            </div>
        </div>

    )


}

export default Card;