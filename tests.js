"use strict";

const chai = window.chai;
const expect = chai.expect;


// DDI RULE (Just to remember)
// D => Describe the file name
// D => Describe the function name
// I => it => content/return values to match the results


//First Function Test
describe('Calculate Area & Perimeter for Circle',  ()=> {

    describe('Circle Constructor',  ()=> {

        // Calculate Area
        it('should correctly calculate the area',  ()=> {
            // Each Object Related to each circle
            let c1 = new Circle(3);
            let c2 = new Circle(7);
            let c3 = new Circle(9);

            // Result Section (Testing)
            expect(c1.area()).to.deep.equal(28.27);
            expect(c2.area()).to.deep.equal(153.94);
            expect(c3.area()).to.deep.equal(254.47);
        });

        // Calculate Parameter
        it('should correctly calculate the perimeter',  ()=> {
            // Each Object Related to each circle
            let c1 = new Circle(3);
            let c2 = new Circle(7);
            let c3 = new Circle(9);

            // Result Section (Testing)
            expect(c1.perimeter()).to.deep.equal(18.85);
            expect(c2.perimeter()).to.deep.equal(43.98);
            expect(c3.perimeter()).to.deep.equal(56.55);
        });

    });
});

//Second Function Test
describe('Calculate Salary for each Employee',  ()=> {

    describe('calculateSalary',  ()=> {

        it('Return Salary for each Employee',  ()=> {

            // Each Object Related to salary for each Employee
            let firstSalary = calculateSalary([8,8,8,8,8,0,0]);
            let secondSalary = calculateSalary([10,10,10,0,8,0,0]);
            let thirdSalary = calculateSalary([0,0,0,0,0,12,0]);

            // Result Section (Testing)
            expect(firstSalary).to.deep.equal(400);
            expect(secondSalary).to.deep.equal(410);
            expect(thirdSalary).to.deep.equal(280);

        })
    })
});

//Third Function Test
describe('This function is [sum of all items in the array]',  ()=> {

    describe('indexMultiplier',  ()=> {

        it('Return sum of all items in the given array',  ()=> {

            // Each Object Related to each arrays
            let firstMultiplier = indexMultiplier([1, 2, 3, 4, 5]);
            let secondMultiplier = indexMultiplier([-3, 0, 8, -6]);
            let thirdMultiplier = indexMultiplier([15, 16, -100, 50]);


            // Result Section (Testing)
            expect(firstMultiplier).to.deep.equal(40);
            expect(secondMultiplier).to.deep.equal(-2);
            expect(thirdMultiplier).to.deep.equal(-34);


        })
    })
});



//Fourth Function Test
describe('This function filters an array of JSON elements based on 2 conditions',  ()=> {

    describe('filteredJSON',  ()=> {

        it('should return JSON elements that meet the conditions',  ()=> {

            // Each Object Related to each arrays
            let firstJSON = filteredJSON([{ id: 1, u: " batman" }]);
            let secondJSON = filteredJSON([{ id: 11, u: " spidey" }]);
            let thirdJSON = filteredJSON([{ id: 1, u: " batman" }, { id: 11, u: " spidey" }]);

            // Result Section (Testing)
            expect(firstJSON).to.deep.equal([]);
            expect(secondJSON).to.deep.equal([{ id: 11, u: " spidey" }]);
            expect(thirdJSON).to.deep.equal([{ id: 11, u: " spidey" }]);

        });

    });

});

//Fifth Function Test
describe('BreakAway Function',  ()=> {

    describe('Divides an array into chunks of size n',  ()=> {

        it('should return a new array split into sub-arrays of size n',  ()=> {

            // Each Object Related to each array
            let first = breakAway([2,3,4,5], 2);
            let second = breakAway([2,3,4,5,6], 2);
            let third = breakAway([2,3,4,5,6,7], 3);
            let fourth = breakAway([2,3,4,5], 1);
            let fifth = breakAway([2,3,4,5,6,7], 7);

            // Result Section (Testing)
            expect(first).to.deep.equal([[2,3],[4,5]]);
            expect(second).to.deep.equal([[2,3],[4,5],[6]]);
            expect(third).to.deep.equal([[2,3,4],[5,6,7]]);
            expect(fourth).to.deep.equal([[2],[3],[4],[5]]);
            expect(fifth).to.deep.equal([[2,3,4,5,6,7]]);

        });
    });
});

/***************************************************************************************
 Testing TEMPLATES

 //To test a regular function
 describe('yourFunctionName', () =>  {
    it('please enter your function description here',  () => {
        expect(yourFunctionName(parameters)).to.deep.equal(expected_result);
    })
})

 //To test async/await functions
 describe('yourFunctionName()', () =>  {
    it('The async/await function description',  async () => {
          expect(await yourFunctionName()).to.deep.equal(expected_result);
    })
})
 ***************************************************************************************/