<!--
 * @Author: liuchuan
 * @Date: 2020-05-06 10:08:19
 * @LastEditTime: 2020-05-06 10:11:51
 * @Description: 
 -->
<template>
  <div id="app">
    <router-link to="/test">test</router-link>
    <router-link to="/action">action</router-link>
    <p>git merge test</p>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
