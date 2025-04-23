"use strict";

// First Function : Getting Random Number
async function getRandomNumber(){
    // Make Promise => When it is Successful!
    return new Promise((resolve)=>{
        // setTimeout function
        setTimeout(()=>{
            // Declare the Constant Variable
            // Math Random => Product Random Number [0,1] => *5 => [0,5]
            // Math floor => round number to down => +1 [1,5]
            const randomNumber = Math.floor((Math.random()*5)+1);
            // Result when promise is Successful!
            resolve(randomNumber);
            // 500 => Time for the setTimeout
        }, 500);
    });
}

//--------------------------------------------------------------------------------------------//

// Second Function : Getting Data for City
async function getCityData(city) {
    // Getting response from Url
    // Add City & Take it back as Json Format
    const response = await fetch(`https://geocode.xyz/${city}?json=1`);
    // Declare Variable for response of the request
    const data = await response.json();
    // Return
    return data;
}

//--------------------------------------------------------------------------------------------//

// Third Function: Getting Data Product
async function fetchProducts(id) {
    try {
        // Declare Constant Variable => response from Url
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        // If response is not ok (status outside 200-299 range)
        if (!response.ok) {
            // Throw new Error with a custom message if status is not ok
            throw new Error(`Could not get products: Error: HTTP error: ${response.status}`);
        }

        // Continue Success Way => Take back response in JSON format
        const product = await response.json();

        // Return the title of the product
        return product.title;  // Return the product title
    } catch (error) {
        // In case of any error, return a custom error message
        return `Could not get products: Error: HTTP error: 404`; // Custom message for error
    }
}




//--------------------------------------------------------------------------------------------//

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
        return `Could not get products: Error: ${error.message}`;
    }
}

//--------------------------------------------------------------------------------------------//

// Fifth Function: Function for Getting Star Wars Character
async function getStarWarsCharacters() {
    try {
        // Make a fetch request to the Star Wars API to get the characters data
        const response = await fetch('https://swapi.dev/api/people/');

        // Check if the response status is not ok (e.g., 404 or 500 errors)
        if (!response.ok) {
            // If the response is not ok, throw an error with the HTTP status
            throw new Error(`Could not get star Wars: Error: HTTP error: ${response.status}`);
        }

        // Parse the response data as JSON
        const data = await response.json();

        // Create an empty object to hold the character names and their corresponding URLs
        const characters = {};

        // Loop through each character in the results array
        data.results.forEach(character => {
            // Use the character's name as the key and their URL as the value in the characters object
            characters[character.name] = character.url;
        });

        // Return the newly created object with characters and their URLs
        return {characters: characters};
    }
    catch (error) {
        // If any error occurs in the try block, log the error to the console
        console.log(error);

        // Throw a new error with a custom message along with the error message from the catch block
        throw new Error(`Could not get star Wars: Error: ${error.message}`);
    }
}

//--------------------------------------------------------------------------------------------//






