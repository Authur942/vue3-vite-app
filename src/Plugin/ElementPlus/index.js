import {
  ElButton
} from 'element-plus'

const components = [
  ElButton
]

export default (app) => {
  components.map(item => {
    app.use(item)
  })
}