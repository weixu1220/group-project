const getEvilInsult = async function()
{
    const BASE_URL = "https://evilinsult.com";
    const requestURL = `${BASE_URL}/generate_insult.php?lang=en&type=json`
    let insult = "";
    try
    {
        const evilInsult = await (await fetch(requestURL)).json();
        insult = evilInsult.insult;
    }
    catch (exception)
    {
        console.log(`Exception: ${exception}`);
        insult = requestURL;
    }
    finally
    {
        console.log(`Returning: ${insult}`)
        return insult;
    }
};


export default getEvilInsult;