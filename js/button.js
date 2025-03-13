document.getElementById('grid-one-btn')
.addEventListener('click', function(){
    const btnClicked = document.getElementById('grid-one-btn');
    btnClicked.disabled = true;
    btnClicked.style.opacity = "0.5"; 
    btnClicked.style.cursor = "not-allowed"; 

    const taskAssigned = document.getElementById('task-assigned');
    const currentValue = parseInt(taskAssigned.innerText); 
    const twentyThree = document.getElementById('twenty-three');
    const convertTwentyThree = parseInt(twentyThree.innerText);
   

    if (btnClicked.disabled === true) {
        const sub = currentValue - 1; 
        taskAssigned.innerText = sub; 
        const sum = convertTwentyThree + 1; 
        twentyThree.innerText = sum; 
        alert('Board alert successfully');
    } else {
        console.log('false');
    }
});

document.getElementById('grid-two-btn')
.addEventListener('click', function(){
    // const taskAssigned = document.getElementById('task-assigned');
    const btnClicked2 = document.getElementById('grid-two-btn');
    btnClicked2.disabled = true;
    // this.setAttribute('disabled',true);
    btnClicked2.style.opacity = "0.5"; 
    btnClicked2.style.cursor = "not-allowed"; 

    const taskAssigned2 = document.getElementById('task-assigned');
    const currentValue2 = parseInt(taskAssigned2.innerText); 
    const twentyThree2 = document.getElementById('twenty-three');
    const convertTwentyThree2 = parseInt(twentyThree2.innerText);
    

    if (btnClicked2.disabled === true) {
        const sub = currentValue2 - 1; 
        taskAssigned2.innerText = sub; 
        const sum = convertTwentyThree2 + 1; 
            twentyThree2.innerText = sum; 
    } else {
        console.log('false');
    }
    
})
document.getElementById('grid-three-btn')
.addEventListener('click', function(){
    // const taskAssigned = document.getElementById('task-assigned');
    const btnClicked3 = document.getElementById('grid-three-btn');
    btnClicked3.disabled = true;
    // this.setAttribute('disabled',true);
    btnClicked3.style.opacity = "0.5"; 
    btnClicked3.style.cursor = "not-allowed"; 


    const taskAssigned3 = document.getElementById('task-assigned');
    const currentValue3 = parseInt(taskAssigned3.innerText); 
    const twentyThree3 = document.getElementById('twenty-three');
    const convertTwentyThree3 = parseInt(twentyThree3.innerText);
    

    if (btnClicked3.disabled === true) {
        const sub = currentValue3 - 1; 
        taskAssigned3.innerText = sub; 
        
        const sum = convertTwentyThree3 + 1; 
            twentyThree3.innerText = sum; 
    } else {
        console.log('false');
    }
    
})
document.getElementById('grid-four-btn')
.addEventListener('click', function(){
    // const taskAssigned = document.getElementById('task-assigned');
    const btnClicked4 = document.getElementById('grid-four-btn');
    btnClicked4.disabled = true;
    // this.setAttribute('disabled',true);
    btnClicked4.style.opacity = "0.5"; 
    btnClicked4.style.cursor = "not-allowed"; 


    const taskAssigned4 = document.getElementById('task-assigned');
    const currentValue4 = parseInt(taskAssigned4.innerText);
    
    const twentyThree4 = document.getElementById('twenty-three');
    const convertTwentyThree4 = parseInt(twentyThree4.innerText);
     

    if (btnClicked4.disabled === true) {
        const sub = currentValue4 - 1; 
        taskAssigned4.innerText = sub; 

      
        const sum = convertTwentyThree4 + 1; 
            twentyThree4.innerText = sum; 
    } else {
        console.log('false');
    }
    
})
document.getElementById('grid-five-btn')
.addEventListener('click', function(){
    // const taskAssigned = document.getElementById('task-assigned');
    const btnClicked5 = document.getElementById('grid-five-btn');
    btnClicked5.disabled = true;
    // this.setAttribute('disabled',true);
    btnClicked5.style.opacity = "0.5"; 
    btnClicked5.style.cursor = "not-allowed"; 


    const taskAssigned5 = document.getElementById('task-assigned');
    const currentValue = parseInt(taskAssigned5.innerText); 

    const twentyThree5 = document.getElementById('twenty-three');
    const convertTwentyThree5 = parseInt(twentyThree5.innerText);
   

    if (btnClicked5.disabled === true) {
        const sub = currentValue - 1; 
        taskAssigned5.innerText = sub; 

     
        const sum = convertTwentyThree5 + 1; 
            twentyThree5.innerText = sum; 
    } else {
        console.log('false');
    }
    
})
document.getElementById('grid-six-btn')
.addEventListener('click', function(){
    // const taskAssigned = document.getElementById('task-assigned');
    const btnClicked6 = document.getElementById('grid-six-btn');
    btnClicked6.disabled = true;
    // this.setAttribute('disabled',true);
    btnClicked6.style.opacity = "0.5"; 
    btnClicked6.style.cursor = "not-allowed"; 
    

    const taskAssigned6 = document.getElementById('task-assigned');
    const currentValue6 = parseInt(taskAssigned6.innerText); 

    const twentyThree = document.getElementById('twenty-three');
    const convertTwentyThree = parseInt(twentyThree.innerText);
    

    if (btnClicked6.disabled === true) {
        const sub = currentValue6 - 1; 
        taskAssigned6.innerText = sub; 

        const sum = convertTwentyThree + 1; 
        twentyThree.innerText = sum; 

    } else {
        console.log('false');
    }
})