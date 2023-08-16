<template>
    <div>
        <van-button type="primary">Home</van-button>
        <div class="father">
            <span class="son">son</span>
        </div>
        <div><i class="iconfont icon-fengxianguankong"></i></div>
    </div>
</template>
<style lang="less" scoped>
.father {
    width: 100px;
    height: 100px;
    background-color: blue;

    .son {
        color: red;
    }
}
</style>