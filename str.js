const name = "raam"

const str=(name)=>{
    let count=0
    for(let i=0;i<name.length;i++){
        let element = name[i]
        if(element==='a' || element==='e' || element==='i' || element==='o' || element==='u'){
            count ++
        }
    }
    return count
}

console.log("str",str(name))