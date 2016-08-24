import { ReversePipe } from './reverse.pipe';
describe('ReversePipe', () => {

    let pipe: ReversePipe;
    beforeEach(() => {
        pipe = new ReversePipe();
    });

    it('should transforms "[1, 2, 3]" to "[3, 2, 1]"', () => {
        expect(pipe.transform([1, 2, 3])).toEqual([3, 2, 1]);
    });
});
