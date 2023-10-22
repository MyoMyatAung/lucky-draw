const fs = require("fs");
// const json2csv = require("json2csv").parse;

export const generateCSV = (jsonData) => {
  // Define the fields you want to include in the CSV
  fs.writeFileSync("output.json", jsonData, (err) => {
    if (err) throw err;
    console.log("JSON file saved as output.json");
  });
  // const fields = [
  //   "couponNumber",
  //   "couponCustomer",
  //   "customerCode",
  //   "shop",
  //   "city",
  //   "prize",
  // ]; // Replace with the actual field names from your JSON

  // Convert JSON to CSV
  // const csv = json2csv("./output.json", { fields });

  // Write the CSV data to a file
  // fs.writeFile("output.csv", csv, (err) => {
  //   if (err) throw err;
  //   console.log("CSV file saved as output.csv");
  // });
};
