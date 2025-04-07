<template>
    <div class="answer-list">
      <h2>マイ100リスト（仮）</h2>
      <div v-if="answers.length === 0">まだ回答がありませんだなも。</div>
      <ul>
        <li v-for="(item, index) in answers" :key="index">
          <strong>Q: {{ item.question }}</strong><br />
          <span>A: {{ item.answer }}</span><br />
          <small>{{ formatDate(item.date) }}</small>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  
  const answers = ref([])
  
  onMounted(() => {
    const saved = JSON.parse(localStorage.getItem('answers') || '[]')
    answers.value = saved.reverse() // 新しい順に表示するだなも
  })
  
  const formatDate = (isoDate) => {
    const d = new Date(isoDate)
    return d.toLocaleString()
  }
  </script>
  
  <style scoped>
  .answer-list {
    max-width: 800px;
    margin: auto;
    padding: 2rem;
  }
  li {
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
  }
  </style>