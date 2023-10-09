import { Link } from "react-router-dom";

const TeamBuildingCart = ({item}) => {

    const {id, name, img, price, short_description} = item
    // console.log(item);

    if(!item){
        return <p>Loading...</p>
    }


  return (
    <Link to='/'>
      <div className="card w-96 h-[540px]  bg-base-100 shadow-xl my-5">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          

          {
          short_description.length > 100 
          ?
          <p>{short_description.slice(0, 100)} <Link to={`/news/${id}`} className="text-blue-600 font-bold">Read more...</Link> </p>
          :
          <p>{short_description}</p>
        }

          <p>price: {price}</p>
          <div className="card-actions absolute bottom-0 pb-4">
            <button className="btn btn-primary">Join Event</button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TeamBuildingCart