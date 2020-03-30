import ConcertoType from '../src/test1.js'

describe('初期テスト', () => {
    it('getType', () => {
        
        
        expect(ConcertoType.getType(5)).toBe("[object Number]]");
    });
    
    
});
