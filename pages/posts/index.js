import axios from "axios"

export async function getServerSideProps() {
    const  { data }  = await axios.get('https://jsonplaceholder.typicode.com/posts')

       return {
        props: {
            posts : data
        }
       }
}

export default function Posts({posts}){

   

    return (
<>
    
            <h1>
                this is the Posts page
                <div>
                    
                    {posts?.map((post) => (
                        <p key={post.id}>
                            {post.id}
                        </p>
    
                    ))}
                </div>
            </h1>
</>

    )
}