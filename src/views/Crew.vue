<template>
  <div class="wrapper">
    <div class="headline typography__h5">
     <span>02</span>  MEET YOUR CREW
    </div>  
    <div class="crew-info">
      <div class="crew-info__image">
          <img :src="'images/crew/' + crew[selected].image">
      </div>
      
      <div class="crew-info__texts">
        <div class="selector typography__h5">
          <div class="item" :class="isSelected('douglas_hurley')" @click="selected = 'douglas_hurley'"></div>
          <div class="item" :class="isSelected('mark_shuttleworth')" @click="selected = 'mark_shuttleworth'"></div>
          <div class="item" :class="isSelected('victor_glover')" @click="selected = 'victor_glover'"></div>
          <div class="item" :class="isSelected('anousheh_ansari')" @click="selected = 'anousheh_ansari'"></div>
      </div>
        <div class="name-title">
          <div class="role typography__h4"> {{crew[selected].role}}</div>
          <div class="crew-name typography__h4"> {{crew[selected].name}}</div>
        </div>
      
        <div class="description typography__h5">
          {{crew[selected].description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Crew",
    data(){
      return {
        selected: 'douglas_hurley',
        crew: {
          douglas_hurley: {
            name: "DOUGLAS HURLEY",
            description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            role: "COMMANDER",
            image: 'image-douglas-hurley.png'
          },
          mark_shuttleworth: {
            name:  "MARK SHUTTLEWORTH",
            description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            role:"MISSION SPECIALIST",
            image: 'image-mark-shuttleworth.png'
          },
          victor_glover: {
            name: 'VICTOR GLOVER',
            description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
            role:"PILOT",
            image: 'image-victor-glover.png'
          },
          anousheh_ansari: {
            name: 'ANOUSHEH ANSARI',
            description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            role:"FLIGHT ENGINEER",
            image: 'image-anousheh-ansari.png'
          }
        }
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
  
  background-image:url('../../public/images/crew/background-crew-mobile.jpg');
 
}

.headline{
  color:var(--White);
}
.headline span{
  color:var(--Gray);
  font-weight: 800;
  margin-right:10px;
}
.crew-info{
  display:flex;
  flex-direction: column;
  align-items:center;
  gap:30px;
}
.crew-info__image{
  position:relative;
  width:200px;
  height:200px;
  border-bottom:1px groove var(--Light-gray);
  margin-left: auto;
  margin-right: auto;
}

.crew-info__image img{
    box-sizing: border-box;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit:contain;
}
.crew-info__texts{
  display:flex;
  flex-direction: column;
  text-align:center;

}
.selector{
  color: var(--Light-blue);
  display:flex;
  justify-content: center;
  gap:20px;
  height:30px;
}

.item{
  width:10px;
  height:10px;
  border-radius:50%;
  background: var(--Gray);
  transition: .5s ease-in-out all;
  cursor:pointer;
}

.item:hover{
  background: var(--Light-gray);

}

.--active{
  background: var(--White);
}
.name-title{
  display:flex;
  flex-direction: column;
  align-items:center;
  gap:5px;
}
.role{
  font-size:16px;
  font-weight: 400;
  color: var(--Light-gray);
}
.crew-name{
  color:white;
}
.description{
  line-height:25px;
  color:var(--Light-blue);
  padding:0 24px;
}

@media (min-width:768px){
  .wrapper{
    background-image:url('../../public/images/crew/background-crew-tablet.jpg');  
    gap:35px;
    /* flex-direction: column-reverse; */
  }
  .headline{
    align-self:flex-start;
    padding-left:40px;
    font-size:2rem;
  }
  .crew-info__image{
    height:550px;
    width:550px;
    position:absolute;
    border-bottom: none;
    bottom:0;
  }
  .crew-info__texts{
    width:70%;
    gap:30px;
  }
  .crew-info{
    flex-direction: column-reverse;
  }
  .role{
    font-size:2.4rem;
  }
  .crew-name{
    font-size:4rem;
  }
  .description{
    height:100px;
  }
  .selector{
    order:1;
    align-self:center;
  }
  .item{
    height:15px;
    width:15px;
  }
  
}

@media(min-width:1025px){
  .wrapper{
    background-image:url('../../public/images/crew/background-crew-desktop.jpg');  
    padding-top:200px;
    padding-left:100px;
    gap:70px;
  }
  .crew-info{
    flex-direction: row-reverse;
    justify-content: left;
    
  }
  .crew-info__texts{
    display:flex;
    justify-items: left;
    text-align:left;
  }
  .role{
    font-size:3.2rem;
  }
  .crew-name{
    font-size:5.6rem;
  }
  .description{
    font-size:1.8rem;
    width:60%;
    padding-left: 40px;
  }
  .crew-info__image{
    right:100px;
    bottom:0;

    height:450px;
    width:450px;
  }
  .name-title{
    align-items:flex-start;
    padding:0 40px;
  }
  .selector{
    align-self: flex-start;
    padding:0 40px;

  }
}


</style>