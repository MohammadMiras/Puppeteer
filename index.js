
const puppeteer = require("puppeteer");


(async () => {
    const browser = await puppeteer.launch(
        {
            executablePath:"/opt/google/chrome/chrome",
            headless: false 
        }
        );
    const page = await browser.newPage();

    await page.goto('https://web.telegram.org/k/#@v2rayngvpn1n');

     await page.setViewport({ width: 1080, height: 1024 });

    // await page.waitForSelector('p');   

    

    // // const fullTitle = await textSelector.evaluate(el => el.textContent);
    // // console.log(fullTitle);
    // // // Print the full title
    // // console.log('The title of this blog post is "%s".', fullTitle);

    setTimeout(async () => {

        // await page.screenshot({ path: 'example.png' });
        const texts = await page.evaluate( () => Array.from( document.querySelectorAll( '.message' ), element => element.textContent) );

     console.log(texts);
        await browser.close();
    }, 120_000)
   
})();