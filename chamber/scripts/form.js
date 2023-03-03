function showDetails() {
    var npDetails = document.getElementById("np-details");
    var bronzeDetails = document.getElementById("bronze-details")
    var silverDetails = document.getElementById("silver-details")
    var goldDetails = document.getElementById("gold-details")
   if (document.getElementById("show-np").checked) {
        npDetails.style.display = "block";
    } else {
        npDetails.style.display = "none";
    }
    if (document.getElementById("show-bronze").checked){
        bronzeDetails.style.display = "block";
    } else{
        bronzeDetails.style.display = "none";    }
    if (document.getElementById("show-silver").checked){
        silverDetails.style.display = "block";
    } else{
        silverDetails.style.display = "none";    }
    if (document.getElementById("show-gold").checked){
        goldDetails.style.display = "block";
    } else{
        goldDetails.style.display = "none";    }
}

document.getElementById("load-time").textContent = new Date().toISOString();