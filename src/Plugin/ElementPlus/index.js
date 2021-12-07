import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput
]

export default (app) => {
  components.map(item => {
    app.use(item)
  })
}