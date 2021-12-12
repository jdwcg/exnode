var fruit = [
   {name:'사과', price: 100},
   {name:'오렌지', price: 100},
   {name:'딸기', price: 100},
   {name:'배', price: function(a,b){
      return a + b;
   }},
];

var i = 0;
while(i < fruit.length) {
   console.log(fruit[i].name);
   i = i + 1;
}

console.log(fruit[3].price(10,10));
