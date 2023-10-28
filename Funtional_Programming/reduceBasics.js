var oders = [
    { amount: 250},
    { amount: 400},
    { amount: 100},
    { amount: 325}
]

var totalAmount = oders.reduce(function(sum, order) {
    return sum + order.amount
}, 0)

/*
var totalAmount = 0
for (var i = 0; i < oders.length; i++) {
    totalAmount += oders[i].amount
}*/
console.log(totalAmount);