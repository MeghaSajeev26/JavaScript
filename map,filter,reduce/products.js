var items=[
    {id:100,name:"sugar",price:35,ava_qty:10},
    {id:101,name:"teapowder",price:105,ava_qty:100},
    {id:102,name:"boost",price:150,ava_qty:10},
    {id:103,name:"complan",price:110,ava_qty:5},
    {id:104,name:"rusk",price:140,ava_qty:0},
    {id:105,name:"oreo",price:40,ava_qty:0}
]

//product names
var items_name=items.map(product=>product.name)
console.log(items_name);

//no.of products
var count=items.length  
console.log("Count="+count);

//product names in uppercase
var items_name=items.map(product=>product.name.toUpperCase())
console.log(items_name);

//price above 100
var costly_items=items.filter(product=>product.price>100)
console.log(costly_items);

//price less than 100
var lowcost_items=items.filter(product=>product.price<100)
console.log(lowcost_items);

//fetch products whose quantity >5
var lowstock_items=items.filter(product=>product.ava_qty>5)
console.log(lowstock_items);

//print all items in stock
var stock_items=items.filter(product=>product.ava_qty>0)
console.log(stock_items);

//print item name having low aval_qty
var itemname=items.reduce((product1,product2)=>product1.ava_qty<product2.ava_qty?product1:product2)
console.log(itemname);

//taking all items with 0 qty
var itemname=items.reduce((product1,product2)=>product1.ava_qty<product2.ava_qty?product1.ava_qty:product2.ava_qty)
//all items with 0 qty
var lowavl_items=items.filter(product=>product.ava_qty==itemname)
//items with qty 0
console.log(lowavl_items);

//product with highest price
var costlyitem=items.reduce((product1,product2)=>product1.price>product2.price?product1:product2)
console.log(costlyitem);

//sort prodcts in descending order of price
var price_sorted=items.sort((product1,product2)=>product2.price-product1.price)
console.log(price_sorted);

//sort in available quantity in ascending order
var qtysorted=items.sort((product1,product2)=>product1.ava_qty-product2.ava_qty)
console.log(qtysorted);

//find information about boost
//FIND -- to get details of only one particular item--(even if many are present)
var boost_details=items.find(product=>product.name="boost")
console.log(boost_details);

//SOME
//to check if item -- hide and seek is available
var is_available=items.some(product=>product.name=="hideandseek")
console.log(is_available); //not present--returns false

//items less than 50 is available
var available_under50=items.some(product=>product.price<=50)
console.log(available_under50);  //present--returns true

//oops
