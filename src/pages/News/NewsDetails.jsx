
const NewsDetails = ({aNews}) => {
    console.log(aNews);
    
  return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <p>adf</p>
          {/* <img src={img} alt="Shoes" /> */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">asdf</h2>
          {/* <p>{short_description}</p> */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsDetails