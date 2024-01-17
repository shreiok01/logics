const n = 7;

let matches =0
let teams = n
for(let i=0; i<= n; i++){ 
   if(teams%2===0){
    matches = parseInt(matches+(teams/2))
    teams = (teams-1)/2
   }else{
    matches = parseInt(matches+((teams-1)/2)) 
    teams = ((teams-1)/2 )+1
   }
  if(teams <=1) return 
}

console.log(matches)

