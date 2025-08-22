// variably

let score = 2000; //penízky
document.getElementById("counter").innerHTML = score;
let mc_upgrade = 1; // Za jeden manual click

let ac_upgrade = 1; // Za jeden autoclick
let ac_interval = 0; // autoclicker speed
let ac_amount = 0; //Počet za jednu sekundu

// btn

let btn = document.getElementById("clicker");
btn.addEventListener("click", function() {
    score += mc_upgrade;
    document.getElementById("counter").innerHTML = score;
});

// Manual clicker mc_upgrade 1

let upgrade_mc = document.getElementById("upgrade_mc");
let upgrade_mc_count = 0;
let upgrade_mc_cost = 10;
upgrade_mc.addEventListener("click", function() {
    if( score >= upgrade_mc_cost){
        score -= upgrade_mc_cost;
        mc_upgrade += 1;
        document.getElementById("counter").innerHTML = score;

        upgrade_mc_count += 1;
        upgrade_mc_cost += Math.ceil(upgrade_mc_cost * (20 / 100));

        /* upgrade_mc.disabled = true;
        upgrade_mc.innerText = "Double Manual Clicks - BOUGHT OUT"; */

        upgrade_mc.innerText = `Manuální Klik - ${upgrade_mc_cost}$`;
        document.getElementById("mc_per_click").innerHTML = `${mc_upgrade}$ za jeden klik`
    }
});

// Autoclicker upgrade +0.5

let upgrade1 = document.getElementById("upgrade1");
let upgrade1_count = 0;
let upgrade1_cost = 10;
upgrade1.addEventListener("click", function() {
    if( score >= upgrade1_cost){
        score -= upgrade1_cost;

        ac_amount += 0.5;
        ac_interval = 1000 / ac_amount;

        upgrade1_count += 1;
        if (upgrade1_count < 6) { upgrade1_cost += 50; }

        document.getElementById("counter").innerHTML = score;
        upgrade1.innerText = `Autoclicker +0.5 - ${upgrade1_cost}$`
        document.getElementById("ac_interval_view").innerHTML = `Autoclick každých ${(ac_interval / 1000).toFixed(4)} sekund`;     
        document.getElementById("ac_per_click").innerHTML = `${ac_amount}$ za jednu sekundu`
    }

});

// Autoclicker upgrade +1

let upgrade2 = document.getElementById("upgrade2");
let upgrade2_count = 0;
let upgrade2_cost = 50;
upgrade2.addEventListener("click", function() {
    if( score >= upgrade2_cost){
        score -= upgrade2_cost;

        ac_amount += 1;
        ac_interval = 1000 / ac_amount;

        upgrade2_count += 1;
        if (upgrade2_count < 10) { upgrade2_cost += 50; }

        document.getElementById("counter").innerHTML = score;
        upgrade2.innerText = `Autoclicker +1 - ${upgrade2_cost}$`
        document.getElementById("ac_interval_view").innerHTML = `Autoclick každých ${(ac_interval / 1000).toFixed(4)} sekund`;
        document.getElementById("ac_per_click").innerHTML = `${ac_amount}$ za jednu sekundu`
    }

});

// Auto clicker

function autoClicker() {
    if (ac_interval > 0) {
    score += ac_upgrade;
    document.getElementById("counter").innerHTML = score;
    }
    setTimeout(autoClicker, ac_interval);
}
autoClicker();
