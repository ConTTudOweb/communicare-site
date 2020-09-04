<template>
    <div class="whatsapp-widget">
        <div class="whatsapp-header">
            <i class="fab fa-whatsapp"></i>
            Saiba os valores via<br> <span>WhatsApp</span>
        </div>
        <label id="whats_results"></label>
        <form method="POST" id="whatsapp-form" data-ajax-target="{% url 'contact_whatsapp' %}">
            <input type="text" placeholder="Nome" id="whats_name" required>
            <input type="tel" placeholder="Telefone" id="whats_tel" required>
            <input type="email" placeholder="E-mail" id="whats_email" required>
            <input type="submit" value="Solicitar atendimento">
        </form>
    </div>
</template>