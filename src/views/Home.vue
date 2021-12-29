<template>
  <div class="wrapper">
    <div class="texts">

      <div class="typography__h5 headline">
        SO, YOU WANT TO TRAVEL TO
      </div>
      <div class="typography__h1">
        SPACE
      </div>
      <div class="typography__h5 description">
        Let’s face it; if you want to go to space, you might as well genuinely go to 
        outer space and not hover kind of on the edge of it. Well sit back, and relax 
        because we’ll give you a truly out of this world experience!
      </div>
    </div>
    <router-link to="/destination" class="explore typography__h4">EXPLORE</router-link>
  </div>
</template>

<script>
export default {
    name:"Home"
}
</script>

<style scoped>
.wrapper{
  background-image:url('../../public/images/home/background-home-mobile.jpg');
}
.texts{
  width:90%;
  text-align:center;
  color:var(--White);

  display:flex;
  flex-direction: column;
  gap:2rem;
}

.typography__h5{
  color:var(--Light-blue);
}

.description{
  line-height:28px;
}

.explore{
    -webkit-box-sizing: content-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: content-box;    /* Firefox, other Gecko */
  box-sizing: content-box;         /* Opera/IE 8+ */

  width:170px;
  height:170px;
  background:white;
  border-radius:50%;

  display:flex;
  align-items:center;
  justify-content: center;
  transition: .5s ease-in-out all;


}

.explore:hover{
  box-shadow:0px 0px 0px 40px  #24262f;
}

a{
  text-decoration: none;
  color:black;
}

@media (min-width:768px){
  .wrapper{
    background-image:url('../../public/images/home/background-home-tablet.jpg');
    gap:150px;
    padding-top:200px;

  }
  .typography__h1{
    font-size:15rem;
  }
  .headline{
    font-size:20px;
  }
  .texts{
    width:60%;
  }
  .explore{
    width:250px;
    height:250px;
    font-size:3.5rem;
  }
}
@media (min-width:1025px){
  .wrapper{
    background-image:url('../../public/images/home/background-home-desktop.jpg');
    gap:150px;
    padding-top:200px;
    flex-direction: row;
    justify-content: left;
    gap:30%;
  }
  .texts{
    text-align:left;
    width:40%;
    padding-left:150px;
  }
  .explore{
    height:300px;
    width:300px;
  }
}

</style>