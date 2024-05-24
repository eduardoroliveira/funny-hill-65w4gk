/**
 *
 * @param {string} value A value to be set as slowly typed
 * @param {number} msInterval The interval in milliseconds between each letter appear
 * @param {(string)=> void} setter A string setValue function to be called for each letter update
 * @returns The promise will resolve once the entire value is processed
 */
export const setStringTyped = async (value, msInterval, setter) =>
  new Promise((resolve, _reject) => {
    const splitValue = value.split("");
    let bufferedValue = "";
    let index = 0;
    const typer = setInterval(() => {
      bufferedValue += splitValue[index++];
      setter(bufferedValue);
      if (index === splitValue.length) {
        clearInterval(typer);
        resolve("");
      }
    }, msInterval);
  });
