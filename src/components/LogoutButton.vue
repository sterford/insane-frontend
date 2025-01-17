<template>
  <button
    @click="handleLogout"
    class="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-colors duration-300"
  >
    Выйти
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import AuthService from '@/services/AuthService';

const router = useRouter();

const handleLogout = () => {
  AuthService.logout(); // Вызываем функцию логаута
  router.push('/login'); // Перенаправляем пользователя на страницу входа
};
</script>