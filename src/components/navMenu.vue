<template>
    <nav class="nav-menu">
      <router-link 
        v-for="item in menuItems" 
        :key="item.path" 
        :to="item.path"
        class="nav-link"
        active-class="active"
      >
        {{ item.title }}
      </router-link>
    </nav>
  </template>
  
  <script setup>
  const menuItems = [
    { path: '/students', title: 'Students' },
    { path: '/teachers', title: 'Teachers' },
    { path: '/courses', title: 'Courses' },
    { path: '/about', title: 'About us' }
  ]
  </script>
  
  <style scoped>
  .nav-menu {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background: #f0f0f0;
  }
  
  .nav-link {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #333;
    border-radius: 4px;
    transition: all 0.3s;
  }
  
  .nav-link:hover {
    background: #e0e0e0;
  }
  
  .active {
    background: #42b983;
    color: white;
  }
  </style>