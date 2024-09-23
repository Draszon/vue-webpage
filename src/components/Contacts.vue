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
          <a href="https://facebook.com/draszongameplay" target="_blank" class="contact">
            <img class="contact-icon" src="/square-facebook.svg" alt="facebook ikon">
            <p class="contact-name">facebook</p>
            <p>fb.com/</p>
            <p>draszongameplay</p>
          </a>
          <a href="https://youtube.com/rapao34gameplay" target="_blank" class="contact">
            <img class="contact-icon" src="/youtube.svg" alt="youtube ikon">
            <p class="contact-name">youtube</p>
            <p>youtube.com/</p>
            <p>rapao34gameplay</p>
          </a>
          <a href="https://twitch.tv/draszon" target="_blank" class="contact">
            <img class="contact-icon" src="/twitch.svg" alt="twitch ikon">
            <p class="contact-name">twitch</p>
            <p>twitch.tv/draszon</p>
          </a>
          <a href="https://github.com/draszon" target="_blank" class="contact">
            <img class="contact-icon" src="/square-github.svg" alt="github ikon">
            <p class="contact-name">github</p>
            <p>github.com/draszon</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

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
  width:              250px;
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