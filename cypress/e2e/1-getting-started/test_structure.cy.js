let add = (a,b) => a + b;
let subtract = (a,b) => a - b;
let multiply = (a,b) => a * b;
let divide = (a,b) => a / b;

describe('Unit testing for our dummy aplication', () => {
    context('Math with "Positive" numbers', () => {
        
        before(function(){
            cy.log('i am sad');
        })

        beforeEach(function(){
            cy.log('i am happy')
        })

        afterEach(function(){
            cy.log('i am bussy')
        })

        after(function(){
            cy.log('i am tired');
        })
        it('should add positive numbers 1', () => {
            expect(add(1,3)).to.eq(4);
        });
        it('should subtract positive numbers 2', () => {
            expect(subtract(3,3)).to.eq(0);
        });
        it('should multiply positive numbers 3', () => {
            expect(multiply(3,3)).to.eq(9);
        });
    });

    context('Math with "Negative" numbers', () => {
        it('should add negative numbers', () => {
            expect(add(-1,-3)).to.eq(-4);
        });
        it('should subtract negative numbers', () => {
            expect(subtract(-3,-3)).to.eq(0);
        });
        it('should multiply negative numbers', () => {
            expect(multiply(-3,-3)).to.eq(9);
        });
    });
});