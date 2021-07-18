<template>
  <v-app-bar
    app
    color="transparent"
    dark
    absolute
    :elevation="0"
    height="59px"
  >
    <div class="logos">
      <div class="alaa-logo">
        <img
          src="../../src/assets/Asset 1.png"
          style="width: 30px;"
        >
      </div>
      <div class="school-logo">
        <img src="../../src/assets/Asset 3.png">
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
name: 'AppBar'
}
</script>

<style scoped>
.logos{
  display: flex;
  align-items: center;
}
.alaa-logo{
  width: 25%;
}
.school-logo{

}
</style>
