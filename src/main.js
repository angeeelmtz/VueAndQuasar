import { createApp } from 'vue'
import App from './App.vue'
import Reactive from './components/Reactive.vue'
import Condicionales from './components/Condicionales.vue'

import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/en-US'
import 'quasar/src/css/index.sass'

const app = createApp(App)
app.use(Quasar, {
    plugins:{},
    lang:quasarLang
})

app.mount("#app")
