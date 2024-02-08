const nightmare = require("nightmare")()

const args = process.argv.slice(2);
const url = args[0];
const minPrice = args[1];

// "https://www.amazon.com/Razer-Ornata-Gaming-Keyboard-Low-Profile/dp/B09X6GJ691"

checkPrice()

async function checkPrice(){
    try{
        const priceString = await nightmare.goto(url)
                                            .wait(".a-price-whole")
                                            .evaluate(() => document.querySelector("span.a-price-whole").innerText)
                                            .end();
        const priceNumber = parseInt(priceString.replace(".", ""));
        console.log(priceNumber);
        if(priceString < minPrice )
            console.log("It is Cheap");
        else
            console.log("It is Expensive");
    } catch(err){
        console.log(err.message);
    }
}