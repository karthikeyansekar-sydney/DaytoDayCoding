async function hostDinnerParty() {
 try {                                    //Here we are handling errors using try ..catch
   let dinner = await cookBeanSouffle();
   console.log(`${dinner} is served!`);
 }
 catch(error){
   console.log(error);
   console.log('Ordering a pizza!');
 }
}

let randomSuccess = () => {
 let num = Math.random();
 if (num < .5 ){
   return true;
 } else {
   return false;
 }
};

//This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
 return new Promise((resolve, reject) => {
   console.log('Fingers crossed... Putting the Bean Souffle in the oven');
   setTimeout(()=>{
     let success = randomSuccess();
     if(success){
       resolve('Bean Souffle');
     } else {
       reject('Dinner is ruined!');
     }
   }, 1000);
 })
}
hostDinnerParty();
