import { useEffect, useState } from "react";

import getBearPicture from "../utility/PlaceBearAPI";
import getEvilInsult from "../utility/EvilInsultAPI";


const ApiTest = function()
{
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
        setInsult((_) => nextInsult);
    }

    useEffect(() =>
    {
        getImageURL(300, 500);
        getInsult();
    }, []);

    return (
        <>
            <div>PlaceBear</div>
            <img src={imageURL} alt="" />;
            <div>EvilInsult</div>
            <p>{insult}</p>
        </>
    );
};


export default ApiTest;
