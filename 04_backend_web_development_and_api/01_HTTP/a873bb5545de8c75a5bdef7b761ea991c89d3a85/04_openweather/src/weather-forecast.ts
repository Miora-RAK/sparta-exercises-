import request from "@fewlines-education/request";
import "dotenv/config";

function weatherByZipcode(zipcode: string, countryCode: string): void {
  // code the function here
  request(
    `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countryCode}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, weather) => {
      if (error) {
        console.error(error);
      } else {
        const json = JSON.parse(weather);
        console.log(`Weather for ${json.city.name}`);
        type Obj = {
          date: string;
          temperature: string;
          weather: string;
        };
        const obj: Obj = {
          date: json.list[0].dt_txt,
          temperature: json.list[0].main.temp,
          weather: json.list[0].weather[0].description,
        };
        console.log(obj);
      }
    },
  );
}

function weatherByLatitudeAndLongitude(latitude: number, longitude: number): void {
  // code the function here
  request(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`,
    (error, weathers) => {
      if (error) {
        console.error(error);
      } else {
        const hello = JSON.parse(weathers);
        type Obj = {
          date: string;
          temperature: string;
          weather: string;
        };
        const obj: Obj = {
          date: hello.list[0].dt_txt,
          temperature: hello.list[0].main.temp,
          weather: hello.list[0].weather[0].description,
        };
        //date: ${json.list[0].dt_txt}\ntemperature : ${json.list[0].main.temp},\nweather : ${json.list[0].weather[0].main}
        console.log(obj);
      }
    },
  );
}

// leave lines below for tests to work properly
export { weatherByZipcode, weatherByLatitudeAndLongitude };
