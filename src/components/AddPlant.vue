<template lang="html">
  <div class="">
    <button @click="toggleModal" class="add-plant-btn">Add Plant</button>
    <div class="add-plant-form" v-bind:class="{ 'show-modal': this.showModal }">
      <form>
        <div class="error" v-html="error" />
        <input
          type="text"
          v-model="plantName"
          name="plant-name"
          value=""
          placeholder="Plant Name"
        />
        <input
          type="text"
          v-model="botanicalName"
          name="botanical-name"
          value=""
          placeholder="Botanical Name"
        />
        <input
          type="submit"
          name=""
          value="Save"
          class="btn"
          @click="addPlant"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPlant",
  data() {
    return {
      plantName: "",
      botanicalName: "" || null,
      showModal: false,
      error: ""
    };
  },
  methods: {
    addPlant(e) {
      //preventing reload default behavior on forms upon submitting
      e.preventDefault();
      if (!this.plantName) {
        this.error = "Please add a Name";
        return;
      }
      const newPlant = {
        plantName: this.plantName,
        botanicalName: this.botanicalName
      };

      this.$emit("add-plant", newPlant);
      this.plantName = "";
      this.botanicalName = "";
      this.toggleModal();
    },
    toggleModal() {
      this.showModal = !this.showModal;
      this.error = "";
    }
  }
};
</script>

<style lang="css" scoped>
.add-plant-btn {
  display: block;
  background-color: darkgreen;
  color: white;
  border:none;
  padding: 2%;
  margin: 10px auto;
  transition: all .3s ease-in-out;
}

.add-plant-btn:hover {
  background-color: green;
}
.add-plant-form {
  transform: translateY(-1000%);
  transition: all .3s ease-in-out;
}
.show-modal {
  transform: translateY(0);
}


form {
  display: flex;
  flex-direction: column;
  justify-content: center;

}
input[type="text"] {
  padding: 5px;
}
input[type="submit"] {
  width:50%;

}
</style>
