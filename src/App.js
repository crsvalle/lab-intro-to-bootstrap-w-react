import postData from "./data/posts.json";
import Top from "./Components/Top";
import Quote from "./Components/Quote";
import Search from "./Components/Search";
import Cards from "./Components/Cards";
import Table from "./Components/Table";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {

  const [posts, setPosts] = useState(postData)
  const [search, setSearch] = useState('')

  
  return <main>

    <Top />
    <Quote/>
    <div className="container">
      <Search setPosts={setPosts} postData={postData} search={search} setSearch={setSearch}/>
      <div className="row">

        <div className="col-sm-8">
          {!posts.length && (
            <div className="alert alert-danger mt-4" role="alert">
              No posts found with the search term "{search}". Please try again.
            </div>
          )}
          <div className="row row-cols-lg-2 ">
              {posts.map((data) =>{
                return(
                  <Cards
                  key={data.id}
                  data={data}
                  location={data.location} />
                )
              })}
          </div>
        </div>
        <div className="col-md-4">
          <h4>Posts by <span className="text-warning">location</span></h4>
            <Table postData={postData}/>
        </div>

      </div>

    </div>
    <Footer />

    
  </main>;
}

export default App;
