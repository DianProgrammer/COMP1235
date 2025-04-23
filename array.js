// DDI RULE (Just to remember)
// D => Describe the file name
// D => Describe the function name
// I => it => content/return values to match the results
describe('array', function () {
    describe('calculateAge', function () {
        it('return the age of the person', function () {
            //match the resulting var
            expect(calculateAge(ages)).to.deep.equal(3)
            expect(calculateAge(ages1)).to.deep.equal(9)
        })
    })
});