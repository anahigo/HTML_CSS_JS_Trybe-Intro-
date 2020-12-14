// Substitua as duas atribuições por uma atribuição de desestruturação equivalente. Ainda deve atribuir as variáveis todaye tomorrowos valores de todaye tomorrowdo HIGH_TEMPERATURESobjeto.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Only change code above this line
