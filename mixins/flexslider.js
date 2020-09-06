export default {
    mounted() {
        console.log('antes...')
        $('.flexslider').flexslider({
            randomize: true,
            startAt: 0,
            slideshow: true,
            initDelay: 0,
            touch: true
        });
        console.log('depois...')
    }
}