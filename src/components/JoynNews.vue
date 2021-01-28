<template>

    <transition name="fade">
        <div v-if="show" class="outer">

        <transition v-bind:name="'fade-' + direction">
        <div v-if="currentSlide == 0" style="height: 100vh;" class="slide1">

            <h3 class="slideHeading">
                News 0
            </h3>
            <p class="slidePara">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. 
                Si enim ad populum me vocas, eum. Ita ne hoc quidem modo paria peccata sunt. Ergo hoc quidem apparet, 
                nos ad agendum esse natos. Non igitur de improbo, sed de callido improbo quaerimus, qualis 

            </p>

          
        </div>
        </transition>
   
   
        <transition v-bind:name="'fade-' + direction">
        <div v-if="currentSlide == 1" style="height: 100vh;" class="slide2">

            <h3 class="slideHeading">
                News 1
            </h3>
            <p class="slidePara">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. 
                Si enim ad populum me vocas, eum. Ita ne hoc quidem modo paria peccata sunt. Ergo hoc quidem apparet, 
                nos ad agendum esse natos. Non igitur de improbo, sed de callido improbo quaerimus, qualis

            </p>

            
        </div>
        </transition>
      
  
        <transition v-bind:name="'fade-' + direction">
        <div v-if="currentSlide == 2" style="height: 100vh;" class="slide3">

            <h3 class="slideHeading">
                News 2
            </h3>
            <p class="slidePara">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. 
                Si enim ad populum me vocas, eum. Ita ne hoc quidem modo paria peccata sunt. Ergo hoc quidem apparet, 
                nos ad agendum esse natos. Non igitur de improbo, sed de callido improbo quaerimus, qualis

            </p>

            
        </div>
        </transition>

        <button class="mybutton1" v-on:click="back"> <i class="fa fa-angle-left" style="font-size:30px; color:white"></i> </button>
        <button class="mybutton2" v-on:click="forward"> <i class="fa fa-angle-right" style="font-size:30px; color:white"></i> </button>
        <button class="mybutton3" v-on:click="Pause" ref="pause"> <i class="fa fa-pause" style="font-size:20px; color:white"></i> </button>
        <button class="mybutton4" v-on:click="Play" ref="play" > <i class="fa fa-play" style="font-size:20px; color:white"></i> </button>
        <div class="indicators">

           <a href="#"> <div @click="currentSlide = 0" v-bind:class="{ white : currentSlide == 0}" class="indicator"></div> </a>
           <a href="#"> <div @click="currentSlide = 1" v-bind:class="{ white : currentSlide == 1}" class="indicator"></div> </a>
           <a href="#"> <div @click="currentSlide = 2" v-bind:class="{ white : currentSlide == 2}" class="indicator"></div> </a>

        </div>

    </div>

    </transition>


</template>

<script>
export default {

    data(){

        return{

            show:false,
            currentSlide:0,
            interval: "",
            direction: "right"

        }
    },

    methods:{

        back(){

                clearInterval(this.interval)

                this.direction = "left";

                if(this.currentSlide != 0){
                    this.currentSlide--
                }

        },

        forward(){

            clearInterval(this.interval)

            this.direction = "right";

            if(this.currentSlide != 2)
            {
                this.currentSlide++
            }else{

                this.currentSlide = 0
            }


        },

        Pause(){

            const element1 = this.$refs.pause

            const element2 = this.$refs.play
            
            clearInterval(this.interval)

            element1.style.display = "none"
            element2.style.display = "block"
            
        },

        Play(){

            const element1 = this.$refs.pause

            const element2 = this.$refs.play

            this.interval = setInterval(() => {

            this.direction = "right";

            if(this.currentSlide == 3){

                this.currentSlide = 0
            }else{

                this.currentSlide++

            }

            }, 5000);

            element2.style.display = "none"
            element1.style.display = "block"

            
        }

    },

    mounted(){

        this.show = true

    this.interval = setInterval(() => {

    this.direction = "right";

      if(this.currentSlide == 2){

        this.currentSlide = 0
      }else{

        this.currentSlide++

      }

    }, 5000)

        
    }
    
}
</script>

<style scoped>

.outer{

    position: relative;
    height: 100vh;
    width: 100%;
}

.slide1{

    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('../assets/image2.jpg') ;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
}

.slide2{

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/latitude.png') ;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%
    
}

.slide3{

    background-image: linear-gradient(rgba(92, 41, 41, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/article.png') ;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    width: 100%;
    
}

.mybutton1{

    position: absolute;
    top: 70vh;
    left:10vw;
    z-index: 1000;
    background: transparent;
    border: none;
}

.mybutton2{

    position: absolute;
    left: 20vw;
    top: 70vh;
    z-index: 1000;
    background: transparent;
    border: none;

}

.mybutton3{

    position: absolute;
    top: 70.2vh;
    left: 14.8vw;
    z-index: 1000;
    background: transparent;
    border: none;
}

.mybutton4{

    position: absolute;
    top: 70.2vh;
    left: 14.8vw;
    z-index: 1000;
    background: transparent;
    border: none;
    display: none;

}

.indicators{

    position: absolute;
    background: lightslategray;
    top: 80vh;
    left: 10vw;
}

.indicator{

    height: 3px;
    width: 3.5vw;
    float: left;
}

.white{

    background: white;
}

.slideHeading{

    height: 50px;
    width: 200px;
    position: absolute;
    top: 35%;
    left: 10vw;
    color: white;
}

.slidePara{

    height: 50px;
    width: 400px;
    position: absolute;
    top: 40%;
    left: 10vw;
    color: white;
}

.fade-right-enter-active, .fade-right-leave-active {
  transition: all 1s ease;
}
.fade-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
 
  transform: translateX(-100%);
}
.fade-right-enter-from{

  transform: translateX(100%);
}

.fade-left-enter-active, .fade-left-leave-active {
  transition: all 1s ease;
}
.fade-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  
  transform: translateX(100%);
}
.fade-left-enter-from{


  transform: translateX(-100%);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>