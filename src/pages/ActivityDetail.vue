<template>
  <div>
    <my-banner></my-banner>
    <div>Hello</div>
  </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import {GET_EVENT} from '@/store/actions'
import Banner from '@/components/Banner'
import _ from 'lodash'

export default {
  components: {
    'my-banner': Banner
  },
  data: () => ({
    loading: true
  }),
  computed: {
    ...mapState({
      activities: (state) => state.activities
    })
  },
  methods: {
    ...mapActions({
      [_.camelCase(GET_EVENT)]: GET_EVENT
    })
  },
  async created () {
    try {
      await this.getEvent({id: this.$route.params.id})
    } catch (e) {
    }
    this.loading = false
  }
}
</script>
