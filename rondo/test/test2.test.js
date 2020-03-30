import { Member } from '../src/test2.js'

describe('初期テスト', () => {
    it('getName', () => {
        
        let m = new Member('太郎', '山田')
        
        expect(m.getName()).toBe("田中太郎");
    });
    
    
});
