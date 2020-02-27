<template>
  <div>
    <mainLogo></mainLogo>
    <mainAdvantages></mainAdvantages>
    <mainParallax></mainParallax>
    <mainPrograms></mainPrograms>
  </div>
</template>

<script>
// @ is an alias to /src
import mainLogo from '../components/mainLogo'
import mainAdvantages from '../components/mainAdvantages'
import mainParallax from '../components/mainParallax'
import mainPrograms from '../components/mainPrograms'

export default {
  name: 'home',
  components: {
    mainLogo,
    mainAdvantages,
    mainParallax,
    mainPrograms
  }
}
</script>
