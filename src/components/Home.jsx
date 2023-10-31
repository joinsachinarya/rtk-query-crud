import { useEffect, useState } from "react"

const Home = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => result.json()).then((result) => setUsers(result));
    }
    console.log("users", users);
    return (
        <ul>
            {users &&
                users.map((data, index) => (
                    <li key={index}>{data.name}</li>
                ))
            }
        </ul>
    )
}

export default Home