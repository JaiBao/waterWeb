<template>
  <!-- 信箱 -->
  <q-dialog class="dialogClass" v-model="emailDialog">
    <q-card class="selectedDialog">
      <q-btn
        flat
        dense
        round
        icon="close"
        color="white"
        class="close-dialog-button"
        :style="{ backgroundColor: '#787878', borderColor: 'white' }"
        @click="closeEmailDialog" />

      <div class="message">
        <h1>聯絡表單</h1>
        <h5>業務合作或其他事宜歡迎您透過聯絡表單與我們聯繫</h5>
        <div class="formContents">
          <div class="formContent">
            <div class="formTitle">
              <p>
                <span>*</span>
                問題主旨
              </p>
            </div>
            <q-input outlined color="pink-8" class="q-field-h col col-xs-12 q-ma-sm" v-model="form.subject" :input-style="{ fontSize: '1.3rem' }"></q-input>
          </div>
          <div class="formContent">
            <div class="formTitle">
              <p>
                <span>*</span>
                聯絡姓名
              </p>
            </div>
            <q-input outlined color="pink-8" class="q-field-h col col-xs-12 q-ma-sm" v-model="form.name" :input-style="{ fontSize: '1.3rem' }"></q-input>
          </div>
          <div class="formContent">
            <div class="formTitle">
              <p>
                <span>*</span>
                聯絡電話
              </p>
            </div>
            <q-input outlined color="pink-8" class="q-field-h col col-xs-12 q-ma-sm" v-model="form.phone" :input-style="{ fontSize: '1.3rem' }"></q-input>
          </div>
          <div class="formContent">
            <div class="formTitle">
              <p>
                <span>*</span>
                聯絡信箱
              </p>
            </div>
            <q-input outlined color=" pink-8" class="q-field-h col col-xs-12 q-ma-sm" v-model="form.email" :input-style="{ fontSize: '1.3rem' }"></q-input>
          </div>
          <div class="formContent">
            <div class="formTitle">
              <p>
                <span>*</span>
                留言
              </p>
            </div>
            <q-input outlined color="pink-8" class="col col-xs-12 q-ma-sm" v-model="form.content" type="textarea" :input-style="{ fontSize: '1.3rem' }"></q-input>
          </div>
          <div class="formContent">
            <div class="formTitle">
              <p>
                <span>*</span>
                輸入驗證碼
              </p>
            </div>
            <div class="formCaptchas">
              <q-input outlined color="pink-8" class="q-field-h captchaInput" v-model="form.captcha"></q-input>
              <div class="formCaptcha" @click="refreshCaptcha" :key="captcha">{{ captcha }}</div>
            </div>
          </div>
          <div class="formBtn">
            <q-btn label="清除" @click="reset" class="reset"></q-btn>
            <q-btn label="送出" @click="onSubmit" class="submit"></q-btn>
          </div>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>
<script setup>
import axios from 'axios'
import { useQuasar } from 'quasar'
import { useDialogStore } from '/stores/useDialogStore'
const { emailDialog, closeEmailDialog } = useDialogStore()
const $q = useQuasar()

const captcha = ref('')
const form = reactive({
  subject: '',
  name: '',
  phone: '',
  email: '',
  content: '',
  captcha: ''
})
function reset() {
  form.subject = ''
  form.name = ''
  form.phone = ''
  form.email = ''
  form.content = ''
  form.captcha = ''
}

function generateCaptcha() {
  return Math.random().toString(36).substring(2, 8)
}
const refreshCaptcha = () => {
  captcha.value = generateCaptcha()
}

const onSubmit = async () => {
  if (!form.subject) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '請填寫主旨'
    })
    return
  }
  if (!form.name) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '請填寫聯絡姓名'
    })
    return
  }
  if (!form.phone) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '請填寫聯絡電話'
    })
    return
  }
  if (!form.email) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '請填寫聯絡信箱'
    })
    return
  }
  if (!form.content) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '請填寫問題內容'
    })
    return
  }
  const isValid = Object.values(form).every(value => value)
  if (!isValid || form.captcha !== captcha.value) {
    $q.notify({
      color: 'red-4',
      textColor: 'white',
      icon: 'error',
      message: '驗證碼錯誤'
    })
  } else {
    try {
      await sendDataToAppsScript(form)
      // 清空表單
      reset()

      // 刷新驗證碼
      refreshCaptcha()

      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'check',
        message: '郵件已成功寄出'
      })
    } catch (error) {
      $q.notify({
        color: 'red-4',
        textColor: 'white',
        icon: 'error',
        message: '郵件發送失敗'
      })
    }
  }
}

const sendDataToAppsScript = async formData => {
  const scriptUrl = 'https://www.dtstw.com:3000/data/water' // 替换为您的 Google Apps Script 项目的脚本 URL
  const data = {
    subject: formData.subject,
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    content: formData.content
  }

  try {
    await axios.post(scriptUrl, data)
    console.log('Data sent to Google Apps Script')
  } catch (error) {
    console.error('Error sending data to Google Apps Script:', error)
  }
}
onMounted(() => {
  refreshCaptcha()
})
</script>

<style lang="scss" scoped>
@import 'assets/components/emailDialog';
</style>
