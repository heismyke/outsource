import { library, config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  faArrowRight,
  faBars,
  faBell,
  faBookmark,
  faBriefcase,
  faBuilding,
  faChartLine,
  faCircleCheck,
  faClock,
  faFileInvoice,
  faFilter,
  faGrip,
  faLock,
  faMoneyBillTransfer,
  faRightFromBracket,
  faSearch,
  faShieldHalved,
  faUserTie,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default defineNuxtPlugin((nuxtApp) => {
  config.autoAddCss = false
  library.add(
    faArrowRight,
    faBars,
    faBell,
    faBookmark,
    faBriefcase,
    faBuilding,
    faChartLine,
    faCircleCheck,
    faClock,
    faFileInvoice,
    faFilter,
    faGrip,
    faLock,
    faMoneyBillTransfer,
    faRightFromBracket,
    faSearch,
    faShieldHalved,
    faUserTie,
    faUsers,
  )
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
