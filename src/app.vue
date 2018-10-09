<template>
    <div class="app-container">
        <mt-header fixed title="我的淘宝"></mt-header>
		<transition>
			<router-view class="mainBox"></router-view>
		</transition>
		
        <nav class="mui-bar mui-bar-tab">
			<router-link id="defaultTab" class="mui-tab-item" to="home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav> 
    </div>
</template>
<script>

export default {
    
}
</script>
<style scoped>
.mint-header {
    background-color: brown;
}
.app-container {
    margin-top: 40px;
	overflow-x: hidden;
}
.v-enter {
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	/* position: absolute; */
}
.v-enter-active, .v-leave-active {
	transition: all .3s ease;
}
.v-leave-active {
	position: absolute;
}

</style>


