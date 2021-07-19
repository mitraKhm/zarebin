<template>
  <v-app-bar
    app
    color="transparent"
    dark
    absolute
    :elevation="0"
    height="59px"
  >
    <v-row>
      <v-col class="alaa-logo">
        <img
          src="../../src/assets/Asset 1.png"
          style="width: 30px; margin-right: 100px;"
        >
      </v-col>
      <v-col class="text-right school-logo">
        <img
          src="../../src/assets/Asset 3.png"
          style="width: 116px; margin-right: -67px;"
        >
      </v-col>
    </v-row>
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
