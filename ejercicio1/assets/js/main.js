const vm = new Vue({
    el: "#app",
    data: {
        product: 'Socks',
        description: 'A pair of warm, fuzzy socks',
        image: './assets/img/socks-green-onWhite.jpg',
        inStock: true,
        link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
        inventory: 10,
        onSale: true,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {variantId: 2234, varianColor: "green", variantImage: './assets/img/socks-green-onWhite.jpg'},
            {variantId: 2235, varianColor: "blue", variantImage: './assets/img/socks-blue-onWhite.jpg'},
        ],
        sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        cart: 0,
    },
    methods: {
        addToCard(){
            this.cart += 1
        },
        updateProduct(imageColor){
            this.image = imageColor;
        },
        removeFromCart(){
            this.cart -= 1
        }
    },
});