<template>
    <div class="modal_loading" v-if="loading" />
</template>

<script>
export default {
    data: () => ({
        loading: false
    }),
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            this.loading = false
        }
    }
}
</script>

<style>
.modal_loading {
    display:    none;
    position:   fixed;
    z-index:    1000;
    top:        0;
    left:       0;
    height:     100%;
    width:      100%;
    background: rgba( 255, 255, 255, .8 )
                url('/images/ajax-loader.gif')
                50% 50%
                no-repeat;
}

/* a partir do momento em que o body estiver com a classe loading,  o modal aparecerá */
body .modal_loading {
    display: block;
}
</style>