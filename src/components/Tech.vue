<template>
  <section class="tech-section" id="tech">
    <div class="container">
      <h2 class="section-title">Technológiák amiket jelenleg használok</h2>
      
      <div class="row technology">
        <img class="technology-img" src="/computer-graphic.png" alt="technológiák index">
        
        <TransitionGroup
          name="tech"
          tag="div"
          class="technologies-wrapper">

          <div class="prog-wrapper"
            v-if="technologiesList.length > 0 && exists"
            v-for="(tech, index) in technologiesList"
            :key="tech.name"
            :style="{ transitionDelay: `${index * .3}s` }">
            
            <img class="technology-index"
              :src="tech.index"
              alt="vuejs logo">
            <p class="technology-name">{{ tech.name }}</p>
          </div>
        </TransitionGroup>
        <!--<div class="error-msg" v-else><p>Nincsenek technlológiák!</p></div>-->
        
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      technologiesList: [
        {name: "html", index: "/technology/html5.svg"},
        {name: "css", index: "/technology/css3-alt.svg"},
        {name: "js", index: "/technology/js.svg"},
        {name: "vue.js", index: "/technology/vue-9-logo.svg"}
      ],
      exists: false
    }
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      const element = this.$el.querySelector('.technologies-wrapper');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          this.exists = true;
        }
      }
    }
  }
}
</script>

<style scoped>
.tech-enter-active {
  transition: all 0.5s ease;
}

.tech-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.tech-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.tech-section {
  background-image: linear-gradient(#171923, #363c57, #171923);
}

.technology-index { height: 70px; }

.technology {
  align-items:    center;
  flex-direction: column;
}

.technologies-wrapper {
  width:            100%;
  display:          flex;
  flex-direction:   row;
  flex-wrap:        wrap;
  justify-content:  space-evenly;
}

.prog-wrapper {
  display:            flex;
  flex-direction:     column;
  justify-content:    center;
  align-items:        center;
  text-transform:     uppercase;
  font-weight:        500;
  padding:            1.25rem 3.125rem;
  border-radius:      15px 50px;
  background-color:   var(--section-light-bg);
  color:              var(--font-dark-color);
}

.technology-name { padding-top: 0.625rem; }
</style>