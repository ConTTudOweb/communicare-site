<template>
    <div class="flexslider">
        <ul class="slides">
            <li :key="i" v-for="(testimony, i) in testimonials">
                <img :src="testimony.image">
                <p>
                    <strong>"</strong> <span v-text="testimony.description" style="white-space: pre-line;" /> <strong>"</strong>
                </p>
                <p class="name">- {{ testimony.customer }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        testimonials: {
            type: Array,
            required: true
        }
    }
}
</script>