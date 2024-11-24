
let inputFood = document.getElementById('input-food');
let inputButton = document.getElementById('input-btn');
let foodContainer = document.getElementById('food-container'); 

const handleInputFood=() => {

    let newFoodItemEl=document.createElement("li")
    const divItem=document.createElement("div")
    const divRemoveButton=document.createElement("div")

    newFoodItemEl.append(divItem,divRemoveButton)
    divRemoveButton.parentElement.setAttribute('onclick',"removeItem(event)")
    divRemoveButton.innerHTML='<i class="fa fa-xmark" aria-hidden="true"></i>'

    newFoodItemEl.className="food-item"
    newFoodItemEl.textContent=inputFood.value;

    //append
    foodContainer.append(newFoodItemEl)
    newFoodItemEl.append(divItem)
    newFoodItemEl.append(divRemoveButton)
    inputFood.value='';
};

inputButton.addEventListener("click",handleInputFood) 

inputFood.addEventListener("keyup", (event)=>{
    if(event.key ==="Enter"){
        handleInputFood();
    }else if(event.key==="KeyZ" && (event.ctrlKey || event.metaKey)){
        inputFood.value=''
    }
})

//Undo Operations

// Remove food items
function removeItem(event){
    let existingList=event.target.parentNode.parentNode
    
    //
    existingList.remove()// new way

    existingList.parentNode.removeChild(existingList)//old way
}


