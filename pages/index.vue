<template>
  <div class="flex h-screen">
    <div class="w-0 lg:w-2/6 bg bg-orange-700">
      todo
    </div>
    <main class="h-screen w-screen lg:w-4/6 bg bg-purple-700 text-white text-center">
      <header class="container mx-auto grid grid-cols-3 h-16 content-center" style="height: 10vh">
        <div class="flex-1 opacity-50" @click="$store.dispatch('calendar/moveMonth', -1)">
          <span class="block">{{ month('prev').month }}</span>
          <span class="block">{{ month('prev').year }}</span>
        </div>
        <div class="flex-1">
          <span class="block">{{ month('cur').month }}</span>
          <span class="block">{{ month('cur').year }}</span>
        </div>
        <div class="flex-1 opacity-50" @click="$store.dispatch('calendar/moveMonth', 1)">
          <span class="block">{{ month('next').month }}</span>
          <span class="block">{{ month('next').year }}</span>
        </div>
      </header>
      <div class="container mx-auto grid grid-cols-7" style="height: 5vh">
        <div class="font-bold">
          Sun
        </div>
        <div class="font-bold">
          Mon
        </div>
        <div class="font-bold">
          Tue
        </div>
        <div class="font-bold">
          Wed
        </div>
        <div class="font-bold">
          Thu
        </div>
        <div class="font-bold">
          Fri
        </div>
        <div class="font-bold">
          Sat
        </div>
      </div>
      <div class="container mx-auto grid grid-cols-7" style="height: 85vh">
        <span v-for="(x, index) in dates" :key="index" :class="{'opacity-50': !x.isSameMonth}">{{ x.date }}</span>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    dates () {
      return this.$store.getters['calendar/dates']
    },
    month () {
      return this.$store.getters['calendar/month']
    }
  }
  // methods: {
  //   nextMonth () {
  //     return this.$store.dispatch['calendar/moveMonth']
  //   }
  // }
}
</script>
