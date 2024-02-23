<template>
  <div>
    <!-- Title for the Administrator Panel -->
    <h1 class="panel-title">Administrator Panel</h1>
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
import { ref, onMounted } from 'vue'; // Import onMounted
import { useRouter } from 'vue-router';

const router = useRouter();
const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
const activeTab = ref(0);

function changeTab(index) {
    activeTab.value = index;
    // Update the route when a tab is selected
    router.push(`/page${index + 1}`);
}

// Navigate to Page 1 upon component mount
onMounted(() => {
    router.push('/page1');
});
</script>

<style scoped>
.panel-title {
  text-align: center;
  font-size: 24px;
  color: #fff; /* Changed title color to white */
  margin-bottom: 20px;
}

.tab-bar {
  display: flex;
  margin-bottom: 20px;
  background-color: #000;
  border-bottom: 2px solid #ccc;
  padding: 10px 0; /* Added padding top and bottom */
}

.tab-button {
  padding: 10px 20px;
  cursor: pointer;
  background-color: #222; /* Changed button background color to match black */
  color: #fff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.tab-button.active {
  background-color: #c45b1a;
}

.tab-button:hover {
  background-color: #444; /* Adjusted hover color to match darker shade of black */
}
</style>
