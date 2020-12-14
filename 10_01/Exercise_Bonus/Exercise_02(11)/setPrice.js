// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  return { ...item, price };
};

module.exports = setPrice;
