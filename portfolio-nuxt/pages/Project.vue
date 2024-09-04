<script setup>



</script>

<template>
    <Transition class="fade-in-down" name="fade-in-down" appear>
        <div class="flex flex-row  justify-between gap-4 mt-4">
            <div class="grid grid-cols-3 gap-4  content-center">
                <div class="justify-self-center text-center text-black mb-3 border-0">
                    <img class="main-image" width="300" height="300" src="../assets/images/pf.jpeg"
                        alt="Card image cap">
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
</template>


<style scoped></style>