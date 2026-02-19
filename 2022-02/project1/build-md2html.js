
var fs = require('fs');
var MarkdownIt = require('markdown-it');
var md = MarkdownIt({
  breaks: true,
});
var text = fs.readFileSync('./project1/original.md', 'utf-8');
// console.log('text', text);
var result = md.render(text);
console.log('result', result);

fs.writeFileSync('./project1/original-result-html.js', `var _html=\`${result}\``);