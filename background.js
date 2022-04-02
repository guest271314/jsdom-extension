// https://github.com/jsdom/jsdom/issues/3315
// https://github.com/GoogleChrome/developer.chrome.com/issues/2290
// https://github.com/jsdom/jsdom/issues/245#issuecomment-256615808
import {JSDOM} from './jsdom.js';         
let dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom, dom.window.document.querySelector("p").textContent); // "Hello world"
