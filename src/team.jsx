import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11)

    const teamStyle = {
        marginBottom: '10px',
        border: '2px solid maroon',
        padding: '15px',
        borderRadius: '10px'
    }

    const addPlayer = () => {
        const newTeam = team + 1;

        setTeam(newTeam);
    }

    const removePlayer = () => {
        setTeam(team - 1);
    }

    return (
        <div style={teamStyle}>
            <h2>Players: {team}</h2>
            <button onClick={addPlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}