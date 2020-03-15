let SampleClass = require('../src/Sample.js');

describe('初期テスト', () = {
    it('整数', () => {
        let obj = new SampleClass();
        
        expect(obj.calc(5)).toBe(50);
    });
    
    
});
