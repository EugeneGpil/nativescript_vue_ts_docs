<template>
  <Page>
    <ActionBar title="NativeFlix"/>
    <ListView height="100%" v-for="flick in flicks">
      <v-template>
        <Label :text="flick.title"/>
      </v-template>
    </ListView>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue"
import FlickService from '~/services/FlickService/FlickService'

const flickService = new FlickService()

export default Vue.extend({
  data: function () {
    return {
      flicks: flickService.getFlicks()
    }
  }
})
</script>
