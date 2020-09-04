<template>
    <ul>
        <li :key="i" v-for="(event, i) in events">
            <img :src="event.place.image">
            <div class="calendar-entry">
                <h3>
                    {{ event.title }}<br>
                    <span>{{ event.subtitle }}</span>
                </h3>
                <address>
                    <strong>{{ event.place.title }}</strong><br>
                    {{ event.place.address }}<br>
                    {{ event.place.city }}<br>
                    <i class="fas fa-map-marker-alt"></i> <a target="_blank" :href="event.place.link_to_map">Ver no mapa</a>
                </address>
                <p v-text="event.details" style="white-space: pre-line;" />
            </div>
            <div class="calendar-left-entry">
                <template v-if="event.iniciado">
                    <a href="https://classroom.google.com/" target="_blank" class="view-more-cta"
                    title="Ao acessar o link clique no ícone '➕' que fica no canto superior direito da tela e escolha a opção Participar da Turma. Em seguida informe o código que recebeu!"><i class="fas fa-download"></i>Download
                        do material</a>
                    
                    <p v-if="event.finalizado"><strong>TREINAMENTO ENCERRADO!</strong></p>
                </template>
                <template v-else>
                    <template v-if="event.open_for_subscriptions">
                        <a v-if="event.external_subscriptions" class="view-more-cta" :href="event.external_subscriptions" target="_blank"><i class="fas fa-sign-in-alt"></i>Inscreva-se</a>
                        <a v-else class="view-more-cta" href="#"><i class="fas fa-sign-in-alt"></i>Inscreva-se</a>
                    </template>
                    
                    <a v-else href="#" class="view-more-cta">Lista de espera</a>
                    
                    <br>
                    <p><strong>Inscrições Limitadas!</strong></p>
                </template>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        events: {
            type: Array,
            required: true
        }
    }
}
</script>