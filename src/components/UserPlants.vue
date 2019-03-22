<template id="plants-overview-temp">
  <div class="plants-container">
    <div v-bind:key="plant.id" v-for="plant in plants">
      <!-- the dodo in "" is the current todo item that is being looped through  -->
      <UserPlant
        v-bind:plant="plant"
        v-on:del-plant="$emit('del-plant', plant.id)"
      />
    </div>
  </div>
</template>

<script type="text/javascript">
import UserPlant from "./UserPlant.vue";

export default {
  //name of the component
  name: "UserPlants",
  components: {
    //components that we are importing
    UserPlant
  },
  props: ["plants"]
};
</script>

<style scoped>
.plant-container {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
}
</style>
