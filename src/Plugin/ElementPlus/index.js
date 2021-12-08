import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElMessage
} from 'element-plus'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElMessage
]

export default (app) => {
  components.map(item => {
    app.use(item)
  })
}