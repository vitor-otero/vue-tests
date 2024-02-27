<template>
  <div>
    <!-- Title and logo for the Administrator Dashboard -->
    <div class="panel-header">
      <!-- Add @click event handler to the image -->
      <img :src="'./gmv_logo_red.png'" alt="GMV Logo Red" class="panel-logo" @click="reloadPage">
      <div class="title-container">
        <h1 class="panel-title">Administrator Dashboard</h1>
      </div>
    </div>
    <!-- Tab bar -->
    <div class="tab-bar">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-button"
        :class="{ active: activeTab === index }"
        @click="changeTab(index)"
        :style="{ marginLeft: index === 0 ? '10px' : '10px' }"
      >
        {{ tab }}
      </button>
    </div>
    <!-- Router view to display the content of the selected tab -->
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const tabs = ['Cits-core', 'Tab 2', 'Tab 3'];
const activeTab = ref(0);

function changeTab(index) {
    activeTab.value = index;
    router.push(`/page${index + 1}`);
}

// Function to reload the page
function reloadPage() {
    window.location.href = '/';
}
</script>

<style scoped>
.panel-header {
  display: flex;
  align-items: center;
  margin-top: 5px;
}

.panel-logo {
  width: 100px;
  height: auto;
  margin-right: 10px; /* Adjust margin as needed */
}

.title-container {
  flex: 1; /* Allow the container to take up remaining space */
}

.panel-title {
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
  text-align: center; /* Center the text horizontally */
}

.tab-bar {
  display: flex;
  margin-bottom: 20px;
  background-color: #000;
  border-bottom: 2px solid #ccc;
  border-top-left-radius: 10px; /* Rounded top-left corner */
  border-top-right-radius: 10px; /* Rounded top-right corner */
  padding: 12px 0; /* Added padding top and bottom */
}

.tab-button {
  padding: 10px 20px;

  cursor: pointer;
  background-color: #242424;
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  font-weight: bold; /* Add this line to make the text bold */
}

.tab-button.active {
  background-color: #c45b1a;
}

.tab-button:hover {
  background-color: #444;
}
</style>
