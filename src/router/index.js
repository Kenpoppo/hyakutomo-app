import { createRouter, createWebHistory } from 'vue-router'
import QuestionCard from '../components/QuestionCard.vue'
import MyAnswerList from '../components/MyAnswerList.vue'

const routes = [
  { path: '/', redirect: '/question' },
  { path: '/question', component: QuestionCard },
  { path: '/my-list', component: MyAnswerList }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router