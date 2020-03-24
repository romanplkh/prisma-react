import axios from "axios";

/**
 *Gets values to display on page from collection returned from Clarifi API and stores in object
 * @param {*} dataSet array of values and probabilities  returned from Clarifi API
 */
const extractValueAndProbability = dataSet => {
  return dataSet.reduce(
    (result, currentEl) => {
      if (+currentEl.value > result.probability) {
        result.value = currentEl.name;
        result.probability = currentEl.value;
        return result;
      } else {
        return result;
      }
    },
    { value: 0, probability: 0 }
  );
};

/**
 * Since Clarifi API has a very long path to values,
 * this method builds path based on the data type required
 * @param {*} results dataSet
 * @param {*} group type of data to access
 */
const shortenPath = (results, group) => {
  if (!results.message) {
    return results.outputs[0].data.regions[0].data.face[group].concepts;
  } else {
    return results.message = "Please provide a URL with an image of a person";
  }

};

/**
 * Calls helpers methods and returnes formated data for UI
 * @param {*} results data retrieved from API Call
 * @returns values to display on UI
 */
const processData = results => {
  if (!results.name && Object.keys(results.outputs[0].data).length !== 0 && results.outputs[0].data.regions[0].data.concepts.length > 0) {
    const ageArray = shortenPath(results, "age_appearance");
    const genderArray = shortenPath(results, "gender_appearance");
    const raceArray = shortenPath(results, "multicultural_appearance");

    const ageData = extractValueAndProbability(ageArray);
    const genderData = extractValueAndProbability(genderArray);
    const cultureData = extractValueAndProbability(raceArray);

    const demographics = {
      ageData,
      genderData,
      cultureData
    };

    return demographics;
  } else {
    return { message: "Please provide a valid person image" }
  }



};

/**
 * Makes API Call to Backend to get data from Clarifi API
 * @param {*} imageUrl - url to process
 * @returns response with data or error
 */
const getData = async imageUrl => {
  const response = await axios({
    url: "getdata",
    headers: {
      "Content-type": "application/json"
    },
    method: "post",
    data: {
      imageUrl: imageUrl
    }
  });

  return await processData(response.data);


};

export const analyzeImage = async (imageUrl, dataFromMemory = false) => {
  if (dataFromMemory) {
    //Emulate api call for loading
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(processData(JSON.parse(localStorage.getItem("data"))));
      }, 2500);
    });
  } else {
    return getData(imageUrl);
  }
};
