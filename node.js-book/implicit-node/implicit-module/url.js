const url = require('url')

const { URL } = url;
const myURL = new URL('https://brand.naver.com/applestore/products/5238522004?NaPm=ct%3Dku5d6eso%7Cci%3D41c651fe0422326e620bf21f42f019b3ab6712a1%7Ctr%3Dsls%7Csn%3D758501%7Chk%3D6a65bf8d8fed9c8724b2bb61d839b5ad237b2011');
console.log('new URL() : ', myURL);
console.log('url.format() : ',url.format(myURL));
console.log('----------------------------');

const parsedUrl = url.parse('https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=%EB%A7%A5%EB%B6%81+%ED%94%84%EB%A1%9C+m1&oquery=%EB%A7%A5%EB%AF%B8%EB%8B%88&tqia=hSd%2FRsp0JXoss4XDtbdssssstwh-270079&acq=%EB%A7%A5%EB%B6%81+%ED%94%84%EB%A1%9C+&acr=1&qdt=0');
console.log('url.parse() : ', parsedUrl);
console.log('url.format() : ', url.format(parsedUrl));