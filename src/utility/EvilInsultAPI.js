const getEvilInsult = async function()
{
    const BASE_URL = "https://evilinsult.com";
    const requestURL = `${BASE_URL}/generate_insult.php?lang=en&type=json`
    let evilInsult = null;
    try
    {
        const evilInsult = await (await fetch(requestURL)).json();
        return evilInsult;
    }
    catch (exception)
    {
        console.log(`Exception: ${exception}`);
        evilInsult = requestURL;
    }
    finally
    {
        console.log(`Returning: ${bearPicture}`)
        return evilInsult;
    }

    return evilInsult;
};


export default getEvilInsult;