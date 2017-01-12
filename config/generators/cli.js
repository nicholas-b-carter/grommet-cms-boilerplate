const componentGenerator = require('./component/index.js');
const SafeString = require('./utils/safeString').SafeString;
const containerGenerator = require('./container/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.addHelper('uppercase', (text) => {
    return text.toUpperCase();
  });
  plop.addHelper('createImports', (list) => {
    const items = list.map((item) => `import ${item} from 'grommet/components/${item}';`).join('\n');
    return new SafeString(items);
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
