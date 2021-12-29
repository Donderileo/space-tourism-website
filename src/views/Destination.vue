<template>
  <div class="wrapper">
    <div class="headline typography__h5">
     <span>01</span>  PICK YOUR DESTINATION
    </div> 
    <div class="destination__info">
      <div class="destination__image">
        <div class="image-destination">
          <img :src="'images/destination/image-' + selected +'.png'">
          <!--  images/destination/image-moon.png -->
        </div>
      </div>
      <div class="destination__texts">

        <div class="selector typography__h5">
          <div    :class="isSelected('moon')" @click="selected = 'moon' ">MOON</div>
          <div    :class="isSelected('mars')" @click="selected = 'mars' ">MARS</div>
          <div    :class="isSelected('europa')" @click="selected = 'europa' ">EUROPA</div>
          <div    :class="isSelected('titan')" @click="selected = 'titan' ">TITAN</div>
        </div>

        <div class="planet-name typography__h2"> {{selected.toUpperCase()}}</div>
        <div class="description typography__h5">
          {{planets[selected].description}}
        </div>

        <div class="line"></div>

        <div class="trip">
          <div class="avg_distance">
            <div class="title typography__h5">
              AVG DISTANCE
            </div>
            <div class="value typography__h4">
              {{planets[selected].avg_distance}}
            </div>
          </div>
          <div class="travel_time">
            <div class="title typography__h5">
              EST. TRAVEL TIME
            </div>
            <div class="value typography__h4">
              {{planets[selected].travel_time}}
            </div>
          </div>
        </div>
        
      </div>
    </div> 
    
  </div>
</template>

<script>
export default {
    name:"Destination",
    data(){
      return {
        selected: 'moon',
        planets: {
          moon: {
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            avg_distance: '384,400 KM',
            travel_time: '3 DAYS'
          },
          mars: {
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            avg_distance: '225 MIL. KM',
            travel_time: '9 MONTHS'
          },
          europa: {
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            avg_distance: '628 MIL. KM',
            travel_time: '3 YEARS'
          },
          titan: {
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            avg_distance: '1.6 BIL. KM',
            travel_time: '7 YEARS'
          }
        }
      }
    },
    methods: {
      isSelected(destination){
        if(destination == this.selected){
          return '--active'
        }
        return ''
      }
    }
}
</script>

<style scoped>
.wrapper{ 
  background-image:url('../../public/images/destination/background-destination-mobile.jpg');
}

.headline{
  color:var(--White);
}
.headline span{
  color:var(--Gray);
  font-weight: 800;
  margin-right:10px;
}

.destination__info, .destination__texts{
  display:flex;
  align-items: center;
  flex-direction:column;
  gap:30px;
}



.image-destination img{
  width:200px;
  height:200px;
}

.selector{
  color: var(--Light-blue);
  display:flex;
  gap:20px; 
  height:32px;
}

.selector div {
  cursor:pointer;
  transition: .2s ease all;
}

.selector div:hover{
  border-bottom:3px solid var(--Light-gray);
}

.--active{
  color: var(--White);
  border-bottom:3px solid var(--White) !important;
}


.planet-name{
  color:white;
}
.description{
  line-height:25px;
  color:var(--Light-blue);
  padding:0 24px;
  text-align:center;
}

.line{
  height:.5px;
  width:90%;
  background:var(--Light-gray);
}

.trip{
  display:flex;
  flex-direction: column;
  gap:30px;
  text-align:center;
}

.avg_distance, 
.travel_time {
  display:flex;
  flex-direction: column;
  gap:10px;
}

.title{
  color: var(--Light-blue);
}

.value{
  color: var(--White);
}

@media (min-width:768px){
  .wrapper{
    background-image:url('../../public/images/destination/background-destination-tablet.jpg');
    gap:35px;
  }
  .headline{
    align-self:flex-start;
    padding-left:40px;
    font-size:2rem;
  }
  .image-destination img{
    width:300px;
    height:300px;
  }
  .selector{
    gap:40px;
  }
  .planet-name{
    font-size:8rem;
  }
  .description{
    width:80%;
  }
  .line{
    width:70%;
  }
  .trip{
    flex-direction: row;
    gap:100px;
  }
}

@media (min-width:1025px){
  .wrapper{
    background-image:url('../../public/images/destination/background-destination-desktop.jpg');

    padding-top:200px;
    padding-left:100px;
  }
   .headline{
    font-size:2.8rem;
  }
  .destination__info{
    flex-direction: row;
    padding-left:100px;
    gap:300px;
  }
  .destination__texts{
    text-align:left;    
    align-items: start;
    justify-content: left;
    width:50%;
  }
  .planet-name{
    font-size:10rem;
  }
  .description{
    font-size:1.8rem;
    text-align:left;
    padding:0;
  }

  .trip{
    text-align:left;
  }
}

</style>