<template>
<div>
    <div class="login" v-show="showLogin">
        <h3>登录</h3>
        <p v-show="showTips">{{tips}}</p>
        <input type="text" placeholder="请输入用户名" v-model="username">
        <input type="password" placeholder="请输入密码" v-model="password">
        <button v-on:click="login">登录</button>
        <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>
    <div class="register" v-show="showRegister">
        <h3>注册</h3>
        <p v-show="showTip">{{tips}}</p>
        <input type="text" placeholder="请输入用户名" v-model="newUsername">
        <input type="password" placeholder="请输入用户名" v-model="newPassword">
        <button v-on:click="register">注册</button>
        <span v-on:click="ToLogin">已有账号？马上登陆</span>
    </div>
</div>
</template>

<style>
.login {
    text-align: center
}

input {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: auto;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #888;
    padding: 10px;
    box-sizing: border-box;
}

p {
    color: red;
}

button {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    border: none;
    background-color: #41b883;
    color: #fff;
    font-size: 16px;
    margin-bottom: 5px;
}

span {
    cursor: pointer;
}

span:hover {
    color: #41b883;
}
</style>

<script>
import {
    setCookie,
    getCookie
} from '../../assets/js/cookie.js'
export default {
    mounted() {
        if (getCookie('username')) {
            this.$router.push('/home')
        }
    },
    data() {
        return {
            showLogin: true,
            showRegister: false,
            showTips: false,
            tips: '',
            username: '',
            password: '',
            newUsername: '',
            newPassword: ''
        }
    },
    method: {
        login() {
            if (this.username == "" || this.password == "") {
                alert("请输入账号密码")
            } else {
                this.tips = "登陆成功"
                this.showTips = true
                setCookie('username', this.username, 3600 * 24)
                setTimeout(function () {
                    this.$router.push('/index')
                }.bind(this), 1000)
            }
        }
    }
}
</script>
