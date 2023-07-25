import { useEffect } from "react";

import getBearPicture from "../utility/PlaceBearAPI";


const ApiTest = function()
{
    const [imageURL, setImageURL] = useState("");
    const getImageURL = async function(width, height)
    {
        const nextURL = await getBearPicture(width, height);
        setImageURL((_) => nextURL);
    }
    useEffect(() =>
    {
        getImageURL(300, 500);
    }, []);

    return (
        <>
            <div>PlaceBear</div>
            <img src={imageURL} alt="" />;
        </>
    );
};


export default ApiTest;
