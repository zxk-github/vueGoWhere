<template>
    <div>
        <p>23423</p>
        <p>{{price1}}</p>
        <p>{{totalPrice}}</p>
        <div>
            <button @click="changePrice(1)">price</button>
        </div>
        <div>
            <!-- <button @c></button> -->
        </div>
    </div>
</template>


<script>
    import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

    export default {
        data() {
            return {

            }
        },
        mounted() {
            // this.getDetail().then((data) => {
            //     console.log(data);
            // })
            this.$store.dispatch('product/productDetail/getProductDetail').then((data) => {
                console.log(data);
            })
        },
        computed: {
            price1() {
                return 123
            },
            // ...mapState({
            //     price: state => {
            //         console.log(state)
            //         return state.price
            //     }
            // }),
            ...mapGetters({
                'totalPrice': 'product/productDetail/totalPrice'
            })
        },
        methods: {
            handle() {

            },

            ...mapMutations({
                changePrice: 'product/productDetail/CHANGE_PRICE'
            }),

            ...mapActions({
                getDetail: 'product/productDetail/getProductDetail'
            })

        }
    }
</script>