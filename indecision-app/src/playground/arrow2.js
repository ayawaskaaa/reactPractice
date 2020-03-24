const multiplier = {
    multiplyBy: 2,
    numbers: [2, 3, 11],
    multiply(){
        return this.numbers.map((num)=>num*this.multiplyBy);
    }
}
console.log(multiplier.multiply())