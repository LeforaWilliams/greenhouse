<template>
  <div class="home-container">
    <AddPlant v-on:add-plant="addPlant" />
    <UserPlants v-bind:plants="plants" v-on:del-plant="deletePlant" />
  </div>
</template>

<script>
import UserPlants from "../components/UserPlants.vue";
import AddPlant from "../components/AddPlant.vue";
import axios from "../services/axios.js";

export default {
  name: "Home",
  components: {
    UserPlants,
    AddPlant
  },
  //store data in data function which returns an object
  data() {
    return {
      plants: []
    };
  },
  methods: {
    async deletePlant(id) {
      await axios.post(`/delete-plant`, { id });
      this.plants = this.plants.filter(plant => plant.id !== id);
    },

    async addPlant(newPlant) {
      const { plantName, botanicalName } = newPlant;
      const res = await axios.post("/add-plant", {
        plantName,
        botanicalName
      });
      this.plants = [...this.plants, res.data];
    }
  },

  async created() {
    const res = await axios.get("/plants");
    this.plants = res.data;
  }
};
</script>

<style>
.home-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0 2%;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
