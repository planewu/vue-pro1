<template>
<div class="manage tc">
    <button class="new-btn" v-on:click="add">新增</button>
    <div class="input-area" v-show="showAdd">
        <input type="text" placeholder="请输入你的名字" v-model="nameValue">
        <button class="middle-btn" v-on:click="addName">确定</button>
    </div>

    <table>
        <tr>
            <th>姓名</th>
            <th>操作</th>

        </tr>
        <tr v-for="(item,index) in peoples">
            <td><span>{{item.name}}</span></td>
            <td v:bind:id="index"><span v-on:click="edit">编辑</span><span v-on:click="del">删除</span></td>
        </tr>
    </table>
    <div class="wrap" v-show="showEdit">
        <div class="content">
            <input type="text" placeholder="请输入新的姓名" v-model="newName">
            <button class="wrap-btn" v-on:click="cancel">取消</button>
            <button class="wrap-btn" v-on:click="editName">确定</button>
        </div>
    </div>
    <footer-nav v-bind:class="{'isManage':isNowpage}"></footer-nav>
</div>
</template>
<style>
.manage{margin-bottom:60px;}
.middle-btn,.new-btn,.wrap-btn{color:white ;background-color:#41b883    ; border-radius: 10px; }
.new-btn{ width:50% ;height:42px;}
.wrap-btn{width: 44px; height:42px;}
.input-area{ width: 100%;height:100px;}
.input-area input,input{height: 36px; width:55% ;margin-top:15px;}
.input-area button{height:38px; width:60px;}
table { margin: auto;}
tr {height: 50px;width :100%}
td{width: 200px}
td span{margin: 0 20px;}
</style>

 <script>
import FooterNav from '../../components/footer.vue'
export default {
    components:{
        FooterNav
    },data(){
        return {
            isNowpage:true,
            showAdd:false,
            showEdit:false,
            peoples:[{'name':'Jack'},{'name':'Bob'}],
            nameValue:'',
            editId:0,
            oldName:''
        }
    },methods:{
        add(){
            this.showAdd=true;
        },addName(){
            var v=this.nameValue
            if(v.trim()=="")
            {
                alert("请输入新增人员姓名")
            }else{
                var data={}
                data.name=v;
                this.peoples.push(data);
                this.showAdd=false;
            }
        },del(e){
            var id=e.target.parentElement.id;
            this.peoples.splice(id,1)
        },edit(e){
           this.oldName=e.target.parentElement.parentElement.children[0].children[0].innerHTML;
          this.showEdit=true;
        },cancel(){
            this.showEdit=false;
        },editName(){
            var v=this.newName;
            if(v.trim()=="")
            {
                alert("请输入姓名");
            }else{
                for(name in this.peoples)
                {
                    if(this.peoples[name].name==this.oldName)
                    {

                        this.peoples[name].name=v;
                    }
                }
                this.showEdit=false;
            }
        }
    }
}
</script>