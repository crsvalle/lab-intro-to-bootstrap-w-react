

export default function Table({postData}){
    let obj = {}
    postData.forEach(post => {
        obj[post.location] = obj[post.location] ? obj[post.location] + 1 : 1;
    });

    return(
        <table className="table">
            <thead>
				<tr>
					<th scope="col">Location</th>
					<th scope="col">Posts</th>
				</tr>
			</thead>
            <tbody>
                {postData.map((post) => {
                    return(
                    <tr key={post.id}>
                        <td className="fw-bold">
                            {post.location}
                        </td>
                        <td>
                             <h1 className="badge text-white bg-secondary mx-2"> {obj[post.location]} </h1>
                        </td>
                    </tr>)
                })}
            </tbody>
        </table>
    )
}