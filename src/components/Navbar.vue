<template>
  <div class="wrapper-body">
    <div class="logo">
      <img src="images/shared/logo.svg" alt="">
    </div>
    <div class="nav-desk">
      <div class="options-desk typography__h5"  @click="emiteClose()" >
            <router-link  class="link " :class="isActive('/')" to="/"> 
              <div class="number">
                00
              </div>  
              HOME
            </router-link>
            <router-link class="link" :class="isActive('/destination')" to="/destination" > 
              <div class="number">
                01
              </div>   
              DESTINATION
              </router-link>
            <router-link class="link" :class="isActive('/crew')" to="/crew">
             <div class="number">
                02
              </div>   
              CREW
            </router-link>
            <router-link class="link" :class="isActive('/technology')" to="/technology">
              <div class="number">
                03
              </div> 
              TECHNOLOGY
              </router-link>
        </div>
        </div>
    </div>
    <div :class="{navbar: open}">
        <div class="icon" @click="open = !open">
          <img v-if="open" src="images/shared/icon-close.svg" alt="">
          <img v-else src="images/shared/icon-hamburger.svg" alt="">

          <!-- <ion-icon v-if="open" name="close"></ion-icon>
          <ion-icon v-else name="reorder"></ion-icon> -->
        </div>
        <div v-if="open" class="options typography__h5"  @click="emiteClose()" >
            <router-link  class="link " :class="isActive('/')" to="/"> 
              <div class="number">
                00
              </div>  
              HOME
            </router-link>
            <router-link class="link" :class="isActive('/destination')" to="/destination" > 
              <div class="number">
                01
              </div>   
              DESTINATION
              </router-link>
            <router-link class="link" :class="isActive('/crew')" to="/crew">
             <div class="number">
                02
              </div>   
              CREW
            </router-link>
            <router-link class="link" :class="isActive('/technology')" to="/technology">
              <div class="number">
                03
              </div> 
              TECHNOLOGY
              </router-link>
        </div>
    </div>
    <div>
  </div>
</template>

<script>
export default {
  name:'Navbar',
  data(){
    return {
      open: false,
    }
  },
  methods: {
    emiteClose(){
      this.open = false
    },
    isActive(route){
      if(this.$route.path == route){
        return '--active'
      }
      else{
        return ''
      }
    }
  },
  watch: {
    'open': function(newVal){
      if(newVal){
        document.body.style.overflow = "hidden"
      }
      else{
        document.body.style.overflow = "initial"

      }
    }
  }
}
</script>

<style scoped>
.wrapper-body{
  height:100%;
}
a{
  text-decoration: none;
  color:var(--White);
}
.none{
  display:none;
  transition: 2s ease-out
}
.navbar{
  color:var(--White);
  position:absolute;
  z-index: 99;
  right: 0;
  background:rgb(255, 255, 255, .04);

  backdrop-filter: blur(40px);
  height:100%;
  display:flex;
  flex-direction: column;
  gap:40px;
  transition:.2s ease all;

  min-width:250px;
  overflow-x:hidden;
}
.logo{
  position:absolute;
  top:30px;
  left:20px;
}
.icon{
  position:absolute;
  top:40px;
  right:40px;
  
}

.options{
  position:relative;
  left:10px;
  top:120px;
  display:flex;
  flex-direction: column;
  gap:25px;
  width:80%;
  
}

.link{

  display:flex;
  gap:12px;
  font-size:18px;
  opacity:0;
  animation: appears .2s linear forwards;
  animation-delay: .1s;

  padding:8px;
  display:flex;
  align-items:center;
  transition:.3s ease-in-out all;
  
  border: 1px solid transparent;
}

.link:hover{
  border-bottom: 1px solid var(--Light-gray);
}

.--active{
  border-bottom:1px solid var(--White) !important;
}

.number{
  font-weight: 700;
}

.nav-desk{
  display:none;
}


@keyframes appears {
  0%{
    opacity: 0;
  }
  100%{
    opacity:1;
  }
}

@media (min-width:768px){
  .icon{
    display:none;
  }

  .nav-desk{
    display:block;
  }
  .options-desk{
    display:flex;
    position:absolute;
    right:0;
    padding: 0 50px;
    background:rgb(255, 255, 255, .04);
    flex-direction:row;  
    gap:40px;  
  }
  .link{
    padding:40px 0;
  }

  .number{
    display:none;
  }

}

@media (min-width:1024px){
  .number{
    display:block;
  }
  .logo{
    top:65px;
    left:60px;
  }
  .options-desk{
    width:60%;
    justify-content: space-evenly ;
    top:40px;     
  }

}

</style>