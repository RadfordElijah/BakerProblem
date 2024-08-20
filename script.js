function cakes(recipe, available) {
    
    //creates an arr of all the keys in the available Obj
    const availableIngredients = Object.keys(available) 
    //console.log(availableIngredients)
    
    let numBaked = [];
    
    for (let key in recipe) {
        if (availableIngredients.includes(key)){
            
            /*
                console.log("Key: " + key)
                console.log("Recipe amount: " + recipe[key])
                console.log("available(key):" + available[key])
            */
            numBaked.push(Math.floor(available[key] / recipe[key]));
        }
        else {
            // console.log("Missing ingredient")
            return 0;
        }
    }
    //console.log(numBaked);
    
    return numBaked.sort((a, b) => a - b)[0];
}


cakes({flour: 500, sugar: 200, eggs: 1},{flour: 1200, sugar: 1200, eggs: 5, milk: 200})
      
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100},{sugar: 500, flour: 2000, milk: 2000})

/* ALT SOLUTION
    function cakes(recipe, available) {
        var numCakes = [];
  
        for(var key in recipe){
            if(recipe.hasOwnProperty(key)){
                if(key in available){
                    numCakes.push(Math.floor(available[key] / recipe[key]));
                }else{
                    return 0;
                }
            }
        }
  
    return Math.min.apply(null, numCakes); 
    }

    ! don't forget that you can use obj.hasOwnProperty()
*/
