<template>
  <Page>
    <ActionBar :title="flick.title"/>
    <ScrollView>
      <StackLayout class="details">
        <image :src="flick.image"/>
        <StackLayout v-for="detail in flick.details" class="details__info" :key="detail.title">
          <label :text="detail.title" class="details__text-primary text-primary"/>
          <label :text="detail.body" class="details__text-secondary text-secondary"/>
        </StackLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import Vue from 'nativescript-vue'
import FlickService from "~/services/FlickService/FlickService";

const flickService = new FlickService()

export default Vue.extend({
  props: {
    id: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      flick: flickService.getFlickById(this.id)
    }
  },
})
</script>