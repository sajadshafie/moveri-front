export default {
  currencyNumber: (data) => {
    const z = data.replace(/[^0-9]/g, "");
    const price = Number(z);
    const result = price.toLocaleString("en-US");
    return result;
  },
  regexNumber: (data) => {
    const result = data.replace(/[^0-9]/g, "");
    return result;
  },
};
