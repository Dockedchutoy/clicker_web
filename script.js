let score = 0;
document.getElementById("counter").innerHTML = score;
let upgrade = 1;
let auto_upgrade = 0;
let ac_interval = 1000; // ac = autoclicker

// btn
btn = document.getElementById("clicker")
btn.addEventListener("click", function() {
    score += upgrade;
    document.getElementById("counter").innerHTML = score;
});

// Autoclicker upgrade 1
upgrade1 = document.getElementById("upgrade1")
upgrade1.addEventListener("click", function() {
    if( score >= 10){
        score -=10;
        if (auto_upgrade == 0) {
            auto_upgrade += 1;
            document.getElementById("counter").innerHTML = score;
            document.getElementById("ac_interval_view").innerHTML = `Autoclick every ${ac_interval / 1000} seconds`
        } else {
            ac_interval -= 2;
            document.getElementById("counter").innerHTML = score;
            document.getElementById("ac_interval_view").innerHTML = `Autoclick every ${ac_interval / 1000} seconds`
        }
    }

});

// Manual clicker upgrade 1
upgrade2 = document.getElementById("upgrade2")
upgrade2.addEventListener("click", function() {
    if( score >= 100){
        score -= 100;
        upgrade += 1;
        document.getElementById("counter").innerHTML = score;
    }

});

// Auto clicker
setInterval(autoClicker, ac_interval)
function autoClicker() {
    score += auto_upgrade;
    document.getElementById("counter").innerHTML = score;
}