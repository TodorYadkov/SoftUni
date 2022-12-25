function painting(input) {
    let xHeightHouse = Number(input[0]);
    let yLenghtWall = Number(input[1]);
    let hHeightTriangleRoof = Number(input[2]);
    let doorDimension = 1.2*2;
    let windowsDimension = (1.5*1.5)*2;
    let sideWall = (xHeightHouse*yLenghtWall)*2-windowsDimension;
    let frontBackWall = (xHeightHouse*xHeightHouse)*2-doorDimension;
    let roofRectangle = (xHeightHouse*yLenghtWall)*2;
    let roofTriangle = (xHeightHouse*hHeightTriangleRoof/2)*2;

    let sumGreenPaint = (sideWall+frontBackWall)/3.4;
    let sumRedPaint = (roofRectangle+roofTriangle)/4.3;

    console.log(sumGreenPaint.toFixed(2));
    console.log(sumRedPaint.toFixed(2));
}
painting([10.25,15.45,8.88])