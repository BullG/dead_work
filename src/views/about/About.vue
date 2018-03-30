<template>
  <div class="about">
    <div class="weui-tab">
      <div class="weui-tab__panel">
        <router-view></router-view>
      </div>
      <div class="weui-tabbar">
        <router-link to="/about/about1" class="weui-tabbar__item weui-bar__item_on">
          <!-- <img src="" alt="" class="weui-tabbar__icon"> -->
          <yd-icon name="weixin" class="weui-tabbar__icon"></yd-icon>
          <p class="weui-tabbar__label">微信</p>
        </router-link>
        <router-link to="/about/about2" class="weui-tabbar__item">
          <!-- <img src="" alt="" class="weui-tabbar__icon"> -->
          <yd-icon name="phone2" class="weui-tabbar__icon"></yd-icon>
          <p class="weui-tabbar__label">通讯录</p>
        </router-link>
        <router-link to="/about/about3" class="weui-tabbar__item">
          <!-- <img src="" alt="" class="weui-tabbar__icon"> -->
          <yd-icon name="discover" class="weui-tabbar__icon"></yd-icon>
          <p class="weui-tabbar__label">发现</p>
        </router-link>
        <router-link to="/about/about4" class="weui-tabbar__item">
          <!-- <img src="" alt="" class="weui-tabbar__icon"> -->
          <yd-icon name="type" class="weui-tabbar__icon"></yd-icon>
          <p class="weui-tabbar__label">我</p>
        </router-link>
      </div>
    </div>
    <!-- <div class="weui-cell">
        <div class="weui-cell__hd"><img src="..." alt="" style="width:20px;margin-right:5px;display:block"></div>
        <div class="weui-cell__bd">
            <p>标题文字</p>
        </div>
        <div class="weui-cell__ft">说明文字</div>
    </div> -->
  </div>
</template>
<style lang='scss' >
.about{
  height:100%;
}
</style>
