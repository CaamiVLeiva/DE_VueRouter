<template>
    <div class="container mt-5 pt-5">
        <h1 class="text-center mb-4">Contacto</h1>
        <p class="text-center mb-4">Aquí puedes añadir un formulario de contacto o información adicional.</p>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name" placeholder="Tu nombre" required />
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="email" placeholder="Tu correo" required />
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Mensaje</label>
                        <textarea class="form-control" id="message" rows="5" placeholder="Tu mensaje"
                            required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
        <div class="text-center mt-4">
            <router-link to="/" class="btn btn-secondary">Volver al Inicio</router-link>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>