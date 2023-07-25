const getBearPicture = async function(width, height)
{
    const BASE_URL = "https://placebear.com";
    const requestURL = `${BASE_URL}/${width}/${height}`;
    let bearPicture = null;
    try
    {
        const httpResponse = await fetch(requestURL);
        const bearPicture = await httpResponse.json();
        return bearPicture;
    }
    catch (exception)
    {
        console.log(`Exception: ${exception}`);
        bearPicture = requestURL;
    }
    finally
    {
        console.log(`Returning: ${bearPicture}`)
        return bearPicture;
    }

};


export default getBearPicture;
