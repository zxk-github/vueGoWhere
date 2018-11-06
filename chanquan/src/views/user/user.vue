<template>
    <div>
        <p>23423</p>
        <p>{{price1}}</p>
        <p>{{totalPrice}}</p>
    </div>
</template>


<script>
    import { mapState, mapGetters } from "vuex";

    export default {
        data() {
            return {

            }
        },
        computed: {
            price1() {
                return 123
            },
            // totalPrice() {
            //     console.log(this.$store.getters['user/totalPrice'])
            //     return this.$store.getters['user/totalPrice']
            // },
            // ...mapState({
            //     price: state => {
            //         console.log(state)
            //         return state.price
            //     }
            // }),
            ...mapGetters({
                'totalPrice': 'user/totalPrice'
            })
        }
    }
</script>