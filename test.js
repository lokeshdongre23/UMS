import fs from "fs";

const obj = {
  name: "lokesh",
  role: new Set(["add", "del"]),
};
export function write(user) {
  // if(!user.roles instanceof Set && user.roles.size===0){
  //     console.log("can't Add to the file");
  // }
  const data = loadFromFile();
  // if(data.user.some((i)=>{
  //     return i.id === user.id;
  // })){

  // }
  console.log(data);
  data.add(user);
  console.log(data);
  fs.writeFileSync("./test.json", JSON.stringify(data), "utf8");
  console.log("added");
}
export function loadFromFile() {
  try {
    const data = JSON.parse(fs.readFileSync("./test.json", "utf-8"));

    return data;
  } catch (error) {
    console.error(error);
  }
}

write(obj);
