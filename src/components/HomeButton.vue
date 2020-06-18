<template>
  <div>
    <span class="icon-wrapper" data-date="2019-04-16">
      <img
        alt="Cardhop app icon"
        class="icon"
        width="128"
        height="128"
        :src="data.src"
        :srcset="data.srcset"
      />
    </span>
    <p class="name">{{ data.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style scoped>
.name {
  font-size: 45px;
  font-weight: 700;
  color: black;
}
.icon {
  border-radius: 10px;
}
</style>
