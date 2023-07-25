const getEvilInsult = async function()
{
    const BASE_URL = "https://evilinsult.com";
    const requestURL = `${BASE_URL}/generate_insult.php?lang=en&type=json`
    const httpResponse = await fetch(requestURL);
    const evilInsult = await httpResponse.json;

    return evilInsult;
};


export default getEvilInsult;