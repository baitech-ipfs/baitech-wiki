/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  mySidebar: [
//     {
//       type: 'doc',
//       id: 'introduction',
//       label: '介绍'
//     },

    {
      type: 'category',
      label: '概览',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'general/gettingStarted',
          label: '开始'
        },
        {
          type: 'doc',
          id: 'general/gadget',
          label: '在首页体验 Baitech'
        },
        {
          type: 'doc',
          id: 'general/architecture',
          label: 'Baitech 多端架构'
        },
        // {
        //   type: 'doc',
        //   id: 'general/apiKeys',
        //   label: 'API Keys'
        // },
        {
          type: 'doc',
          id: 'general/pinningWithApi',
          label: 'API 认证机制'
        },
        {
          type: 'doc',
          id: 'general/retrievingFiles',
          label: '读取文件'
        },
        {
          type: 'doc',
          id: 'general/faq',
          label: 'FAQ'
        },
      ]
    },
    {
      type: 'category',
      label: 'Endpoint API',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'pinning/pinFile',
          label: '上传文件'
        },
        {
          type: 'doc',
          id: 'pinning/pinByHash',
          label: '通过 CID 上传文件'
        }
      ]
    },
    {
      type: 'category',
      label: 'Baitech Storage API',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'pinning/pinList',
          label: '查询文件列表'
        },
        {
          type: 'doc',
          id: 'pinning/pinJobs',
          label: '查询上传任务'
        }
      ]
    },
    {
      type: 'doc',
      id: 'pinningServicesApi',
      label: 'IPFS 远端存储服务 API'
    }

  ]

};