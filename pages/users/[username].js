import { useRouter } from "next/router"

export default function Users(){

    const router = useRouter()
    const { username } = router.query
return (
<>
    
            <h1>
                this is the User: {username}
            </h1>
</>

    )
}