<template>

<transition name="fade">
<div v-if="show" v-bind:class="{responsive : isShortScreen}" class="main">

    <div class="img">
        <img src="../assets/joynLogo.png" alt="logo" style="height: 100%; width: 100%;">
    </div>

    <ul>

        <li :class="{underline : $route.path == '/home'}">  <router-link to="/home" class="router"> Home </router-link> </li>
        <li :class="{underline : $route.path == '/aboutus'}" @mouseover="showAboutUs" @mouseleave="hideAboutUs"> About Us </li>
        <li :class="{underline : $route.path == '/divisions'}" @mouseover="showDivisions" @mouseleave="hideDivisions"> Divisions </li>
        <li :class="{underline : $route.path == '/news'}"> <router-link to="/news" class="router"> News </router-link> </li>
        <li :class="{underline : $route.path == '/contact'}"> <router-link to="/contact" class="router"> Contact Us </router-link> </li>
    </ul>

    <div v-on:click="getResponsive" class="toggleButton">
        <i class="fa fa-bars" style="font-size:30px;"></i>
    </div>


</div>
</transition>

<div v-bind:class="{slide: aboutUsHovered || divisionsHovered}" class="dropdown" ref="dropdown">
                <div v-if="aboutUsHovered" @mouseover="aboutUsContentHovered=true" @mouseleave="aboutUsContentHovered=false;aboutUsHovered=false"  class="aboutUs" ref="aboutUs" >

                    <div style="height: 100%; width: 50%; background: transparent; float: left">

                         <p style="margin-top: 30px; color: white;">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. 
                             Si enim ad populum me vocas, eum.
                         </p>
                        
                    </div> 
                    
                    <div style="height: 100%; width: 50%; background: transparent; float: left">

                        <p class="aboutUsLinks" style="margin-top: 30px"> Business </p>
                        <p class="aboutUsLinks"> Customers</p>
                        <p class="aboutUsLinks"> Projects</p>

                    </div>
                    
                </div>

                <div v-if="divisionsHovered"  @mouseover="divisionsContentHovered=true" @mouseleave="divisionsContentHovered=false;divisionsHovered=false"  class="divisions" ref="divisions">

                    <div style="height: 100%; width: 50%; background: transparent; float: left">

                         <p style="margin-top: 30px; color: white;">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. 
                             Si enim ad populum me vocas, eum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nihil opus est exemplis hoc facere longius. 
                             Si enim ad populum me vocas, eum.
                         </p>
                        
                    </div> 
                    
                    <div style="height: 100%; width: 50%; background: transparent; float: left">

                        <p class="aboutUsLinks" style="margin-top: 50px"> Joyn Digital </p>
                        <p class="aboutUsLinks"> Joyn Consultancies </p>
                        <p class="aboutUsLinks"> Joyn Services </p>

                    </div>
                    
                </div>

</div>
           



    
</template>


<script>
export default {

    data(){

        return{

            height: 0,
            scrollPos:0,
            show: true,

            isShortScreen: false,
            aboutUsHovered: false,
            divisionsHovered: false,

            aboutUsContentHovered: false,
            divisionsContentHovered: false,

            interval: "",

        }

    },

    methods:{

        getResponsive(){

            this.isShortScreen = !this.isShortScreen
        },

        showDivisions(){

            this.divisionsHovered = true

        },

        hideDivisions(){

             setTimeout(() => {

            if(this.divisionsContentHovered != true)
            {

             this.divisionsHovered = false

            }
             
            }, 1);

        },

        showAboutUs(){

            this.aboutUsHovered = true

        }, 

        hideAboutUs(){


            setTimeout(() => {

            if(this.aboutUsContentHovered != true)
            {

             this.aboutUsHovered = false

            }
             
            }, 1);


            
        },

        handleScroll () {

             
            if((document.body.getBoundingClientRect()).top > this.scrollPos){

                console.log("scrolled up")
                this.show = true;
                
            }else{

                console.log("scrolled bottom")
                this.show = false;
            }


            this.scrollPos = (document.body.getBoundingClientRect()).top

              
        }




    },

    created () {
    window.addEventListener('scroll', this.handleScroll);
    },

  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
    },
    
}
</script>

<style scoped>

.underline{

    border-bottom: 2px solid orange;
}

.router{

    text-decoration: none;
    color: white;
    display: block;
}



.main{

    height: 30px;
    width: 100%;
    background-color:transparent;
    position: fixed;
    z-index:2;
}

.img{
    width: 100px;
    height: 120px;
    float: left;
    margin-left: 10%;
    margin-top: -45px;
}

.main > ul{

    background: transparent;
    height: 30px;
    float: left;
    margin-left: 18%;
}

.main > ul > li{

    background: transparent;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
    list-style: none;
    color: white;
}

.main > ul > li:hover{

    border-bottom: 2px solid orange;
}


.dropdown{

    max-height: 0px;
    opacity:0;
    overflow: hidden;
    width: 100%;
    background:black;
    position: fixed;
    top:0;
    z-index:1;
    transition: all 1.5s ease;
}

.slide{

    max-height: 330px;
    opacity: 0.9;
}


.aboutUs{

    width: 500px;
    height: 200px;
    background: transparent;
    margin: 0 auto;
    margin-top: 30px;
    transition: all 2s ease-out;
    
    
    
}

.divisions{

    width: 500px;
    height: 300px;
    background: transparent;
    margin: 0 auto;
    margin-top: 30px;
    transition: all 2s ease-out;
    

}




.toggleButton{

    height: 30px;
    width: 30px;
    background: lightyellow;
    float: left;
    position: absolute;
    right: 0;
    display: none;
}

.aboutUsLinks{

    text-align: center;
    color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  
  opacity:0;
}
.fade-enter-from{

  transform: translateY(-30px);
  opacity:0;
}


@media screen and (max-width: 1000px) {

    .toggleButton{

        display: block;
    }

    .main > ul{

        display: none;
    }

    .main.responsive > ul{

        clear:both;
        width: 100%;
        margin: 0;
        display: block;
    }

    .main.responsive > ul >li{

        clear: both;
        width: 100%;
        height: auto;
        margin: 0;

    }

}



</style>