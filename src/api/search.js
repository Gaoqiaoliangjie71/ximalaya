import request from '@/utils/request'

export default {
  findHotWord: () => request.get('/hotWordBillboardCategory')
}