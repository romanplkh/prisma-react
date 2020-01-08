export const extractValueAndProbability = dataSet => {
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

export const shortenPath = (results, group) => {
  return results.outputs[0].data.regions[0].data.face[group].concepts;
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
