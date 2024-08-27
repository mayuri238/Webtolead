function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate =document.querySelector(".inputdate");
    console.log("inputdate.value", inputdate.value);
    
    let formattedData = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value =formattedDate;
}
