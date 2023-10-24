
const RestourentCard=(props)=>{
    const {costText, cuisine, image, name,rating}=props;
    const cusinNames=cuisine.map(item=>item.name);
    // console.log("card=",costText, cusinNames, image,name, rating)
    // const {image, name, rating, costText} =props;
    return (
     <div className="m-3 shadow-md">
        <img src={image?.url} alt={name} className="w-96 h-36" />
        <div className="flex justify-between my-2 px-2">
             <h4 className="text-lg font-bold">{name}</h4>
             <h6 className="text-sm">{rating?.aggregate_rating} stars</h6>
        </div>
        <div className="flex justify-between my-2 px-2">
            <p><i>{cusinNames.slice(0,3).join(', ')}</i></p>
            <p><em>{costText?.text}</em></p>
        </div>
     </div>
    );
}
export default RestourentCard;