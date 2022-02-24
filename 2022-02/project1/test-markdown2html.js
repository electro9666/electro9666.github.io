var MarkdownIt = require('markdown-it');
var md = MarkdownIt({
  breaks: true,
});
var result = md.render(`
# markdown-it rulezz!
## aa
- 11
- 22
77 
33 
`);
console.log('result', result);