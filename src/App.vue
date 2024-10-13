<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-fill">
      <router-view />
    </main>
    <MediosPago/>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import MediosPago from './components/MediosPago.vue';
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    MediosPago,
    Footer
  }
}
</script>
