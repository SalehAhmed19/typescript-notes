// Nullable type
const searchName = (value: string | null) => {
  if (value === null) {
    console.log("There is nothing to search :(");
  } else {
    console.log("searching...");
  }
};

searchName(null);
