import images from "../images";

export default function Cards({data, location}){

    function getImg(){
        location = location.toLowerCase()
        return images[location]
        
    }

    return(
            <div className="col mt-3 ">
                <div className="card h-100">
                    <img className="card-img-top" alt={data.location}
					height="250" src={getImg()}></img>
                    <div className="card-body flex-column d-flex">
                        <h5 className="card-title">{data.title}</h5>
                        <div className="card-title text-secondary">{data.location}</div>
                        <div className="card-text text-truncate">{data.content}</div>
                     </div>
                     <div className="d-flex justify-content-end p-2" >

                        <button className="btn btn-warning">Go to post ▶	 </button>
                     </div>
                </div>
            </div>

    );
}

// w-50 text-center