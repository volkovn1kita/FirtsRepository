const ShoppingBagImg = document.querySelector('#shopping-bag-img');
const ShopingBacket = document.querySelector('.shopping-main');
const ShoppingBasketAddItem = document.querySelector('.shopping-basket')
const ShopingBacketExit = document.querySelector('#cross');
const ShopingBacketCard = document.querySelectorAll('.shopping-card img');
const CounterBasketProduct = document.querySelector('#counter-basket-product');
const CounterBtn = document.querySelectorAll('.counterbtn');
const CounterInBasket = document.querySelector('.shopping-card-count-of-product h3');
const CounterBtnInBasketPlus = document.querySelector ('.plus-btn');
const CounterBtnInBasketMinus = document.querySelector ('.minus-btn');

const NavigationSection = document.querySelector('.nav-section');
const ContentSection = document.querySelector('.contect-section');
const ContentContainer = document.querySelector('.content-container');


/*Add counter +1 if click on basket item*/

ShopingBacketCard.forEach (elem => {
        elem.addEventListener('click' , function click () {
        
            if (click.isRun)
            {
                return false
            }
            CounterBasketProduct.textContent++;
            CounterBasketProduct.classList.remove('hide');
            check = false;
            click.isRun = true;
        })
        check = true;
})

/*Close shopping basket*/

ShopingBacketExit.addEventListener('click' , function () {
    ShopingBacket.classList.remove('shopping-backet-visible');
    NavigationSection.classList.remove('active');
    ContentSection.classList.remove('active');
    ContentContainer.classList.remove('active');
});

/*Open shopping basket*/

ShoppingBagImg.addEventListener('click', function() {
    ShopingBacket.classList.add('shopping-backet-visible');
    NavigationSection.classList.add('active');
    ContentSection.classList.add('active');
    ContentContainer.classList.add('active');
});

/*Check click on screen*/

window.document.addEventListener ('click' , clickitem => {

    /*Removing card of basket and set counter of basket*/

    if (clickitem.target.classList.contains('cross')){
        let cardwillremoved = clickitem.target.closest('.shopping-card-product');
        cardwillremoved.remove();
        CalcPrice ();
        CounterBasketProduct.textContent--;
        if (CounterBasketProduct.textContent == 0 ){
            CounterBasketProduct.classList.add('hide');
        }
        
    }
    

    

    /*Counter ++ */

    if (clickitem.target.classList.contains('plus-btn')){
        const parrentcounter = clickitem.target.closest(".shopping-card-count-of-product")
        const counter = parrentcounter.querySelector('.shopping-card-count-of-product h3');
        counter.innerText ++;
    }
    /*Counter -- */

    if (clickitem.target.classList.contains('minus-btn') ){
        const parrentcounter = clickitem.target.closest(".shopping-card-count-of-product")
        const counter = parrentcounter.querySelector('.shopping-card-count-of-product h3');
        if (counter.innerText > 1) {
            counter.innerText--;
        }   
    }
    if (clickitem.target.classList.contains('plus-btn') || clickitem.target.classList.contains('minus-btn')){
        CalcPrice ();
    }
    /*Search shopping basket icon*/

    if (clickitem.target.classList.contains('shopping-bag-attribute')){
        let wraper = clickitem.target.closest('.wraper');

        let AboutProduct = {
            NameOfProduct: wraper.querySelector('.name-of-product').innerText,
            ImageOfProduct: wraper.querySelector('.wraper-img img').getAttribute('src'),
            PriceOfProduct: wraper.querySelector('.price-of-product').innerText,
        } 
        /*Dont repeat card*/

        let itemincard = ShopingBacket.querySelector('.shopping-card-main-content h2');
        

        const wraperofclick = clickitem.target.closest('.wraper');



        if (itemincard && itemincard.innerText == wraperofclick.querySelector('.name-of-product').innerText){            
            const shoppingcardmaincontent = itemincard.closest('.shopping-card-main-content')
            let countereleminbasket = shoppingcardmaincontent.querySelector('.shopping-card-count-of-product h3');
            countereleminbasket.innerText++;
        }else {       

        /*Prototype of new item in basket*/

        const CardItemElement = `
        <div class="shopping-card-product">
            <img src="${AboutProduct.ImageOfProduct}" alt="">
            <div class="shopping-card-main-content">
                <h2>${AboutProduct.NameOfProduct}</h2>
                <p>${AboutProduct.PriceOfProduct}</p>
                <div class="shopping-card-count-of-product">
                <div class="plus-btn">+</div>
                <h3>1</h3>
                <div class="minus-btn">-</div>
                </div>
            </div>
        <img src="/Image/cross-sign-svgrepo-com.svg" class="cross" alt="">
        </div>
        <img src="" alt="">`

        /*Input item in basket*/

        ShoppingBasketAddItem.insertAdjacentHTML ('afterbegin', CardItemElement)
        }   

        CalcPrice ();
    }

    
})