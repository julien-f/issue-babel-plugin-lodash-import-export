// declare the symbol in the local module
import { forEach } from 'lodash'

// reexport the symbol without defining it the local module
//
// https://github.com/leebyron/ecmascript-export-ns-from#current-ecmascript-2015-modules
export { forEach } from 'lodash'
