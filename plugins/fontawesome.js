import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInbox, faPen, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faInbox, faGithub, faGitlab, faLinkedin, faFileAlt, faPen, faCamera)

// Register the component globally
Vue.component('fa', FontAwesomeIcon)
