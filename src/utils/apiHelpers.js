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

const shortenPath = (results, group) => {
  return results.outputs[0].data.regions[0].data.face[group].concepts;
};

export const getData = imageUrl => {
  const results = JSON.parse(localStorage.getItem("data"));

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

  console.log(demographics)

  return demographics;

  // app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, imageInput).then(
  //   function(response) {
  //     // do something with response
  //     console.log(response);

  //     localStorage.setItem("data", JSON.stringify(response));
  //   },
  //   function(err) {
  //     // there was an error
  //   }
  // );
};

// const result = ageArray.reduce(
//   (acc, curr) => {
//     console.log(curr);
//     if (Number(curr.value) > acc.probability) {
//       acc.age = curr.name;
//       acc.probability = curr.value;
//       return acc;
//     } else {
//       return acc;
//     }
//   },

//   { age: 0, probability: 0 }
// );
