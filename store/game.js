const findRoleByRolename = (state, rolename) => {
  for (let role of state.roles) {
    if (role.roleName === rolename) {
      return role
    }
  }
}

const initData = {
  title: '逐梦演艺圈',
  rate: '8.5',
  timer: 0,
  tools: [
    {
      name: 'DY补药',
    },
    {
      name: 'DY短信王斯达',
    },
    {
      name: 'DY短信周怡',
    },
    {
      name: 'DY安眠药',
    },
    {
      name: 'LZ全家福',
    },
    {
      name: 'LZ房卡',
    },
    {
      name: 'LZ划痕U盘',
    },
    {
      name: 'LZ盖子U盘',
    },
    {
      name: 'LZ机票',
    },
    {
      name: 'MY民族照片',
    },
    {
      name: 'MY合照',
    },
    {
      name: 'MY收藏夹',
    },
    {
      name: 'MY短信',
    },
    {
      name: 'MY圆形戒指',
    },
    {
      name: 'FY海报',
    },
    {
      name: 'FY短信',
    },
    {
      name: 'FY欠条',
    },
    {
      name: 'FY嘈杂录音',
    },
    {
      name: 'FY房卡',
    },
    {
      name: 'YLL报纸',
    },
    {
      name: 'YLL清单',
    },
    {
      name: 'YLL欠条',
    },
    {
      name: 'YLL医书',
    },
    {
      name: 'ZY验孕棒',
    },
    {
      name: 'ZY书',
    },
    {
      name: 'ZY头发',
    },
    {
      name: 'ZY牌子',
    },
    {
      name: 'LZQ信件',
    },
    {
      name: 'LZQ短信杜润',
    },
    {
      name: 'LZQ心形戒指',
    },
    {
      name: 'WSD房卡',
    },
    {
      name: 'WSD会员卡',
    },
    {
      name: 'WSD通话林泽',
    },
    {
      name: 'QS汇款单',
    },
    {
      name: 'QS打钱',
    },
    {
      name: 'QS合照',
    },
    {
      name: 'JD灰烬',
    },
    {
      name: 'JD泥土U盘',
    },
    {
      name: 'JD安眠药',
    },
    {
      name: 'JD毛巾',
    },
    {
      name: 'SJ周怡短信',
    },
    {
      name: 'SJ秦守短信',
    },
    {
      name: 'SJ方玥短信',
    },
    {
      name: 'XZ出生证明',
    },
    {
      name: 'XZ信件',
    },
    {
      name: 'XZ胃里残留',
    },
    {
      name: 'XZ鼻腔残留',
    },
    {
      name: 'XZ鞋，衣服',
    },
    {
      name: 'XZ浴缸水',
    },
    {
      name: 'LUCY（2009）',
    },
    {
      name: '肺结核(1996)',
    },
    {
      name: '因戏生情(2014)',
    },
    {
      name: '于康（2011）',
    },
    {
      name: '见义勇为（1994）',
    },
    {
      name: '红红（2013）',
    },
    {
      name: '桂花（2013）',
    },
    {
      name: '阿兹海默（2010）',
    },
  ],
  roles: [
    {
      roleName: '杜润',
      name: '',
      pic: 'a杜润.jpg',
      tools: [],
      skills: [
        {
          name: '金钱买通',
          status: true,
        },
        {
          name: '能言善辩',
          status: true,
        }
      ]
    },
    {
      roleName: '方玥',
      name: '',
      tools: [],
      pic: 'a方玥.jpg',
      skills: [
        {
          name: '智商压制',
          status: true,
        },
        {
          name: '观察入微',
          status: true,
        }
      ]
    },
    {
      roleName: 'MARY',
      name: '',
      pic: 'amary.jpg',
      tools: [],
      skills: [
        {
          name: '能言善辩',
          status: true,
        },
        {
          name: '观察入微',
          status: true,
        }
      ]
    },
    {
      roleName: '林泽',
      name: '',
      pic: 'a林泽.jpg',
      tools: [],
      skills: [
        {
          name: '金钱买通',
          status: true,
        },
        {
          name: '武力胁迫',
          status: true,
        }
      ]
    },
    {
      roleName: '于丽丽',
      name: '',
      pic: 'a于丽丽.jpg',
      tools: [],
      skills: [
        {
          name: '魅力诱惑',
          status: true,
        },
        {
          name: '观察入微',
          status: true,
        }
      ]
    },
    {
      roleName: '王斯达',
      name: '',
      pic: 'a王斯达.jpg',
      tools: [],
      skills: [
        {
          name: '金钱买通',
          status: true,
        },
        {
          name: '武力胁迫',
          status: true,
        }
      ]
    },
    {
      roleName: '周怡',
      name: '',
      pic: 'a周怡.jpg',
      tools: [],
      skills: [
        {
          name: '智商压制',
          status: true,
        },
        {
          name: '魅力诱惑',
          status: true,
        }
      ]
    },
    {
      roleName: '李泽琼',
      name: '',
      pic: 'a李泽琼.jpg',
      tools: [],
      skills: [
        {
          name: '魅力诱惑',
          status: true,
        },
        {
          name: '武力胁迫',
          status: true,
        }
      ]
    },
    {
      roleName: '秦守',
      name: '',
      pic: 'a秦守.jpg',
      tools: [],
      skills: [
        {
          name: '能言善辩',
          status: true,
        },
        {
          name: '智商压制',
          status: true,
        }
      ]
    },
  ],
  steps: [
    {
      title: '*游戏规则*',
      text: '<p>游戏一共四个回合。游戏时长约4-5个小时。</p><p>整场游戏九位玩家每人共有13点DP点，DP点可以交易，不可累积。</p><p>每回合开始时发放本回合点数，回合结束清零。DP点用于查看线索（第一回合和第二回合）和事件（第三回合），查看失败不消耗点数。</p><p>解锁秘密卡不消耗DP点。（如游戏中加入额外角色任凡，则任凡没有DP点，只有警察技能）</p>',
    },
    {
      title: '*卡牌简介*',
      text: '<p>信件卡12张，其中三张为特殊剧情相关，三张为第二回合结束时发放，一张为秦守自带可随时查看，五张为鉴定和破译时查看。主持人在游戏过程中按需发放。</p>',
    },
    {
      title: '特殊剧情触发',
      text: '<p>开启神秘力量卡后某些玩家抽取属于自己的信件卡。（信件卡不需要展示）</p > '
    },
    {
      title: '*线索卡*',
      text: '<p>线索卡共58张，不可以调查自己房间的线索。调查时从写有“区域位置”的文件袋中抽出卡牌。抽出后的线索卡将不会被二次发现，玩家之间可以交易卡牌。</p > ',
    },
    {
      title: '*事件卡*',
      text: '<p>事件卡18张，调查时从写有“事件卡牌”的文件袋中抽出卡牌。事件卡需要指定线索和特定技能开启对应秘密卡（由于卡牌解锁难度较大，推荐玩家合作解锁卡牌）。开启秘密卡不消耗DP点，玩家之间可以交易卡牌。</p > ',
    },
    {
      title: '主持人建议',
      text: '<p>如桌游吧主持人主持游戏，则不发放任何实体卡牌。玩家所有卡牌交易行为均需要到主持人处登记。</p > <p>玩家抽取线索卡自行记录卡牌内容后（推荐拍照），将卡牌归还主持人。主持人将所有抽卡行为进行登记（配件附卡牌登记表或使用本程序）。</p> <p>其中事件卡的解锁，需要主持人查询卡牌登记表以及技能表，核实后向玩家展示对应秘密卡内容。（配件附技能登记表或使用本程序）</p>',
    },
    {
      title: '游戏开始',
      text: '<p>玩家首先进行自我介绍，互相熟悉身份</p>',
    },
    {
      title: '第一回合',
      text: '<p>（推荐60分钟）每位玩家5点DP点，可调查区域（四个地点，花费2点DP一次）：旧报纸藏馆、酒店大堂，方芳酒店房间，方芳手机。回合结束时，主持人收回没用完的DP点。</p > ',
    },
    {
      title: '第二回合',
      text: '<p>（推荐60分钟）每位玩家4点DP点，可调查区域（九个地点，花费1点DP一次）：MARY房间、杜润房间、方玥房间、李泽琼房间、林泽房间、秦守房间、王斯达房间、于丽丽房间、周怡房间。回合结束时，主持人收回没用完DP点。</p>',
    },

    {
      title: '圆桌会议',
      text: '<p>发放方玥、林泽、任凡的信件卡。如任凡没有加入游戏，则由主持人宣读信件卡内容。玩家不需要展示信件内容。</p>',
    },
    {
      title: '第三回合',
      text: '<p>（推荐60-90分钟）：每位玩家4点DP点，用于抽取事件卡。玩家根据卡面要求，到主持人处开启秘密卡。</p>',
    },
    {
      title: '圆桌会议',
      text: '<p>（推荐30分钟）：玩家进行最终推理，发表意见，进行投票指认凶手。</p>',
    },
  ],
  log: [],
}

export const state = () => (JSON.parse(JSON.stringify(initData)))

export const mutations = {
  resetGame(state) {
    const newData = JSON.parse(JSON.stringify(initData))
    for (let i in newData) {
      state[i] = newData[i]
    }
  },
  usedSkill(state, skill) {
    skill.status = !skill.status
  },
  giveToolToUser(state, { roleName, tool }) {
    const role = findRoleByRolename(state, roleName)
    role.tools.push(tool)
  },
  giveToolToOther(state, { me, you, tool }) {
    let _me = findRoleByRolename(state, me)
    let _you = findRoleByRolename(state, you)
    if (_me.tools.indexOf(tool) > -1) {
      _me.tools.splice(_me.tools.indexOf(tool), 1)
    }
    if (_you.tools.indexOf(tool) === -1) {
      _you.tools.push(tool)
    }
  },
  addLog(state, { txt }) {
    state.log.unshift(txt)
  },
  setName(state, { roleName, name }) {
    let _role = findRoleByRolename(state, roleName)
    _role.name = name
  },
  setTime(state, { timer }) {
    state.timer = timer
  },
}

export const getters = {
}
