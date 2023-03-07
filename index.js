
const puppeteer = require("puppeteer");


(async () => {
    const browser = await puppeteer.launch(
        {
            executablePath:"/opt/google/chrome/chrome",
            headless: false 
        }
        );
    const page = await browser.newPage();

    await page.goto('https://web.telegram.org/k/#@qheimat_Sekeh');

    // await page.waitForSelector('p');  
    setTimeout(async () => {

        setInterval(async ()=>{
            const texts = await page.evaluate( () => document.querySelectorAll(".message")[document.querySelectorAll(".message").length - 1].textContent);
            console.log("====================");
            console.log(texts);
            console.log("====================");
    
        }, 5000);

    }, 60_000)  
   
})();