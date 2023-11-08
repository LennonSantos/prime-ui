import { boot } from 'quasar/wrappers'
import * as VuePlugin from 'quasar-ui-prime-ui/src/vue-plugin'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
