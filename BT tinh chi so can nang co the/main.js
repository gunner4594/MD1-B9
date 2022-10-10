weight = prompt('Enter weight number');
height = prompt('Enter height number');
let bmi = weight/(height**2);
if (bmi >= 30) {
    alert('Obese');
} else {
    if (bmi >= 25) {
        alert('Overweight');
    } else if (bmi >= 18.5) {
        alert('Normal');
    } else {
        alert('Underweight');
    }
}
