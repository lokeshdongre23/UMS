import fs from "fs";
export function loadFromFile() {
  try {
    const data = JSON.parse(fs.readFileSync("./utills/Users.json", "utf-8"));
    return data;
  } catch (error) {
    console.error(error);
  }
}
export function saveFile(user) {
  try {
    const data = loadFromFile();
    data.push(user);
    console.log(data);
    fs.writeFileSync("./utills/Users.json", JSON.stringify(data), "utf-8");
    // console.log("Added");
  } catch (error) {
    console.error(error);
  }
}
