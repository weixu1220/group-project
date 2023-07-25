const getBearPicture = async function(width, height)
{
    const BASE_URL = "https://placebear.com";
    const requestURL = `${BASE_URL}/${width}/${height}`;
    return requestURL
};


export default getBearPicture;