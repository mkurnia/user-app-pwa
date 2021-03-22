<template>
  <a-layout-content class="touchless-default-layout">
    <div class="touchless-container pt-0">
      <a-card :bordered="false" class="text-center pl-16 pr-16">
        <img
          src="../../public/img/oops.png"
          alt="Page Not Found"
          class="mb-0"
        />
        <h3 class="mb-16">Oops! Kamu nyasar?</h3>
        <p>
          Jangan bersedih hati, mending jajan aja dulu di ATLAS biar ngga nyasar
          lagi :)
        </p>
        <router-link to="/" class="text-cyan font-12">
          Back to Home Page
        </router-link>
      </a-card>
    </div>
  </a-layout-content>
</template>
