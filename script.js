// variably

let score = 0; //penízky
document.getElementById("counter").innerHTML = score;
let mc_upgrade = 1; // Za jeden manual click

let ac_upgrade = 1; // Za jeden autoclick
let ac_interval = 0; // autoclicker speed
let ac_amount = 0; //Počet za jednu sekundu

let total = 0;
let total_view = document.getElementById("total")

let highscore = 0;
let highscore_view = document.getElementById("highscore")

// btn

let btn = document.getElementById("clicker");
btn.addEventListener("click", function() {
    score += mc_upgrade;
    document.getElementById("counter").innerHTML = score;

    total += mc_upgrade;
    total_view.innerHTML = `Total: ${total}`;

    if (score > highscore) {
        highscore = score;
        highscore_view.innerHTML = `Max. skóre: ${highscore}`;
    }
});

// --Upgrade Buttons--

// Manual clicker mc_upgrade 1

let upgrade_mc = document.getElementById("upgrade_mc");
let upgrade_mc_cost = 10;
upgrade_mc.addEventListener("click", function() {
    if( score >= upgrade_mc_cost){
        score -= upgrade_mc_cost;
        mc_upgrade += 1;
        document.getElementById("counter").innerHTML = score;

        upgrade_mc_cost += Math.ceil(upgrade_mc_cost * (20 / 100));

        /* upgrade_mc.disabled = true;
        upgrade_mc.innerText = "Double Manual Clicks - BOUGHT OUT"; */

        upgrade_mc.innerText = `Manuální Klik - ${upgrade_mc_cost}$`;
        document.getElementById("mc_per_click").innerHTML = `${mc_upgrade}$ za jeden klik`;
    }
});

// Manual clicker mc_upgrade 2
let upgrade_mc2 = document.getElementById("upgrade_mc2");
let upgrade_mc2_cost = 100;
upgrade_mc2.addEventListener("click", function() {
    if (score >= upgrade_mc2_cost) {
        score -= upgrade_mc2_cost;  // opraveno

        mc_upgrade += 5;
        document.getElementById("counter").innerHTML = score;

        upgrade_mc2_cost *= 1.6;
        upgrade_mc2_cost = Math.ceil(upgrade_mc2_cost);  // uložení zaokrouhlení

        upgrade_mc2.innerText = `Manuální Klik +5 - ${upgrade_mc2_cost}$`;
        document.getElementById("mc_per_click").innerHTML = `${mc_upgrade}$ za jeden klik`;
    }
});

// Manual clicker mc_upgrade 3
let upgrade_mc3 = document.getElementById("upgrade_mc3");
let upgrade_mc3_cost = 800;
upgrade_mc3.addEventListener("click", function() {
    if (score >= upgrade_mc3_cost) {
        score -= upgrade_mc3_cost;  // opraveno

        mc_upgrade += 50;
        document.getElementById("counter").innerHTML = score;

        upgrade_mc3_cost *= 1.6;
        upgrade_mc3_cost = Math.ceil(upgrade_mc3_cost);  // uložení zaokrouhlení

        upgrade_mc3.innerText = `Manuální Klik +5 - ${upgrade_mc3_cost}$`;
        document.getElementById("mc_per_click").innerHTML = `${mc_upgrade}$ za jeden klik`;
    }
});

// Autoclicker upgrade +0.5

let upgrade1 = document.getElementById("upgrade1");
let upgrade1_cost = 10;
upgrade1.addEventListener("click", function() {
    if( score >= upgrade1_cost){
        score -= upgrade1_cost;

        ac_amount += 0.5;
        ac_interval = 1000 / ac_amount;

        upgrade1_cost *= 1.5;
        upgrade1_cost = Math.ceil(upgrade1_cost);

        document.getElementById("counter").innerHTML = score;
        upgrade1.innerText = `Autoclicker +0.5 - ${upgrade1_cost}$`
        document.getElementById("ac_interval_view").innerHTML = `Autoclick každých ${(ac_interval / 1000).toFixed(4)} sekund`;     
        document.getElementById("ac_per_click").innerHTML = `${ac_amount}$ za jednu sekundu`;
    }

});

// Autoclicker upgrade +1

let upgrade2 = document.getElementById("upgrade2");
let upgrade2_cost = 25;
upgrade2.addEventListener("click", function() {
    if( score >= upgrade2_cost){
        score -= upgrade2_cost;

        ac_amount += 1;
        ac_interval = 1000 / ac_amount;

        upgrade2_cost *= 1.2;
        upgrade2_cost = Math.ceil(upgrade2_cost);

        document.getElementById("counter").innerHTML = score;
        upgrade2.innerText = `Autoclicker +1 - ${upgrade2_cost}$`
        document.getElementById("ac_interval_view").innerHTML = `Autoclick každých ${(ac_interval / 1000).toFixed(4)} sekund`;
        document.getElementById("ac_per_click").innerHTML = `${ac_amount}$ za jednu sekundu`;
    }

});

// Autoclicker upgrade +5

let upgrade3 = document.getElementById("upgrade3");
let upgrade3_cost = 50;
upgrade3.addEventListener("click", function() {
    if( score >= upgrade3_cost){
        score -= upgrade3_cost;

        ac_amount += 5;
        ac_interval = 1000 / ac_amount;

        upgrade3_cost *= 1.4;
        upgrade3_cost = Math.ceil(upgrade3_cost);

        document.getElementById("counter").innerHTML = score;
        upgrade3.innerText = `Autoclicker +5 - ${upgrade3_cost}$`;
        document.getElementById("ac_interval_view").innerHTML = `Autoclick každých ${(ac_interval / 1000).toFixed(4)} sekund`;
        document.getElementById("ac_per_click").innerHTML = `${ac_amount}$ za jednu sekundu`;
    }
});

// --Other Stuff--

// Stats to clipboard


// Auto clicker

function autoClicker() {
    if (ac_interval > 0) {
    score += ac_upgrade;
    document.getElementById("counter").innerHTML = score;

    total += ac_upgrade;
    total_view.innerHTML = `Total: ${total}`;

    if (score > highscore) {
        highscore = score;
        highscore_view.innerHTML = `Max. skóre: ${highscore}`;
    }
    }
    setTimeout(autoClicker, ac_interval);
}
autoClicker();
