const data = [
  {
    name: "John",
    status: "Positive",
  },
  {
    name: "Mike",
    status: "Suspect",
  },
  {
    name: "Kamal",
    status: "Suspect",
  },
];

//declare person status
let status1 = "Suspect";

switch (status1) {
  case "Positive":
    const positive = data.filter((person) => person.status == "Positive");
    console.log(positive.map((person)  => person.name));
    break;
  case "Suspect":
    const suspect = data.filter((person) => person.status == "Suspect");
    console.log(suspect.map((person) => person.name));
    break;
  default:
    console.log("Wrong input");
}
