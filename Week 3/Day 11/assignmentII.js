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
  {
    name: "Isham",
    status: "Positive",
  },
];

//declare person status
let status1 = "Positive";

//Switch depends on status
switch(status1){
  //status Positive
  case "Positive":
    let positive=[]; //declare new array
    for(let i = 0; i< data.length;i++){
      if (data[i].status=="Positive"){
        positive.push(data[i].name); // push to a new array
      }
    }
    console.log(positive); // print array
    break;
  //status = Suspect
  case "Suspect":
    const suspect = data.filter((person) => person.status == "Suspect");
    console.log(suspect.map((person) => person.name));
    break;
  default:
    console.log("Wrong input");
}



