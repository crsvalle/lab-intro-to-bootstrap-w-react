
export default function Search({setPosts, postData, search, setSearch}){

    const handleSubmit = (e) => e.preventDefault()

    const handleFilter = (e) =>{
        setSearch(e.target.value)
        const searchWord = e.target.value
        
        if(!searchWord) return setPosts(postData)

        const results = postData.filter(post =>post.title.toLowerCase().includes(searchWord.toLowerCase()) 
        || post.location.toLowerCase().includes(searchWord.toLowerCase()))
        console.log(results)

        setPosts(results)
    }
    
    const backToNormal = () => {
        setSearch('')
        setPosts(postData)
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <div className="row justify-content-lg-center py-4">
                <div className="col-auto">
                    <label for="location" className="form-label" >Search posts by location...</label>
                </div>
                
                <div className="col">
                    <input className="form-control" 
                    aria-describedby="location-type" 
                    type="text" 
                    value={search}
                    onChange={handleFilter}></input>
                </div>

                <div className="col-auto">
                    <button type="submit" className="btn btn-warning" onClick={backToNormal}> Cancel</button>
                </div>
            </div>
        </form>
    )

}