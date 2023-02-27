<template>
  <div class="v-cart-item">
    <p>cart item</p>
    <img class="v-catalog-item__img"
         :src="require('./img/'+cart_item_data.image)" alt=""/>
    <div>
      <p> {{cart_item_data.name}}</p>
      <p>{{cart_item_data.price}}</p>
      <P> {{cart_item_data.article}}</P>
      <p>{{cart_item_data.about}}</p>
    </div>
    <div class="cart_item_data__quantity">
      <p>Quantity</p>
      <span>
        {{cart_item_data.quantity}}
      </span>
    </div>
    <button class="btn">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default(){
        return{};
      },
    },
  },
  data() {
    return {
      title: 'hello im cart item!',
    };
  },
  methods: {
    deleteFromCart(){
      this.$emit("deleteFromCart")
    }
  }
}
</script>

<style lang="scss" scoped>
.v-cart-item{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 grey;
  padding: 20px;
  margin: 20px;
  &__image{
    min-width: 10%;
  }
}

</style>