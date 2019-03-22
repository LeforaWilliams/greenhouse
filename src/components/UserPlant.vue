<template>
  <div class="plant-details" v-bind:class="{ 'is-complete': plant.watered }">
    <!--prop that is passed down from the UserPlants.vue file which is looping through the todo array passed down from APP.vue  -->
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{ plant.common_name }}
      <button
        class="del"
        type="button"
        name="button"
        @click="$emit('del-plant', plant.id)"
      >
        x
      </button>
    </p>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "UserPlant",
  props: ["plant"],
  methods: {
    markComplete() {
      this.plant.watered = !this.plant.watered;
    }
  }
};
</script>

<style scope>
.plant-details {
  background: #f4f4f4;
  padding: 10px;
  border: 1px #ccc dotted;
  width: 50%;
  height: 200px;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>
