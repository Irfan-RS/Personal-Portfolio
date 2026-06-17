const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function () {
    let options = new chrome.Options();
    options.addArguments('--headless');
    options.addArguments('--disable-gpu');
    options.addArguments('--no-sandbox');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        console.log("Navigating to http://localhost:8000...");
        await driver.get('http://localhost:8000');

        console.log("Page loaded. Fetching console logs...");
        let logs = await driver.manage().logs().get('browser');
        console.log("Browser Logs:");
        logs.forEach(log => console.log(`[${log.level.name}] ${log.message}`));

        console.log("Checking if Swiper initialized successfully...");
        let swiperContainer = await driver.findElement(By.css('.projects__container.swiper'));
        let isSwiperContainerVisible = await swiperContainer.isDisplayed();
        console.log(`Is projects Swiper container visible? ${isSwiperContainerVisible}`);

        let swiperWrapper = await driver.findElement(By.css('.projects__container .swiper-wrapper'));
        let slides = await swiperWrapper.findElements(By.css('.swiper-slide'));
        console.log(`Found ${slides.length} slides inside the wrapper.`);

        let activeSlide = await swiperWrapper.findElement(By.css('.swiper-slide-active'));
        let activeSlideText = await activeSlide.findElement(By.css('.projects__title')).getText();
        console.log(`Initial active slide project title: "${activeSlideText}"`);

        // Find next button
        let nextButton = await driver.findElement(By.css('.projects__container .swiper-button-next'));
        console.log("Clicking next slide button via script...");
        await driver.executeScript("arguments[0].click();", nextButton);

        // Wait a bit
        await driver.sleep(1000);

        // Check active slide again
        let newActiveSlide = await swiperWrapper.findElement(By.css('.swiper-slide-active'));
        let newActiveSlideText = await newActiveSlide.findElement(By.css('.projects__title')).getText();
        console.log(`Active slide project title after next click: "${newActiveSlideText}"`);

    } catch (err) {
        console.error("Test error:", err);
    } finally {
        await driver.quit();
    }
})();
