<script setup>
import { ref } from 'vue'

const rotCount = ref(0)
// const img = {src: '@/src/assets/static.jpg', alt: 'Static'}

</script>

<template>
    <router-view>
        <div class="container" >
            <h1>Rot-O-Meter</h1>

            <div>
                <p>Your personal counter is at:</p>
                <button class="buttonClick" @click="rotCount++">{{ rotCount }}</button>
                <div class="buttonSection">
                    <router-link to="/Leaderboard">
                        <button class="navigateButtons" >Leaderboard</button>
                    </router-link>
                    <router-link to="/Settings">
                        <button class="navigateButtons" >Settings</button>
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

.buttonClick {
    width: 350px;
    height: 500px;
    font-size: 100px;
    align-content: center;
    border-radius: 20px;
    background-color: #aea799;
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
</style>
