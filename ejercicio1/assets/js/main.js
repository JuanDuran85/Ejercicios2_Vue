Vue.component('product-review', {
    template: `
        <div>
            <form class="review-form" @submit.prevent="onSubmit">

                <div v-if="errors.length">
                    <p><strong>Please correct the following error(s).</strong></p>
                    <ul>
                        <li v-for="(item,index) in errors" :key="index">{{item}}</li>
                    </ul>
                </div>

                <p>
                    <label for="name">Name: </label>
                    <input type="text" placeholder="Enter your name" v-model="name">
                </p>
                <p>
                    <label for="review">Review: </label>
                    <textarea type="text" placeholder="Enter a review" v-model="review"></textarea>
                </p>
                <p>
                    <label for="rating">Rating: </label>
                    <select v-model="rating" id="rating">
                        <option>5</option>
                        <option>4</option>
                        <option>3</option>
                        <option>2</option>
                        <option>1</option>
                    </select>
                </p>
                <div>
                    <p>Would you recommend this product?</p>
                    <label for="Yes">Yes</label>
                    <input type="radio" value="Yes" v-model="recommend"></input>
                    <label for="No">No</label>
                    <input type="radio" value="No" v-model="recommend"></input>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    `,
    data() {
        return {
            errors: [],
            name: null,
            review: null,
            rating: null,
            recommend: null
        }
    },
    methods: {
        onSubmit(){
            if (this.name && this.review && this.rating && this.recommend) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating,
                    recommend: this.recommend
                };
                this.$emit('review-submitted', productReview);
                this.name = null;
                this.review = null;
                this.rating = null;
            } else {
                if (!this.name) this.errors.push("Name required.");
                if (!this.review) this.errors.push("Review required.");
                if (!this.rating) this.errors.push("Rating required.");
            }
        }
    },
});

Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="(item, index) in details" :key="index">{{item}}</li>
        </ul>
    `,
});

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template: `
        <div class="product">
            <div class="product-image">
                <img :src="image" alt="socks">
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="inStock > 10">In Stock</p>
                <p v-else-if="inStock > 0 && inStock <= 10">Almost sold out!</p>
                <p v-else :class="{outOfStock : !inStock}">Out of Stock</p>
                <span>{{sale}}</span>
                <p>Shipping: {{shipping}}</p>

                <product-details :details="details"></product-details>

                <ul>
                    <li v-for="(item, index) in sizes" :key="index">{{item}}</li>
                </ul>

                <div v-for="(item,index) in variants" :key="item.variantId" class="color-box" :style="{backgroundColor: item.varianColor}" @mouseover="updateProduct(index)">
                </div>

                <div>
                    <button @click="addToCard" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
                    <button @click="removeFromCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Remove from cart</button>
                </div>

                <div>
                    <h2>Reviews</h2>
                    <p v-if="!reviews.length">There are no reviews yet.</p>
                    <ul>
                        <li v-for="(item,index) in reviews" :key="index">
                            <p>Name: {{item.name}}</p>
                            <p>Review: {{item.review}}</p>
                            <p>Rating: {{item.rating}}</p>
                            <p>Recommend: {{item.recommend}}</p>
                        </li>
                    </ul>
                </div>

                <product-review @review-submitted="reviewSubmitted"></product-review>
            </div>
        </div>
    `,
    data() {
        return {
            brand: "Men's and Women's",
            reviews: [],
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks',
            /*image: './assets/img/socks-green-onWhite.jpg', */
            selectedVariant: 0,
            /* inStock: true, */
            link: 'https://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Daps&field-keywords=socks',
            inventory: 10,
            onSale: false,
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {variantId: 2234, varianColor: "green", variantImage: './assets/img/socks-green-onWhite.jpg', variantQuantity: 5},
                {variantId: 2235, varianColor: "blue", variantImage: './assets/img/socks-blue-onWhite.jpg', variantQuantity: 11},
            ],
            sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        }
    },
    methods: {
        addToCard(){
            this.$emit('add-to-card',this.variants[this.selectedVariant].variantId)
        },
        updateProduct(index){
            this.selectedVariant = index;
        },
        removeFromCart(){
            this.$emit('remove-to-cart',this.variants[this.selectedVariant].variantId)
        },
        reviewSubmitted(productReview){
            this.reviews.push(productReview);
        }
    },
    computed: {
        title(){
            return this.brand +" "+ this.product + " are on Sale!";
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity;
        },
        sale(){
            if(this.onSale){
                return this.brand +" "+ this.product + " are on Sale!";
            } else{
                return this.brand +" "+ this.product + " are not on Sale!";
            }
        },
        shipping(){
            if(this.premium){
                return 'Free';
            }else{
                return 2.99;
            }
        }
    },
});

const vm = new Vue({
    el: "#app",
    data: {
        premium: true,
        cart: [],
    },
    methods: {
        addToCard(id){
            this.cart.push(id);
        },
        removeToCart(id){
            let removeItem = this.cart.lastIndexOf(id);
            this.cart.splice(removeItem,1);
        }
    },
});