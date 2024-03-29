const currencyFrom = document.querySelector("#from-currency");
const currencyTo = document.querySelector("#to-currency");

const Amount = document.querySelector("#amount");

const convertResult = document.querySelector(".convert-result");

const convertmoneyRes = (data, sign) => {
  convertResult.innerHTML = `${sign}:${data}`;
};

const getRate = async () => {
  const amount = Amount.value;

  const fromCurr = currencyFrom.value;  //Accessing the value of option in select
  const toCurr = currencyTo.value;

  const apiKey = "Your Api Key";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const url = `https://api.fastforex.io/convert?from=${fromCurr}&to=${toCurr}&amount=${amount}&api_key=${apiKey}`;

  try {
    const response = await fetch(url, options);
    const resData = await response.json();
    const convertedAmount = resData.result[toCurr];

    // Access the converted amount for the 'toCurr'
    convertmoneyRes(convertedAmount, toCurr);
  } catch (error) {
    convertResult.innerHTML = ("Error fetching currency data:", error);
  }
};
