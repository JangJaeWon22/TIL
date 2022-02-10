const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=%EB%A7%A5%EB%B6%81+%ED%94%84%EB%A1%9C+m1&oquery=%EB%A7%A5%EB%AF%B8%EB%8B%88&tqi=hSd%2FRsp0JXoss4XDtbdssssstwh-270079&acq=%EB%A7%A5%EB%B6%81+%ED%94%84%EB%A1%9C+&acr=1&qdt=0');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse() : ', query);
console.log('qureystring,stringify() :', querystring.stringify(query));