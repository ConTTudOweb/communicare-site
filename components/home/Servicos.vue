<template>
    <ul class="cards-list">
        <li :key="s.titulo" v-for="s in servicos">
            <a :href="s.link" title="Saiba mais">
                <span>{{ s.tipo }}</span>
                <img :src="s.img">
                <h3>{{ s.titulo }}</h3>
                <p>
                    {{ s.descricao }} (...)
                </p>
            </a>
            <a :href="s.link" class="view-more">Saiba mais</a>
            <template v-if="s.evento">
                <a v-if="s.evento.external_subscriptions" :href="s.evento.external_subscriptions" target="_blank" class="view-more-cta">Inscrição</a>
                <a v-else href="#" class="view-more-cta">Inscrição</a>
            </template>
            <template v-else-if="s.lista_de_espera">
                <a href="#" class="view-more-cta">Lista de espera</a>
            </template>
        </li>
    </ul>
</template>

<script>
export default {
    data: () => ({
        servicos: [
            {
                link: '#',
                tipo: 'Treinamento',
                img: '/images/banner/treinamento_oratoria.jpg',
                titulo: 'Oratória: Comunicação e Expressão',
                descricao: 'Um treinamento que envolve técnicas de oratória e programação neurolinguística (PNL) buscando entender e compreender todos os sentimentos que nos sabotam diante de uma apresentação',
                evento: undefined,
                lista_de_espera: undefined
            },
            {
                link: '#',
                tipo: 'Curso',
                img: '/images/banner/curso_hipnose.jpg',
                titulo: 'Hipnose Clínica',
                descricao: 'Um curso que alinha teoria à prática, desmistificando o que é hipnose e compreendendo seu real fundamento terapêutico para cura de traumas e fobias',
                evento: undefined,
                lista_de_espera: undefined
            }
        ]
    })
}
</script>