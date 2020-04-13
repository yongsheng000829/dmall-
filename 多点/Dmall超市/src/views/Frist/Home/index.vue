<template>
 <MyBscroll
 ref="BS"
 :probeType="2"
 :click="true"
 :pullUpLoad="true"
 :pullingUp="upload"
 :scroll="scroll"
 
 >
    <template v-solt:default>
    <div class="header"><span @click="$router.push('/setAddress')">送到:{{add}}></span><button @click="$router.push('/search')">搜索</button></div>
    <swiper ref="mySwiper" :options="swiperOptions" class="swiperbox">
      <swiper-slide v-for="(item,index) in getbannerlist" :key="index">
        <img :src="item.image" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <Lun />
    <h2>每日必购</h2>
    <div class="shoplist" ref="shoplist">

        <Shoplist 
        v-for="(val,index) in getshoplist" 
        :key="index"
        :cover="val.cover"
        :name="val.name"
        :volume="val.volume"
        :stock="val.stock"
        :price="val.price"
        :id="val.id"
        />
  </div>
  </template>
    <template v-solt:uploading>
      <p>还在加载......</p>

    </template>

   </MyBscroll>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// import BetterScroll from "better-scroll"

export default {
  name: "",
  data() {
    return {
      add: "北京",
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
      params:{
        pageid:0,
        limit:5        
      },
      allpage:2

    };
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    getbannerlist() {
      return this.$store.state.homeIndex.bannerlist;
    },
       //拿到商品数据
    getshoplist(){
           return this.$store.state.homeIndex.shoplist
    }
  },
  methods: {
    ...mapActions("homeIndex",{ 
        getBannerlist:"getBannerlist",
        getShoplist:"getShoplist"
         }),

      async upload(){
          await this.params.pageid++
          if(this.params.pageid>=this.allpage){
            return
          }
           this.getShoplist(this.params)
         },
         scroll(x,y){
          //  console.log(x)
         }
  },
  created() {
    this.getBannerlist();

    this.getShoplist(this.params)


    let address =
      localStorage.getItem("loadaction") &&
      JSON.parse(localStorage.getItem("loadaction"));
    if (address.formattedAddress) {
      this.add = address.formattedAddress;
    } else {
      this.add = this.add;
    }
  }
};
</script>
<style style='scss' scoped>
.shoplist{
    width: 100%;
    height:100%;
    overflow: hidden;
    position: relative;
}
/* .header{
  z-index: inherit;
  position: fixed;
  position: absolute;
  top:100;
  left:0;
} */
</style>
