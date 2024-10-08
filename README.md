<strong>Project Title: Testing Utility Functions with Jest</strong>

<strong>Description:</strong>

In this project, we will practice writing unit tests for various utility functions using Jest. The goal is to become comfortable with testing JavaScript code and ensure our functions behave as expected.

<strong>Technologies Used:</strong>

<ul>
  <li><strong>Jest:</strong> A JavaScript testing framework used to write and run the tests.</li>
  <li><strong>Babel:</strong> A JavaScript compiler that allows the use of ES6 import statements in Jest.</li>
</ul>
<strong>Features:</strong>

<ul>
  <li><strong>capitalize:</strong> Function to capitalize the first letter of a string.</li>
  <li><strong>reverseString:</strong> Function to reverse a given string.</li>
  <li><strong>calculator:</strong> An object with methods for basic arithmetic operations.</li>
  <li><strong>caesarCipher:</strong> Function to apply a Caesar cipher to a string with a given shift.</li>
  <li><strong>analyzeArray:</strong> Function to analyze an array of numbers and return statistical information.</li>
</ul>


1. Install Dependencies
Ensure all dependencies, including jest and babel-jest, are installed. If you haven’t done so already, run:

bash
Copy code
npm install
This will install both production and development dependencies specified in your package.json.

2. Run the Tests
In your terminal, run the following command to execute your tests:

bash
Copy code
npm test
or

bash
Copy code
npm run test
Jest will look for files matching the test patterns and execute the tests. You should see output indicating the test results, such as:

bash
Copy code
PASS  ./example.test.js
✓ simple test (5 ms)
3. View Test Results
After running the tests, you will see the results in your terminal. Jest provides a summary of passing and failing tests, along with detailed information if any tests fail.
