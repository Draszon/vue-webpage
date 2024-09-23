<template>
    <section id="main-page">
      <div class="container">
        <div class="row main-page">
          <div class="welcome-wrapper">
            <h1 class="page-title">Üdvözöllek az oldalamon!</h1>
            <p class="introduction">
              Péter vagyok, hobbi 
              programozó és webfejlesztő. Régebben Draszonként 
              ismerhettél YouTube-on és Twitchen, ahol gameplay 
              tartalmakat osztottam meg. Most pedig itt 
              találkozhatsz legújabb projektjeimmel és munkáimmal.
            </p>
            <p class="introduction">Jó böngészést!</p>
          </div>
          <img class="main-logo" src="/DRASZON-logo.png" alt="draszon logo">
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="row">
          <p class="long-introduction">
            A technológia és a programozás világa mindig is 
            lenyűgözött.  Hobbi szinten foglalkozom 
            programozással, különösen weboldalak tervezésével 
            és készítésével. Az alkotás és az innováció 
            mindig is inspiráltak, és élvezem, hogy folyamatosan 
            új dolgokat tanulhatok és valósíthatok meg ezen a 
            területen.
          </p>
          <p class="long-introduction">
            Korábbi elfoglaltságaim közé tartozik a 
            YouTube és Twitch csatornáim kezelése, ahol gameplay 
            videókkal találkozhatsz. Ezeken a platformokon játékokkal 
            kapcsolatos tartalmakat készítettem és osztottam meg, de 
            ezek mellett találsz egy-egy tech vagy zenei videót is. 
          </p>
          <p class="long-introduction">
            Nézz szét a weboldalamon, és fedezd fel a 
            projektjeimet, vagy nézd vissza a régebbi videóimat 
            és közvetítéseimet. Remélem, hogy az itt található 
            tartalmak inspirációt nyújtanak számodra is!
          </p>
        </div>
      </div>
    </section>
</template>

<script></script>

<style scoped>
#main-page { margin-top: 60px; }

.welcome-wrapper {
  width:            37.5rem;
  height:           31.25rem;
  display:          flex;
  flex-direction:   column;
  justify-content:  center;
}

.page-title { margin: 3.125rem 0; }

.introduction { 
  line-height:  1.875rem;
  font-size:    1.25rem;
}

.long-introduction {
  font-style:   italic;
  line-height:  30px;
}
</style>