<template>
  <div class="container">
    <div class="log">Register</div>
    <div class="icon">
        <div class='man'>
            <img src="../assets/img/Icon2-.png" alt="">
            <p>MALE</p>
        </div>
        <div class='wman'>
            <img src="../assets/img/Icon1-.png" alt="">
            <p>FEMALE</p>
        </div>
    </div>
    <div class="ipt">
        <input type="text" name="" class="username" placeholder="username" @blur.prevent="user" v-model="usernane">
        <input type="text" name="" class="password" placeholder="password" @blur.prevent="pass" v-model="password">
        <input type="text" name="" class="emil" placeholder="emil" @blur.prevent="eal" v-model="emil">
    </div>
    <div class="btn">
       <button class="btn1">注册</button>
    </div>
    <router-link to="/signin" tag="a" class="aaa">登录</router-link>
    <div class="kfz">
        <div @click="btn" :class="selectd">开发者</div>
    </div>
  </div>
</template>
<script>
import {test} from '@/utils/reg.js'
export default {
    data() {
        return {
            selectd:'',
            type:'userRegister',
            usernane:'',
            password:'',
            emil:'',
            uType:'',
            usernamed: false,
            passwordd: false,
            emild: false
        }
    },
    methods: {
        btn () {
            this.selectd = this.selectd ? '' : 'selectd'
            if (this.selectd ==  '') {
                this.type = 'userRegister'
            } else {
                 this.type = 'developerRegister'
            }
            console.log(this.type)
        },

        user () {
           let mas= test(this.uType='username',this.usernane)
            if(mas.status == 2){
                this.$toast(mas.msg)
                this.usernamed = false
            }else if(mas.status == 0){
                this.$toast(mas.msg)
                this.usernamed = false
            } else{
                this.usernamed = true
            }
            console.log(this.usernamed)   
        },
        pass () {
            let mas= test(this.uType='password',this.password)
            if(mas.status == 2){
                this.$toast(mas.msg)
                this.usernamed = false
            }else if(mas.status == 0){
                this.$toast(mas.msg)
                this.usernamed = false
            } else {
                this.passwordd = true
            } 
             console.log(this.passwordd)   
        },
        eal () {
            let mas= test(this.uType='emil',this.emil)
            if(mas.status == 2){
                this.$toast(mas.msg)
                this.usernamed = false
            }else if(mas.status == 0){
                this.$toast(mas.msg)
                this.usernamed = false
            } else {
                this.emild = true
            }
            console.log(this.emild)
        }



        
    },
}
</script>
<style lang="less" scoped>
    .container{
        width: 100%;
        height: 100vh;
        background-image: url("../assets/img/Image.jpg");
        background-size: cover;
        padding: 175px 30px 0 30px;
        .log{
            width:100%;
            height: 90px;
            line-height: 90px;
            text-align: center;
            font-size:70px;
            color: #fff;
            font-weight: 600;

        }
        .icon{
            height: 350px;
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            .man{
                width: 330px;
                height: 350px;
                // background: #fff;
                float: left;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
                img{
                    width: 100px;
                    height: 100px;
                    // background: aqua;
                }
                p{
                    height: 60px;
                    line-height: 60px;
                    font-size:18px;
                    text-align: center;
                    color:#fff;
                }
            }
            .wman{
                width: 330px;
                height: 350px;
                // background: #fff;
                float: left;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
               img{
                    width: 100px;
                    height: 100px;
                    // background: aqua;
                }
                p{
                    height: 60px;
                    line-height: 60px;
                    font-size:18px;
                    text-align: center;
                    color:#fff;
                }
            }
        }
        .ipt{
            width: 100%;
            height: 300px;
            .username{
                width: 100%;
                height: 99px;
                border:none;
                border-bottom: 1px solid #5b5b6e;
                background: none;
                text-align: center;
                font-size: 25px;
                color: #fff;
            }
            .password{
                width: 100%;
                height: 99px;
                border:none;
                border-bottom: 1px solid #5b5b6e;
                background: none;
                text-align: center;
                font-size: 25px;
                color: #fff;
            }
            .emil{
                width: 100%;
                height: 99px;
                border:none;
                border-bottom: 1px solid #5b5b6e;
                background: none;
                text-align: center;
                font-size: 25px;
                color: #fff;
            }
        }
        .btn{
            width: 100%;
            height: 100px;
            margin-top: 144px;
            margin-bottom: 20px;
           
            .btn1{
                display: block;
                width: 342px;
                height: 90px;
                line-height: 90px;
                font-size: 25px;
                text-align: center;
                margin: 0 auto;
                background: none;
                border: 2px solid #a28795;
                border-radius: 50px;
                color:#fff;
                outline:none;
            }
        }
        .aaa{
           width: 160px;
           height: 60px; 
           padding-top: 15px;
           color:#fff;
           text-align: center;
           display: block;
           margin: 0 auto;
           line-height: 40px;
        }
        .kfz{
            width: 100%;
            height: 60px;
            div{
                width: 160px;
                height: 58px;
                border: 2px solid #a28795;
                border-radius: 20px;
                text-align: center;
                line-height: 58px;
                margin: 10px  auto;
            }
           
        }
    }
    .selectd{
                border: 2px solid #fff;
                color: #fff;
            }
  
</style>
