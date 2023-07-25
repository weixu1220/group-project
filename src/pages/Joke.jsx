import { useParams } from "react-router-dom";
import GetEvilInsult from '../utility/EvilInsultAPI'
import APIComponent from '../utility/APIComponent'
function Joke() {

    const { userid } = useParams()
    return (
        <div className="home">
            <h1 className="text-center">Heres your <b>barely</b> polite joke, {userid}!</h1>
            <APIComponent/>
            {/* <GetEvilInsult /> */}
        </div>
    );
}

export default Joke;