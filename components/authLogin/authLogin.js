/**
 * Component: 授权登录
 * Author: Moss
 */

const app = getApp()

Component({
    options: {
      multipleSlots: true // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     * 用于组件自定义设置
     */
    properties: {
      isShow: {
        type:Boolean,
        value: false
      }
    },
  
    /**
     * 私有数据,组件的初始数据
     * 可用于模版渲染
     */
    data: {
      
    },
  
    /**
     * 组件的方法列表
     * 更新属性和数据的方法与更新页面数据的方法类似
     */
    methods: {
      getUserInfo(e) {
        this.triggerEvent("getUserInfoEvent", e.detail)
      }
    }
  })