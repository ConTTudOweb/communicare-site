<template>
  <div class="container">
    <section id="inicio"></section>
    <section class="main-banner">
        <div class="flexslider">

            <ul class="slides">
                <li>
                    <a href="#">
                        <img src="/images/banner/treinamento_oratoria.jpg">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/banner/curso_hipnose.jpg">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/images/banner/atendimento_hipnoterapia.jpg">
                    </a>
                </li>
            </ul>

        </div>
    </section> <!-- /main-banner -->

    <section class="cards" id="cursos-e-treinamentos">
        <div class="holder">
            <h2>
                Cursos e Treinamentos
            </h2>

            <Servicos />
        </div>
    </section> <!-- /cursos-e-treinamentos -->

    <section class="calendar" id="agenda">
        <div class="holder">

            <h2>Próximos eventos</h2>

            <div class="description">
                <!-- O Próximo pode ser você! -->
                Venha fazer parte dessa história!
            </div>

            <Eventos :events="events" />

            <a href="#contato" class="big-button">
                <strong>Não encontrou o que procurava?</strong><br>
                <span>Fale conosco!!!</span>
            </a>

        </div>
    </section> <!-- /agenda -->

    <section class="testimonials" id="depoimentos">
        <div class="holder">

            <h2>Veja o que estão falando da gente!</h2>
            <!-- <div v-text="testimonials"> -->

            <Depoimentos :testimonials="testimonials" />

        </div>
    </section> <!-- /depoimentos -->

    <section class="about" id="quem-somos">
        <div class="holder">

            <div class="columns">

                <div class="column-01">

                    <h2>Quem somos</h2>

                    <div class="description">
                        Nosso propósito é mediar o conhecimento, potencializando o desenvolvimento pessoal, promovendo a
                        expressão do ser, trazendo a força e o poder para superar os desafios cotidianos e atingir
                        patamares ainda maiores.
                    </div>

                    <div class="coach">
                        <img src="/images/people/vinicius.jpeg">
                        <div class="coach-entry">
                            <p>Vinicius Campos é o idealizador e trainner da Communicare Treinamentos. Neurolinguista e
                                Hipnoterapeuta é um entusiasta por comunicação, neurociência e comportamento humano.
                                Dedica grande parte do seu tempo à esse conhecimento.<br>
                                Alguns de seus treinamentos incluem:</p>
                            <p>
                                <span>•</span> Hipnose Clínica;<br>
                                <span>•</span> Dale Carnegie Training;<br>
                                <span>•</span> Practitioner Internacional em PNL;<br>
                                <span>•</span> Eneagrama (Estrutura de Personalidades);<br>
                                <span>•</span> Palestrante e Orador Profissional;<br>
                                <span>•</span> Oratória Avançada;<br>
                                <span>•</span> Diamond Training (Equipes);<br>
                                <span>•</span> Life Coach;<br>
                                <span>•</span> Leader Coach;<br>
                                <span>•</span> Professional Coach.
                            </p>
                            <p class="name">
                                Vinicius Campos<br>
                                <span>CEO, HIPNOTERAPEUTA, PALESTRANTE, COACH E HEAD TRAINER.</span><br>
                                <a :href="instagram" target="_blank">
                                    <i class="fab fa-instagram"></i> Instagram
                                </a> |
                                <a :href="facebook" target="_blank">
                                    <i class="fab fa-facebook"></i> Facebook
                                </a> |
                                <a :href="youtube" target="_blank">
                                    <i class="fab fa-youtube"></i> Youtube
                                </a> |
                                <a :href="linkedin" target="_blank">
                                    <i class="fab fa-linkedin"></i> Linkedin
                                </a>
                            </p>
                        </div>
                    </div>

                </div> <!-- /column-01 -->

                <div class="column-02">

                    <ul class="motivations">
                        <li class="mot-01">
                            <h3><i class="fas fa-rocket"></i> Missão</h3>
                            <p>Desenvolver o conhecimento através de técnicas da Programação Neurolinguística,
                                Neurociência e Hipnose. Trabalhar em cada ser a sua essência, buscando a excelência
                                humana, rompendo barreiras, gerando oportunidades e maximizando potencialidades.</p>
                        </li>
                        <li class="mot-02">
                            <h3><i class="fas fa-eye"></i> Visão</h3>
                            <p>Ser referência em treinamentos de desenvolvimento pessoal/profissional e atendimentos de
                                hipnoterapia reconhecida pela sua qualidade e inovação.</p>
                        </li>
                        <li class="mot-03">
                            <h3><i class="fas fa-star"></i> Valores</h3>
                            <p>Criar relacionamentos abertos e honestos; Tornar-se verdadeiramente interessado em você;
                                Honestidade; Ser ético; Resultados; Criatividade; Compreensão e Mudança Interna.</p>
                        </li>
                    </ul>

                    <a href="#" class="styled-link">Galeria de fotos</a>

                </div> <!-- /column-02 -->

            </div> <!-- /columns -->

        </div>
    </section> <!-- /quem-somos -->

    <section class="contact" id="contato">
        <div class="holder">

            <h2>Fale conosco</h2>

            <div class="columns">

                <div class="column-01">

                    <form class="default-form" v-model="validateContactForm" @submit.prevent="sendContactForm">
                        <ul>
                            <li>
                                <label v-if="contactFormErros.name"><span>{{ contactFormErros.name }}</span></label>
                                <label for="contactFormInputName">Nome <span>*</span></label>
                                <input 
                                  id="contactFormInputName"
                                  v-model="contact_form.name"
                                  name="name"
                                  type="text"
                                  required
                                />
                            </li>
                            <li>
                                <label v-if="contactFormErros.email"><span>{{ contactFormErros.email }}</span></label>
                                <label for="contactFormInputEmail">E-mail</label>
                                <input 
                                  id="contactFormInputEmail"
                                  v-model="contact_form.email"
                                  name="email"
                                  type="email"
                                />
                            </li>
                            <li>
                                <label v-if="contactFormErros.phone"><span>{{ contactFormErros.phone }}</span></label>
                                <label for="contactFormInputPhone">Telefone</label>
                                <input 
                                  id="contactFormInputPhone"
                                  v-model="contact_form.phone"
                                  name="phone"
                                  type="tel"
                                />
                            </li>
                            <li>
                                <label v-if="contactFormErros.message"><span>{{ contactFormErros.message }}</span></label>
                                <label for="contactFormInputMessage">Mensagem <span>*</span></label>
                                <textarea 
                                  id="contactFormInputMessage"
                                  v-model="contact_form.message"
                                  name="message"
                                  required
                                />
                            </li>

                            <li v-show="contactFormErros.non_field_errors"><label><span v-html="contactFormErros.non_field_errors" /></label></li>
                            <li v-show="contactFormResult"><label v-html="contactFormResult" /></li>

                            <li>
                                <input type="submit" value="Enviar" />
                            </li>
                        </ul>
                    </form>

                </div> <!-- /column-01 -->

                <div class="column-02">

                    <div class="contact-people">
                        <img src="/images/people/vinicius.jpeg"
                             alt="Foto de Vinicius Campos">
                        <h5>
                            Vinicius Campos<br>
                            <span>CEO, HIPNOTERAPEUTA, PALESTRANTE, COACH E HEAD TRAINER.</span>
                        </h5>
                        <p>
                            <a href="https://api.whatsapp.com/send?phone=5543998084747&text=Estou%20no%20site%20%20www.communicaretreinamentos.com.br!"
                               target="_blank"><span style="color: #fff;"><i class="fab fa-whatsapp"></i></span></a>
                               (43) 9 9808-4747 (Tim)
                        </p>
                        <p>
                            <a href="mailto:contato@communicaretreinamentos.com.br" class="styled-link" target="_blank">
                                contato@communicaretreinamentos.com.br
                            </a>
                        </p>
                    </div>

                </div> <!-- /column-02 -->

            </div> <!-- /columns -->

        </div>
    </section> <!-- /contato -->
  </div>
</template>

<script>
import redesSociais from '~/mixins/redesSociais'

export default {
  mixins: [redesSociais],
  
//   async fetch() {
//     // this.events = await this.$axios.$get('/api/events')
//     this.testimonials = await this.$axios.$get('/api/testimonials')
//   },

  async asyncData({ $axios }) {
      const events = await $axios.$get('/api/events')
    //   const testimonials = await $axios.$get('/api/testimonials')
      return {
          events,
        //   testimonials
      }
  },
  
  data() {
    return {
    //   events: [],
      testimonials: [ { "customer": "Alessandro de Lima Folk", "description": "Ação! aaa...\r\n\r\n123.", "image": "https://res.cloudinary.com/hdyr2ase4/image/upload/v1599224891/kiojiwffdj36ymsn4v2d.jpg" }, { "customer": "Alessandro de Lima Folk", "description": "uhulllllllllllllll", "image": "https://res.cloudinary.com/hdyr2ase4/image/upload/v1599226324/cmkjl2lognn5qedtebee.jpg" } ],
      contact_form: {},
      contactFormResult: '',
      contactFormErros: '',
      validateContactForm: false
    }
  },
  
  methods: {
    async sendContactForm() {
      this.$nuxt.$loading.start()
      this.contactFormResult = ''
      this.contactFormErros = ''
      
      try {
        const { data, status } = await this.$axios.post('/api/contacts', this.contact_form)
        if (status == 201) {
          this.contact_form = {}
          this.contactFormResult = data.result
        } else {
          this.contactFormErros = data
        }
        this.$nuxt.$loading.finish()
      } catch (e) {
        if (e.response.status == 400) {
          this.contactFormErros = e.response.data
        } else {
          this.contactFormErros = {
            'non_field_errors': 'Desculpe!!! Ocorreu um erro inesperado.   :('
          }
        }
        this.$nuxt.$loading.finish()
      }
    }
  },

  head: {
    title: 'Centro de Treinamentos em Excelência Humana'
  }
}
</script>
