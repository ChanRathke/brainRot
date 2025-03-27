<script setup>
import { ref } from 'vue'

const rotCount = ref(0)
</script>

<template>
    <router-view>
        <div class="container">
            <h1>Settings</h1>
            <p>If I had cool settings this is where they'd be</p>
            <p>Anyways, enjoy this slider</p>


            <div class="slider-component">
                <div class="slidecontainer">
                <input
                    ref="input"
                    v-model="currentValue"
                    type="range"
                    :min="min"
                    :max="max"
                    class="slider"
                    @input="onInput"
                    />
                </div>
            </div>


            
            <div>
                <div class="buttonSection">
                    <router-link to="/">
                        <button class="navigateButtons" >Home</button>
                    </router-link>
                    <router-link to="/Leaderboard">
                        <button class="navigateButtons" >Leaderboard</button>
                    </router-link>
                
                </div>
            </div>
        </div>
    </router-view>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.container {
    
    align-items: center;
    justify-content: center;
    padding: 5px 30px;
    background-color: #ffab17;
    border-radius: 20px;

}

.buttonSection {
    display: flex;
    align-items: center; 
    justify-content: center;
    margin: 10px auto; 
    padding: 10px;
    border-radius: 20px;
    gap: 10px;
    text-align: center;
}

.navigateButtons {
    padding: 20px;
    min-width: 150px;
}

.slider-component .slidecontainer {
    width: 100%;
  }

  .slider-component .slidecontainer .slider {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: #c2c2c2;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
  }

  .slider-component .slidecontainer .slider:hover {
    opacity: 1;
  }

  .slider-component .slidecontainer .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: #d8a22e;
    cursor: pointer;
    border-radius: 50%;
  }

  .slider-component .slidecontainer .slider::-moz-range-thumb {
    width: 18px;
    height: 18px;
    background: #d8a22e;
    cursor: pointer;
    border-radius: 50%;
  }
</style>
