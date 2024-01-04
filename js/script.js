// script.js

// Fungsi-fungsi perhitungan luas segitiga
function calculateArea() {
    const sideA = parseFloat(document.getElementById('areaSideA').value);
    const sideC = parseFloat(document.getElementById('areaSideC').value);

    if (!isNaN(sideA) && !isNaN(sideC)) {
        const area = 0.5 * sideA * sideC;
        const calculation = `Luas = 1/2 x ${sideA} x ${sideC} = ${area}`;
        
        document.getElementById('areaResult').innerHTML = `Hasil Luas: ${area}`;
        document.getElementById('areaCalculation').innerHTML = `Proses Perhitungan: ${calculation}`;
    } else {
        alert('Harap masukkan angka valid untuk panjang alas dan tinggi.');
    }
}

// Fungsi reset formulir luas segitiga
function resetAreaForm() {
    document.getElementById('areaForm').reset();
    document.getElementById('areaResult').innerHTML = '';
    document.getElementById('areaCalculation').innerHTML = '';
}

// Fungsi-fungsi perhitungan keliling segitiga
function calculatePerimeter() {
    const sideA = parseFloat(document.getElementById('perimeterSideA').value);
    const sideB = parseFloat(document.getElementById('perimeterSideB').value);
    const sideC = parseFloat(document.getElementById('perimeterSideC').value);

    if (!isNaN(sideA) && !isNaN(sideB) && !isNaN(sideC)) {
        const perimeter = sideA + sideB + sideC;
        const calculation = `Keliling = ${sideA} + ${sideB} + ${sideC} = ${perimeter}`;
        
        document.getElementById('perimeterResult').innerHTML = `Hasil Keliling: ${perimeter}`;
        document.getElementById('perimeterCalculation').innerHTML = `Proses Perhitungan: ${calculation}`;
    } else {
        alert('Harap masukkan angka valid untuk panjang sisi A, B, dan C.');
    }
}

// Fungsi reset formulir keliling segitiga
function resetPerimeterForm() {
    document.getElementById('perimeterForm').reset();
    document.getElementById('perimeterResult').innerHTML = '';
    document.getElementById('perimeterCalculation').innerHTML = '';
}
