<template>
  <div class="page-content">
    <h2>{{ title }}</h2>

    <!-- Section for adding a new configuration -->
    <div class="section">
      <h3>Add New Configuration</h3>
      <div class="input-group">
        <label for="newKey">Key:</label>
        <input type="text" id="newKey" v-model="newConfig.key" class="input-box">
      </div>
      <div class="input-group">
        <label for="newValue">Value:</label>
        <input type="text" id="newValue" v-model="newConfig.value" class="input-box">
      </div>
      <button @click="addNewConfig" class="add-button">Add New Config</button>
    </div>

    <!-- Section for updating existing configurations -->
    <div v-if="isLoading" class="section">
      <p>Loading...</p>
    </div>

    <div v-else class="section">
      <h3>Update Existing Configurations</h3>
      <div class="input-group">
        <label for="filterByKey">Filter Key:</label>
        <input type="text" id="filterByKey" v-model="filterKey" class="input-box">
      </div>
      <table>
        <tr>
          <th>Key</th>
          <th>Value</th>
          <th></th>
        </tr>
        <tr v-for="(item, index) in sortedFilteredConfig" :key="index">
          <td>{{ item.key }}</td>
          <td>
            <input type="text" v-model="item.value" class="input-box-full">
          </td>
          <td>
            <button @click="deleteConfig(item.key)" class="delete-button">Delete</button>
          </td>
        </tr>
      </table>
      <button @click="saveChanges" class="save-button">Save Changes</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const title = ref('Cits-core Configurations');
const config = ref([]);
const apiEndpoint = 'http://0.0.0.0:8001/config';
const newConfig = ref({ key: '', value: '' });
const filterKey = ref('');
const isLoading = ref(true);

const fetchData = async () => {
    try {
        const response = await axios.get(apiEndpoint);
        config.value = response.data;
        isLoading.value = false;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
};

const saveChanges = async () => {
    try {
        await axios.put(`${apiEndpoint}`, config.value);
        alert('Changes saved successfully');
        fetchData();
    } catch (error) {
        console.error('Error saving changes:', error.message);
    }
};

const deleteConfig = async (key) => {
    try {
        await axios.delete(`${apiEndpoint}`, { data: { key } });
        fetchData(); 
    } catch (error) {
        console.error('Error deleting configuration:', error.message);
    }
};

const addNewConfig = async () => {
    try {
        await axios.post(`${apiEndpoint}`, newConfig.value);
        fetchData();
        alert('Key has been created successfully'); 
    } catch (error) {
        console.error('Error adding new configuration:', error.message);
        alert('Key already exists!');
    }
};

const filteredConfig = computed(() => {
    if (!filterKey.value.trim()) {
        return config.value;
    } else {
        return config.value.filter(item => item.key.includes(filterKey.value.trim()));
    }
});

const sortedFilteredConfig = computed(() => {
    return filteredConfig.value.slice().sort((a, b) => a.key.localeCompare(b.key));
});

onMounted(() => {
    fetchData();
});
</script>

<style scoped>
.page-content {
  margin: 20px;
}

.section {
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 10px;
}

.input-group label {
  display: inline-block;
  min-width: 80px;
}

.input-box {
  width: calc(49% - 90px);
  padding: 8px;
}
.input-box-full {
  width: 90%;
  padding: 8px;
}
table {
  width: 50%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #242020;
  text-align: center;
}

.delete-button, .save-button, .add-button {
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 10px;
}

.delete-button {
  background-color: red;
  width: 90%;
}

.save-button {
  background-color: #007bff;
  margin-top: 10px;
}

.add-button {
  background-color: green; 
}
</style>
