import { useSelector } from "react-redux";

export default function JokeList(){
const { jokeList } = useSelector((state)=>{state.form})

    return (
        <div>
            jokeList.map( (joke)=> {
                return (
                    <div>
                       {joke} 
                    </div>
                )
            } )
        </div>
    )
}