function volume_sphere(event) {
    event.preventDefault(); // Prevent form submission
    let radius = document.getElementById("radius").value;
    let radiusValue = parseFloat(radius);
    let volume = document.getElementById("volume");

    if (!isNaN(radiusValue) && radiusValue >= 0) {
        let temp = (4 / 3) * Math.PI * Math.pow(radiusValue, 3);
        volume.innerHTML = `${temp.toFixed(4)}`;
    } else {
        volume.textContent = "NaN";
    }
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
