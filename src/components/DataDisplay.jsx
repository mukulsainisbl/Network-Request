
 export function DataDisplay({data}){

    return(
    
        <div id="OuterBox">
        {data.map((post)=>{
            return(
                <div key={post.id}>
                <h2>{post.id}</h2>
                <h3>{post.title}</h3>
                <h4>{post.body}</h4>
                </div>
            )
        })}
        </div>
    
    )
}