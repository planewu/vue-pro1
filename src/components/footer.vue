<template>
    <div class="footer fixed">
        <ul>
            <li class="index-btn"><router-link to='/'>首页</router-link></li>
            <li class="manage-btn"><router-link to='/manage'>人员管理</router-link></li>
        </ul>
    </div>
</template>

<style scoped>
.footer{width:100%; bottom:0;}
li a {display: inline-block;width:100%;height: 100%;}
.foorer{width:100%;height:50px;bttom:0;}
ul{display: flex;height: 100%;line-height: 50px;}
ul li{flex:1;background-color:#f1f1f1}
.isIndex li:first-child{background-color: #d3d3d3}
.isIndex li:first-child a{color:#41b883}
.isManage li:last-child{background-color: #d3d3d3}
.isManage li:last-child a{color: #41b883}
</style>