// Nullable type
const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search :(");
  } else {
    console.log("searching...");
  }
};

searchName(null);

// unknown type
const getMyCarSpeed = (speed: unknown) => {
  // kmw^-1 --> ms^1
  if (typeof speed === "number") {
    const convertedSpeed = (speed * 1000) / 3600;
    console.log(`Speed is ${convertedSpeed}`);
  }
  if (typeof speed === "string") {
    const [value, unit] = speed.split(" "); // ['10', 'km/h'];
    const convertedSpeed = (parseFloat(value) * 1000) / 3600;
    console.log(`Speed is ${convertedSpeed}`);
  } else {
    console.log("There is wrong type...");
  }
};

getMyCarSpeed(10);
getMyCarSpeed("10 Kmh");
