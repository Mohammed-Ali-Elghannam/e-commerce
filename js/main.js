let category_nav_list = document.querySelector(".category-nav-list");
function OpenCategoryList() {
    category_nav_list.classList.toggle("active")
}

const cart = document.querySelector('.cart')

function OpenCloseCart() {
    cart.classList.toggle('active')
}


let nav_links = document.querySelector('.nav-links')

function OpenMenu() {
    nav_links.classList.toggle('active')
}

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const add_buttons_cart = document.querySelectorAll('.btn-add-cart')

        add_buttons_cart.forEach(button => {
            button.addEventListener("click", (event) => {
                const product_id = event.target.getAttribute('data-id')
                const selected_product = data.find(product => product.id == product_id)



                AddToCart(selected_product)

                const all_matching_buttons = document.querySelectorAll(`.btn-add-cart[data-id = "${product_id}"]`)
                all_matching_buttons.forEach(btn => {
                    btn.classList.add("active")
                    btn.innerHTML = ` 
                    <i class="fa-solid fa-cart-shopping"></i> Item in cart 
                    `
                })
            })
        })
    })



function AddToCart(product) {

    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push({ ...product, quantity: 1 })
    localStorage.setItem('cart', JSON.stringify(cart))


    UpdateCart()
}

function UpdateCart() {
    const cart_items_cont = document.getElementById('cart-items')

    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const checkout_items = document.getElementById('checkout-items')

    const items_input = document.getElementById('items')
    const total_price_input = document.getElementById('total-price')
    const count_items_input = document.getElementById('count-items')

    let total_price = 0
    let total_count = 0

    if (checkout_items) {
        checkout_items.innerHTML = ""

        items_input.value = ""
        total_price_input.value = ""
        count_items_input.value = ""
    }

    cart_items_cont.innerHTML = "";
    cart.forEach((item, index) => {

        let total_price_item = item.price * item.quantity;

        total_price += total_price_item
        total_count += item.quantity

        // checkout inputs
        if (checkout_items) {
            items_input.value += item.name + " ---> " + "( price : " + total_price_item +" )" + "  --->  " + "( count : " + item.quantity +" )"+ "\n"

            total_price_input.value = total_price + 20
            count_items_input.value = total_count
        }
        cart_items_cont.innerHTML += `
        
        <div class="item-cart">
                <img src="${item.img}" alt="">
                <div class="content">
                    <h4>${item.name}</h4>
                    <p class="price-cart">$${total_price_item}</p>
                    <div class="quantity-control">
                        <button class="decrease-quantity" data-index=${index}>-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="increase-quantity" data-index=${index}>+</button>
                    </div>
                </div>

                <button class="delete-item" data-index = ${index}><i class="fa-solid fa-trash-can"></i></button>
            </div>
        
        
        `

        if (checkout_items) {
            checkout_items.innerHTML += `
            <div class="item-cart">
                            <div class="image-name">
                                <img src="${item.img}" alt="">

                                <div class="content">
                                    <h4>${item.name}</h4>
                                    <p class="price-cart"> $${total_price_item} </p>
                                    <div class="quantity-control">
                                        <button class="decrease-quantity" data-index=${index}>-</button>
                                        <span class="quantity">${item.quantity}</span>
                                        <button class="increase-quantity" data-index=${index}>+</button>
                                    </div>
                                </div>
                            </div>

                            <button class="delete-item" data-index = ${index}><i class="fa-solid fa-trash-can"></i></button>
                        </div>
            
            
            `
        }


    })


    const price_cart_total = document.querySelector('.price-cart-total')

    const count_item_cart = document.querySelector('.count-cart-items')

    const count_item_header = document.querySelector('.count-item-header')

    price_cart_total.innerHTML = `$ ${total_price}`

    count_item_cart.innerHTML = total_count

    count_item_header.innerHTML = total_count

    if (checkout_items) {
        const subtotal_checkout = document.querySelector('.subtotal-checkout')
        const total_checkout = document.querySelector('.total-checkout')

        subtotal_checkout.innerHTML = `$ ${total_price}`
        total_checkout.innerHTML = `$ ${total_price + 20}`
    }

    const increase_buttons = document.querySelectorAll('.increase-quantity')
    const decrease_buttons = document.querySelectorAll('.decrease-quantity')

    increase_buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const item_index = event.target.getAttribute("data-index")
            IncreaseQuantity(item_index)
        })
    })


    decrease_buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const item_index = event.target.getAttribute("data-index")
            DecreaseQuantity(item_index)
        })
    })

    const delete_buttons = document.querySelectorAll('.delete-item')

    delete_buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const item_index = event.target.closest('button').getAttribute('data-index')
            RemoveFromCart(item_index)
        })
    })
}

function IncreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    cart[index].quantity += 1

    localStorage.setItem('cart', JSON.stringify(cart))
    UpdateCart()

}


function DecreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []

    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    UpdateCart()

}


function RemoveFromCart(index) {

    const cart = JSON.parse(localStorage.getItem('cart')) || []

    const remove_product = cart.splice(index, 1)[0]
    localStorage.setItem('cart', JSON.stringify(cart))
    UpdateCart()
    UpdateButtonsState(remove_product.id)
}

function UpdateButtonsState(product_id) {
    const all_matching_buttons = document.querySelectorAll(`.btn-add-cart[data-id = "${product_id}"]`)

    all_matching_buttons.forEach(button => {
        button.classList.remove('active')

        button.innerHTML = ` 
                    <i class="fa-solid fa-cart-shopping"></i> add to cart 
                    `
    })


}






UpdateCart();