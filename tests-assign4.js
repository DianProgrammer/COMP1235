"use strict";

const chai = window.chai;
const expect = chai.expect;

//--------------------------------------------------------------------------------------------//


// Test : First Function (Requirement : to.be.closeTo())
// Describe & Declare new Test : getRandomNumber
describe('getRandomNumber()', ()=>{
    // Explanation + async
    it('1. Should return Random Number in [1,5]', async() =>{
        // Declare Constant variable - result =>  wait for getRandomNumber to Response
        const result = await getRandomNumber();
        // We expect result should be a number
        expect(result).to.be.a('number');
        // We expect amount of result should be 3+2,3-2 => [1,5]
        expect(result).to.be.closeTo(3, 2);
    });
});

//--------------------------------------------------------------------------------------------//


// Test : Second Function
// Describe & Declare new Test : getCityData
describe('getCityData', () => {
    it('should return Longitude of the City that user enter (Toronto)', async () => {
        const city = "Toronto"; // Define the city to test with (Toronto)

        // Call the function and get the full data
        // Call getCityData function with the city name
        const data = await getCityData(city);

        // Check if the result contains the 'longt' property
        // Check if 'longt' is part of the returned data
        expect(data).to.have.property('longt');

        // Ensure the longitude is a string (because it is returned as a string from the API)
        // Check if the longitude is returned as a string
        expect(data.longt).to.be.a('string');

        // Check if the longitude matches the expected value (-79.41946)
        // Compare the returned longitude with the expected value
        expect(data.longt).to.equal('-79.41946');
    });
});

//--------------------------------------------------------------------------------------------//


// Test : Third Function
// Describe & Declare new Test : fetchProducts
describe('fetchProducts', () => {
    it('1. Should return the title of the product for product ID 1', async () => {
        // Define valid product ID 1
        const productId = 1;

        // Call the function and get the title
        const title = await fetchProducts(productId);

        // Assert that the title is a string
        expect(title).to.be.a('string');

        // Assert that the product title matches the expected value
        expect(title).to.equal('Essence Mascara Lash Princess');  // Expected title for product ID 1
    });

    it('2. Should return the title of the product for product ID 12', async () => {
        // Define valid product ID 12
        const productId = 12;

        // Call the function and get the title
        const title = await fetchProducts(productId);

        // Assert that the title is a string
        expect(title).to.be.a('string');

        // Assert that the product title matches the expected value
        expect(title).to.equal('Annibale Colombo Sofa');  // Expected title for product ID 12
    });

    it('3. Should return the title of the product for product ID 50', async () => {
        // Define valid product ID 50
        const productId = 50;

        // Call the function and get the title
        const title = await fetchProducts(productId);

        // Assert that the title is a string
        expect(title).to.be.a('string');

        // Assert that the product title matches the expected value
        expect(title).to.equal('Black Whisk');  // Expected title for product ID 50
    });

    it('4. Should return a custom error message for an invalid product ID', async () => {
        // Define an invalid product ID (a non-existent product)
        const invalidProductId = 1000;

        // Call the function and get the error message
        const errorMessage = await fetchProducts(invalidProductId);

        // Assert that the error message matches the expected one
        expect(errorMessage).to.equal('Could not get products: Error: HTTP error: 404');
    });
});

//--------------------------------------------------------------------------------------------//

// Test case for searchStorePrice
// Fourth Function: Search Price From Store
async function searchStorePrice(product_name) {
    try {
        // Declare Variable => Getting response from Url
        const response = await fetch(`https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json`);

        // Check if response is not OK
        if (!response.ok) {
            throw new Error(`Could not get products: Error: HTTP error: ${response.status}`);
        }

        // Get JSON data from response
        const data = await response.json(); // Store the data correctly

        // Find the product in the data array
        const product = data.find(item => item.name.toLowerCase() === product_name.toLowerCase());

        // If product is found, return its price
        if (product) {
            return product.price;  // Return product price
        } else {
            throw new Error("Could not get products: Error: HTTP error: 404");
        }
    }
    catch (error) {
        // Handle the error and return the error message
        return `Could not get products: Error: HTTP error: 404`; // Ensure consistent error message
    }
}




//--------------------------------------------------------------------------------------------//

// Test case for Star Wars Character
// Fifth Function: Search Star Wars Character
describe('getStarWarsCharacters', () => {
    it('1. Should return the correct URL for R2-D2', async () => {
        // Call the function to get the characters object
        const data = await getStarWarsCharacters();

        // Assert that the URL for R2-D2 is correct
        expect(data.characters['R2-D2']).to.equal('https://swapi.dev/api/people/3/');
    });

    it('2. Should return the correct URL for C-3PO', async () => {
        // Call the function to get the characters object
        const data = await getStarWarsCharacters();

        // Assert that the URL for C-3PO is correct
        expect(data.characters['C-3PO']).to.equal('https://swapi.dev/api/people/2/');
    });

    it('3. Should return the correct URL for Luke Skywalker', async () => {
        // Call the function to get the characters object
        const data = await getStarWarsCharacters();

        // Assert that the URL for Luke Skywalker is correct
        expect(data.characters['Luke Skywalker']).to.equal('https://swapi.dev/api/people/1/');
    });
});

//--------------------------------------------------------------------------------------------//



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