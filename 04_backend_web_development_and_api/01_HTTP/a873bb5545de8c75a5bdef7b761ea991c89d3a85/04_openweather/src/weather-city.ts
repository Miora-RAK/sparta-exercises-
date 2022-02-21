import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByCity(city: string): void {
  // code the function here

  request(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, temperature) => {
      if (error) {
        console.error(error);
      } else {
        const json = JSON.parse(temperature);
        console.log(`${json.main.temp} °C`);
      }
    },
  );
}
// leave lines below for tests to work properly
export { weatherByCity };
