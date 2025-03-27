<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const rotCount = ref(0);
const personName = computed(() => route.params.name || "Unknown");
</script>

<template>
    <router-view>
        <div class="container">
            <h1>Person {{ personName }}</h1>
            <p>Total Rot: 207</p>
            <p>Most Rot Said in a Day: 42</p>
            <p>Most Common Phrase: "Chicken Jockey"</p>
            
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
</style>
