<template>
  <a-layout-content class="touchless-default-layout">
    <div class="touchless-container">
      <a-card :bordered="false" class="text-center">
        <img src="../../public/img/illus-vm-salah.png" alt="VM Not Found" />
        <h3 class="mb-16">Kode VM Tidak Ditemukan</h3>
        <p>
          Pastikan kode pada mesin vending yang kamu masukan sudah sesuai ya!
        </p>
        <router-link to="/" class="text-cyan font-12">
          Back to Home Page
        </router-link>
      </a-card>
    </div>
  </a-layout-content>
</template>
