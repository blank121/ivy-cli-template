import env from './env'
import getDefaultConfig from '@ivy/fts/config'

let conf = {
  ... getDefaultConfig(env), // 多个项目公用的appid等等
  apiList: ['chooseWXPay', 'editAddress', 'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'pauseVoice', 'stopVoice', 'onVoicePlayEnd', 'uploadVoice', 'downloadVoice', 'translateVoice', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems'],
}
console.log('config is: ', conf)
export default conf
