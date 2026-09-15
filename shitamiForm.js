function updatePrice() {
    optionNum = 0;
    tankaBase = 0;
    uecla = parseInt(document.getElementById("uecla").value);
    shitacla = parseInt(document.getElementById("shitacla").value);
    uePrice = 0;
    shitaPrice = 0;
    total = uecla + shitacla;
    totalPrice = 0;
    katsuage = document.getElementById("katsuage").checked;
    Array.from(document.querySelectorAll(".option.selected")).forEach((item) => {
        optionNum += parseInt(item.dataset.option);
    });
    switch(optionNum) {
        case 0:
            tankaBase = 14280;
            break;
        case 100:
            tankaBase = 13900;
            break;
        case 10:
            tankaBase = 18580;
            break;
        case 110:
            tankaBase = 17400;
            break;
        case 1:
            tankaBase = 16980;
            break;
        case 101:
            tankaBase = 16600;
            break;
        case 11:
            tankaBase = 20280;
            break;
        case 111:
            tankaBase = 19100;
            break;
        case 2:
            tankaBase = 13280;
            break;
        case 102:
            tankaBase = 12900;
            break;
        case 12:
            tankaBase = 17580;
            break;
        case 112:
            tankaBase = 16400;
            break;
        default:
            alert("エラーが発生しました。ページを再読み込みします。");
            location.reload();
            break;
    };
    tankaBase += 1500;
    totalPrice = tankaBase * total + 310000;
    console.log("totalPrice: " + totalPrice);
    if (totalPrice >= 25000 * total || katsuage) {
        shitaPrice = 25000;
        uePrice = Math.round(((totalPrice - shitaPrice * shitacla) / uecla)/1000) * 1000;
    }else{
        shitaPrice = Math.floor((totalPrice / total)/1000) * 1000;
        uePrice = Math.round(((totalPrice - shitaPrice * shitacla) / uecla)/1000) * 1000;
    };
    console.log("uePrice: " + uePrice);
    console.log("shitaPrice: " + shitaPrice);
    document.getElementById("uePrice").innerText = uePrice.toLocaleString();
    document.getElementById("shitaPrice").innerText = shitaPrice.toLocaleString();
};

document.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", function(e) {
        Array.from(e.currentTarget.parentElement.children).forEach((item) => {
            item.classList.remove("selected");
        });
        e.currentTarget.classList.add("selected");
        updatePrice();
    })
})

document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", function(e) {
        updatePrice();
    })
})

updatePrice();