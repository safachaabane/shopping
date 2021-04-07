// console.log(document)
// var totalTag = document.getElementById("total")
// var totalTag = document.querySelector("#total")
// var imgs = document.getElementsByTagName("img")
// var imgs = document.querySelectorAll("img")
var btnsAddTag = document.getElementsByClassName("add")
var btnsRemoveTag = document.getElementsByClassName("remove")
var likeTag = document.getElementsByClassName("like")
var checkTags = document.querySelectorAll(".check")
var btnsDeleteTag = document.getElementsByClassName("delete")

console.log(btnsAddTag)


for (var j= 0 ; j < checkTags.length ; j++){
    checkTags[j].addEventListener("click",total)
}

for (var i = 0; i < btnsAddTag.length; i++) {
    // btnsAddTag[i].addEventListener("click",add)
    btnsAddTag[i].onclick = add
 
    
}
for (var i = 0; i < btnsRemoveTag.length; i++) {
    
    btnsRemoveTag[i].onclick = remove
    
}
for (var k = 0; k < likeTag.length; k++) {
    
    likeTag[k].onclick = like
    
}
for (var b = 0; b < btnsDeleteTag.length; b++) {
    btnsDeleteTag[b].onclick = delet
}

function add(event) {
    // console.log(event.target)
    var btnAdd =event.target
    var tdElt = btnAdd.parentElement 
    // console.log(tdElt)
    var inputTag = tdElt.querySelector(".quantity")
    var quantity = Number(inputTag.value)
    quantity++
    inputTag.value = quantity
    var trElt = btnAdd.parentElement.parentElement
    var unitPriceTag = trElt.querySelector(".unitPrice")
    var priceTag = trElt.querySelector(".price")
    var price = Number(priceTag.innerHTML)
    var unitPrice = Number(unitPriceTag.innerHTML)
    price = quantity * unitPrice
    priceTag.innerHTML = price
  
}
function remove(event) {
    // console.log(event.target)
    var btnRemove =event.target
    var tdElt = btnRemove.parentElement 
    // console.log(tdElt)
    var inputTag = tdElt.querySelector(".quantity")
    var quantity = Number(inputTag.value)
    quantity--
    inputTag.value = quantity
    var trElt = btnRemove.parentElement.parentElement
    var unitPriceTag = trElt.querySelector(".unitPrice")
    var priceTag = trElt.querySelector(".price")
    var price = Number(priceTag.innerHTML)
    var unitPrice = Number(unitPriceTag.innerHTML)
    price = quantity * unitPrice
    priceTag.innerHTML = price
if (inputTag.value<0){
    inputTag.value=0
    priceTag.innerHTML = 0
}

    
}
  
function like(event) {
    var likeTag=event.target
    console.log(likeTag)
    
    if(likeTag.style.color !=="red"){
    likeTag.style.color="red"
    
}
else likeTag.style.color = "black"
}   
function delet(e) {
e.preventDefault()
    var totalTag = document.getElementById("total")
    var total = Number(totalTag.innerHTML)
    var btnDelete = e.target
    var trelt=btnDelete.parentElement.parentElement
    var priceTag = trelt.querySelector(".price")
    var price = Number(priceTag.innerHTML)
        total-=price 
     
    tableelt=trelt.parentElement
    var index = trelt.rowIndex
    console.log(index)
    tableelt.deleteRow(index)
    totalTag.innerHTML = total
    
  

}


function total(event) {
    var currentCheck = event.target
    var totalTag = document.getElementById("total")
    var total = Number(totalTag.innerHTML)
    var trElt = currentCheck.parentElement.parentElement
    var priceTag = trElt.querySelector(".price")
    var price = Number(priceTag.innerHTML)
    var btnAddTag = trElt.querySelector(".add")
    var btnRemoveTag = trElt.querySelector(".remove")
    var inputTag = trElt.querySelector(".quantity")
    var quantity = Number(inputTag.value)
    

    if (currentCheck.checked === true) {
        total+=price
        btnAddTag.setAttribute("disabled",true)
        btnRemoveTag.setAttribute("disabled",true)
    }
    else {
        total-=price
        btnAddTag.removeAttribute("disabled")
        btnRemoveTag.removeAttribute("disabled")
        quantity=0
        console.log(quantity)
    }
    totalTag.innerHTML = total
    inputTag.value = quantity
}
