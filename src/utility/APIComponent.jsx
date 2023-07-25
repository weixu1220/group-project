import { useEffect, useState } from "react";
import getBearPicture from "../utility/PlaceBearAPI";
import getEvilInsult from "../utility/EvilInsultAPI";
import { useSelector } from "react-redux";
import { pushJoke } from "../formSlice";
import { useDispatch } from "react-redux";



const ApiComponent = function () {
    let dispatch = useDispatch()
    const { jokeList, height, width } = useSelector((state) => state.form)
    const [imageURL, setImageURL] = useState("");
    const [insult, setInsult] = useState("");

    const getImageURL = async function (width, height) {
        const nextURL = await getBearPicture(width, height);
        setImageURL((_) => nextURL);
    }

    const getInsult = async function () {
        const nextInsult = await getEvilInsult();
        console.log(nextInsult)
        setInsult((_) => nextInsult);
        dispatch(pushJoke(nextInsult))
        
    }
    
    useEffect(() => {
        getImageURL(width, height);
        getInsult();
        localStorage.setItem("width",JSON.stringify(width))
        localStorage.setItem("height",JSON.stringify(height))
        localStorage.setItem("insult",JSON.stringify(insult))
    }, []);

    return (
        <div className="d-flex flex-column align-items-center ">
            <div className="img-box m-5">
                <img src={imageURL} alt="" />
            </div>

            <h2 className="m-5">{insult}</h2>
        </div>
    );
};


export default ApiComponent;