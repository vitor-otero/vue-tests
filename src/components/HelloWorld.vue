<template>
  <div>
    <div class="tab-bar">
      <button v-for="(tab, index) in tabs" :key="index" @click="changeTab(index)" :class="{ active: activeTab === index }">{{ tab }}</button>
    </div>
    <!-- Your page content goes here -->
    <div v-show="activeTab === 0">
      <h1>Page 1</h1>
      <p>This is the content of Page 1.</p>
    </div>
    <div v-show="activeTab === 1">
      <h1>Page 2</h1>
      <p>This is the content of Page 2.</p>
    </div>
    <div v-show="activeTab === 2">
      <h1>Page 3</h1>
      <p>This is the content of Page 3.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref(0);
const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

function changeTab(index) {
    activeTab.value = index;
}
</script>

<style scoped>
.tab-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.tab-bar button {
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
}

.tab-bar button.active {
  background-color: #0056b3;
}
</style>
