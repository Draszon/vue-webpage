<template>
<section class="bg-light" id="contacts">
  <div class="container">
      <h2 class="section-title">Lépj kapcsolatba velem</h2>
    </div>
  </section>

  <section>
    <div class="container contact-minus">
      <div class="row cont">
        <div class="contact-wrapper">
          <a target="_blank" class="contact"
          v-if="contactList.length > 0" 
          v-for="contact in contactList" 
          :href="contact.link"
          :key="contact.name">
            <img class="contact-icon" :src="contact.index" alt="github ikon">
            <p class="contact-name">{{ contact.name }}</p>
            <p class="contact-link-text">{{ contact.linkText }}</p>
          </a>
          <div class="error-msg" v-else><p>Nincsenek elérhetőségek!</p></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contactList: [
        {name: "facebook", index: "/square-facebook.svg",linkText: "fb.com/draszongameplay", link: "https://facebook.com/draszongameplay"},
        {name: "youtube", index: "/youtube.svg", linkText: "youtube.com/rapao34gameplay", link: "https://youtube.com/rapao34gameplay"},
        {name: "twitch", index: "/twitch.svg", linkText: "twitch.tv/draszon", link: "https://twitch.tv/draszon"},
        {name: "github", index: "/square-github.svg", linkText: "github.com/draszon", link: "https://github.com/draszon"}
      ]
    }
  }
}
</script>

<style scoped>
.contact-minus { margin-top: -8.75rem; }
#contacts { height: 250px; }

.contact-wrapper {
  width:            100%;
  display:          flex;
  flex-direction:   row;
  justify-content:  space-around;
  flex-wrap:        wrap;
}

.contact-icon { height: 70px; }

.contact {
  display:            flex;
  flex-direction:     column;
  align-items:        center;
  justify-content:    center;
  width:              280px;
  color:              var(--font-dark-color);
  box-shadow:         5px -5px 18px 0 hsla(228, 18%, 11%, 0.20);
  padding:            1.875rem;
  border-radius:      10px;
  background-color:   var(--section-light-bg);
  transition:         box-shadow .2s;
}

.contact-name {
  text-transform: uppercase;
  font-weight:    600;
  margin:         2.5rem 0 0.625rem 0;
}
</style>