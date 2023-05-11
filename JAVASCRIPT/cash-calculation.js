function Totalpricecalculation() {
    let adult = document.getElementById('adults');
    let childern = document.getElementById('children');
    let Totalprice = document.getElementById('Total-Price');
    
    let adultprice = adult.value * 15000;
    let childernprice = childern.value * 5000;

    Totalprice.value = adultprice + childernprice;
}