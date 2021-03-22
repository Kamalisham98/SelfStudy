function prom(x){
    return new Promise((success,reject)=>{
        if(x < 10){
            success("berhasil")
        }else{
            reject("gagal")
        }
    });
}

let x=10;
prom(10).then((data)=> console.log(data)).catch((data)=> console.log(data))