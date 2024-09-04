<script setup>
import { onMounted  } from "vue";
import { useRoute } from 'vue-router';


definePageMeta({
  pageTransition: {
    name: 'slide-right',
    mode: 'out-in'
  },
})

const birthDateAge = ref(0);
const newPageBool = ref(false);
const show = ref(false);

const switchPage = async (location) => {
  await navigateTo(location)
}

const birthdayAge = async () => {
  var today = new Date();
  var birthDate = new Date('1999/12/29');
  var age = today.getFullYear() - birthDate.getFullYear();

  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  birthDateAge.value = age
}

const newPage = () => {
  newPageBool.value = true;
}

const transitionName = ref('fade-in-down');
const route = useRoute();

// Watch the route changes
watch(route, (to, from) => {
  
  if (from.name === null && to.name !== null) {
    // Direct load or redirect
    transitionName.value = 'fade-in-down';
  } else {
    // Navigation between routes
    transitionName.value = 'slide';
  }
});


onMounted(async () => {
  if (route.name !== null && route.matched.length === 1) {
    transitionName.value = 'fade-in-down';
  }
  await birthdayAge()
  await nextTick(1)

  show.value = true;
})

</script>


<template>
  <div class="intro-section" v-if="show">
    <div class="container">
      <Transition class="fade-in-down" name="fade-in-down" appear>
        <div class="flex flex-row  justify-between gap-4 mt-4">
          <div class="grid grid-cols-3 gap-4  content-center">
            <div class="justify-self-center text-center text-black mb-3 border-0">
              <img class="main-image" width="300" height="300" src="../assets/images/pf.jpeg" alt="Card image cap">
            </div>

            <div class="col-span-2 justify-self-start flex flex-col mt-14">
              <p class="text-8xl font-thin">Ismet Meray</p>
              <p class="text-6xl font-thin">software enigneer</p>
              <hr class="divider">

              <div class="flex flex-row justify-around">
                <span style="font-size: 3vw;">
                  <a style="color:black;" href="https://www.linkedin.com/in/ismetmeray/" target="_blank"><i
                      class="fa-brands fa-linkedin" aria-hidden="true"></i></a>
                </span>

                <span style="font-size: 3vw;">
                  <a style="color:black;" href="https://github.com/ismetMeray" target="_blank"><i
                      class="fa-brands fa-github" aria-hidden="true"></i></a>
                </span>

                <span style="font-size: 3vw; color: black;">
                  <a style="color:black;" href="ismet-meray@hotmail.com" target="_blank"><i
                      class="fa-solid fa-envelope"></i></a>
                </span>

              </div>
            </div>
          </div>
        </div>
      </Transition>

      <Transition class="bounce-in-right" name="fade-in-down" appear>
        <div class="container flex flex-row justify-between gap-4 mt-4">
          <!-- over Mij -->
          <div class="divide-y divide-gray-200 rounded-lg bg-white shadow w-9/12">
            <div class="px-4 py-5 sm:p-4">
              Over Mij
            </div>
            <div class="px-4 py-2 sm:p-4">
              Mijn naam is Ismet Meray 22 jaar jong. Ik volg de opleiding Informatica op Avans in Den Bosch.<br>
              Mijn interesses liggen bij het ontwerpen en ontwikkelen van web-applicaties en mobiele apps.<br>
              Naast het ontwikkelen van software geniet ik er enorm van om mijn creativiteit los te laten in diverse
              activiteiten.<br>
              Ook deel ik mijn tijd graag met vrienden en familie!
            </div>
          </div>

          <!-- Basis info -->
          <div class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow w-3/12">
            <div class="px-4 py-5 sm:p-4">
              Basis Informatie
            </div>
            <div class="sm:rounded-md">

              <div class="flex gap-4 px-4 py-5 sm:p-4">
                <i class="fa-solid fa-location-dot content-center"></i>
                <div>
                  Den Bosch, Noord-brabant Nederland
                </div>
              </div>

              <div class="flex gap-4 px-4 py-5 sm:p-4">
                <i class="fa-solid fa-envelope content-center"></i>
                <div>
                  ismet-meray@hotail.com
                </div>
              </div>

              <div class="flex gap-4 px-4 py-5 sm:p-4">
                <i class="fa-solid fa-calendar-days content-center"></i>
                <div>
                  {{ birthDateAge }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <Transition class="bounce-in-left" name="fade-in-down" appear>
        <div class="flex flex-col justify-between gap-4 mt-4 divide-y divide-gray-200 shadow">

          <div class="flex flex-row">
            <div class="px-4 py-5 sm:p-4">
              Mijn beste eigenschappen
            </div>
          </div>

          <div class="flex flex-row gap-5">
            <div class="card">
              <div class="card__content text-center transition-transform duration-1000 divide-y divide-gray-200 shadow">

                <div class="card__front">
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    <img src="../assets/images/teamwork.png" width="300" height="300">
                  </div>
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    Samenwerken & Communiceren
                  </div>
                </div>

                <div class="card__back top-0 bottom-0 right-0 left-0 p-8 flex items-center justify-center">
                  <h2>Back</h2>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__content text-center transition-transform duration-1000 divide-y divide-gray-200 shadow">

                <div class="card__front">
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    <img src="../assets/images/leergierig.png" width="300" height="300">
                  </div>
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    Leergierig
                  </div>
                </div>

                <div class="card__back top-0 bottom-0 right-0 left-0 p-8 flex items-center justify-center">
                  <h2>Back</h2>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__content text-center transition-transform duration-1000 divide-y divide-gray-200 shadow">

                <div class="card__front">
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    <img src="../assets/images/doelgericht.jpg" width="300" height="300">
                  </div>
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    Leergierig
                  </div>
                </div>

                <div class="card__back top-0 bottom-0 right-0 left-0 p-8 flex items-center justify-center">
                  <h2>Back</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>


      <Transition class="fade-in-up" name="fade-in-down" appear>

        <div class="flex flex-col justify-between gap-4 mt-4 divide-y divide-gray-200 shadow">

          <div class="flex flex-row">
            <div class="px-4 py-5 sm:p-4">
              Technieken
            </div>
            <div class="px-4 py-5 sm:p-4">
              Frameworks
            </div>
          </div>

          <div class="py-2 flex flex-row justify-between">

            <div class="card">
              <div class="card__content text-center transition-transform duration-1000 divide-y divide-gray-200 shadow">

                <div class="card__front">
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    <img src="../assets/images/php (1).png" width="300" height="300">
                  </div>
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    Ervaring: 2 jaar
                  </div>
                </div>

                <div class="card__back top-0 bottom-0 right-0 left-0 p-8 flex items-center justify-center">
                  <h2>Back</h2>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__content text-center transition-transform duration-1000 divide-y divide-gray-200 shadow">

                <div class="card__front">
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    <img src="../assets/images/js (1).png" width="300" height="300">
                  </div>
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    Ervaring: 2 jaar
                  </div>
                </div>

                <div class="card__back top-0 bottom-0 right-0 left-0 p-8 flex items-center justify-center">
                  <h2>Back</h2>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__content text-center transition-transform duration-1000 divide-y divide-gray-200 shadow">

                <div class="card__front">
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    <img src="../assets/images/CSharp.png" width="300" height="300">
                  </div>
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    Ervaring: 2 jaar
                  </div>
                </div>

                <div class="card__back top-0 bottom-0 right-0 left-0 p-8 flex items-center justify-center">
                  <h2>Back</h2>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__content text-center transition-transform duration-1000 divide-y divide-gray-200 shadow">

                <div class="card__front">
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    <img src="../assets/images/mysql.png" width="300" height="300">
                  </div>
                  <div class="px-4 py-4 sm:px-6 text-gray-950	">
                    Ervaring: 2 jaar
                  </div>
                </div>

                <div class="card__back top-0 bottom-0 right-0 left-0 p-8 flex items-center justify-center">
                  <h2>Back</h2>
                </div>
              </div>

              <NuxtLink @click="switchPage('/project')">
                new page
              </NuxtLink>

            </div>
          </div>
        </div>
      </Transition>
      <footer class="text-center text-white" style="background-color: #f1f1f1;">
        <div class="pt-4">
          <div class="row">
            <div class="col">
              <section class="mb-4">
                <p>
                  <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                    data-mdb-ripple-color="dark">Contact me?</a>
                  <br>
                  <a class="text-dark m-1" role="button">
                    Send me and email of add me on LinkedIn and i will return a message ASAP</a>
                </p>
              </section>
            </div>
            <div class="col">
              <section class="mb-4">
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                  data-mdb-ripple-color="dark"><i class="fab fa-linkedin fa-2x"></i></a>
                <a class="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button"
                  data-mdb-ripple-color="dark"><i class="fa-solid fa-envelope fa-2x"></i></a>
              </section>
            </div>
          </div>
        </div>
        <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          2022:
          <a class="text-dark" href="https://portfolioim.net">Portfolio Ismet Meray</a>
        </div>
      </footer>

    </div>
  </div>
</template>


<style scoped></style>