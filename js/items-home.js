fetch('products.json')
    .then(response => response.json())
    .then(data => {

        const cart = JSON.parse(localStorage.getItem('cart')) || []

        const swiper_items_sale=document.getElementById("swiper-items-sale")

        const swiper_electronics=document.getElementById("swiper-electronics")

        const swiper_appliances=document.getElementById("swiper-appliances")

        const swiper_phones=document.getElementById("swiper-phones")

        data.forEach(product => {
            if(product.old_price){


                const is_in_cart = cart.some(cartitem => cartitem.id === product.id)


                const discount=Math.floor((product.old_price - product.price) / product.old_price * 100 )

                swiper_items_sale.innerHTML += `
                <div class="swiper-slide product">
                        <span class="sale-percent">%${discount}</span>
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="product-name"><a href="#">${product.name}?</a></p>

                        <div class="price">
                            <p><span>$ ${product.price}</span></p>
                            <p class="old-price">$ ${product.old_price}</p>
                        </div>

                        <div class="icons">
                            <span class="btn-add-cart ${is_in_cart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>${is_in_cart ? 'Item in cart' : 'add to cart'}
                            </span>
                            <span class="icon-product">
                                <i class="fa-regular fa-heart"></i>
                            </span>

                        </div>

                    </div>
                
                
                `

            }
        });


        data.forEach( product => {
            if(product.catetory =="electronics"){


                const is_in_cart = cart.some(cartitem => cartitem.id === product.id)


                const old_price_paragraph = product.old_price ? `<p class="old-price">$ ${product.old_price}</p>` : "";


                const discount_div = product.old_price ? `<span class="sale-percent">% ${
                    Math.floor((product.old_price - product.price) / product.old_price * 100 )
                }</span>` : "";

                swiper_electronics.innerHTML += `
                <div class="swiper-slide product">
                        ${discount_div}
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="product-name"><a href="#">${product.name}?</a></p>

                        <div class="price">
                            <p><span>$ ${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>

                        <div class="icons">
                            <span class="btn-add-cart ${is_in_cart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>${is_in_cart ? 'Item in cart' : 'add to cart'}
                            </span>
                            <span class="icon-product">
                                <i class="fa-regular fa-heart"></i>
                            </span>

                        </div>

                    </div>
                
                
                `

            }
        });


        data.forEach( product => {
            if(product.catetory =="appliances"){


                const is_in_cart = cart.some(cartitem => cartitem.id === product.id)

                const old_price_paragraph = product.old_price ? `<p class="old-price">$ ${product.old_price}</p>` : "";


                const discount_div = product.old_price ? `<span class="sale-percent">% ${
                    Math.floor((product.old_price - product.price) / product.old_price * 100 )
                }</span>` : "";

                swiper_appliances.innerHTML += `
                <div class="swiper-slide product">
                        ${discount_div}
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="product-name"><a href="#">${product.name}?</a></p>

                        <div class="price">
                            <p><span>$ ${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>

                        <div class="icons">
                            <span class="btn-add-cart ${is_in_cart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>${is_in_cart ? 'Item in cart' : 'add to cart'}
                            </span>
                            <span class="icon-product">
                                <i class="fa-regular fa-heart"></i>
                            </span>

                        </div>

                    </div>
                
                
                `

            }
        });


        data.forEach( product => {
            if(product.catetory =="mobiles"){


                const is_in_cart = cart.some(cartitem => cartitem.id === product.id)

                const old_price_paragraph = product.old_price ? `<p class="old-price">$ ${product.old_price}</p>` : "";


                const discount_div = product.old_price ? `<span class="sale-percent">% ${
                    Math.floor((product.old_price - product.price) / product.old_price * 100 )
                }</span>` : "";

                swiper_phones.innerHTML += `
                <div class="swiper-slide product">
                        ${discount_div}
                        <div class="img-product">
                            <a href="#"><img src="${product.img}" alt=""></a>
                        </div>
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <p class="product-name"><a href="#">${product.name}?</a></p>

                        <div class="price">
                            <p><span>$ ${product.price}</span></p>
                            ${old_price_paragraph}
                        </div>

                        <div class="icons">
                            <span class="btn-add-cart ${is_in_cart ? 'active' : ''}" data-id="${product.id}">
                                <i class="fa-solid fa-cart-shopping"></i>${is_in_cart ? 'Item in cart' : 'add to cart'}
                            </span>
                            <span class="icon-product">
                                <i class="fa-regular fa-heart"></i>
                            </span>

                        </div>

                    </div>
                
                
                `

            }
        });


    });