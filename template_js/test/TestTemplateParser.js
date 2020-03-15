const TemplateParser = require('../src/TemplateParser.js');

describe('main', () => {
   it('構築', () => {
       let result = TemplateParser.build(
            ["select", {name:"data", class:"selection"}]
       );
       
       expect(result).tBe(0);
    };
});

