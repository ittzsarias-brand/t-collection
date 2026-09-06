"use strict";


document.addEventListener(
    "DOMContentLoaded",
    () => {



    /* =========================================
       LOADER
    ========================================= */

    const loader =
        document.getElementById(
            "page-loader"
        );


    setTimeout(
        () => {

            loader?.classList.add(
                "hidden"
            );

        },
        500
    );



    /* =========================================
       BODY
    ========================================= */

    const body =
        document.body;



    /* =========================================
       MENU
    ========================================= */

    const menuButton =
        document.getElementById(
            "menu-button"
        );


    const closeMenu =
        document.getElementById(
            "close-menu"
        );


    const mobileMenu =
        document.getElementById(
            "mobile-menu"
        );


    const menuOverlay =
        document.getElementById(
            "menu-overlay"
        );



    function openMenu() {

        mobileMenu.classList.add(
            "open"
        );

        menuOverlay.classList.add(
            "open"
        );

        body.classList.add(
            "no-scroll"
        );

    }



    function closeMenuPanel() {

        mobileMenu.classList.remove(
            "open"
        );

        menuOverlay.classList.remove(
            "open"
        );

        body.classList.remove(
            "no-scroll"
        );

    }



    menuButton?.addEventListener(
        "click",
        openMenu
    );


    closeMenu?.addEventListener(
        "click",
        closeMenuPanel
    );


    menuOverlay?.addEventListener(
        "click",
        closeMenuPanel
    );



    document
        .querySelectorAll(
            ".mobile-navigation a"
        )
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    closeMenuPanel
                );

            }
        );



    /* =========================================
       SEARCH
    ========================================= */

    const searchButton =
        document.getElementById(
            "search-button"
        );


    const searchPanel =
        document.getElementById(
            "search-panel"
        );


    const searchClose =
        document.getElementById(
            "search-close"
        );


    const searchInput =
        document.getElementById(
            "search-input"
        );


    const searchResults =
        document.getElementById(
            "search-results"
        );



    const products = [

        {
            name:
                "تی شێرت بالەنسیگا",

            category:
                "پیاوان",

            price:
                "$450"

        },

        {
            name:
                "نایک ایر فورس",

            category:
                "پێڵاو",

            price:
                "$120"

        },

        {
            name:
                "کەمیزی لۆی ڤیتۆن",

            category:
                "پیاوان",

            price:
                "$620"

        },

        {
            name:
                "جاکەتی پڕیمیۆم",

            category:
                "جاکەت",

            price:
                "$580"

        },

        {
            name:
                "کەمەری پڕیمیۆم",

            category:
                "کەمەر",

            price:
                "$190"

        }

    ];



    function openSearch() {

        searchPanel.classList.add(
            "open"
        );

        body.classList.add(
            "no-scroll"
        );


        setTimeout(
            () => {

                searchInput?.focus();

            },
            150
        );

    }



    function closeSearch() {

        searchPanel.classList.remove(
            "open"
        );

        body.classList.remove(
            "no-scroll"
        );


        if (searchInput) {

            searchInput.value = "";

        }


        if (searchResults) {

            searchResults.innerHTML = "";

        }

    }



    searchButton?.addEventListener(
        "click",
        openSearch
    );


    searchClose?.addEventListener(
        "click",
        closeSearch
    );



    searchInput?.addEventListener(
        "input",
        () => {


            const query =
                searchInput.value
                    .trim()
                    .toLowerCase();


            if (!query) {

                searchResults.innerHTML =
                    "";

                return;

            }


            const found =
                products.filter(
                    product => {

                        return (

                            product.name
                                .toLowerCase()
                                .includes(
                                    query
                                )

                            ||

                            product.category
                                .toLowerCase()
                                .includes(
                                    query
                                )

                        );

                    }
                );



            if (!found.length) {

                searchResults.innerHTML = `

                    <div
                        class="search-result rabar"
                    >

                        هیچ بەرهەمێک نەدۆزرایەوە

                    </div>

                `;

                return;

            }



            searchResults.innerHTML =
                found
                    .map(
                        product => {

                            return `

                                <div
                                    class="search-result"
                                >

                                    <strong
                                        class="rabar"
                                    >

                                        ${product.name}

                                    </strong>

                                    <br>

                                    ${product.category}

                                    ·

                                    ${product.price}

                                </div>

                            `;

                        }
                    )
                    .join("");

        }
    );



    /* =========================================
       CART
    ========================================= */

    const cartButton =
        document.getElementById(
            "cart-button"
        );


    const cartDrawer =
        document.getElementById(
            "cart-drawer"
        );


    const cartOverlay =
        document.getElementById(
            "cart-overlay"
        );


    const closeCart =
        document.getElementById(
            "close-cart"
        );


    const cartCount =
        document.getElementById(
            "cart-count"
        );


    const cartItems =
        document.getElementById(
            "cart-items"
        );


    const cartTotal =
        document.getElementById(
            "cart-total"
        );


    const checkoutButton =
        document.getElementById(
            "checkout-button"
        );



    let cart = [];



    function openCart() {

        cartDrawer.classList.add(
            "open"
        );

        cartOverlay.classList.add(
            "open"
        );

        body.classList.add(
            "no-scroll"
        );

    }



    function closeCartPanel() {

        cartDrawer.classList.remove(
            "open"
        );

        cartOverlay.classList.remove(
            "open"
        );

        body.classList.remove(
            "no-scroll"
        );

    }



    cartButton?.addEventListener(
        "click",
        openCart
    );


    closeCart?.addEventListener(
        "click",
        closeCartPanel
    );


    cartOverlay?.addEventListener(
        "click",
        closeCartPanel
    );



    /* =========================================
       RENDER CART
    ========================================= */

    function renderCart() {


        const count =
            cart.reduce(
                (
                    total,
                    item
                ) => {

                    return (
                        total +
                        item.quantity
                    );

                },
                0
            );


        const total =
            cart.reduce(
                (
                    sum,
                    item
                ) => {

                    return (
                        sum +
                        Number(
                            item.price
                        ) *
                        item.quantity
                    );

                },
                0
            );



        cartCount.textContent =
            count;


        cartTotal.textContent =
            `$${total}`;



        if (!cart.length) {

            cartItems.innerHTML = `

                <div class="empty-cart">

                    <div>
                        🛍
                    </div>

                    <p class="rabar">
                        سەبەتەکەت بەتاڵە
                    </p>

                </div>

            `;

            return;

        }



        cartItems.innerHTML =
            cart
                .map(
                    (
                        item,
                        index
                    ) => {

                        return `

                            <div class="cart-item">

                                <div
                                    class="cart-item-image"
                                ></div>


                                <div
                                    class="cart-item-info"
                                >

                                    <div
                                        class="cart-item-name rabar"
                                    >

                                        ${item.name}

                                    </div>


                                    <div
                                        class="cart-item-price"
                                    >

                                        $${item.price}

                                        ×

                                        ${item.quantity}

                                    </div>

                                </div>


                                <button
                                    class="remove-item"
                                    type="button"
                                    data-index="${index}"
                                >

                                    ×

                                </button>

                            </div>

                        `;

                    }
                )
                .join("");



        document
            .querySelectorAll(
                ".remove-item"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const index =
                                Number(
                                    button.dataset
                                        .index
                                );


                            cart.splice(
                                index,
                                1
                            );


                            renderCart();

                        }
                    );

                }
            );

    }



    /* =========================================
       ADD TO CART
    ========================================= */

    document
        .querySelectorAll(
            ".add-cart"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {


                        const name =
                            button.dataset
                                .product;


                        const price =
                            button.dataset
                                .price;


                        const existing =
                            cart.find(
                                item =>
                                    item.name ===
                                    name
                            );



                        if (existing) {

                            existing.quantity++;

                        }

                        else {

                            cart.push({

                                name:
                                    name,

                                price:
                                    price,

                                quantity:
                                    1

                            });

                        }



                        renderCart();


                        showToast(
                            "بەرهەمەکە زیادکرا بۆ سەبەتەکەت"
                        );

                    }
                );

            }
        );



    /* =========================================
       WISHLIST
    ========================================= */

    document
        .querySelectorAll(
            ".wishlist-button"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {


                        button.classList.toggle(
                            "liked"
                        );



                        if (
                            button.classList.contains(
                                "liked"
                            )
                        ) {

                            button.textContent =
                                "♥";


                            showToast(
                                "زیادکرا بۆ دڵخوازەکان"
                            );

                        }

                        else {

                            button.textContent =
                                "♡";

                        }

                    }
                );

            }
        );



    /* =========================================
       TOAST
    ========================================= */

    const toast =
        document.getElementById(
            "toast"
        );


    let toastTimer;



    function showToast(message) {


        if (!toast) {

            return;

        }


        toast.textContent =
            message;


        toast.classList.add(
            "show"
        );


        clearTimeout(
            toastTimer
        );


        toastTimer =
            setTimeout(
                () => {

                    toast.classList.remove(
                        "show"
                    );

                },
                2200
            );

    }



    /* =========================================
       CHECKOUT
    ========================================= */

    checkoutButton?.addEventListener(
        "click",
        () => {


            if (!cart.length) {

                showToast(
                    "سەبەتەکەت بەتاڵە"
                );

                return;

            }


            showToast(
                "ئەم بەشە لە وەشانی داهاتوودا چالاک دەکرێت"
            );

        }
    );



    /* =========================================
       BOTTOM NAV
    ========================================= */

    document
        .querySelectorAll(
            ".bottom-nav-item"
        )
        .forEach(
            item => {

                item.addEventListener(
                    "click",
                    () => {


                        document
                            .querySelectorAll(
                                ".bottom-nav-item"
                            )
                            .forEach(
                                nav => {

                                    nav.classList.remove(
                                        "active"
                                    );

                                }
                            );


                        item.classList.add(
                            "active"
                        );

                    }
                );

            }
        );



    /* =========================================
       ESCAPE KEY
    ========================================= */

    document.addEventListener(
        "keydown",
        event => {


            if (
                event.key !==
                "Escape"
            ) {

                return;

            }


            closeMenuPanel();

            closeSearch();

            closeCartPanel();

        }
    );



    /* =========================================
       INITIAL CART
    ========================================= */

    renderCart();


});
