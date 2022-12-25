function rectangle(width, height, color) {
    const rect = {
        width: Number(width),
        height: Number(height),
        color: color[0] === color[0].toUpperCase() ? color : color.replace(color[0], color[0].toUpperCase()),
        calcArea() {
            return rect.width * rect.height;
        },
    };

    return rect;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
