const {
    Builder,
    By,
    Key,
    until,
    click
} = require("selenium-webdriver");


let func = async ()=>{
    let driver = await new Builder().forBrowser("firefox").build();

    try{
        await driver.get("https://stackoverflow.com/");
        await driver.findElement(By.name("q"))
        .sendKeys("nodemon",Key.RETURN);
        

        let element = await driver.findElement({className:"flush-left"});
        console.log(await element.getAttribute('innerHTML'))


        await driver.wait(until.titleIs("webdriver - google search"),5000)


    } finally{
        await driver.quit();
    }
}



func();