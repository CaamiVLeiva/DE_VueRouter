<template>
    <div>
        <section class="container" id="productos">
            <h1 class="text-center">Nuestros Productos</h1>
            <div class="row">
                <!-- Llamado al componente Card -->
                <Card v-for="(producto, index) in productos" :key="index" :imagen="producto.imagen"
                    :nombre="producto.nombre" :descripcion="producto.descripcion" :precio="producto.precio"
                    :cantidad="producto.cantidad" />
            </div>
        </section>
        <div class="text-center mt-4">
            <router-link to="/" class="btn btn-secondary">Volver al Inicio</router-link>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue'; 

export default {
    components: {
        Card,
    },
    props: {
        productos: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
</style>