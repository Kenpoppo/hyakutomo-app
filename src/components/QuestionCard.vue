<template>
    <div class="question-card">
      <h2>{{ question }}</h2>
      <textarea v-model="answer" placeholder="あなたの答えをここに書いてね"></textarea>
      <button @click="submitAnswer">答える</button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import questions from '../questions.json'
  
  const question = ref('')
  const answer = ref('')
  
  // ランダムな質問を表示（仮）
  onMounted(() => {
    const index = Math.floor(Math.random() * questions.length)
    question.value = questions[index]
  })
  
  // 回答を localStorage に保存
  const submitAnswer = () => {
    const entry = {
      question: question.value,
      answer: answer.value,
      date: new Date().toISOString()
    }
  
    const saved = JSON.parse(localStorage.getItem('answers') || '[]')
    saved.push(entry)
    localStorage.setItem('answers', JSON.stringify(saved))
    alert('答えを保存しただなも！')
    answer.value = ''
  }
  </script>
  
  <style scoped>
  .question-card {
    max-width: 600px;
    margin: auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
  }
  textarea {
    width: 100%;
    height: 100px;
    margin-top: 1rem;
  }
  button {
    margin-top: 1rem;
  }
  </style>