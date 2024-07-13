function CalcPrice () {
    let totalprice = 0;
    const carditems = document.querySelectorAll('.shopping-card-product');
    let pricebtn = document.querySelector('.price-btn');
    carditems.forEach(function(index) {
        
        const price = index.querySelector('.shopping-card-main-content p').innerText;
        const count = index.querySelector('.shopping-card-count-of-product h3').innerText;
        let currentprice = parseInt(price) * parseInt(count);
        
        totalprice += currentprice;
        
    })
    pricebtn.innerText = totalprice;
}
