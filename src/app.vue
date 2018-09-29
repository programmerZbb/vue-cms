<template>
    <div>
        <mt-header fixed title="我的淘宝"></mt-header>
        <div class="mainBox">111</div>
        <nav class="mui-bar mui-bar-tab">
			<a id="defaultTab" class="mui-tab-item mui-active" href="tab-webview-subpage-about.html">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="tab-webview-subpage-chat.html">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">消息</span>
			</a>
			<a class="mui-tab-item" href="tab-webview-subpage-contact.html">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">通讯录</span>
			</a>
			<a class="mui-tab-item" href="tab-webview-subpage-setting.html">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</a>
		</nav>
    </div>
</template>
<script>
import "./lib/mui/css/mui.css"
export default {
    
}
</script>
<style scoped>
.mint-header {
    background-color: brown;
}
.mainBox {
    margin-top: 40px;
}
</style>


