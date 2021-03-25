class HelloController{
    get(req, res) {
        console.log("Get Running"); // return to terminal
        // console.log("respons to terminal 2");
        // res.send(`respons for  Postman is ${req.query.name}`);  //return to postman
        if(req.params.name == "kamal"){
            res.send(`fullname is kamal isham`);
        }else{
            res.send(`user not found`);
        }
        // req.params={name : "kamal", fullname:"Kamal Isham"} //manually add
    }
    post(req, res) {
        console.log("Post Running");
        res.send("This is POST!");
    }
    put(req, res) {
        console.log("Put Running");
        res.send("This is PUT!");
    }
    delete(req, res) {
        console.log("Delete Running");
        res.send("This is DELETE!");
    }

}

module.exports = new HelloController;