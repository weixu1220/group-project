import { useEffect, useState } from "react";
import getBearPicture from "../utility/PlaceBearAPI";
import getEvilInsult from "../utility/EvilInsultAPI";
import { useSelector } from "react-redux";


const ApiComponent = function()
{
    const {height,width} = useSelector((state)=>state.form)
    const [imageURL, setImageURL] = useState("");
    const [insult, setInsult] = useState("");

    const getImageURL = async function(width, height)
    {
        const nextURL = await getBearPicture(width, height);
        setImageURL((_) => nextURL);
    }

    const getInsult = async function()
    {
        const nextInsult = await getEvilInsult();
        console.log(nextInsult)
        setInsult((_) => nextInsult);
    }

    useEffect(() =>
    {
        getImageURL(width, height);
        getInsult();
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