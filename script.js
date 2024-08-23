function getAreaOfCircle(r) {
	return 3.14159265359 * r ** 2;
}
function getCircumferenceOfCircle(r) {
	return 2 * 3.14159265359 * r;
}
function getAreaOfSquare(s) {
	return s ** 2;
}
function getAreaOfTriangle(b, h) {
	return (b / 2) * h;
}

console.log("The area of this circle is " + getAreaOfCircle(45));
console.log(
	"The circumference of this circle is " + getCircumferenceOfCircle(45)
);
console.log("The area of this square is " + getAreaOfSquare(35.465));
console.log("The area of this triangle is " + getAreaOfTriangle(35, 85));
