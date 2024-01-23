function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid weight and height values.");
        return;
    }

    // Calculate BMI
    var bmi = weight / ((height / 100) * (height / 100));
    bmi = bmi.toFixed(1);

    // Display result
    var resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Your BMI is: ${bmi}<br>${getBMICategory(bmi)}`;
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Category: Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Category: Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Category: Overweight";
    } else {
        return "Category: Obesity";
    }
}
