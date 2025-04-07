<template>
  <div id="app">
    <h1>ひゃくとも（仮）</h1>
    <nav>
      <router-link to="/question">質問カード</router-link> |
      <router-link to="/my-list">マイ100リスト</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>
#app {
  text-align: center;
  padding: 2rem;
}
nav {
  margin-bottom: 2rem;
}
a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.router-link-active {
  color: #007bff;
}
</style>