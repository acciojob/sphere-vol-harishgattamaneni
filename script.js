function volume_sphere() {
let radius = document.getElementById("radius").value
    if(Number.parseInt(radius)>0){
        let volume=document.getElementById("volume")
        let temp=4*Math.PI*Math.pow(radius,3)
        temp/=3
        volume.value=temp
    }
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
