import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Productos from '../views/Productos.vue';
import Contacto from '@/views/Contacto.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/productos',
    name: 'productos',
    component: Productos,
    props: {
      productos: [
        { imagen: 'colaciones', nombre: 'Colaciones', descripcion: 'Algunas colaciones saludables.', precio: 150, cantidad: 20 },
        { imagen: 'bebidas', nombre: 'Bebidas', descripcion: 'Variedad de bebidas refrescantes.', precio: 100, cantidad: 30 },
        { imagen: 'desayunos', nombre: 'Desayunos', descripcion: 'Deliciosos desayunos completos.', precio: 200, cantidad: 15 },
        { imagen: 'verduras', nombre: 'Verduras', descripcion: 'Verduras frescas y orgánicas.', precio: 80, cantidad: 25 },
      ],
    },
  },
  {
    path: '/contacto',
    name: 'contacto',
    component: Contacto
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
