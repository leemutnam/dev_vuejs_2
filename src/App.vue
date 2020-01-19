<template>
    <div id="app">
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/test">Test</router-link></li>
            </ul>
        </nav>
        <router-view/>
    </div>
</template>

<script>
  import router from './router/index'

  export default {
    router,
    name: 'App',
  }
</script>