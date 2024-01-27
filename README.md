# Currency-converter-app

# Currency Converter Web App
This web application allows users to convert amounts from one currency to another using the FastForex API.

# Getting Started

To use the Currency Converter, follow these steps:

1.Clone the repository to your local machine:
git clone <repository-url>

2.Open the index.html file in your preferred web browser.

3.Select the source and target currencies from the dropdown menus.

4.Enter the amount you want to convert in the provided input field.

5.Click the "Convert" button to fetch the conversion rate and display the result.


# Code Overview
The main functionality is implemented in the index.html file along with the associated JavaScript code in the <script> section. The JavaScript code uses the FastForex API to fetch real-time currency conversion rates.

# JavaScript Code
currencyFrom: Represents the dropdown menu for selecting the source currency.
currencyTo: Represents the dropdown menu for selecting the target currency.
Amount: Represents the input field for entering the amount to be converted.
convertResult: Represents the HTML element where the conversion result will be displayed.
convertmoneyRes(data, sign): Function to update the UI with the converted amount and currency symbol.
getRate(): Function to fetch the currency conversion rate from the FastForex API and update the UI.
Usage
Choose the source and target currencies from the dropdown menus.

Enter the amount you want to convert in the input field.

Click the "Convert" button to see the converted amount along with the currency symbol.

API Key
Make sure to replace the placeholder API key in the getRate() function with your actual API key from FastForex:

# javascript

const apiKey = "your-actual-api-key";
Dependencies
FastForex API: Used for fetching real-time currency conversion rates.
