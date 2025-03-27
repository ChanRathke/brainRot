<script setup>
import { ref } from 'vue'

const rotCount = ref(0)

</script>

<template>
    <router-view>
        <div class="page">
            <div> 
                <h1>Lead-O-Board</h1> 
            </div>

            <div class="container">
                <div class="leaderboard">
                    <router-link v-for="person in ['A', 'B', 'C', 'D', 'E', 'F']" :key="person" :to="`/Person/${person}`">
                        <div class="person">Person {{ person }}</div>
                    </router-link>
                </div>
            </div>
            <div class="buttonSection">
                <router-link to="/">
                    <button class="navigateButtons">Home</button>
                </router-link>
                <router-link to="/Settings">
                    <button class="navigateButtons" >Settings</button>
                </router-link>
            </div>
        </div>
    </router-view>
  

</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.page {
    width: 350px;
    height: 750px;
    align-items: center;
    justify-content: center;
    padding: 5px 40px;
    background-color: #ffab17;
    border-radius: 20px;
    
}

.container {
    width: 350px;
    height: 510px;
    align-items: center;
    justify-content: center;
    background-color: #aea799;
    border-radius: 20px;
}

.leaderboard {
    align-items: center;
    justify-content: center;
    height: 400px;
}

.person {
    margin: 20px;
}


.buttonSection {
    display: flex;
    align-items: center; 
    justify-content: center;
    margin: 10px 10px; 
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