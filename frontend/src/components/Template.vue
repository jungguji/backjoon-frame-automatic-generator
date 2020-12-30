<template>
  <v-card height="350px">
    <v-navigation-drawer
      absolute
      permanent
      right
    >
      <template v-slot:prepend>
        <v-list-item>

          <v-list-item-content>
            <v-list-item-title class="title">Option</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in options"
          :key="item.label">
          <v-list-item-content>
              <td class="d-flex align-center">
                <v-simple-checkbox
                v-model='item.value'
                color="#4FC3F7"
                @click="test"
              ></v-simple-checkbox>
              {{item.label}}
            </td>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-textarea
        solo
        name="input-7-4"
        label="Solo textarea"
        :value=text
        ></v-textarea>
  </v-card>
</template>

<script>
export default {
  name: 'Template',
  data () {
    return {
      options: [
        {
          label: '테스트 케이스',
          color: 'info',
          value: false
        },
        {
          label: 'N개 입력',
          color: 'info',
          value: false
        },
        {
          label: '스페이스가 포함된 숫자',
          color: 'info',
          value: false
        }
      ],
      requestValue: {
        isTestCase: false,
        isNQuantity: false,
        isSpaceIncludeNumber: false
      },
      text: ''
    }
  },
  methods: {
    test () {
      this.$store.dispatch('REQUEST_TEMPATE', {
        isTestCase: this.options[0].value,
        isNQuantity: this.options[1].value,
        isSpaceIncludeNumber: this.options[2].value
      })
      this.text = this.$store.state.template.text
    }
  }
}
</script>
