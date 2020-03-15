module.exports = {
    'Example Test Case'(browser) {
        
        //Elements
        const MAINPAGE_LOGO = 'img.central-featured-logo';
        const MAINPAGE_TEXTFIELD = 'input#searchInput';
        const MAINPAGE_SEARCH_BUTTON = 'button.pure-button';
        const RESULTSPAGE_LOGO = 'div#p-logo a.mw-wiki-logo';
        const RESULTSPAGE_TEXTFIELD = "div#searchText input[name='search']";
        
        const textToBeSearched = 'nightwatchjs';
        const titleToAssert = 'Wikipedia';
        const SSHOT_DIR = './sshots/';
    
        browser
            .maximizeWindow()
            .url(browser.launchUrl)
            .waitForElementVisible(MAINPAGE_LOGO)
            .assert.title(titleToAssert, `Page title is ${titleToAssert}`)
            .saveScreenshot(`${SSHOT_DIR}titleAssertion.png`)
            .setValue(MAINPAGE_TEXTFIELD, textToBeSearched)
            .click(MAINPAGE_SEARCH_BUTTON)
            .waitForElementVisible(RESULTSPAGE_LOGO)
            .assert.visible(RESULTSPAGE_TEXTFIELD, `"${textToBeSearched}" has been found in the text input from the result page.`)
            .saveScreenshot(`${SSHOT_DIR}resultTextField.png`)
            .end();
    },
};
