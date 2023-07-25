import axios from 'axios'
const getEvilInsult = async function()
{
    const BASE_URL = "https://evilinsult.com";
    const url2='https://pirate.monkeyness.com/api/insult'
    const requestURL = `${BASE_URL}/generate_insult.php?lang=en&type=json`
    let insult = "";
    try
    {
        // is it already formatted in json??
        // const evilInsult = await (await fetch(requestURL)).json();
        const otherInsult = await (await fetch(url2)).text()
        console.log("text",otherInsult)
        // console.log("data",evilInsult)
        // insult = evilInsult.insult;
        insult = otherInsult;
        
    }
    catch (exception)
    {
        console.log(exception);
        insult = requestURL;
    }
    finally
    {
        console.log(`Returning: ${insult}`)
        console.log(insult)
        return insult;
    }
};


export default getEvilInsult;