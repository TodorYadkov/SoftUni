function basketball(input) {
    let taxesPlayng = Number(input[0]);
    let shoesPrice = taxesPlayng - (taxesPlayng * 0.40);
    let equipPrice = shoesPrice - (shoesPrice * 0.20);
    let ballPrice = equipPrice / 4;
    let accessoriesPrice = ballPrice / 5;
    
    console.log(taxesPlayng+shoesPrice+equipPrice+ballPrice+accessoriesPrice);
}
basketball([365])