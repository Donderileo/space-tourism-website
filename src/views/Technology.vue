<template>
  <div class="wrapper">
    <div class="headline typography__h5">
     <span>03</span>  SPACE LAUNCH 101
    </div>
    <div class="tech-info">
      <div class="image-tech">
        <img class="landscape" :src="'images/technology/' + techs[selected].image_landscape">
        <img class="portrait"  :src="'images/technology/' + techs[selected].image_portrait">
      </div>
      <div class="texts-tech">
        <div class="selector typography__h5">
          <div class="item" :class="isSelected(0)" @click="selected = 0">1</div>
          <div class="item" :class="isSelected(1)" @click="selected = 1">2</div>
          <div class="item" :class="isSelected(2)" @click="selected = 2">3</div>
        </div>
        <div class="texts">
            <div class="terminology typography__h5">THE TERMINOLOGY...</div>
            <div class="tech-name typography__h4"> {{techs[selected].name}}</div>
        
        <div class="description typography__h5">
          {{techs[selected].description}}
        </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Technology",
    data(){
      return {
        selected: 0,
        techs: [
         {
            name:"LAUNCH VEHICLE",
            image_landscape:"image-launch-vehicle-landscape.jpg",
            image_portrait:"image-launch-vehicle-portrait.jpg",

            description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
         },
         {
            name:"SPACEPORT",
            image_landscape:"image-spaceport-landscape.jpg",
             image_portrait:"image-spaceport-portrait.jpg",

            description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
         },
         {
            name:"SPACE CAPSULE",
            image_landscape:"image-space-capsule-landscape.jpg",
             image_portrait:"image-space-capsule-portrait.jpg",

            description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
         },
        ]
      }
    },
    methods: {
      isSelected(person){
        if(person == this.selected){
          return '--active'
        }
        return ''
      }
    }
}
</script>

<style scoped>
.wrapper{
  background-image:url('../../public/images/technology/background-technology-mobile.jpg');
}

.headline{
  color:var(--White);
}
.headline span{
  color:var(--Gray);
  font-weight: 800;
  margin-right:10px;
}
.tech-info{
  display:flex;
  flex-direction: column;
  gap:30px;
}
.image-tech img{
  width:100%;
}

.texts-tech{
  display:flex;
  flex-direction: column;
  align-items:center;
  gap:20px;
}

.selector{
  color: var(--Light-blue);
  display:flex;
  gap:20px;
}

.item{
  width:40px;
  height:40px;
  border-radius:50%;
  border:1px solid var(--Gray);
  transition: .5s ease-in-out all;

  display:flex;
  justify-content: center;
  align-items:center ;

  color:var(--White);
  cursor:pointer;

}

.item:hover{
  border: 1px solid var(--White);
}
.--active{
    color:var(--Gray);
    background: var(--White);
}
.texts{
    display:flex;
    flex-direction: column;
    align-items:center;
    gap:20px;
    text-align:center;
}

.terminology{
    font-size:16px;
    font-weight: 400;
    color: var(--Light-gray);
}
.tech-name{
    color:white;
}
.description{
    line-height:25px;
    color:var(--Light-blue);
    padding:0 10px;
}

.portrait{
  display:none;
}

@media (min-width:768px){
  .wrapper{
    background-image:url('../../public/images/technology/background-technology-tablet.jpg');  
  }
  .headline{
    align-self:flex-start;
    padding-left:40px;
    font-size:2rem;
  }
  .item{
    height:60px;
    width:60px;
  }
  .description{
    width:65%;
  }
}

@media (min-width:1025px){
  .wrapper{
    background-image:url('../../public/images/technology/background-technology-desktop.jpg');
    padding-left:100px;
    padding-top:200px;  
  }
  .portrait{
    display:block;
  }
  .landscape{
    display:none;
  }
  .image-tech img{
    width:400px;
    height:400px; 
  }
  .tech-info{
    flex-direction: row-reverse;
    padding-left:100px;
    gap:0;
  }
  .texts-tech{
    flex-direction: row;
    gap:50px;
  }
  .selector{
    flex-direction: column;
  }
  .item{
    width:80px;
    height:80px;
  }
  .texts{
    align-items:flex-start;
    text-align:start;
  }
  .tech-name{
    font-size:5.6rem;
  }
  .description{
    font-size:1.8rem;
    width:75%;
  }
  
}


</style>