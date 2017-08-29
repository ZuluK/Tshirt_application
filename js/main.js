//Create an E-commerce gallery using constructor notation
//Dynamically create your elements using JavaScript
//Use bootstrap to style it and display the items evenly

// product constructor
function Tshirt(name, size, color, stock, image) {
  this.name = name
  this.size = size
  this.color = color
  this.stock = stock
  this.image = image
}
//create new products from the product constructor
var whitetee = new Tshirt("White Tee","medium","white", 200,"img/whitetee.png")
var blacktee = new Tshirt("Black Tee", "medium", "black", 300,"img/blacktee.png")
var redtee = new Tshirt("Red Tee", "large", "red", 100, "img/redtee.png")
var bluetee = new Tshirt("Blue Tee", "small", "blue", 200, "img/bluetee.png")
var greentee = new Tshirt("Green Tee", "small", "blue", 150, "img/greentee.png")
var yellowtee = new Tshirt("Yellow Tee", "large", "yellow", 200, "img/yellow.gif")
//create array to add products too
var TshirtArray = new Array
//add products to array of products
TshirtArray.push(whitetee,blacktee,redtee,bluetee,greentee,yellowtee)
//loop through products array
for(var i = 0; i < TshirtArray.length;i++){
  //create new elements for each products
  var Nitem = document.createElement("div")
  var newDiv = document.createElement("div")
  var nameHeader = document.createElement("h1")
  var sizeHeader = document.createElement("h3")
  var colorHeader = document.createElement("h3")
  var stockHeader = document.createElement("h3")
  var btn = document.createElement("button")
  var image = document.createElement("img")


  //create text nodes for products
  var tName = document.createTextNode(TshirtArray[i].name)
  var tSize = document.createTextNode("Available in size: " + TshirtArray[i].size)
  var tColor = document.createTextNode("Color: " + TshirtArray[i].color)
  var tStock = document.createTextNode("In stock: " + TshirtArray[i].stock)
  var tButton = document.createTextNode("Buy now!")

  //updates the source attribute on image
  image.src = TshirtArray[i].image

  //updates the class attributes
  image.className = 'img-responsive'
  btn.className = "btn btn-primary btn-lg"
  Nitem.className = "col-sm-4"
  newDiv.clasName = "tshirt Shirtname" + [i] + " thumbnail"

  //appends text to elements
  nameHeader.appendChild(tName)
  sizeHeader.appendChild(tSize)
  colorHeader.appendChild(tColor)
  stockHeader.appendChild(tStock)
  btn.appendChild(tButton)

  //appends elements to new div
  newDiv.appendChild(nameHeader)
  newDiv.appendChild(image)
  newDiv.appendChild(sizeHeader)
  newDiv.appendChild(colorHeader)
  newDiv.appendChild(stockHeader)
  newDiv.appendChild(btn)

  //add new div to to new item div
  Nitem.appendChild(newDiv)

  document.getElementById('products').appendChild(newDiv)
}
