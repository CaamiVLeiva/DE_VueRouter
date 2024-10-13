<template>
  <div class="col-sm-4 col-12 px-5 mb-4">
    <div class="card">
      <img :src="imageSrc" class="card-img-top" :alt="nombre" />
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ nombre }}</h5>
        <p class="card-text">{{ descripcion }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Precio: ${{ precio }}</li>
        <li class="list-group-item">Cantidad: {{ cantidad }}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Ver más</a>
        <a href="#" class="card-link">Comprar</a>
      </div>
    </div>
  </div>
</template>

<script>
import colaciones from '@/assets/img/colaciones.jpg';
import bebidas from '@/assets/img/bebidas.jpg';
import desayunos from '@/assets/img/desayunos.jpg';
import verduras from '@/assets/img/verduras.jpg';

export default {
  props: {
    imagen: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
  },
  computed: {
    imageSrc() {
      const images = {
        colaciones: colaciones,
        bebidas: bebidas,
        desayunos: desayunos,
        verduras: verduras,
      };
      return images[this.imagen] || '';
    },
  },
};
</script>

<style scoped>
</style>
