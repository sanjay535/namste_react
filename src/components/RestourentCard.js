
const RestourentCard=(props)=>{
    const {costText, cuisine, image, name,rating}=props;
    const cusinNames=cuisine.map(item=>item.name);
    // console.log("card=",costText, cusinNames, image,name, rating)
    // const {image, name, rating, costText} =props;
    return (
     <div className="restourent-card">
        <img src={image?.url} alt={name} width={300} height={150} />
        <div className="restourent-name-rating">
             <h4>{name}</h4>
             <h6>{rating?.aggregate_rating} stars</h6>
        </div>
        <div className="restourent-cusins-price">
            <p><i>{cusinNames.slice(0,3).join(', ')}</i></p>
            <p><em>{costText?.text}</em></p>
        </div>
     </div>
    );
}
export default RestourentCard;