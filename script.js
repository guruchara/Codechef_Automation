
// Radha swami ji
const puppeteer = require('puppeteer')

const fs = require('fs')

const codefiles = require('./coder');
const { answerss } = require('./coder');
// const { answers } = require('./code');
console.log('Before');

//temp mail
let email = 'koxop85338@zneep.com'
// password
let password = 'Pepcoder@123'

let page;
let browser;
let pages;
// launching the browser
let browserlaunch = puppeteer.launch(
    {
        // by default website not visible if we assign false then it will visible
        headless: false,
        // when chromium open through the puppeteer then it will open in half size but i we write start maximized then it will open om fullscreen
        args: ['--start-maximized'],
        // by default width and height set by puppeteer but if we assign null then ..
        defaultViewport: null
    }
)
browserlaunch.then(function (browserInstance) {
    // by using newPage we will move on then next page
    browser = browserInstance;
    let newtabBrowser = browserInstance.newPage()
    return newtabBrowser;
}).then(function (newtab) {
    page = newtab;
    //goto used for moving the given link
    let browseropen = page.goto("https://www.codechef.com/login")
    return browseropen;
    //input[tabindex='1'][maxlength='128']
}).then(function () {
    let emailEnterpromise = page.type("input[tabindex='1'][maxlength='128']", email, { delay: 50 })
    return emailEnterpromise
}).then(function () {
    newtab = page
    let passwordEnterpromise = newtab.type("input[type='password'][class='form-text required ccl-f-placeholder ccl-f-input password-login']", password, { delay: 50 })
    return passwordEnterpromise
}).then(function () {

    let loginbutton = page.click('input[id="edit-submit-button"][value="Login"]', { delay: 50 })
    return loginbutton
}).then(function () {
    let waitPromise = page.waitForSelector("li[id='menu-302']")
    return waitPromise;
}).then(function () {
    let Practicepromise = page.click("li[id='menu-302']", { delay: 50 })
    return Practicepromise
}).then(function () {
    // let Allquestionarr=page.$$('path[d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"]')
    let wait = page.waitForSelector('path[d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"]')
    return wait
}).then(function () {
    let Submitthequestion = page.click('path[d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"]', { delay: 50 })
    return Submitthequestion;
}).then(function () {
    return page.waitForTimeout(1000);
}).then(function () {
    let p = browser.pages();
    return p;
}).then(function (p) {
    pages = p;
    console.log(pages.length);
    console.log("Waiting for selector!!");
    let waitcustomeditor = pages[2].waitForSelector('.ember-view.cc-editor.with-min-max-ht.ace_editor.ace-github')
    return waitcustomeditor;
}).then(function () {
    let clickthechhotaeditor = pages[2].click('.ember-view.cc-editor.with-min-max-ht.ace_editor.ace-github', page)
    return clickthechhotaeditor
}).then(function () {

    let custumpewrite = pages[2].type('.ember-view.cc-editor.with-min-max-ht.ace_editor.ace-github', answerss[0], { delay: 30 })
    return custumpewrite
}).then(function () {
    let ctrlpress = pages[2].keyboard.down("Control")
    return ctrlpress
}).then(function () {
    let ctrlpressA = pages[2].keyboard.press("A", { dely: 30 })
    return ctrlpressA
}).then(function () {
    let ctrlpressX = pages[2].keyboard.press("X", { delay: 30 })
    return ctrlpressX;
}).then(function () {
    let ctrlunholding = pages[2].keyboard.up("Control")
    return ctrlunholding
}).then(function () {
    let waitforMainPromise = pages[2].waitForSelector('.ember-view.cc-editor.large.ace_editor.ace-tomorrow', pages[2])
    return waitforMainPromise
}).then(function () {
    let clickmainpage = pages[2].click('.ember-view.cc-editor.large.ace_editor.ace-tomorrow')
    return clickmainpage
}).then(function () {
    let selectthecode = pages[2].keyboard.down("Control")
    return selectthecode
}).then(function () {
    let pressAinmain = pages[2].keyboard.press("A", { delay: 30 })
    return pressAinmain
}).then(function () {
    let pressVmain = pages[2].keyboard.press("V", { delay: 30 })
    return pressVmain
}).then(function () {
    let selectAll = pages[2].keyboard.up("Control")
    return selectAll
}).then(function () {
    let giveinputpromise = pages[2].click('.ember-view.cc-editor.with-min-max-ht.ace_editor.ace-github')
    return giveinputpromise
}).then(function () {
    let finalgiveinputpromise = pages[2].type('.ember-view.cc-editor.with-min-max-ht.ace_editor.ace-github', answerss[1], { delay: 30 })
    return finalgiveinputpromise
}).then(function () {
    // submit button code
    let submitbuttonprimose = pages[2].click('.margin-top.no-select .submit-run.float-right .ns-button')
    return submitbuttonprimose
}).then(function () {
    console.log('Radha Swami JI Satguru Dyal ki Dya');
})

console.log('After');

