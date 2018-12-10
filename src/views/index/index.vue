<template>
    <div>
        <p>欢迎来{{name}}到菲菲弟弟系统(test)</p>
        <a href="#" @click="quit">注销登陆</a>
        <footer-nav class="isIndex"></footer-nav>
    </div>
</template>
<script>
import FooterNav from '../../components/footer.vue'
import {setCookie ,getCookie ,delCookie} from '../../assets/js/cookie.js'
export default {
    components:{
        FooterNav,
    },
    data(){
        return {
            name:''
        }
    },
    mounted(){
        let uname=getCookie('username')
        this.name=uname

        if(uname=="")
        {
            this.$router.push('/')
        }
    },
    methods:{
        quit(){
            delCookie('username')
            this.$router.push('/')
        }
            
    }
  
}
</script>