<template>

<div class="wrapper">

    <div class="container" >

        <div class="row">
            <div class="col-md-12" style="height: 50px">

            </div>
        </div>

        <div class="row">

            <transition name="slideDown">

            <div v-if="show" class="col-md-6">

                <div style="height: 100vh;">

                    <h4 style="color: white; margin-top: 20px; margin-bottom: 50px; text-align: center"> Get in Touch with us </h4>

                    <div class="inputField">

                        <input type="text" id="Name" autocomplete="off" placeholder=" ">
                        <label for="Name"> Name </label>

                    </div>

                    <div class="inputField">

                        <input type="text" id="Email" autocomplete="off" placeholder=" ">
                        <label for="Email"> Email </label>

                    </div>

                    <div class="inputField">

                        <input type="text" id="Subject" autocomplete="off" placeholder=" ">
                        <label for="Subject"> Subject </label>

                    </div>

                    <div class="textArea">

                        <textarea name="Message" type="text" id="Message" placeholder=" "></textarea>
                        <label for="Message"> Message </label>

                    </div>

                    <button style="display: block; width: 100px; background: transparent; color: white; margin: 0 auto; margin-top: 20px;"> Send </button>

                </div>

            </div>

            </transition>

            <transition name="slideUp">

            <div v-if="show" class="col-md-6">

                <div style="height: 100vh;">

                    <h4 style="color: white; margin-top: 20px; margin-bottom: 50px; text-align: center"> Information </h4>

                    <p style="color: white"> <i class="fa fa-globe" style="color: white"></i> <strong>Address: </strong>2nd Floor, Jahangir Plaza, Street 22, Sector J, DHA Phase 2 Islamabad. </p>

                    <p style="color: white"> <i class="fa fa-envelope" style="color: white"></i> <strong>Email: </strong> info@joyn.com.pk </p>

                    <p style="color: white"> <i class="fa fa-phone" style="color: white"></i> <strong>Phone: </strong> 90293203920 </p>

                    <div class="map">

                        <iframe class="innerMap" width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=dha%20phase%202%20street%2029+(joyn%20Digitial)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                    </div>

                </div>

            </div>

            </transition>
        </div>
    </div>
</div>
    
</template>

<script>
export default {

    data(){

        return{

            show: false,
        }
    },

    mounted(){

        this.show = true
    }
    
}
</script>

<style scoped>

.wrapper{
    background-image: linear-gradient(to right, #302b63, #24243e);
    width: 100vw;
}

.map{

    margin: 0 auto;
    margin-top: 20px;
    height: 300px;
    width: 70%;
}

.innerMap{

     filter: grayscale(100%) invert(92%) contrast(83%);
}

.inputField{

  width: 70%;
  background: transparent;
  height: 50px;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 5px;
	

}

.inputField input{

  height: 100%;
  width: 100%;
  border-radius: 5px;
  border-color: white;
  background: transparent;
  color:white;

}

.inputField label{

	height: 20px;
	position: absolute;
	left:5px;
    background: #302b63;
    color: white;
	top: 25%;
	transition: all 0.3s ease;

}

.inputField input:focus + label{

	
	top: -12px;
	left: 10px;

}

.inputField input:not(:placeholder-shown) + label{

	top: -12px;
	left: 10px;

}

.textArea{

  width: 70%;
  height: 150px;
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
}

.textArea textarea{

  height: 100%;
  width: 100%;
  border: 2px solid white;
  color: white;
  background: transparent;
  border-radius: 5px;
  padding-top: 20px;


}

.textArea label{

  position: absolute;
  background: #302b63;
  color: white;
  height: 20px;
  left:5px;
  top:10px;
  transition: all 0.3s ease
}


.textArea textarea:focus + label{


  top: -12px;
  left:10px;
	

}

.textArea textarea:not(:placeholder-shown) + label{

	top: -12px;
	left: 10px;

}

.slideDown-enter-active, .slideDown-leave-active {
  transition: all 1s;
}
.slideDown-enter-from, .slideDown-leave-to /* .fade-leave-active below version 2.1.8 */ {
  
  transform: translateY(-100vh);
}

.slideUp-enter-active, .slideUp-leave-active {
  transition: all 1s;
}
.slideUp-enter-from, .slideUp-leave-to /* .fade-leave-active below version 2.1.8 */ {
  
  transform: translateY(100vh);
}

</style>