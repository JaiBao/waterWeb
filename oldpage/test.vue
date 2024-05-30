<template>
  <div>
    <div class="section1">
      <q-list bordered class="rounded-borders">
        <q-expansion-item header-class="bg-primary text-white" expand-icon-class="text-white">
          <template v-slot:header>
            <q-item-section>查詢條件</q-item-section>
          </template>

          <q-card>
            <q-card-section class="bg-white">
              <q-input filled bottom-slots v-model="title" label="請輸入標題" class="titleInput">
                <template v-slot:before>
                  <p>標題</p>
                </template>
                <template v-slot:append>
                  <q-icon v-if="title !== ''" name="close" @click="title = ''" />
                </template>
              </q-input>
            </q-card-section>
            <q-card-section class="bg-grey-3 titleBtns">
              <q-btn class="bg-light-blue-6 text-white" @click="filterAds">
                <q-icon name="search" />
                查詢
              </q-btn>
              <q-btn class="bg-green-5 text-white" @click="showAddDialog = true">
                <q-icon name="add" />
                新增
              </q-btn>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
    <!-- 表格 -->
    <div class="section2">
      <q-table :rows="filteredAds" :columns="columns">
        <template v-slot:body-cell-image="{ row }">
          <q-td class="text-center">
            <img :src="row.cloudinary_url" height="50" alt="廣告圖片" />
          </q-td>
        </template>
        <template v-slot:body-cell-actions="{ row }">
          <q-td class="text-center">
            <q-btn outlined icon="edit" @click="editAd(row)" color="primary" />
          </q-td>
        </template>
      </q-table>
    </div>
    <!-- 彈窗 -->
    <q-dialog v-model="showAddDialog">
      <q-card class="q-pa-sm dialogCard">
        <q-card-section>
          <p v-if="isEditing">{{ '修改資訊' }}</p>
          <p v-else>{{ '新增資訊' }}</p>
        </q-card-section>

        <q-card-section class="row">
          <q-input filled v-model="newAd.title" label="廣告標題" class="col-6 q-pa-xs" :rules="[val => !!val || '請輸入廣告標題']" />
          <q-input filled v-model="newAd.description" label="廣告描述" class="col-6 q-pa-xs" :rules="[val => !!val || '請輸入廣告描述']" />
        </q-card-section>
        <!-- <q-card-section class="row">
          <q-input filled v-model="newAd.cloudinary_url" label="廣告連結" class="col-12 q-pa-xs" />
        </q-card-section> -->
        <q-card-section class="row">
          <div class="col-12 q-pa-xs">
            <div class="custom-file-upload">
              <p>廣告圖片</p>
              <!-- 原有圖 -->
              <div v-if="newAd.cloudinary_url" class="image-preview">
                <img :src="newAd.cloudinary_url" alt="Preview" class="preview-image" />
              </div>
              <!-- 上傳區 -->
              <div v-if="selectedImage" class="image-preview">
                <img :src="selectedImage" alt="Selected image" class="preview-image" />
              </div>
              <div v-else class="custom-upload-container" @click="triggerFileInput">
                <q-icon name="add" size="2xl" />
                <input type="file" ref="fileInput" class="hidden-file-input" @change="handleFileChange" />
              </div>
            </div>
          </div>
        </q-card-section>

        <!-- 操作按钮 -->
        <q-card-actions align="right">
          <q-btn outlined label="取消" color="negative" @click="cancelAdd" />
          <q-btn outlined :label="isEditing ? '儲存' : '新增'" color="positive" @click="saveAd" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import axios from 'axios'
const ads = ref([])
const filteredAds = ref([]) // 用於存儲篩選後的廣告
const $q = useQuasar()

const isEditing = ref(false)

const title = ref('')
const showAddDialog = ref(false)
const newAd = ref({
  title: '',
  description: '',
  //   link: '',
  image: ''
})

// const statusOptions = ['啟用', '停用']

const columns = [
  { name: 'image', label: '圖片', field: 'cloudinary_url', align: 'center', sortable: true },
  { name: 'title', label: '標題', field: 'title', align: 'center', sortable: true },
  { name: 'description', label: '描述', field: 'description', align: 'center', sortable: true },

  { name: 'actions', label: '功能', field: 'id', align: 'center' }
]

const selectedImage = ref(null) // 選擇的圖片

function filterAds() {
  if (title.value) {
    filteredAds.value = ads.value.filter(ad => ad.title.includes(title.value))
  } else {
    filteredAds.value = ads.value // 確保這裡返回所有廣告
  }
}

const fetchAds = async () => {
  try {
    const response = await axios.get('http://10.0.0.42:8080/all-images')
    ads.value = response.data.map(ad => ({
      ...ad,
      cloudinary_url: ad.cloudinary_url,
      description: ad.description
    }))
    filteredAds.value = ads.value
  } catch (error) {
    console.error(error)
  }
}

function resetForm() {
  newAd.value = { title: '', description: '', link: '', image: null }
  selectedImage.value = null
  isEditing.value = false
  showAddDialog.value = false
}

const cancelAdd = () => {
  showAddDialog.value = false
  resetForm()
}

const fileInput = ref(null)

function triggerFileInput() {
  fileInput.value.click()
}

// 覆蓋
function handleFileChange(event) {
  const file = event.target.files[0]
  if (file) {
    selectedImage.value = URL.createObjectURL(file)
    newAd.value.image = file // 保存原本文件
  }
}
const uploadImage = async () => {
  // 有無選圖
  if (!newAd.value.image) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '請選擇一張圖片'
    })
    return
  }

  const formData = new FormData()
  formData.append('image', newAd.value.image)
  formData.append('title', newAd.value.title)
  formData.append('description', newAd.value.description)

  try {
    await axios.post('http://10.0.0.42:8080/upload-image', formData)
    cancelAdd()
    fetchAds() // 重新獲取所有廣告數據
    $q.notify({
      color: 'green-5',
      textColor: 'white',
      icon: 'check',
      message: '新增成功',
      position: 'center'
    })
  } catch (error) {
    console.error(error)
  }
}

const replaceImage = async imageId => {
  const formData = new FormData()
  if (newAd.value.image) {
    formData.append('image', newAd.value.image)
  }
  formData.append('title', newAd.value.title)
  formData.append('description', newAd.value.description)

  try {
    await axios.put(`http://10.0.0.42:8080/replace-image/${imageId}`, formData)
    cancelAdd()
    fetchAds() // 重新獲取所有廣告數據
    $q.notify({
      color: 'green-5',
      textColor: 'white',
      icon: 'check',
      message: '修改成功',
      position: 'center'
    })
  } catch (error) {
    console.error(error)
  }
}

const saveAd = () => {
  if (!newAd.value.title || !newAd.value.description) {
    if (!newAd.value.title) {
      $q.notify({
        color: 'red-4',
        textColor: 'white',
        icon: 'error',
        message: '請輸入廣告標題'
      })
    }
    if (!newAd.value.description) {
      $q.notify({
        color: 'red-4',
        textColor: 'white',
        icon: 'error',
        message: '請輸入廣告描述'
      })
    }
    return
  }

  if (isEditing.value) {
    replaceImage(newAd.value.id) // 如果修改換圖片
  } else {
    uploadImage() // 如果新增就上傳
  }
}

// 導入圖片
const loadImage = async imageId => {
  try {
    const response = await axios.get(`http://10.0.0.42:8080/get-image/${imageId}`)
    newAd.value.image = response.data.cloudinary_url
  } catch (error) {
    console.error(error)
  }
}

// 編輯
const editAd = ad => {
  newAd.value = { ...ad }
  loadImage(ad.id)
  showAddDialog.value = true
  isEditing.value = true
}

onMounted(fetchAds)
</script>

<style scoped lang="scss">
.section1,
.section2 {
  padding: 0 20%;
}

.titleInput {
  flex-direction: row;
  width: 30%;
}

.titleBtns {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  button {
    margin: 0 1%;
  }
}
.section2 {
  margin-top: 2%;
}

.dialogCard {
  font-size: 18px;
  color: green;
  font-weight: 700;
  min-width: 500px;
}

//正方形上傳
.custom-upload-container {
  width: 200px;
  height: 200px;
  border: 2px dashed grey;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
// 取消醜部拉基預設
.hidden-file-input {
  display: none;
}
.image-preview {
  margin-bottom: 10px;

  .preview-image {
    max-width: 100%;
    max-height: 200px;
    object-fit: contain;
  }
}
</style>
