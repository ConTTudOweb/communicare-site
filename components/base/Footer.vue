<template>
    <footer>
        <div>
            <script src="https://apis.google.com/js/platform.js"></script>

            <div class="g-ytsubscribe" data-channelid="UCgGb95A1399ogNHOi3bDbOg" data-layout="full"
                data-count="default"></div>
        </div>

        <div class="holder">
            <div class="copy">
                &copy; <strong>2019-{{ currentYear() }} Communicare Treinamentos</strong> - Todos os direitos reservados.
                <ul class="ft-links">
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Declaração de Cookies</a></li>
                </ul>
            </div>

            <ul class="ft-social">
                <li>
                    <a target="_blank" :href="instagram"
                    title="Ir para o Instagram da Communicare Treinamentos">
                        <div><i class="fab fa-instagram"></i></div>
                    </a>
                </li>
                <li>
                    <a target="_blank" :href="facebook"
                    title="Ir para o Facebook da Communicare Treinamentos">
                        <div><i class="fab fa-facebook"></i></div>
                    </a>
                </li>
                <li>
                    <a target="_blank" :href="youtube"
                    title="Ir para o YouTube da Communicare Treinamentos">
                        <div><i class="fab fa-youtube"></i></div>
                    </a>
                </li>
                <li>
                    <a target="_blank" :href="linkedin"
                    title="Ir para o Linkedin da Communicare Treinamentos">
                        <div><i class="fab fa-linkedin"></i></div>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
import redesSociais from '~/mixins/redesSociais'

export default {
    mixins: [redesSociais],
    methods: {
        currentYear() {
            return (new Date).getFullYear()
        }
    }
}
</script>