 async function fetchdata(){
            try{

        const nam= document.getElementById("nam").value.toLowerCase()        ;
        
const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${nam}`);
if(!response.ok){
    throw new Error("Could not find")
}
const data= await response.json();
const poke= data.sprites.front_default;
const image=document.getElementById("pokeimg")
image.src= poke;
image.style.display="block"
            }
            catch(error){
console.error(error);
            }
        }