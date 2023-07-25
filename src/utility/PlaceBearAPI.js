const getBearPicture = async function(width, height)
{
    const BASE_URL = "https://placebear.com";
    const requestURL = `${BASE_URL}/${width}/${height}/`;
    const httpResponse = await fetch(requestURL);
    const bearPicture = await httpResponse.json;

    return bearPicture;
};


export default getBearPicture;
