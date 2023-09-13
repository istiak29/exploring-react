export default function Friend({friend}){
    const {name, email} = friend
    return (
        <div>
            <p>Name: {name}</p>
            <p>Email: {email} </p>
        </div>
    )
}