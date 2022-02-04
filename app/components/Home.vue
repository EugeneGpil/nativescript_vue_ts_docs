<template>
  <Page>
    <ActionBar title="NativeFlix"/>
    <ListView v-for="flick in flicks" class="list">
      <v-template>
        <StackLayout class="normalized">
          <GridLayout class="list__card card" rows="*, auto, auto">
            <image :src="flick.image"/>
            <label :text="flick.title" class="text-primary card__text-primary"/>
            <label :text="flick.description" class="text-secondary card__text-secondary"/>
          </GridLayout>
        </StackLayout>
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
