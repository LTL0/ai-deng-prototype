const icons = {
  dashboard: '<path d="M4 4h6v6H4zM14 4h6v4h-6zM14 12h6v8h-6zM4 14h6v6H4z"/>',
  chart: '<path d="M4 19V9M10 19V5M16 19v-7M22 19V3"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
  layers: '<path d="m12 3-9 5 9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  child: '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0M8 8c1.2-2 6.8-2 8 0"/>',
  device: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4M9 6h6"/>',
  clipboard: '<path d="M9 5H6a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-3M9 3h6v4H9zM8 12h8M8 16h5"/>',
  cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  refresh: '<path d="M20 6v5h-5M4 18v-5h5M18.5 9A7 7 0 0 0 6 6.5L4 11M5.5 15A7 7 0 0 0 18 17.5l2-4.5"/>',
  spark: '<path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3ZM19 16l.9 2.1L22 19l-2.1.9L19 22l-.9-2.1L16 19l2.1-.9L19 16Z"/>',
  wallet: '<path d="M4 6h15a2 2 0 0 1 2 2v11H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12v3M15 12h6"/><circle cx="16.5" cy="12" r=".5"/>',
  alert: '<path d="M10.3 3.6 2.5 18a2 2 0 0 0 1.8 3h15.4a2 2 0 0 0 1.8-3L13.7 3.6a2 2 0 0 0-3.4 0ZM12 9v4M12 17h.01"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  filter: '<path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  link: '<path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1"/>',
  eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6 1.7 1.7 0 0 0 10 3V2.8h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13ZM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>'
};

function iconSvg(name) {
  return '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (icons[name] || icons.spark) + '</svg>';
}

function hydrateIcons(root) {
  (root || document).querySelectorAll('[data-icon]').forEach(function (el) {
    el.innerHTML = iconSvg(el.getAttribute('data-icon'));
  });
}

function pageHead(title, subtitle, actions) {
  return '<div class="page-head"><div><h1>' + title + '</h1>' + (subtitle ? '<p>' + subtitle + '</p>' : '') + '</div><div class="head-actions">' + (actions || '') + '</div></div>';
}

function detailPageHead(backAction) {
  return '<div class="page-head detail-page-head"><button class="button secondary compact detail-back-button" type="button" ' + backAction + '>返回列表</button></div>';
}

function subnav(items, active) {
  return '<div class="subnav" role="tablist">' + items.map(function (item) {
    return '<button role="tab" class="' + (item === active ? 'active' : '') + '" aria-selected="' + (item === active) + '">' + item + '</button>';
  }).join('') + '</div>';
}

function summary(items) {
  return '<div class="summary-strip summary-count-' + items.length + '">' + items.map(function (item) {
    return '<div class="summary-item"><span>' + item[0] + '</span><strong>' + item[1] + '</strong></div>';
  }).join('') + '</div>';
}

function toolbar(placeholder, primary) {
  return '<div class="toolbar"><div class="search-input"><span data-icon="search"></span><input aria-label="列表搜索" placeholder="' + placeholder + '" /></div><button class="button secondary compact"><span data-icon="filter"></span>筛选</button><span class="spacer"></span>' + (primary || '') + '</div>';
}

function pagination() {
  return '<div class="pagination"><span style="color:var(--text-3);font-size:11px;margin-right:8px">共 286 条</span><button aria-label="上一页">‹</button><button class="active">1</button><button>2</button><button>3</button><button aria-label="下一页">›</button></div>';
}

function tablePanel(headers, rows, enableRowDetails) {
  return '<section class="panel table-panel" style="padding-top:0"><div class="table-wrap"><table><thead><tr>' + headers.map(function (h) { return '<th>' + h + '</th>'; }).join('') + '</tr></thead><tbody>' + rows.map(function (row) {
    const rowStart = enableRowDetails === false ? '<tr>' : '<tr class="clickable-row" data-drawer="' + (row.drawer || row.key) + '">';
    return rowStart + row.cells.map(function (cell) { return '<td>' + cell + '</td>'; }).join('') + '</tr>';
  }).join('') + '</tbody></table></div>' + pagination() + '</section>';
}

function tabConfig(summaryItems, placeholder, headers, rows) {
  return { summary: summaryItems, placeholder: placeholder, headers: headers, rows: rows };
}

const tabViews = {
  metrics: {
    '用户数据': tabConfig([['家长日活','18,642'],['活跃家长','18,642'],['新增家长','268'],['儿童日活','21,406'],['活跃儿童','21,406']], '搜索日期或用户分群', ['日期','家长日活','活跃家长','新增家长','儿童日活','活跃儿童'], [
      ['2026-09-23','18,642','18,642','268','21,406','21,406'],
      ['2026-09-22','18,108','18,108','251','20,934','20,934'],
      ['2026-09-21','17,846','17,846','243','20,517','20,517']]),
    '设备数据': tabConfig([['设备日活','12,684'],['活跃设备','12,684'],['新增设备','326'],['实时在线设备','10,998'],['解绑设备','42']], '搜索日期、设备型号或固件版本', ['日期','设备日活','活跃设备','新增设备','实时在线设备','解绑设备'], [
      ['2026-09-23','12,684','12,684','326','10,998','42'],
      ['2026-09-22','12,406','12,406','309','10,764','38'],
      ['2026-09-21','12,118','12,118','297','10,506','36']]),
    'AI 能力': tabConfig([['能力请求','428,620'],['能力可用率','99.31%'],['平均 P95','1.26s'],['今日成本','¥ 3,482']], '搜索能力、供应商或模型', ['能力','供应商 / 模型','请求数','业务可用率','成功率','P95','P99','计费用量','成本'], [
      ['<strong>LLM</strong>','供应商 D · edu-llm-32k','128,436','97.43%','96.50%','2.8s','5.6s','2,846万 Token','¥ 1,486'],
      ['<strong>OCR</strong>','供应商 F · ocr-edu-v5','121,138','99.31%','98.74%','890ms','1.8s','121,138 次','¥ 528']]),
    '作业额度': tabConfig([['今日消耗','2,846 次'],['消耗用户','2,316'],['失败返还','126 次'],['额度不足用户','84']], '搜索额度账户、家长、儿童或设备', ['日期','额度账户','归属类型','归属对象','基础额度','加购 / 赠送','当日消耗','失败返还','当前剩余','状态'], [
      ['2026-09-23','QTA-USR-208831','家长账户','USR-208831','20','10 / 0','3','0','27','<span class="status-pill success">正常</span>'],
      ['2026-09-23','QTA-USR-208764','家长账户','USR-208764','10','0 / 0','2','1','0','<span class="status-pill warning">已耗尽</span>']])
  },
  alerts: {
    '配置列表': tabConfig([['启用配置','38'],['告警等级（P0 / P1 / P3）','2 / 1 / 3'],['今日触发','21'],['已静默','4']], '搜索配置名称、监控指标或通知对象', ['配置名称','告警等级','监控指标','触发条件','持续时间','静默时长','通知对象','启用状态'], [
      ['<strong>LLM 可用率下降</strong>','<span class="status-pill danger">P1</span>','LLM 业务可用率','低于 97%','连续 5 分钟','30 分钟','算法平台、产品运营','<button class="switch-toggle alert-enabled-toggle" type="button" role="switch" aria-checked="true" aria-label="切换 LLM 可用率下降告警状态"><span></span></button>'],
      ['<strong>作业批改耗时异常</strong>','<span class="status-pill warning">P3</span>','作业批改 P95 耗时','高于 60 秒','连续 10 分钟','60 分钟','作业运营、算法平台','<button class="switch-toggle alert-enabled-toggle" type="button" role="switch" aria-checked="true" aria-label="切换作业批改耗时异常告警状态"><span></span></button>']]),
    '告警事件': tabConfig([['活动告警','3'],['今日已恢复','18'],['告警等级（P0 / P1 / P2）','0 / 1 / 0'],['平均恢复时间','16m 42s']], '搜索告警事件或监控指标', ['等级','告警事件','监控指标','当前值','影响范围','首次触发','持续时间','恢复时间','状态'], [
      ['<span class="status-pill danger">P1</span>','<strong>LLM 业务可用率下降</strong><small>ALR-20260923-018</small>','LLM 业务可用率','<b class="negative">94.3%</b>','学伴对话','10:20:08','12 分钟','<span data-recovery-time>—</span>','<button class="alert-event-status status-pill warning" type="button" data-alert-event-action="open" data-status="处理中">处理中</button>'],
      ['<span class="status-pill warning">P2</span>','<strong>OCR 识别失败率升高</strong><small>ALR-20260923-016</small>','OCR 识别成功率','<b class="negative">96.8%</b>','指尖查词','10:11:42','21 分钟','<span data-recovery-time>—</span>','<button class="alert-event-status status-pill danger" type="button" data-alert-event-action="open" data-status="待处理">待处理</button>'],
      ['<span class="status-pill neutral">P3</span>','<strong>作业批改 P95 耗时异常</strong><small>ALR-20260923-012</small>','作业批改 P95 耗时','68.4s','作业批改','09:46:12','36 分钟','10:22:54','<button class="alert-event-status status-pill success" type="button" data-alert-event-action="open" data-status="已处理">已处理</button>']])
  },
  content: {
    '指尖查词': tabConfig([['启用词条','128,642'],['中文词条','82,306'],['英文词条','46,336'],['待发布','328']], '搜索词条、拼音、音标或释义', ['词条','语言 / 类型','拼音 / 音标','核心释义','适用学段','发音资源','笔顺资源','内容版本','状态'], [
      ['<strong>春暖花开</strong>','中文 · 词组','chūn nuǎn huā kāi','形容春天气候温暖，百花盛开','小学','普通话女声','不适用','V12','<span class="status-pill success">已发布</span>'],
      ['<strong>hello</strong>','英文 · 单词','/həˈləʊ/','你好；喂','小学','英式 + 美式','不适用','V8','<span class="status-pill info">待发布</span>']]),
    '听写练习': tabConfig([['教材版本','18'],['启用单元','2,486'],['听写词条','86,420'],['待校验','126']], '搜索教材、年级、单元或词条', ['教材版本','学科','年级 / 册次','单元','词条数','播放顺序','默认重复','书写等待','内容版本','状态'], [
      ['人教版','语文','四年级上册','第一单元','42','顺序','2 次','5 秒','V16','<span class="status-pill success">已发布</span>'],
      ['人教版','英语','四年级上册','Unit 1','36','顺序','2 次','6 秒','V9','<span class="status-pill warning">待校验</span>']]),
  },
  users: {
    '儿童端': tabConfig([['儿童档案','42,106'],['今日活跃','21,406'],['多人共用设备','8,624'],['待补全年级','316']], '搜索儿童 ID、昵称、家长或设备 SN', ['儿童 ID / 昵称','年级','关联家长','常用设备','教材偏好','今日功能次数','待确认作业','最近活跃','档案状态'], [
      ['<strong>CHD-10328</strong><small>小明</small>','四年级','2 名','LP1-26A8-003982','人教版','18','2','今天 10:26','<span class="status-pill success">正常</span>'],
      ['<strong>CHD-10406</strong><small>乐乐</small>','三年级','3 名','LP1-26A8-003804','苏教版','11','1','今天 10:18','<span class="status-pill success">正常</span>']])
  },
  devices: {
    '家长—设备': tabConfig([['有效绑定','52,804'],['多家长设备','9,286'],['今日新增','326'],['今日解绑','42']], '搜索绑定关系、家长用户或设备 SN', ['绑定关系 ID','家长用户','设备 SN','设备型号','绑定来源','绑定时间','最近访问','解绑时间','关系状态'], [
      ['REL-PD-008642','USR-208831','LP1-26A8-003982','Lamp Pro 1','扫码绑定','2026-08-16 14:18','今天 10:28','—','<span class="status-pill success">有效</span>'],
      ['REL-PD-008643','USR-208829','LP1-26A8-003982','Lamp Pro 1','管理员邀请','2026-08-16 18:40','昨天 21:06','—','<span class="status-pill success">有效</span>']]),
    '儿童—设备': tabConfig([['有效关联','56,902'],['多儿童设备','13,826'],['今日新增','418'],['待归属','126']], '搜索关联关系、儿童 ID 或设备 SN', ['关联关系 ID','儿童档案','设备 SN','设备型号','关联来源','关联时间','最近使用功能','最近使用时间','关系状态'], [
      ['REL-CD-018264','CHD-10328 · 小明','LP1-26A8-003982','Lamp Pro 1','家长设置','2026-08-16 14:22','作业批改','今天 10:26','<span class="status-pill success">有效</span>'],
      ['REL-CD-018265','CHD-10406 · 乐乐','LP1-26A8-003982','Lamp Pro 1','家长设置','2026-08-17 09:12','听写练习','今天 09:40','<span class="status-pill success">有效</span>']]),
    '在线记录': tabConfig([['当前在线','12,684'],['今日上线设备','18,406'],['平均在线时长','4h 26m'],['异常离线','86']], '搜索设备 SN、型号、网络或固件', ['设备 SN','型号','上线时间','最后心跳','本次在线时长','网络类型','信号强度','公网 IP','固件版本','在线状态'], [
      ['LP1-26A8-003982','Lamp Pro 1','今天 07:42','刚刚','2h 50m','Wi‑Fi 5G','-46 dBm','120.26.*.*','v2.4.1','<span class="status-pill success">在线</span>'],
      ['LMN-25C2-008421','Lamp Mini','今天 06:18','2 小时前','1h 22m','Wi‑Fi 2.4G','-78 dBm','183.12.*.*','v2.3.8','<span class="status-pill warning">异常离线</span>']]),
    '固件管理': tabConfig([['固件版本','18'],['正式发布','12'],['灰度发布','2'],['待验证','1']], '搜索固件版本、设备型号或发布说明', ['固件 ID','版本号','适用型号','硬件版本','文件大小','校验值','最低可升级版本','强制升级','发布时间','状态'], [
      ['FW-LP1-0241','v2.4.1','Lamp Pro 1','HW-A2/A3','128 MB','SHA256 · 8fa2…','v2.3.0','否','2026-09-20 10:00','<span class="status-pill success">正式发布</span>'],
      ['FW-LMN-0239','v2.3.9','Lamp Mini','HW-B1','96 MB','SHA256 · c412…','v2.2.8','否','2026-09-23 09:00','<span class="status-pill info">灰度 10%</span>']]),
    '升级任务': tabConfig([['进行中任务','3'],['待升级设备','2,486'],['今日成功率','98.2%'],['升级失败','42']], '搜索升级任务、目标版本或设备范围', ['任务 ID','目标版本','目标范围','计划设备','升级成功','升级中','升级失败','成功率','开始 / 结束时间','任务状态'], [
      ['UPG-260923-006','v2.4.1','Lamp Pro 1 · 华东 20%','3,200','2,846','312','42','98.5%','09-23 09:00 / 18:00','<span class="status-pill info">进行中</span>'],
      ['UPG-260922-004','v2.3.9','Lamp Mini · 内测组','120','118','0','2','98.3%','09-22 14:00 / 17:20','<span class="status-pill success">已完成</span>']])
  },
  homework: {
    '批改任务': tabConfig([['处理中','84'],['排队中','32'],['平均处理','38.4s'],['今日重试','126']], '搜索任务 ID、作业 ID 或设备 ID', ['任务 ID','作业 ID','设备 ID','当前阶段','排队时长','处理时长','识别用量','成本','重试次数','任务状态'], [
      ['TASK-260923-18216','HW-260923-08216','LP1-26A8-003982','结果生成','1.2s','31.6s','2 张 / 18 题','¥0.32','0','<span class="status-pill success">成功</span>'],
      ['TASK-260923-18172','HW-260923-08172','LMN-25C2-008421','OCR 识别','8.6s','18.2s','1 张','¥0.12','1','<span class="status-pill info">处理中</span>']]),
    '失败任务': tabConfig([['今日失败','126'],['额度已返还','120']], '搜索任务、作业、错误码或设备', ['失败任务 ID','作业 ID','设备 ID','失败阶段','错误码','失败原因','重试次数','额度处理','最近失败时间','处理状态'], [
      ['TASK-260923-18088','HW-260923-08088','LP1-26A8-003411','结果生成','LLM_TIMEOUT','模型调用超时','3','已返还','今天 09:33','<span class="status-pill danger">待处理</span>'],
      ['TASK-260923-17962','HW-260923-07962','LMN-25C2-008386','OCR 识别','IMAGE_BLUR','图片清晰度不足','1','未扣减','今天 09:06','<span class="status-pill info">已通知重拍</span>']]),
    '额度流水': tabConfig([['今日流水','3,098'],['扣减','2,846'],['返还','126'],['加购入账','126']], '搜索流水号、额度账户、作业或归属对象', ['流水号','额度账户','归属对象','关联作业','变动类型','变动前','变动值','变动后','变动原因','处理时间','状态'], [
      ['QL-260923-008216','QTA-USR-208831','USR-208831','HW-260923-08216','批改扣减','28','-1','27','批改成功','今天 10:27','<span class="status-pill success">成功</span>'],
      ['QL-260923-008088','QTA-USR-208764','USR-208764','HW-260923-08088','失败返还','0','+1','1','模型超时','今天 09:34','<span class="status-pill success">成功</span>']])
  },
  abilities: {
    '模型管理': tabConfig([['启用接口','18'],['健康接口','16'],['降级中','1'],['停用','1']], '搜索接口、模型或能力', ['接口 ID','能力','模型','超时时间','重试次数','并发限制','计费单位','最近探测','健康状态'], [
      ['API-LLM-004','LLM','edu-llm-32k','5s','2','800 QPS','千 Token','10 秒前','<span class="status-pill warning">降级中</span>'],
      ['API-OCR-006','OCR','ocr-edu-v5','3s','1','1,200 QPS','次','8 秒前','<span class="status-pill success">健康</span>']]),
    '路由策略': tabConfig([['生效策略','12'],['灰度策略','2'],['自动熔断','1'],['备用切换','3']], '搜索策略、业务、能力或模型', ['策略 ID','业务场景','能力','主模型','备用模型','流量比例','超时策略','熔断条件','灰度范围','状态'], [
      ['RTE-AI-012','学伴对话','LLM','edu-llm-32k','edu-llm-lite','90% / 10%','5s 后切换备用','1 分钟错误率 >10%','全部设备','<span class="status-pill success">生效中</span>'],
      ['RTE-HW-008','作业批改','OCR','ocr-edu-v5','自研 OCR','80% / 20%','3s 后重试 1 次','连续 5 次失败','Lamp Pro 1 20%','<span class="status-pill info">灰度中</span>']]),
    '计费单价': tabConfig([['有效价格','26'],['即将到期','3'],['阶梯价格','8'],['待审核变更','2']], '搜索模型、计费项或价格版本', ['价格 ID','模型','计费项','计费单位','含税单价','币种','免费额度','阶梯规则','生效区间','价格状态'], [
      ['PRC-LLM-018','edu-llm-32k','输入+输出 Token','千 Token','¥0.052','CNY','每月 100 万','≥1亿 ¥0.046','2026-07-01 至 2026-12-31','<span class="status-pill success">有效</span>'],
      ['PRC-OCR-012','ocr-edu-v5','识别请求','次','¥0.015','CNY','每月 5 万次','≥100万 ¥0.012','2026-03-01 至 2027-02-28','<span class="status-pill success">有效</span>']]),
    '预算管理': tabConfig([['本月预算','¥120,000'],['已使用','¥82,460'],['预测结算','¥116,800'],['风险预算','2']], '搜索预算、功能或能力', ['预算 ID','预算周期','预算对象','对象类型','预算金额','已使用','消耗率','月末预测','告警阈值','预算状态'], [
      ['BDG-202609-01','2026-09','学伴对话','功能','¥60,000','¥42,680','71.1%','¥61,200','80% / 95%','<span class="status-pill warning">有风险</span>'],
      ['BDG-202609-02','2026-09','作业批改','功能','¥30,000','¥18,936','63.1%','¥27,800','80% / 95%','<span class="status-pill success">正常</span>']])
  },
  data: {
    '指标口径': tabConfig([['有效指标','126'],['业务指标','74'],['技术指标','52'],['待评审','6']], '搜索指标编码、名称、数据源或负责人', ['指标编码','指标名称','业务定义','计算公式','去重主体','过滤条件','时间口径','数据源','更新频率','负责人','状态'], [
      ['daily_active_child','日活儿童数','当日产生有效功能行为的儿童数','COUNT(DISTINCT child_id)','儿童 ID','排除测试账号','自然日','行为明细表','T+1 / 小时预估','数据产品','<span class="status-pill success">已生效</span>'],
      ['homework_success_rate','作业批改成功率','成功完成批改的作业占比','成功任务 / 有效提交','作业 ID','排除用户取消','自然日','批改任务表','5 分钟','作业运营','<span class="status-pill info">待评审</span>']]),
    '数据质量': tabConfig([['检查任务','38'],['今日通过','36'],['异常任务','2'],['受影响记录','1,286']], '搜索检查任务、数据源、规则或负责人', ['检查任务','数据源','质量规则','检查时间','检查记录数','异常记录数','异常率','影响指标','负责人','处理状态'], [
      ['DQC-260923-018','台灯行为明细','child_id 非空且可关联','今天 10:00','1,284 万','842','0.0066%','日活儿童、功能 UV','数据平台','<span class="status-pill warning">处理中</span>'],
      ['DQC-260923-016','作业批改任务','任务状态流转完整','今天 09:30','35,236','444','1.26%','批改成功率','作业运营','<span class="status-pill danger">异常</span>']]),
    '导出任务': tabConfig([['今日任务','28'],['已完成','24'],['生成中','2'],['已过期','2']], '搜索任务 ID、导出名称或创建人', ['任务 ID','导出名称','所属模块','查询条件摘要','文件格式','记录数','任务进度','创建人','创建时间','有效期','任务状态'], [
      ['EXP-260923-028','近 7 日功能成本明细','运营指标','09-17~09-23 · 全部功能','XLSX','28,642','100%','运营同学','今天 10:18','7 天','<span class="status-pill success">可下载</span>'],
      ['EXP-260923-027','异常设备清单','设备管理','离线 >24h · v2.3.x','CSV','—','68%','设备运维','今天 10:06','生成后 7 天','<span class="status-pill info">生成中</span>']])
  }
};

const tabDrawerKeys = { metrics: 'metric', alerts: 'alert', content: 'content', users: 'user', devices: 'device', homework: 'homework', abilities: 'ability', data: 'data' };

function metricsFilter(tabName) {
  const abilityFilter = tabName === 'AI 能力'
    ? '<div class="overview-function-group"><span class="filter-inline-label">能力</span><select aria-label="能力筛选"><option>全部能力</option><option>ASR</option><option>TTS</option><option>LLM</option><option>OCR</option></select></div>'
    : '';
  return '<div class="filter-bar overview-filter"><div class="overview-date-group"><div class="quick-range" role="group" aria-label="快捷时间范围"><button class="active" type="button" data-range="today" aria-pressed="true">今日</button><button type="button" data-range="seven" aria-pressed="false">近 7 天</button><button type="button" data-range="month" aria-pressed="false">本月</button></div><div class="date-range"><input type="date" value="2026-09-23" aria-label="开始日期"/><b>至</b><input type="date" value="2026-09-23" aria-label="结束日期"/></div></div>' + abilityFilter + '<button class="button primary compact">查询</button><button class="button ghost compact">重置</button></div>';
}

function dictationOperationsView() {
  const rows = [
    {
      key: 'dictation-record-1',
      cells: [
        'LP1-26A8-003982',
        '138****6214',
        '2026.9.26 15:08:34',
        '4',
        '<button class="text-button" type="button" data-dictation-detail="dictation-record-1">查看明细</button>'
      ]
    },
    {
      key: 'dictation-record-2',
      cells: [
        'LP1-26A8-003804',
        '186****0952',
        '2026.9.26 15:08:34',
        '15',
        '<button class="text-button" type="button" data-dictation-detail="dictation-record-2">查看明细</button>'
      ]
    }
  ];

  return metricsFilter() +
    summary([
      ['总听写量', '3,862'],
      ['已完成', '3,552'],
      ['未完成', '310']
    ]) +
    toolbar('搜索手机号', '') +
    tablePanel(
      ['设备 ID', '手机号', '最后使用时间', '听写次数', '操作'],
      rows,
      false
    );
}

function alertMetricToolbar() {
  return '<div class="toolbar alert-metric-toolbar"><div class="search-input"><span data-icon="search"></span><input aria-label="搜索监控指标" placeholder="请输入指标名称或监控对象" /></div><div class="overview-function-group alert-status-filter"><span class="filter-inline-label">状态</span><select id="alertStatusFilter" aria-label="状态筛选"><option value="all">全部状态</option><option value="normal">正常</option><option value="abnormal">异常</option></select></div><button class="button secondary compact"><span data-icon="filter"></span>筛选</button></div>';
}

function fingerDictionaryOperationsView() {
  const rows = [
    {
      key: 'finger-word-1',
      cells: [
        'LP1-26A8-003982',
        '138****6214',
        '2026-09-23 10:32:18',
        '6',
        '<button class="text-button" type="button" data-finger-word-detail="finger-word-1">查看明细</button>'
      ]
    },
    {
      key: 'finger-word-2',
      cells: [
        'LP1-26A8-003804',
        '186****0952',
        '2026-09-23 10:31:46',
        '1',
        '<button class="text-button" type="button" data-finger-word-detail="finger-word-2">查看明细</button>'
      ]
    }
  ];

  return metricsFilter() +
    summary([
      ['已识别量', '128,642'],
      ['中文字词量', '82,306'],
      ['英文字量', '46,336'],
      ['未识别量', '328']
    ]) +
    toolbar('搜索手机号、字词', '') +
    tablePanel(
      ['设备 ID', '手机号', '最后使用时间', '总查词量', '操作'],
      rows,
      false
    );
}

function renderTabView(page, tabName) {
  const moduleName = page.id.replace('page-', '');
  const view = page.querySelector('.tab-view');
  if (!view) return;
  if (moduleName === 'content' && tabName === '指尖查词') {
    view.innerHTML = fingerDictionaryOperationsView();
  } else if (moduleName === 'content' && tabName === '听写练习') {
    view.innerHTML = dictationOperationsView();
  } else if (moduleName === 'content' && tabName === '作业批改') {
    const homeworkHeader = pageHead('作业管理', '', '');
    view.innerHTML = pageRenderers.homework().slice(homeworkHeader.length);
  } else if (tabName === view.dataset.defaultTab) {
    view.innerHTML = page.defaultTabHtml;
  } else {
    const config = tabViews[moduleName] && tabViews[moduleName][tabName];
    if (!config) return;
    const key = moduleName === 'users' && tabName === '儿童端' ? 'child' : tabDrawerKeys[moduleName];
    const rows = config.rows.map(function (cells) { return { key: key, cells: cells }; });
    view.innerHTML = (moduleName === 'metrics' ? metricsFilter(tabName) : '') + summary(config.summary) + (moduleName === 'metrics' ? '' : toolbar(config.placeholder, '')) + tablePanel(config.headers, rows, moduleName !== 'users' && moduleName !== 'devices');
  }
  view.classList.remove('tab-view-enter');
  void view.offsetWidth;
  view.classList.add('tab-view-enter');
  hydrateIcons(view);
  if (moduleName === 'metrics' && tabName === view.dataset.defaultTab) bindMetricsTrendChart(page);
}

function filterAlertMetricRows(page, status) {
  page.querySelectorAll('.table-panel tbody tr').forEach(function (row) {
    const text = row.textContent;
    const isAbnormal = text.includes('异常');
    row.hidden = status === 'abnormal' ? !isAbnormal : status === 'normal' ? isAbnormal : false;
  });
}

function switchAlertTab(page, tabName) {
  const target = Array.from(page.querySelectorAll('.subnav button')).find(function (button) { return button.textContent.trim() === tabName; });
  if (!target) return;
  target.parentElement.querySelectorAll('button').forEach(function (item) {
    const active = item === target;
    item.classList.toggle('active', active);
    item.setAttribute('aria-selected', String(active));
  });
  renderTabView(page, tabName);
}

let selectedAIDialogueKey = '';
let selectedFingerWordKey = '';
let selectedDictationKey = '';
let selectedHomeworkKey = '';
const aiDialogueDetailRows = {
  'ai-dialogue-1': [
    ['你好，请介绍一下太阳系。','太阳系由太阳和围绕它运行的八大行星及其他天体组成。','2026-09-23 10:32:18','2m 18s','已回复'],
    ['太阳系有几颗行星？','太阳系有八颗行星。','2026-09-23 10:30:02','48s','已回复']
  ],
  'ai-dialogue-2': [['“春暖花开”是什么意思？','“春暖花开”形容春天气候温暖，百花盛开的景象。','2026-09-23 10:31:46','1m 42s','已回复']],
  'ai-dialogue-3': [['这道题应该怎么解？','—','2026-09-23 10:28:05','—','未回复']],
  'ai-dialogue-4': [['请帮我读一下这段英文。','—','2026-09-23 10:24:36','—','未回复']]
};
const aiDialogueChatTurns = {
  'ai-dialogue-1-0': [
    ['你好，请介绍一下太阳系。','太阳系由太阳和围绕它运行的八大行星及其他天体组成。'],
    ['太阳系有几颗行星？','太阳系有八颗行星，按距离太阳由近到远依次是水星、金星、地球、火星、木星、土星、天王星和海王星。'],
    ['哪颗行星最大？','木星是太阳系中体积最大的行星。'],
    ['土星为什么有光环？','土星周围的光环主要由冰块、岩石和尘埃组成，在阳光照射下看起来明亮。']
  ],
  'ai-dialogue-1-1': [
    ['太阳系有几颗行星？','太阳系有八颗行星。'],
    ['地球排在第几？','地球是距离太阳第三近的行星。'],
    ['离太阳最远的是哪颗？','八大行星中，海王星距离太阳最远。']
  ]
};
const fingerWordDetailRows = {
  'finger-word-1': [
    ['中文','词组','春暖花开','2026-09-23 10:32:18','已识别'],
    ['英文','单词','hello','2026-09-23 10:31:42','已识别'],
    ['中文','词语','万物复苏','2026-09-23 10:30:58','已识别'],
    ['中文','词语','鸟语花香','2026-09-23 10:29:36','已识别'],
    ['中文','词组','春风拂面','2026-09-23 10:28:45','已识别']
  ],
  'finger-word-2': [['英文','单词','sunshine','2026-09-23 10:31:46','未识别']]
};
const dictationDetailRows = {
  'dictation-record-1': [
    ['语文','一年级','第一单元','春天','2026-09-26 15:08:34','已完成'],
    ['语文','一年级','第一单元','夏天','2026-09-26 15:08:30','已完成'],
    ['语文','一年级','第一单元','秋天','2026-09-26 15:08:26','已完成'],
    ['语文','一年级','第一单元','冬天','2026-09-26 15:08:22','已完成'],
    ['语文','一年级','第一单元','花朵','2026-09-26 15:08:12','已完成'],
    ['语文','一年级','第一单元','太阳','2026-09-26 15:07:48','已完成'],
    ['语文','一年级','第一单元','月亮','2026-09-26 15:07:23','已完成']
  ],
  'dictation-record-2': [
    ['英语','四年级','第三单元','apple','2026-09-26 15:08:34','未完成'],
    ['英语','四年级','第三单元','school','2026-09-26 15:08:02','已完成'],
    ['英语','四年级','第三单元','family','2026-09-26 15:07:36','已完成']
  ]
};

const pageRenderers = {
  billing: function () {
    const featureCards = [
      ['学伴对话', '18,462', '¥ 1,486', '96.5%', 'blue'],
      ['听写练习', '10,186', '¥ 336', '97.0%', 'violet'],
      ['指尖查词', '13,208', '¥ 528', '98.7%', 'teal'],
      ['作业批改', '6,536', '¥ 936', '95.6%', 'amber']
    ].map(function (item) {
      const displayName = { '学伴对话': 'ASR', '听写练习': 'TTS', '指尖查词': 'LLM' }[item[0]] || item[0];
      return '<article class="billing-function-card" data-billing-feature="' + item[0] + '"><div><i class="billing-dot ' + item[4] + '"></i><strong>' + displayName + '</strong></div><dl><div><dt>调用量</dt><dd data-billing-calls>' + item[1] + '</dd></div><div><dt>成本</dt><dd data-billing-cost>' + item[2] + '</dd></div><div><dt>成功率</dt><dd data-billing-success-rate>' + item[3] + '</dd></div></dl></article>';
    }).join('');
    const rows = [
      ['LP1-26A8-003982', '138****6214', '2026-09-23 10:32:18', '学伴对话', 'asr-pro-v3', '次数', '1 次', '¥ 0.006', '0.48s', '<span class="status-pill success">成功</span>'],
      ['LP1-26A8-003804', '186****0952', '2026-09-23 10:32:15', '听写练习', 'tts-child-v2', '文本长度', '420 字符', '¥ 0.003', '0.62s', '<span class="status-pill success">成功</span>'],
      ['LMN-25C2-008421', '159****7831', '2026-09-23 10:31:52', '学伴对话', 'edu-llm-32k', 'Token', '1,246 Token', '¥ 0.079', '2.8s', '<span class="status-pill success">成功</span>'],
      ['LP1-26A8-003776', '133****4590', '2026-09-23 10:31:46', '指尖查词', 'ocr-edu-v5', '次数', '1 次', '¥ 0.004', '0.89s', '<span class="status-pill success">成功</span>'],
      ['LP1-26A8-004126', '177****3846', '2026-09-23 10:31:42', '指尖查词', 'hand-keypoint-v2', '次数', '1 次', '¥ 0.001', '0.31s', '<span class="status-pill success">成功</span>'],
      ['LP1-26A8-003411', '133****4590', '2026-09-23 10:31:34', '作业批改', 'edu-llm-8k', 'Token', '2,860 Token', '¥ 0.196', '38.4s', '<span class="status-pill danger">失败</span>']
    ];
    rows.forEach(function (row) { const modelCode = row[4]; row.splice(4, 0, billingModelType(modelCode)); row[5] = billingModelDisplayName(modelCode); row.splice(8, 1); });
  return pageHead('用量/成本') +
    '<div class="filter-bar overview-filter billing-filter" aria-label="计费计量筛选条件"><div class="overview-date-group"><div class="quick-range" role="group" aria-label="快捷时间范围"><button class="active" type="button" data-range="today" aria-pressed="true">今日</button><button type="button" data-range="seven" aria-pressed="false">近 7 天</button><button type="button" data-range="month" aria-pressed="false">本月</button></div><div class="date-range"><input type="date" value="2026-09-23" aria-label="开始日期"/><b>至</b><input type="date" value="2026-09-23" aria-label="结束日期"/></div></div><button class="button primary compact" type="button" data-billing-filter-action="query">查询</button><button class="button ghost compact" type="button" data-billing-filter-action="reset">重置</button></div>' +
    '<section class="feature-uv-grid billing-summary" aria-label="计费计量汇总"><article class="metric-card"><div class="metric-top"><span class="metric-icon blue" data-icon="cpu"></span><span class="trend up">+2.3%</span></div><p>总模型量</p><div class="metric-value-row"><div class="metric-value" id="billingModelCount">18</div><button class="model-view-button" type="button" id="viewBillingModelsButton">查看</button></div></article><article class="metric-card"><div class="metric-top"><span class="metric-icon teal" data-icon="spark"></span><span class="trend up">+9.8%</span></div><p>总调用量</p><div class="metric-value" id="billingTotalCalls">314,862</div></article><article class="metric-card"><div class="metric-top"><span class="metric-icon amber" data-icon="wallet"></span><span class="trend up">+3.2%</span></div><p>总成本</p><div class="metric-value" id="billingForecastCost">¥ 3,286</div></article><article class="metric-card"><div class="metric-top"><span class="metric-icon violet" data-icon="wallet"></span></div><p>单个设备成本</p><div class="metric-value">¥ 0.18</div></article></section>' +
    '<section class="billing-call-section"><div class="overview-section-head"><h2>调用数据</h2><span>近 7 日趋势</span></div><div class="billing-function-grid">' + featureCards + '</div><div class="billing-chart-grid"><section class="panel"><div class="panel-head"><div><h2>调用趋势</h2><p>近 7 日</p></div></div><div class="chart-legend feature-chart-legend"><span><i class="legend-line blue-line"></i>ASR</span><span><i class="legend-line teal-line"></i>TTS</span><span><i class="legend-line violet-line"></i>LLM</span><span><i class="legend-line amber-line"></i>作业批改</span></div><div class="line-chart feature-line-chart" id="billingTrendChart" role="img" aria-label="近七日调用趋势，悬浮可查看每日调用量"><svg viewBox="0 0 760 240" preserveAspectRatio="none"><g class="grid-lines"><line x1="48" y1="25" x2="740" y2="25"/><line x1="48" y1="75" x2="740" y2="75"/><line x1="48" y1="125" x2="740" y2="125"/><line x1="48" y1="175" x2="740" y2="175"/><line x1="48" y1="220" x2="740" y2="220"/></g><line class="y-axis" x1="48" y1="25" x2="48" y2="220"/><g class="y-labels"><text x="40" y="29">20k</text><text x="40" y="79">15k</text><text x="40" y="129">10k</text><text x="40" y="179">5k</text><text x="40" y="224">0</text></g><path class="series-primary" d="M48 172 L160 160 L272 143 L384 126 L496 98 L608 70 L740 62"/><path class="series-secondary" d="M48 187 L160 178 L272 161 L384 151 L496 128 L608 114 L740 106"/><path class="series-tertiary" d="M48 198 L160 190 L272 179 L384 164 L496 148 L608 132 L740 125"/><path class="series-quaternary" d="M48 209 L160 205 L272 195 L384 186 L496 176 L608 164 L740 154"/><line class="trend-hover-guide" id="billingTrendHoverGuide" x1="48" y1="25" x2="48" y2="220" hidden/><rect class="trend-hit-area" x="48" y="25" width="692" height="195" fill="transparent" tabindex="0" aria-label="调用趋势数据，移动鼠标可查看每日明细"/><g class="x-labels"><text x="48" y="238">09/17</text><text x="160" y="238">09/18</text><text x="272" y="238">09/19</text><text x="384" y="238">09/20</text><text x="496" y="238">09/21</text><text x="608" y="238">09/22</text><text x="712" y="238">09/23</text></g></svg><div class="trend-tooltip" id="billingTrendTooltip" role="status" aria-live="polite" hidden></div></div></section><section class="panel billing-distribution"><div class="panel-head"><div><h2>成本占比</h2><p>近 7 日成本占比</p></div></div><div class="donut-wrap"><div class="donut"><div><strong>¥ 3,286</strong><span>成本</span></div></div><ul class="donut-legend"><li><i class="dot blue"></i><span>ASR</span><b>38%</b></li><li><i class="dot teal"></i><span>TTS</span><b>27%</b></li><li><i class="dot violet"></i><span>LLM</span><b>21%</b></li><li><i class="dot amber"></i><span>作业批改</span><b>14%</b></li></ul></div></section></div></section>' +
      '<section class="panel table-panel billing-table" style="padding-top:0"><div class="toolbar billing-table-toolbar"><div class="search-input"><span data-icon="search"></span><input id="billingTablePhoneFilter" type="tel" inputmode="numeric" autocomplete="tel" aria-label="手机号筛选" placeholder="输入手机号" /></div><select id="billingTableFeatureFilter" aria-label="业务功能筛选"><option>全部功能</option><option>学伴对话</option><option>指尖查词</option><option>听写练习</option><option>作业批改</option></select><select id="billingTableModelTypeFilter" aria-label="模型类型筛选"><option>全部模型</option><option>LLM</option><option>ASR</option><option>TTS</option><option>OCR</option><option>视觉识别</option><option>规则模型</option></select><button class="button secondary compact" type="button" data-billing-table-filter-action="apply"><span data-icon="filter"></span>筛选</button></div><div class="table-wrap"><table><thead><tr><th>设备ID</th><th>手机号</th><th>调用时间</th><th>业务功能</th><th>模型类型</th><th>模型名称</th><th>计费单位</th><th>用量</th><th>时长</th><th>状态</th></tr></thead><tbody id="billingUsageTableBody">' + rows.map(function (row) { return '<tr>' + row.map(function (cell, index) { return '<td>' + (index === 5 ? '<strong>' + cell + '</strong>' : cell) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>' + pagination() + '</section>';
  },
  'billing-models': function () {
    return pageHead('模型管理', '', '') +
      '<section class="panel model-management-panel"><div class="model-category-tabs" role="tablist" aria-label="模型分类"><button class="active" type="button" role="tab" aria-selected="true" data-model-category="语言活动检测">语言活动检测</button><button type="button" role="tab" aria-selected="false" data-model-category="语音识别">语音识别</button><button type="button" role="tab" aria-selected="false" data-model-category="大语言模型">大语言模型</button><button type="button" role="tab" aria-selected="false" data-model-category="意图识别">意图识别</button><button type="button" role="tab" aria-selected="false" data-model-category="语音合成">语音合成</button><button type="button" role="tab" aria-selected="false" data-model-category="记忆">记忆</button><button type="button" role="tab" aria-selected="false" data-model-category="性格">性格</button></div><div class="model-list-toolbar"><span class="model-list-total" id="billingModelTotal">共 2 个模型</span></div><div class="model-list-table"><div class="table-wrap"><table><thead><tr><th>模型ID</th><th>模型名称</th><th>提供商</th><th>是否启用</th><th>是否默认</th><th>操作</th></tr></thead><tbody id="billingModelTableBody"></tbody></table></div><div class="pagination billing-model-pagination" id="billingModelPagination" aria-label="模型列表分页"></div></div></section>';
  },
  'billing-new': function () {
    return pageHead('计费计量（新）', '按模型、功能和用户查看调用用量与成本归因', '<button class="button secondary" type="button"><span data-icon="download"></span>导出明细</button>') +
      '<div class="filter-bar overview-filter billing-new-filter" aria-label="计费计量筛选条件"><div class="overview-date-group"><div class="quick-range" role="group" aria-label="快捷时间范围"><button class="active" type="button" data-range="today" aria-pressed="true">今日</button><button type="button" data-range="seven" aria-pressed="false">近 7 天</button><button type="button" data-range="month" aria-pressed="false">本月</button></div><div class="date-range"><input type="date" value="2026-09-17" aria-label="开始日期"><b>至</b><input type="date" value="2026-09-23" aria-label="结束日期"></div></div><div class="overview-function-group"><span class="filter-inline-label">统计维度</span><select aria-label="统计维度"><option>全部维度</option><option>按模型</option><option>按功能</option><option>按用户</option></select></div><div class="overview-function-group"><span class="filter-inline-label">模型</span><select aria-label="模型筛选"><option>全部模型</option><option>edu-llm-32k</option><option>ocr-edu-v5</option><option>asr-pro-v3</option><option>tts-child-v2</option></select></div><button class="button primary compact" type="button">查询</button><button class="button ghost compact" type="button">重置</button></div>' +
      '<section class="feature-uv-grid billing-new-summary" aria-label="计费计量汇总"><article class="metric-card"><div class="metric-top"><span class="metric-icon amber" data-icon="wallet"></span><span class="trend up">+3.2%</span></div><p>总成本</p><div class="metric-value">¥ 3,286.42</div><small>较上期 ¥ 102.18</small></article><article class="metric-card"><div class="metric-top"><span class="metric-icon blue" data-icon="cpu"></span><span class="trend up">+9.8%</span></div><p>模型调用量</p><div class="metric-value">314,862</div><small>成功 307,935 次</small></article><article class="metric-card"><div class="metric-top"><span class="metric-icon violet" data-icon="spark"></span><span class="trend up">+12.6%</span></div><p>LLM Token 用量</p><div class="metric-value">28.46M</div><small>输入 19.82M · 输出 8.64M</small></article><article class="metric-card"><div class="metric-top"><span class="metric-icon teal" data-icon="users"></span><span class="trend up">+4.1%</span></div><p>活跃归因用户</p><div class="metric-value">18,642</div><small>失败调用 6,927 次</small></article></section>' +
      '<section class="panel billing-new-trend"><div class="panel-head"><div><h2>成本与调用趋势</h2><p>按日统计 · 成本含失败与重试调用</p></div><div class="chart-legend"><span><i class="legend-line amber-line"></i>成本</span><span><i class="legend-line blue-line"></i>调用量</span></div></div><div class="line-chart"><svg viewBox="0 0 760 220" preserveAspectRatio="none" role="img" aria-label="近七日成本与调用趋势"><g class="grid-lines"><line x1="48" y1="20" x2="740" y2="20"/><line x1="48" y1="65" x2="740" y2="65"/><line x1="48" y1="110" x2="740" y2="110"/><line x1="48" y1="155" x2="740" y2="155"/><line x1="48" y1="195" x2="740" y2="195"/></g><path class="series-quaternary" d="M48 165 L160 150 L272 157 L384 124 L496 111 L608 76 L740 48"/><path class="series-primary" d="M48 176 L160 166 L272 148 L384 138 L496 109 L608 82 L740 61"/><g class="x-labels"><text x="48" y="216">09/17</text><text x="160" y="216">09/18</text><text x="272" y="216">09/19</text><text x="384" y="216">09/20</text><text x="496" y="216">09/21</text><text x="608" y="216">09/22</text><text x="712" y="216">09/23</text></g></svg></div></section>' +
      '<div class="billing-new-attribution-grid"><section class="panel"><div class="panel-head"><div><h2>模型成本排行</h2><p>按成本排序 · 含计价版本</p></div></div><div class="table-wrap"><table><thead><tr><th>模型名称 / 标识</th><th>调用量</th><th>计量用量</th><th>计价版本</th><th>成本</th><th>占比</th></tr></thead><tbody><tr><td><strong>教育对话主模型</strong><small>edu-llm-32k · LLM</small></td><td>128,436</td><td>输入 18.2M / 输出 7.1M Token</td><td>2026-09-20</td><td><strong>¥ 1,486.20</strong></td><td>45.2%</td></tr><tr><td><strong>作业批改推理模型</strong><small>edu-llm-8k · LLM</small></td><td>35,236</td><td>输入 2.4M / 输出 0.8M Token</td><td>2026-09-20</td><td><strong>¥ 936.40</strong></td><td>28.5%</td></tr><tr><td><strong>查词识别模型</strong><small>ocr-edu-v5 · OCR</small></td><td>121,138</td><td>121,138 张</td><td>2026-08-12</td><td><strong>¥ 528.10</strong></td><td>16.1%</td></tr><tr><td><strong>对话语音识别</strong><small>asr-pro-v3 · ASR</small></td><td>30,052</td><td>8,416 分钟</td><td>2026-07-01</td><td><strong>¥ 335.72</strong></td><td>10.2%</td></tr></tbody></table></div></section>' +
      '<section class="panel"><div class="panel-head"><div><h2>功能成本分布</h2><p>成本、成功率与平均耗时</p></div></div><div class="table-wrap"><table><thead><tr><th>业务功能</th><th>调用量</th><th>成本</th><th>成功率</th></tr></thead><tbody><tr><td><strong>学伴对话</strong></td><td>128,436</td><td>¥ 1,486.20</td><td>96.5%</td></tr><tr><td><strong>作业批改</strong></td><td>35,236</td><td>¥ 936.40</td><td>95.6%</td></tr><tr><td><strong>指尖查词</strong></td><td>121,138</td><td>¥ 528.10</td><td>98.7%</td></tr><tr><td><strong>听写练习</strong></td><td>30,052</td><td>¥ 335.72</td><td>97.0%</td></tr></tbody></table></div></section>' +
      '<section class="panel billing-new-user-panel"><div class="panel-head"><div><h2>用户成本归因</h2><p>按家庭账户归集 · 手机号脱敏展示</p></div><button class="text-button" type="button">查看全部用户</button></div><div class="table-wrap"><table><thead><tr><th>用户 / 家庭账户</th><th>主要功能</th><th>调用量</th><th>成本</th><th>成本占比</th></tr></thead><tbody><tr><td><strong>USR-208831</strong><small>138****6214 · 家长账户</small></td><td>学伴对话</td><td>1,284</td><td>¥ 42.68</td><td>1.30%</td></tr><tr><td><strong>USR-208764</strong><small>186****0952 · 家长账户</small></td><td>作业批改</td><td>962</td><td>¥ 38.42</td><td>1.17%</td></tr><tr><td><strong>USR-208829</strong><small>159****7831 · 家长账户</small></td><td>听写练习</td><td>846</td><td>¥ 26.15</td><td>0.80%</td></tr></tbody></table></div></section></div>' +
      '<section class="panel table-panel billing-new-detail-panel" style="padding-top:0"><div class="panel-head billing-new-detail-head"><div><h2>调用计量明细</h2><p>单次调用记录 · 按实际计费单位展示用量</p></div><div class="search-input"><span data-icon="search"></span><input aria-label="搜索用户或请求 ID" placeholder="搜索用户、请求 ID"></div></div><div class="table-wrap"><table><thead><tr><th>调用时间</th><th>请求 ID</th><th>用户</th><th>业务功能</th><th>模型</th><th>计费单位</th><th>用量</th><th>计价版本</th><th>成本</th><th>时长</th><th>状态</th></tr></thead><tbody><tr><td>2026-09-23 10:31:52</td><td>REQ-0923-18462</td><td>138****6214</td><td>学伴对话</td><td>edu-llm-32k</td><td>Token</td><td>输入 328 / 输出 918</td><td>2026-09-20</td><td>¥ 0.079</td><td>2.8s</td><td><span class="status-pill success">成功</span></td></tr><tr><td>2026-09-23 10:31:46</td><td>REQ-0923-18461</td><td>186****0952</td><td>指尖查词</td><td>ocr-edu-v5</td><td>图片</td><td>1 张</td><td>2026-08-12</td><td>¥ 0.004</td><td>0.89s</td><td><span class="status-pill success">成功</span></td></tr><tr><td>2026-09-23 10:31:34</td><td>REQ-0923-18460</td><td>133****4590</td><td>作业批改</td><td>edu-llm-8k</td><td>Token</td><td>输入 2,140 / 输出 720</td><td>2026-09-20</td><td>¥ 0.196</td><td>38.4s</td><td><span class="status-pill danger">失败</span></td></tr></tbody></table></div>' + pagination() + '</section>';
  },
  metrics: function () {
    return pageHead('运营指标', '', '') +
      subnav(['功能使用', '用户数据', '设备数据', 'AI 能力', '作业额度'], '功能使用') +
      '<div class="filter-bar overview-filter"><div class="overview-date-group"><div class="quick-range" role="group" aria-label="快捷时间范围"><button class="active" type="button" data-range="today" aria-pressed="true">今日</button><button type="button" data-range="seven" aria-pressed="false">近 7 天</button><button type="button" data-range="month" aria-pressed="false">本月</button></div><div class="date-range"><input type="date" value="2026-09-23" aria-label="开始日期"/><b>至</b><input type="date" value="2026-09-23" aria-label="结束日期"/></div></div><div class="overview-function-group"><span class="filter-inline-label">功能</span><select><option>全部功能</option><option>学伴对话</option><option>指尖查词</option><option>听写练习</option><option>作业批改</option></select></div><button class="button primary compact">查询</button><button class="button ghost compact">重置</button></div>' +
      '<section class="feature-uv-grid" aria-label="核心功能 UV"><article class="metric-card"><div class="metric-top"><span class="metric-icon blue" data-icon="spark"></span><span class="trend up">+8.4%</span></div><p>学伴对话 UV</p><div class="metric-value">12,680</div></article><article class="metric-card"><div class="metric-top"><span class="metric-icon teal" data-icon="search"></span><span class="trend up">+6.9%</span></div><p>指尖查词 UV</p><div class="metric-value">9,416</div></article><article class="metric-card"><div class="metric-top"><span class="metric-icon violet" data-icon="book"></span><span class="trend up">+5.2%</span></div><p>听写练习 UV</p><div class="metric-value">7,805</div></article><article class="metric-card"><div class="metric-top"><span class="metric-icon amber" data-icon="clipboard"></span><span class="trend up">+3.7%</span></div><p>作业批改 UV</p><div class="metric-value">5,218</div></article></section>' +
      summary([['功能调用总数','314,862'],['业务成功率','97.8%'],['单次成功成本','¥ 0.48']]) +
      '<div class="dashboard-grid"><section class="panel span-2"><div class="panel-head"><div><h2>功能调用趋势</h2><p>近 7 日 · 按功能统计</p></div><div class="segmented"><button class="active">调用量</button><button>成功率</button><button>成本</button></div></div><div class="chart-legend feature-chart-legend"><span><i class="legend-line blue-line"></i>学伴对话</span><span><i class="legend-line teal-line"></i>指尖查词</span><span><i class="legend-line violet-line"></i>听写练习</span><span><i class="legend-line amber-line"></i>作业批改</span></div><div class="line-chart feature-line-chart" id="metricsTrendChart" role="img" aria-label="近七日四项功能调用趋势，悬浮可查看每日调用量"><svg viewBox="0 0 760 240" preserveAspectRatio="none"><g class="grid-lines"><line x1="48" y1="25" x2="740" y2="25"/><line x1="48" y1="75" x2="740" y2="75"/><line x1="48" y1="125" x2="740" y2="125"/><line x1="48" y1="175" x2="740" y2="175"/><line x1="48" y1="220" x2="740" y2="220"/></g><line class="y-axis" x1="48" y1="25" x2="48" y2="220"/><g class="y-labels"><text x="40" y="29">20k</text><text x="40" y="79">15k</text><text x="40" y="129">10k</text><text x="40" y="179">5k</text><text x="40" y="224">0</text></g><path class="series-primary" d="M48 172 L160 160 L272 143 L384 126 L496 98 L608 70 L740 62"/><path class="series-secondary" d="M48 187 L160 178 L272 161 L384 151 L496 128 L608 114 L740 106"/><path class="series-tertiary" d="M48 198 L160 190 L272 179 L384 164 L496 148 L608 132 L740 125"/><path class="series-quaternary" d="M48 209 L160 205 L272 195 L384 186 L496 176 L608 164 L740 154"/><line class="trend-hover-guide" id="metricsTrendHoverGuide" x1="48" y1="25" x2="48" y2="220" hidden/><rect class="trend-hit-area" x="48" y="25" width="692" height="195" fill="transparent" tabindex="0" aria-label="调用趋势数据，移动鼠标可查看每日明细"/><g class="x-labels"><text x="48" y="238">09/17</text><text x="160" y="238">09/18</text><text x="272" y="238">09/19</text><text x="384" y="238">09/20</text><text x="496" y="238">09/21</text><text x="608" y="238">09/22</text><text x="712" y="238">09/23</text></g></svg><div class="trend-tooltip" id="metricsTrendTooltip" role="status" aria-live="polite" hidden></div></div></section><section class="panel"><div class="panel-head"><div><h2>功能成本排行</h2><p>成本 · 含重试</p></div></div><div class="cost-list" style="margin-top:28px"><div><span>学伴对话</span><b>¥ 1,486</b><i style="width:88%"></i></div><div><span>作业批改</span><b>¥ 936</b><i style="width:61%"></i></div><div><span>指尖查词</span><b>¥ 528</b><i style="width:39%"></i></div><div><span>听写练习</span><b>¥ 336</b><i style="width:26%"></i></div></div></section></div>' +
      tablePanel(['日期','功能','发起次数','完成次数','状态','P95 耗时','单次成功成本'], [
        {key:'metric',cells:['2026/09/23','<strong>学伴对话</strong>','18,462','17,816','<span class="status-pill success">成功</span>','3.2s','¥ 0.079']},
        {key:'metric',cells:['2026/09/23','<strong>指尖查词</strong>','13,208','13,036','<span class="status-pill success">成功</span>','1.1s','¥ 0.038']},
        {key:'metric',cells:['2026/09/23','<strong>听写练习</strong>','10,186','9,880','<span class="status-pill success">成功</span>','18m 26s','¥ 0.040']},
        {key:'metric',cells:['2026/09/23','<strong>作业批改</strong>','6,536','6,248','<span class="status-pill success">成功</span>','38.4s','¥ 0.194']},
        {key:'metric',cells:['2026/09/22','<strong>学伴对话</strong>','16,008','15,431','<span class="status-pill success">成功</span>','3.0s','¥ 0.078']},
        {key:'metric',cells:['2026/09/22','<strong>指尖查词</strong>','11,042','10,932','<span class="status-pill success">成功</span>','1.0s','¥ 0.038']},
        {key:'metric',cells:['2026/09/22','<strong>听写练习</strong>','9,428','9,156','<span class="status-pill danger">失败</span>','20m 12s','¥ 0.041']},
        {key:'metric',cells:['2026/09/22','<strong>作业批改</strong>','5,904','5,685','<span class="status-pill success">成功</span>','39.1s','¥ 0.196']}
      ]);
  },
  alerts: function () {
    return pageHead('监控告警', '', '<button class="button primary" id="newAlertButton"><span data-icon="plus"></span>新建告警配置</button>') +
      subnav(['监控指标','配置列表','告警事件'], '监控指标') +
      '<div class="summary-strip alert-summary"><div class="summary-item"><span>监控指标</span><strong>126</strong></div><button class="summary-item clickable-summary" type="button" data-alert-action="abnormal"><span>异常指标</span><strong>3</strong><small>点击查看</small></button><div class="summary-item"><span>启用告警配置</span><strong>38</strong></div><button class="summary-item clickable-summary" type="button" data-alert-action="events"><span>活动告警</span><strong>3</strong><small>查看告警事件</small></button></div>' +
      alertMetricToolbar() +
      tablePanel(['指标名称','监控对象','当前值','告警阈值','数据时间','状态'], [
        {key:'alert',cells:['<strong>ASR</strong>','学伴对话','99.92%','低于 98.00%','10:32:18','<span class="status-pill success">正常</span>']},
        {key:'alert',cells:['<strong>TTS</strong>','学伴对话','99.87%','低于 98.00%','10:32:15','<span class="status-pill success">正常</span>']},
        {key:'alert',cells:['<strong>LLM</strong>','学伴对话','<b class="negative">94.3%</b>','低于 97.00%','10:32:18','<span class="status-pill danger">异常</span>']},
        {key:'alert',cells:['<strong>OCR</strong>','指尖查词','<b class="negative">98.7%</b>','低于 99.00%','10:32:06','<span class="status-pill danger">异常</span>']},
        {key:'alert',cells:['<strong>手部关键点检测</strong>','指尖查词','99.54%','低于 99.00%','10:31:55','<span class="status-pill success">正常</span>']},
        {key:'alert',cells:['<strong>作业批改 P95 耗时</strong>','作业批改','<b class="negative">68.4s</b>','高于 60s','10:32:06','<span class="status-pill danger">异常</span>']}
      ]);
  },
  content: function () {
    return pageHead('功能管理', '', '') +
      subnav(['学伴对话','指尖查词','听写练习','作业批改'], '学伴对话') +
      metricsFilter() +
      summary([['对话轮次','12,684'],['已回复','11,932'],['未回复','752']]) +
      toolbar('搜索手机号、设备 ID') +
      tablePanel(['设备 ID','手机号','最后使用时间','对话轮次','操作'], [
        {key:'ai-dialogue-1',cells:['LP1-26A8-003982','138****6214','2026-09-23 10:32:18','2','<button class="text-button" type="button" data-ai-dialogue-detail="ai-dialogue-1">查看明细</button>']},
        {key:'ai-dialogue-2',cells:['LP1-26A8-003804','186****0952','2026-09-23 10:31:46','1','<button class="text-button" type="button" data-ai-dialogue-detail="ai-dialogue-2">查看明细</button>']},
        {key:'ai-dialogue-3',cells:['LMN-25C2-008421','159****7831','2026-09-23 10:28:05','1','<button class="text-button" type="button" data-ai-dialogue-detail="ai-dialogue-3">查看明细</button>']},
        {key:'ai-dialogue-4',cells:['LP1-26A8-003776','133****4590','2026-09-23 10:24:36','1','<button class="text-button" type="button" data-ai-dialogue-detail="ai-dialogue-4">查看明细</button>']}
      ], false);
  },
  users: function () {
    return pageHead('用户管理', '', '') +
      '<div class="filter-bar overview-filter user-filter" aria-label="用户管理筛选条件"><div class="overview-date-group"><div class="quick-range" role="group" aria-label="快捷时间范围"><button class="active" type="button" data-range="today" aria-pressed="true">今日</button><button type="button" data-range="seven" aria-pressed="false">近 7 天</button><button type="button" data-range="month" aria-pressed="false">本月</button></div><div class="date-range"><input type="date" value="2026-09-23" aria-label="开始日期"/><b>至</b><input type="date" value="2026-09-23" aria-label="结束日期"/></div></div><button class="button primary compact" type="button" data-user-filter-action="query">查询</button><button class="button ghost compact" type="button" data-user-filter-action="reset">重置</button></div>' +
      summary([['总用户量','36,842'],['活跃用户数','18,642'],['新增用户数','268'],['总访问量','126,408']]) +
      toolbar('搜索手机号、设备 ID', '') +
      tablePanel(['手机号','设备 ID','绑定时间','最后使用时间','状态'], [
        {key:'user',cells:['138****6214','LP1-26A8-003982','2026-09-23 08:46:12','2026-09-23 10:28:16','<span class="status-pill success">正常</span>']},
        {key:'user',cells:['186****0952','LP1-26A8-003804','2026-09-22 19:32:45','2026-09-23 10:18:42','<span class="status-pill success">正常</span>']},
        {key:'user',cells:['159****7831','LMN-25C2-008421','2026-09-18 14:16:28','2026-09-22 20:36:09','<span class="status-pill warning">已解绑</span>']},
        {key:'user',cells:['133****4590','LP1-26A8-003776','2026-09-16 09:32:17','2026-09-20 18:36:24','<span class="status-pill success">正常</span>']}
      ], false);
  },
  devices: function () {
    return pageHead('设备管理', '', '') +
      '<div class="filter-bar overview-filter device-filter" aria-label="设备管理筛选条件"><div class="overview-date-group"><div class="quick-range" role="group" aria-label="快捷时间范围"><button class="active" type="button" data-range="today" aria-pressed="true">今日</button><button type="button" data-range="seven" aria-pressed="false">近 7 天</button><button type="button" data-range="month" aria-pressed="false">本月</button></div><div class="date-range"><input type="date" value="2026-09-23" aria-label="开始日期"/><b>至</b><input type="date" value="2026-09-23" aria-label="结束日期"/></div></div><button class="button primary compact" type="button" data-device-filter-action="query">查询</button><button class="button ghost compact" type="button" data-device-filter-action="reset">重置</button></div>' +
      summary([['总设备量','48,620'],['在线设备量','12,684'],['新增设备量','326'],['解绑设备量','42']]) +
      toolbar('搜索设备 ID', '') +
      tablePanel(['设备 ID','手机号','绑定时间','最后使用时间','固件版本','设备状态'], [
        {key:'device',cells:['<strong>LP1-26A8-003982</strong>','138****6214','2026-09-23 08:46:12','2026-09-23 10:28:16','v2.4.1','<span class="status-pill success">正常</span>']},
        {key:'device',cells:['<strong>LP1-26A8-003804</strong>','186****0952','2026-09-22 19:32:45','2026-09-23 10:18:42','v2.4.1','<span class="status-pill success">正常</span>']},
        {key:'device',cells:['<strong>LMN-25C2-008421</strong>','159****7831','2026-09-18 14:16:28','2026-09-22 20:36:09','v2.3.8','<span class="status-pill warning">已解绑</span>']},
        {key:'device',cells:['<strong>LP1-26A8-003776</strong>','—','—','—','v2.4.0','<span class="status-pill info">未绑定</span>']}
      ], false);
  },
  homework: function () {
    return pageHead('作业管理', '', '') +
      '<div class="filter-bar overview-filter homework-filter" aria-label="作业管理筛选条件"><div class="overview-date-group"><div class="quick-range" role="group" aria-label="快捷时间范围"><button class="active" type="button" data-range="today" aria-pressed="true">今日</button><button type="button" data-range="seven" aria-pressed="false">近 7 天</button><button type="button" data-range="month" aria-pressed="false">本月</button></div><div class="date-range"><input type="date" value="2026-09-23" aria-label="开始日期"/><b>至</b><input type="date" value="2026-09-23" aria-label="结束日期"/></div></div><button class="button primary compact" type="button" data-homework-filter-action="query">查询</button><button class="button ghost compact" type="button" data-homework-filter-action="reset">重置</button></div>' +
      summary([['已提交','2,846'],['待批改','84'],['已批改','2,632'],['平均处理时长','38.4s']]) +
      toolbar('搜索作业 ID、手机号', '') +
      tablePanel(['设备 ID','手机号','最后使用时间','批改次数','操作'], [
        {key:'homework-unviewed',cells:['LP1-26A8-004126','177****3846','2026-09-23 10:31:42','0','<button class="text-button" type="button" data-homework-detail="homework-unviewed">查看明细</button>']},
        {key:'homework-viewed',cells:['LP1-26A8-003982','138****6214','2026-09-23 10:26:36','1','<button class="text-button" type="button" data-homework-detail="homework-viewed">查看明细</button>']},
        {key:'homework-corrected',cells:['LP1-26A8-003804','186****0952','2026-09-23 10:18:06','1','<button class="text-button" type="button" data-homework-detail="homework-corrected">查看明细</button>']},
        {key:'homework-processing',cells:['LMN-25C2-008421','159****7831','2026-09-23 10:03:18','1','<button class="text-button" type="button" data-homework-detail="homework-processing">查看明细</button>']},
        {key:'homework-failed',cells:['LP1-26A8-003411','133****4590','2026-09-23 09:32:14','1','<button class="text-button" type="button" data-homework-detail="homework-failed">查看明细</button>']}
      ], false);
  },
  entitlements: function () {
    return pageHead('权益列表', '', '<button class="button primary" id="newEntitlementButton"><span data-icon="plus"></span>新建配置</button>') +
      '<div class="filter-bar entitlement-filter" aria-label="权益配置筛选条件"><div class="entitlement-feature-filter"><label for="entitlementFeatureFilter">适用功能</label><select id="entitlementFeatureFilter"><option>全部功能</option><option>学伴对话</option><option>听写练习</option><option>作业批改</option><option>指尖查词</option></select></div><button class="button secondary compact" id="applyEntitlementFilter" type="button"><span data-icon="filter"></span>筛选</button></div>' +
      tablePanel(['权益名称','适用功能','额度类型','额度周期','额度限制','配置时间','状态','操作'], [
        {key:'entitlement',cells:['<strong>台灯对话权益方案</strong>','学伴对话','Token','每月','1,000,000 Token','2026-09-26 15:08:34','<button class="switch-toggle entitlement-toggle" type="button" role="switch" aria-checked="true"><span></span></button>','<button class="text-button" data-entitlement-edit>编辑</button> <button class="text-button mn-delete-button" data-entitlement-delete>删除</button>']},
        {key:'entitlement',cells:['<strong>作业批改权益方案</strong>','作业批改','次数','终生','3,000 次','2026-09-26 15:08:34','<button class="switch-toggle entitlement-toggle" type="button" role="switch" aria-checked="true"><span></span></button>','<button class="text-button" data-entitlement-edit>编辑</button> <button class="text-button mn-delete-button" data-entitlement-delete>删除</button>']},
        {key:'entitlement',cells:['<strong>听写练习权益方案</strong>','听写练习','次数','每月','不限量','2026-09-25 09:42:16','<button class="switch-toggle entitlement-toggle" type="button" role="switch" aria-checked="true"><span></span></button>','<button class="text-button" data-entitlement-edit>编辑</button> <button class="text-button mn-delete-button" data-entitlement-delete>删除</button>']},
        {key:'entitlement',cells:['<strong>指尖查词权益方案</strong>','指尖查词','次数','终生','不限量','2026-09-24 17:20:08','<button class="switch-toggle entitlement-toggle" type="button" role="switch" aria-checked="true"><span></span></button>','<button class="text-button" data-entitlement-edit>编辑</button> <button class="text-button mn-delete-button" data-entitlement-delete>删除</button>']}
      ], false);
  },
  abilities: function () {
    return pageHead('AI 能力管理', '', '<button class="button primary" id="newAbilityButton"><span data-icon="plus"></span>新增能力配置</button>') +
      subnav(['能力目录','模型管理','路由策略','计费单价','预算管理'], '能力目录') +
      summary([['启用能力','7'],['健康能力','6'],['本月成本','¥82,460'],['预算消耗率','68.7%']]) +
      toolbar('搜索能力或模型', '') +
      tablePanel(['能力','支持业务','模型','备用供应商','可用率','P95 耗时','今日成本','状态'], [
        {key:'ability',cells:['<strong>ASR</strong><small>语音识别</small>','学伴对话','asr-pro-v3','供应商 B','99.92%','480ms','¥ 362','<span class="status-pill success">正常</span>']},
        {key:'ability',cells:['<strong>TTS</strong><small>语音合成</small>','学伴对话、听写练习','tts-child-v2','供应商 C','99.87%','620ms','¥ 498','<span class="status-pill success">正常</span>']},
        {key:'ability',cells:['<strong>LLM</strong><small>大语言模型</small>','学伴对话、作业批改','edu-llm-32k','供应商 E','97.43%','2.8s','¥ 1,486','<span class="status-pill warning">关注</span>']},
        {key:'ability',cells:['<strong>OCR</strong><small>文字识别</small>','指尖查词、作业批改','ocr-edu-v5','自研 OCR','99.31%','890ms','¥ 528','<span class="status-pill success">正常</span>']}
      ]);
  },
  data: function () {
    return pageHead('数据管理', '维护埋点事件、指标口径和数据质量检查', '<button class="button primary"><span data-icon="plus"></span>新建指标</button>') +
      subnav(['埋点事件','指标口径','数据质量','导出任务'], '埋点事件') +
      summary([['启用事件','86'],['今日上报','1,284 万'],['数据完整率','99.72%'],['异常检查项','2']]) +
      toolbar('搜索事件 ID、事件名称或功能', '') +
      tablePanel(['事件 ID','中文名称','所属端 / 功能','触发时机','今日上报量','完整率','最近上报','状态'], [
        {key:'data',cells:['<strong>ai_chat_start</strong>','学伴对话发起','台灯端<small>学伴对话</small>','进入有效会话','128,436','99.86%','10 秒前','<span class="status-pill success">启用</span>']},
        {key:'data',cells:['<strong>finger_ocr_result</strong>','指尖查词结果返回','台灯端<small>指尖查词</small>','查词结果返回','85,778','99.63%','12 秒前','<span class="status-pill success">启用</span>']},
        {key:'data',cells:['<strong>dictation_complete</strong>','听写练习完成','台灯端<small>听写练习</small>','完成听写任务','62,354','99.91%','8 秒前','<span class="status-pill success">启用</span>']},
        {key:'data',cells:['<strong>homework_guardian_confirm</strong>','家长确认作业','家长端<small>作业批改</small>','家长确认结果','14,892','97.28%','26 秒前','<span class="status-pill warning">需关注</span>']}
      ]);
  }
};

pageRenderers['feature-dialogue'] = function () {
  const content = pageRenderers.content();
  const bodyStart = content.indexOf(metricsFilter());
  return pageHead('学伴对话', '', '<button class="button primary" type="button" data-role-config-entry>角色配置</button>') + content.slice(bodyStart);
};
pageRenderers['feature-dictionary'] = function () {
  return pageHead('指尖查词', '', '') + fingerDictionaryOperationsView();
};
pageRenderers['feature-dictation'] = function () {
  return pageHead('听写练习', '', '') + dictationOperationsView();
};
pageRenderers['feature-homework'] = function () {
  const content = pageRenderers.homework();
  const bodyStart = content.indexOf('<div class="filter-bar');
  return pageHead('作业批改', '', '') + content.slice(bodyStart);
};

pageRenderers['ai-dialogue-detail'] = function () {
  const rows = (aiDialogueDetailRows[selectedAIDialogueKey] || []).slice().sort(function (a, b) {
    return new Date(b[2]) - new Date(a[2]);
  });
  const listRows = rows.map(function (row, index) {
    return '<tr><td>'+(index+1)+'</td><td>'+row[2]+'</td><td>'+row[3]+'</td><td><button class="text-button" type="button" data-dialogue-expand data-dialogue-index="'+index+'">展开</button></td></tr>';
  }).join('');
  return detailPageHead('data-ai-dialogue-back') +
    '<section class="panel table-panel dialogue-session-panel"><div class="table-wrap"><table><thead><tr><th>序号</th><th>使用时间</th><th>对话时长</th><th>操作</th></tr></thead><tbody>'+listRows+'</tbody></table></div>'+pagination()+'</section>';
};
pageRenderers['finger-word-detail'] = function () {
  const rows = (fingerWordDetailRows[selectedFingerWordKey] || []).slice().sort(function (a, b) {
    return new Date(b[3]) - new Date(a[3]);
  }).map(function (row, index) {
    const status = row[4] === '已识别' ? '<span class="status-pill success">已识别</span>' : '<span class="status-pill info">未识别</span>';
    return {key:'finger-word-detail',cells:[String(index + 1),row[0],row[1],row[2],row[3],status]};
  });
  return detailPageHead('data-finger-word-back') +
    tablePanel(['序号','语言','类型','字/词','使用时间','状态'], rows, false);
};
pageRenderers['dictation-detail'] = function () {
  const rows = (dictationDetailRows[selectedDictationKey] || []).slice().sort(function (a, b) {
    return new Date(b[4]) - new Date(a[4]);
  }).map(function (row, index) {
    const status = row[5] === '已完成' ? '<span class="status-pill success">已完成</span>' : '<span class="status-pill warning">未完成</span>';
    return {key:'dictation-detail',cells:[String(index + 1),row[0],row[1],row[2],row[4],status]};
  });
  return detailPageHead('data-dictation-back') +
    tablePanel(['序号','学科','年级','单元','使用时间','状态'], rows, false);
};
pageRenderers['homework-detail'] = function () {
  const record = homeworkDrawerData[selectedHomeworkKey];
  const rows = record ? [{
    key:'homework-detail',
    cells:[
      '1',
      '<div class="homework-thumb homework-detail-thumb" role="button" tabindex="0" aria-label="点击放大作业图片"><span>作业</span></div>',
      record.submittedAt,
      record.duration,
      '<span class="status-pill '+(record.status==='未查看'?'neutral':record.status==='批改中'?'info':record.status==='批改失败'?'danger':'success')+'">'+record.status+'</span>'
    ]
  }] : [];
  return detailPageHead('data-homework-detail-back') +
    tablePanel(['序号','作业图片','提交时间','批改时长','状态'], rows, false);
};

const drawerData = {
  alert: ['LLM 业务可用率下降','告警信息',[['事件 ID','ALR-20260923-018'],['等级','P1 · 严重'],['当前值','94.3%'],['阈值','低于 97.0%'],['影响功能','学伴对话'],['持续时间','12 分钟']]],
  user: ['用户详情','用户概览',[['手机号','138****6214'],['设备 ID','LP1-26A8-003982'],['最近活跃','今天 10:18']]],
  child: ['儿童端 CHD-10328 · 小明','儿童概览',[['年级','四年级'],['关联家长','2 名'],['常用设备','LP1-26A8-003982'],['教材偏好','人教版'],['今日功能次数','18 次'],['待确认作业','2 份']]],
  device: ['设备 LP1-26A8-003982','设备概览',[['设备 ID','LP1-26A8-003982'],['固件版本','v2.4.1'],['在线状态','在线'],['最后心跳','刚刚']]],
  homework: ['作业 HW-260923-08216','批改概览',[['儿童 ID','CHD-10328'],['设备 SN','LP1-26A8-003982'],['题目结果','16 对 / 2 错'],['批改状态','批改成功'],['家长确认','2 / 2'],['额度状态','已扣减']]],
  entitlement: ['权益配置详情','配置概览',[['权益名称','台灯对话权益方案'],['适用功能','学伴对话'],['额度类型','Token'],['额度周期','每月'],['额度限制','1,000,000 Token'],['状态','启用']]],
  ability: ['能力 LLM','能力概览',[['主供应商','供应商 D'],['模型','edu-llm-32k'],['可用率','97.43%'],['P95 耗时','2.8s'],['今日成本','¥ 1,486'],['运行状态','需关注']]],
  content: ['儿童安全对话策略','配置概览',[['配置 ID','CFG-AI-0024'],['当前版本','V24'],['适用场景','学伴对话'],['适用设备','全部设备'],['生效时间','2026-09-20 10:00'],['状态','已生效']]],
  data: ['埋点事件详情','事件概览',[['事件 ID','ai_chat_start'],['所属功能','学伴对话'],['所属端','台灯端'],['今日上报','128,436'],['完整率','99.86%'],['最近上报','10 秒前']]],
  metric: ['学伴对话指标详情','指标概览',[['发起次数','128,436'],['完成次数','123,984'],['儿童 UV','12,680'],['业务成功率','96.5%'],['P95 耗时','3.2s'],['成本','¥ 9,842']]]
};

const homeworkDrawerData = {
  'homework-unviewed': { id: 'HW-260923-08242', deviceId: 'LP1-26A8-004126', submittedAt: '2026-09-23 10:31:42', phone: '177****3846', correctedAt: '—', duration: '—', status: '未查看', quotaChange: '—', quotaStatus: '未扣减', balance: '18 次' },
  'homework-viewed': { id: 'HW-260923-08216', deviceId: 'LP1-26A8-003982', submittedAt: '2026-09-23 10:26:36', phone: '138****6214', correctedAt: '2026-09-23 10:27:08', duration: '32.8s', status: '已查看', quotaChange: '−1', quotaStatus: '已扣减', balance: '17 次' },
  'homework-corrected': { id: 'HW-260923-08198', deviceId: 'LP1-26A8-003804', submittedAt: '2026-09-23 10:18:06', phone: '186****0952', correctedAt: '2026-09-23 10:19:22', duration: '41.5s', status: '已批改', quotaChange: '−1', quotaStatus: '已扣减', balance: '5 次' },
  'homework-processing': { id: 'HW-260923-08172', deviceId: 'LMN-25C2-008421', submittedAt: '2026-09-23 10:03:18', phone: '159****7831', correctedAt: '2026-09-23 10:03:24', duration: '18.2s', status: '批改中', quotaChange: '−1', quotaStatus: '已冻结', balance: '12 次' },
  'homework-failed': { id: 'HW-260923-08088', deviceId: 'LP1-26A8-003411', submittedAt: '2026-09-23 09:32:14', phone: '133****4590', correctedAt: '2026-09-23 09:33:14', duration: '60.0s', status: '批改失败', failureReason: '图片清晰度不足', quotaChange: '+1', quotaStatus: '已返还', balance: '8 次' }
};

function homeworkDetailMarkup(record) {
  const failureField = record.failureReason ? '<div><span>失败原因</span><strong>' + record.failureReason + '</strong></div>' : '';
  return '<section class="detail-section"><h3>作业详情</h3><div class="detail-grid"><div><span>作业 ID</span><strong>' + record.id + '</strong></div><div><span>设备 ID</span><strong>' + record.deviceId + '</strong></div><div><span>提交时间</span><strong>' + record.submittedAt + '</strong></div><div class="homework-image-field"><span>作业图片</span><div class="homework-thumb homework-detail-thumb" role="button" tabindex="0" aria-label="点击放大作业 ' + record.id + ' 图片"><span>作业</span></div></div></div></section>' +
    '<section class="detail-section"><h3>批改详情</h3><div class="detail-grid"><div><span>手机号</span><strong>' + record.phone + '</strong></div><div><span>批改时间</span><strong>' + record.correctedAt + '</strong></div><div><span>批改时长</span><strong>' + record.duration + '</strong></div><div><span>批改状态</span><strong>' + record.status + '</strong></div>' + failureField + '</div></section>' +
    '<section class="detail-section"><h3>额度详情</h3><div class="detail-grid"><div><span>额度变动</span><strong>' + record.quotaChange + '</strong></div><div><span>额度状态</span><strong>' + record.quotaStatus + '</strong></div><div><span>剩余额度</span><strong>' + record.balance + '</strong></div></div></section>';
}

function renderDrawer(type) {
  document.querySelector('#detailDrawer .eyebrow').hidden = false;
  const dialogueRecords = {
    'ai-dialogue-1': ['CHAT-20260923-0001','138****6214','2026-09-23 10:32:18','你好，请介绍一下太阳系。','太阳系由太阳和围绕它运行的八大行星及其他天体组成。'],
    'ai-dialogue-2': ['CHAT-20260923-0002','186****0952','2026-09-23 10:31:46','“春暖花开”是什么意思？','“春暖花开”形容春天气候温暖，百花盛开的景象。'],
    'ai-dialogue-3': ['CHAT-20260923-0003','159****7831','2026-09-23 10:28:05','这道题应该怎么解？','暂无回复'],
    'ai-dialogue-4': ['CHAT-20260923-0004','133****4590','2026-09-23 10:24:36','请帮我读一下这段英文。','暂无回复']
  };
  if (dialogueRecords[type]) {
    const record = dialogueRecords[type];
    document.querySelector('#detailDrawer .eyebrow').hidden = true;
    document.getElementById('drawerTitle').textContent = '学伴对话';
    document.getElementById('drawerBody').innerHTML =
      '<section class="detail-section"><h3>详情</h3><div class="detail-grid finger-word-overview">' +
      '<div><span>ID</span><strong>' + record[0] + '</strong></div>' +
      '<div><span>手机号</span><strong>' + record[1] + '</strong></div>' +
      '<div><span>时间</span><strong>' + record[2] + '</strong></div>' +
      '</div></section>' +
      '<section class="detail-section"><h3>明细</h3><div class="table-wrap"><table class="ai-dialogue-detail-table"><thead><tr><th>序号</th><th>问题</th><th>回答</th></tr></thead><tbody>' +
      '<tr><td>1</td><td>' + record[3] + '</td><td>' + record[4] + '</td></tr>' +
      '</tbody></table></div></section>';
    document.getElementById('detailDrawer').hidden = false;
    document.getElementById('modalBackdrop').hidden = false;
    document.getElementById('closeDrawer').focus();
    return;
  }
  if (type === 'dictation-record') {
    document.getElementById('drawerTitle').textContent = '听写练习';
    document.getElementById('drawerBody').innerHTML =
      '<section class="detail-section"><h3>详情</h3><div class="detail-grid finger-word-overview">' +
      '<div><span>ID</span><strong>DT-20260926-0001</strong></div>' +
      '<div><span>手机号</span><strong>138****6214</strong></div>' +
      '<div><span>时间</span><strong>2026.9.26 15:08:34</strong></div>' +
      '</div></section>' +
      '<section class="detail-section"><h3>明细</h3><div class="table-wrap dictation-detail-table-wrap"><table class="dictation-detail-table"><thead><tr><th>序号</th><th>词条</th></tr></thead><tbody>' +
      '<tr><td>1</td><td>春天</td></tr><tr><td>2</td><td>花朵</td></tr><tr><td>3</td><td>太阳</td></tr><tr><td>4</td><td>月亮</td></tr>' +
      '</tbody></table></div></section>';
    document.getElementById('detailDrawer').hidden = false;
    document.getElementById('modalBackdrop').hidden = false;
    document.getElementById('closeDrawer').focus();
    return;
  }
  if (type === 'finger-word') {
    document.querySelector('#detailDrawer .eyebrow').hidden = true;
    document.getElementById('drawerTitle').textContent = '指尖查词';
    document.getElementById('drawerBody').innerHTML =
      '<section class="detail-section"><h3>详情</h3><div class="detail-grid finger-word-overview">' +
      '<div><span>ID</span><strong>WORD-20260923-0001</strong></div>' +
      '<div><span>手机号</span><strong>138****6214</strong></div>' +
      '<div><span>时间</span><strong>2026-09-23 10:32:18</strong></div>' +
      '</div></section>' +
      '<section class="detail-section"><h3>明细</h3><div class="table-wrap"><table class="finger-word-detail-table"><thead><tr><th>序号</th><th>语言</th><th>类型</th><th>字/词</th><th>拼音 / 音标</th><th>核心释义</th><th>状态</th></tr></thead><tbody>' +
      '<tr><td>1</td><td>中文</td><td>词组</td><td><strong>春暖花开</strong></td><td>chūn nuǎn huā kāi</td><td>形容春天气候温暖，百花盛开</td><td><span class="status-pill success">已识别</span></td></tr>' +
      '<tr><td>2</td><td>英文</td><td>单词</td><td><strong>hello</strong></td><td>/həˈləʊ/</td><td>你好；喂</td><td><span class="status-pill success">已识别</span></td></tr>' +
      '</tbody></table></div></section>';
    document.getElementById('detailDrawer').hidden = false;
    document.getElementById('modalBackdrop').hidden = false;
    document.getElementById('closeDrawer').focus();
    return;
  }
  if (homeworkDrawerData[type]) {
    const record = homeworkDrawerData[type];
    document.querySelector('#detailDrawer .eyebrow').hidden = true;
    document.getElementById('drawerTitle').textContent = '作业批改';
    document.getElementById('drawerBody').innerHTML = homeworkDetailMarkup(record);
    document.getElementById('detailDrawer').hidden = false;
    document.getElementById('modalBackdrop').hidden = false;
    document.getElementById('closeDrawer').focus();
    return;
  }
  const data = drawerData[type] || drawerData.device;
  const relationshipSection = type === 'child'
      ? '<section class="detail-section"><h3>关联家长</h3><div class="detail-grid"><div><span>家长 1</span><strong>USR-208831 · 138****6214</strong></div><div><span>与儿童关系</span><strong>妈妈 · 主要联系人</strong></div><div><span>家长 2</span><strong>USR-208829 · 186****0952</strong></div><div><span>与儿童关系</span><strong>爸爸</strong></div></div></section>'
      : '';
  document.getElementById('drawerTitle').textContent = data[0];
  document.getElementById('drawerBody').innerHTML = '<section class="detail-section"><h3>' + data[1] + '</h3><div class="detail-grid">' + data[2].map(function (item) { return '<div><span>' + item[0] + '</span><strong>' + item[1] + '</strong></div>'; }).join('') + '</div></section>' + relationshipSection;
  document.getElementById('detailDrawer').hidden = false;
  document.getElementById('modalBackdrop').hidden = false;
  document.getElementById('closeDrawer').focus();
}

function bindMetricsTrendChart(page) {
  const chart = page.querySelector('#metricsTrendChart');
  if (!chart) return;
  const tooltip = chart.querySelector('#metricsTrendTooltip');
  const guide = chart.querySelector('#metricsTrendHoverGuide');
  const data = [
    { date: '09/17', values: ['5,200', '3,700', '2,500', '1,100'] }, { date: '09/18', values: ['6,400', '4,500', '3,300', '1,500'] },
    { date: '09/19', values: ['7,800', '6,200', '4,600', '2,400'] }, { date: '09/20', values: ['9,200', '7,000', '6,000', '3,100'] },
    { date: '09/21', values: ['12,000', '9,000', '7,300', '4,100'] }, { date: '09/22', values: ['15,200', '10,200', '8,500', '5,300'] },
    { date: '09/23', values: ['16,000', '11,000', '9,000', '6,200'] }
  ];
  const names = ['学伴对话', '指尖查词', '听写练习', '作业批改'];
  const colors = ['#2f6fed', '#4bbfb4', '#7e64cf', '#e49a42'];
  function show(index, clientX) {
    const safeIndex = Math.max(0, Math.min(data.length - 1, index));
    const item = data[safeIndex];
    const chartWidth = chart.getBoundingClientRect().width;
    const point = 48 + safeIndex * (692 / 6);
    const pointX = (point / 760) * chartWidth;
    guide.setAttribute('x1', String(point)); guide.setAttribute('x2', String(point)); guide.hidden = false;
    tooltip.innerHTML = '<strong>' + item.date + ' 调用量</strong>' + item.values.map(function (value, i) { return '<span><i style="background:' + colors[i] + '"></i><label>' + names[i] + '</label><b>' + value + '</b></span>'; }).join('');
    tooltip.hidden = false;
    tooltip.style.left = Math.max(8, Math.min(chartWidth - 8, clientX || pointX)) + 'px';
    tooltip.style.top = '36px';
    tooltip.style.transform = pointX > chartWidth * .72 ? 'translate(-105%, 0)' : 'translate(10px, 0)';
  }
  chart.addEventListener('pointermove', function (event) {
    const rect = chart.getBoundingClientRect();
    const position = Math.max(0, Math.min(1, (event.clientX - rect.left - rect.width * (48 / 760)) / (rect.width * (692 / 760))));
    show(Math.round(position * 6), event.clientX - rect.left);
  });
  chart.addEventListener('pointerleave', function () { tooltip.hidden = true; guide.hidden = true; });
  const hitArea = chart.querySelector('.trend-hit-area');
  hitArea.addEventListener('focus', function () { show(6); });
  hitArea.addEventListener('blur', function () { tooltip.hidden = true; guide.hidden = true; });
}

function bindBillingTrendChart(page) {
  const chart = page.querySelector('#billingTrendChart');
  if (!chart) return;
  const tooltip = chart.querySelector('#billingTrendTooltip');
  const guide = chart.querySelector('#billingTrendHoverGuide');
  const sectionHint = page.querySelector('.billing-call-section .overview-section-head span');
  if (sectionHint) sectionHint.textContent = '24 小时趋势';
  chart.setAttribute('aria-label', '24 小时功能调用趋势，悬浮可查看对应小时的调用量');
  const hitAreaLabel = chart.querySelector('.trend-hit-area');
  if (hitAreaLabel) hitAreaLabel.setAttribute('aria-label', '24 小时调用趋势数据，移动鼠标可查看每小时明细');
  const data = [
    { hour: '00:00', values: [520, 0, 270, 130] }, { hour: '01:00', values: [500, 0, 250, 0] },
    { hour: '02:00', values: [470, 330, 0, 110] }, { hour: '03:00', values: [0, 310, 0, 0] },
    { hour: '04:00', values: [0, 330, 240, 0] }, { hour: '05:00', values: [520, 0, 280, 140] },
    { hour: '06:00', values: [680, 510, 350, 180] }, { hour: '07:00', values: [920, 690, 480, 250] },
    { hour: '08:00', values: [1120, 840, 610, 330] }, { hour: '09:00', values: [1300, 990, 720, 410] },
    { hour: '10:00', values: [1450, 1100, 810, 480] }, { hour: '11:00', values: [1580, 1200, 900, 540] },
    { hour: '12:00', values: [1460, 1110, 830, 490] }, { hour: '13:00', values: [1520, 1160, 870, 510] },
    { hour: '14:00', values: [1660, 0, 940, 0] }, { hour: '15:00', values: [1790, 0, 1010, 610] },
    { hour: '16:00', values: [1710, 1300, 970, 580] }, { hour: '17:00', values: [1620, 1230, 0, 540] },
    { hour: '18:00', values: [1550, 1160, 0, 500] }, { hour: '19:00', values: [1420, 1040, 770, 450] },
    { hour: '20:00', values: [1240, 900, 670, 0] }, { hour: '21:00', values: [0, 760, 560, 0] },
    { hour: '22:00', values: [800, 590, 420, 240] }, { hour: '23:00', values: [620, 460, 320, 180] }
  ];
  const names = ['ASR', 'TTS', 'LLM', '作业批改'];
  const colors = ['#2f6fed', '#4bbfb4', '#7e64cf', '#e49a42'];
  const maxValue = 2000;
  const plotLeft = 48;
  const plotWidth = 692;
  const plotBottom = 220;
  const plotHeight = 195;
  const seriesSelectors = ['.series-primary', '.series-secondary', '.series-tertiary', '.series-quaternary'];
  seriesSelectors.forEach(function (selector, seriesIndex) {
    const path = chart.querySelector(selector);
    if (!path) return;
    const d = data.map(function (item, index) {
      const x = plotLeft + index * (plotWidth / (data.length - 1));
      const value = item.values[seriesIndex];
      const y = plotBottom - value / maxValue * plotHeight;
      const command = index ? 'L' : 'M';
      return command + x.toFixed(1) + ' ' + y.toFixed(1);
    }).join(' ');
    path.setAttribute('d', d);
  });
  const xLabels = chart.querySelector('.x-labels');
  if (xLabels) {
    const marks = [[0, '00:00'], [4, '04:00'], [8, '08:00'], [12, '12:00'], [16, '16:00'], [20, '20:00'], [23, '23:00']];
    xLabels.innerHTML = marks.map(function (mark) {
      const x = plotLeft + mark[0] * (plotWidth / (data.length - 1));
      return '<text x="' + x.toFixed(1) + '" y="238">' + mark[1] + '</text>';
    }).join('');
  }
  const yLabels = chart.querySelector('.y-labels');
  if (yLabels) yLabels.innerHTML = '<text x="40" y="29">2k</text><text x="40" y="79">1.5k</text><text x="40" y="129">1k</text><text x="40" y="179">500</text><text x="40" y="224">0</text>';
  function show(index, clientX) {
    const safeIndex = Math.max(0, Math.min(data.length - 1, index));
    const item = data[safeIndex];
    const chartWidth = chart.getBoundingClientRect().width;
    const point = plotLeft + safeIndex * (plotWidth / (data.length - 1));
    const pointX = (point / 760) * chartWidth;
    guide.setAttribute('x1', String(point)); guide.setAttribute('x2', String(point)); guide.hidden = false;
    tooltip.innerHTML = '<strong>' + item.hour + ' 调用量</strong>' + item.values.map(function (value, i) { return '<span><i style="background:' + colors[i] + '"></i><label>' + names[i] + '</label><b>' + value.toLocaleString('zh-CN') + '</b></span>'; }).join('');
    tooltip.hidden = false;
    tooltip.style.left = Math.max(8, Math.min(chartWidth - 8, clientX || pointX)) + 'px';
    tooltip.style.top = '36px';
    tooltip.style.transform = pointX > chartWidth * .72 ? 'translate(-105%, 0)' : 'translate(10px, 0)';
  }
  chart.addEventListener('pointermove', function (event) {
    const rect = chart.getBoundingClientRect();
    const position = Math.max(0, Math.min(1, (event.clientX - rect.left - rect.width * (48 / 760)) / (rect.width * (692 / 760))));
    show(Math.round(position * (data.length - 1)), event.clientX - rect.left);
  });
  chart.addEventListener('pointerleave', function () { tooltip.hidden = true; guide.hidden = true; });
  const hitArea = chart.querySelector('.trend-hit-area');
  hitArea.addEventListener('focus', function () { show(12); });
  hitArea.addEventListener('blur', function () { tooltip.hidden = true; guide.hidden = true; });
}

function escapeBillingText(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character];
  });
}

let billingModels = [
  { id: 'MOD-001', name: '教育对话主模型', code: 'edu-llm-32k', type: 'LLM', version: '2026.08', scenario: '学伴对话', limit: '32K Token', status: '启用', updatedAt: '2026-09-23 10:20:18', description: '儿童对话主模型' },
  { id: 'MOD-002', name: '作业批改推理模型', code: 'edu-llm-8k', type: 'LLM', version: '2026.08', scenario: '作业批改', limit: '8K Token', status: '启用', updatedAt: '2026-09-23 10:18:20', description: '作业批改推理模型' },
  { id: 'MOD-003', name: '对话语音识别', code: 'asr-pro-v3', type: 'ASR', version: '3.2', scenario: '学伴对话', limit: '60 秒音频', status: '启用', updatedAt: '2026-09-23 10:17:46', description: '对话实时语音识别' },
  { id: 'MOD-004', name: '听写语音识别', code: 'asr-lite-v2', type: 'ASR', version: '2.8', scenario: '听写练习', limit: '90 秒音频', status: '启用', updatedAt: '2026-09-23 10:16:08', description: '听写语音识别' },
  { id: 'MOD-005', name: '儿童语音合成', code: 'tts-child-v2', type: 'TTS', version: '2.4', scenario: '学伴对话', limit: '5,000 字符', status: '启用', updatedAt: '2026-09-23 10:15:31', description: '儿童语音合成' },
  { id: 'MOD-006', name: '听写语音合成', code: 'tts-standard-v2', type: 'TTS', version: '2.3', scenario: '听写练习', limit: '5,000 字符', status: '启用', updatedAt: '2026-09-23 10:14:52', description: '听写语音合成' },
  { id: 'MOD-007', name: '查词识别模型', code: 'ocr-edu-v5', type: 'OCR', version: '5.1', scenario: '指尖查词', limit: '单图 5MB', status: '启用', updatedAt: '2026-09-23 10:13:14', description: '查词文字识别' },
  { id: 'MOD-008', name: '作业图像识别', code: 'ocr-homework-v3', type: 'OCR', version: '3.7', scenario: '作业批改', limit: '单图 10MB', status: '启用', updatedAt: '2026-09-23 10:12:02', description: '作业图片识别' },
  { id: 'MOD-009', name: '手部关键点检测', code: 'hand-keypoint-v2', type: '视觉识别', version: '2.2', scenario: '指尖查词', limit: '30 fps', status: '启用', updatedAt: '2026-09-23 10:10:45', description: '手部关键点检测' },
  { id: 'MOD-010', name: '作业题目切分', code: 'homework-review-v2', type: '规则模型', version: '2.1', scenario: '作业批改', limit: '50 题/次', status: '启用', updatedAt: '2026-09-23 10:09:21', description: '作业题目结构切分' },
  { id: 'MOD-011', name: '作业图像质检', code: 'vision-worksheet-v1', type: '视觉识别', version: '1.8', scenario: '作业批改', limit: '单图 10MB', status: '启用', updatedAt: '2026-09-23 10:08:05', description: '作业图片质量识别' },
  { id: 'MOD-012', name: '对话意图路由', code: 'intent-router-v2', type: '规则模型', version: '2.5', scenario: '学伴对话', limit: '100 意图', status: '启用', updatedAt: '2026-09-23 10:06:45', description: '对话意图路由' },
  { id: 'MOD-013', name: '儿童内容安全', code: 'safety-guard-v3', type: '规则模型', version: '3.1', scenario: '学伴对话', limit: '2,000 字', status: '启用', updatedAt: '2026-09-23 10:05:22', description: '儿童内容安全校验' },
  { id: 'MOD-014', name: '听写结果评估', code: 'dictation-eval-v2', type: '规则模型', version: '2.4', scenario: '听写练习', limit: '500 词', status: '启用', updatedAt: '2026-09-23 10:04:08', description: '听写结果评估' },
  { id: 'MOD-015', name: '发音评分模型', code: 'pronunciation-score-v1', type: 'ASR', version: '1.7', scenario: '听写练习', limit: '60 秒音频', status: '启用', updatedAt: '2026-09-23 10:03:01', description: '发音评分' },
  { id: 'MOD-016', name: '查词关键词检测', code: 'keyword-detect-v2', type: '规则模型', version: '2.0', scenario: '指尖查词', limit: '100 字', status: '启用', updatedAt: '2026-09-23 10:01:47', description: '查词关键词检测' },
  { id: 'MOD-017', name: '对话召回排序', code: 'chat-rerank-v1', type: 'LLM', version: '1.6', scenario: '学伴对话', limit: '4K Token', status: '停用', updatedAt: '2026-09-23 09:59:31', description: '对话召回排序' },
  { id: 'MOD-018', name: '作业图片质量检测', code: 'image-quality-v2', type: '视觉识别', version: '1.5', scenario: '作业批改', limit: '单图 10MB', status: '启用', updatedAt: '2026-09-23 09:58:20', description: '作业图片质量检测' }
];
let billingModelSequence = 19;
let billingModelPage = 1;
const billingModelPageSize = 9;
let billingModelScenarioFilter = '全部业务场景';
let activeModelCategory = '语言活动检测';
let modelFormMode = 'edit';
let pendingModelDeletion = null;
const secondaryBillingModelIds = new Set(['MOD-004', 'MOD-006', 'MOD-008', 'MOD-013', 'MOD-017', 'MOD-018']);
const modelCategoryData = {
  '语言活动检测': [
    { id: 'VAD_silero_vad', name: '语音活动检测', provider: 'silero_vad', enabled: true, isDefault: true },
    { id: 'VAD_ten_vad', name: '轻量语音检测', provider: 'ten_vad', enabled: true, isDefault: false }
  ],
  '语音识别': [
    { id: 'ASR_asr_pro_v3', name: '对话语音识别', provider: 'asr-pro-v3', enabled: true, isDefault: true },
    { id: 'ASR_asr_lite_v2', name: '听写语音识别', provider: 'asr-lite-v2', enabled: true, isDefault: false },
    { id: 'ASR_pronunciation_v1', name: '发音评分模型', provider: 'pronunciation-score-v1', enabled: true, isDefault: false }
  ],
  '大语言模型': [
    { id: 'LLM_edu_32k', name: '教育对话主模型', provider: 'edu-llm-32k', enabled: true, isDefault: true },
    { id: 'LLM_edu_8k', name: '作业批改推理模型', provider: 'edu-llm-8k', enabled: true, isDefault: false }
  ],
  '意图识别': [
    { id: 'Intent_router_v2', name: '对话意图路由', provider: 'intent-router-v2', enabled: true, isDefault: true },
    { id: 'Intent_keyword_v2', name: '查词关键词检测', provider: 'keyword-detect-v2', enabled: true, isDefault: false }
  ],
  '语音合成': [
    { id: 'TTS_child_v2', name: '儿童语音合成', provider: 'tts-child-v2', enabled: true, isDefault: true },
    { id: 'TTS_standard_v2', name: '听写语音合成', provider: 'tts-standard-v2', enabled: true, isDefault: false }
  ],
  '记忆': [
    { id: 'Memory_mem0_local', name: '本地向量记忆', provider: 'mem0_local', enabled: true, isDefault: true },
    { id: 'Memory_mem_local_short', name: '本地短期记忆', provider: 'mem_local_short', enabled: true, isDefault: false },
    { id: 'Memory_nomem', name: '无记忆', provider: 'nomem', enabled: true, isDefault: false },
    { id: 'Memory_mem0ai', name: 'Mem0AI记忆', provider: 'mem0ai', enabled: true, isDefault: false }
  ],
  '性格': [
    { id: 'Persona_friendly_v1', name: '亲和陪伴型', provider: 'friendly-persona-v1', enabled: true, isDefault: true },
    { id: 'Persona_tutor_v1', name: '耐心导师型', provider: 'tutor-persona-v1', enabled: true, isDefault: false }
  ]
};

function formatBillingPhone(value) {
  const raw = value.trim();
  const digits = raw.replace(/\D/g, '');
  return digits.length === 11 ? digits.slice(0, 3) + '****' + digits.slice(-4) : raw;
}

function billingModelDisplayName(code) {
  const model = billingModels.find(function (item) { return item.code === code; });
  return model ? model.name : code;
}

function billingModelType(code) {
  const model = billingModels.find(function (item) { return item.code === code; });
  return model ? model.type : '—';
}

function getBillingUsageData(phone) {
  const defaultRows = [
    ['LP1-26A8-003982', '138****6214', '2026-09-23 10:32:18', '学伴对话', 'asr-pro-v3', '次数', '1 次', '¥ 0.006', '0.48s', '成功'],
    ['LP1-26A8-003804', '186****0952', '2026-09-23 10:32:15', '听写练习', 'tts-child-v2', '文本长度', '420 字符', '¥ 0.003', '0.62s', '成功'],
    ['LMN-25C2-008421', '159****7831', '2026-09-23 10:31:52', '学伴对话', 'edu-llm-32k', 'Token', '1,246 Token', '¥ 0.079', '2.8s', '成功'],
    ['LP1-26A8-003776', '133****4590', '2026-09-23 10:31:46', '指尖查词', 'ocr-edu-v5', '次数', '1 次', '¥ 0.004', '0.89s', '成功'],
    ['LP1-26A8-004126', '177****3846', '2026-09-23 10:31:42', '指尖查词', 'hand-keypoint-v2', '次数', '1 次', '¥ 0.001', '0.31s', '成功'],
    ['LP1-26A8-003411', '133****4590', '2026-09-23 10:31:34', '作业批改', 'edu-llm-8k', 'Token', '2,860 Token', '¥ 0.196', '38.4s', '失败']
  ];
  if (!phone) {
    return {
      models: '18', calls: '314,862', cost: '¥ 3,286',
      features: { '听写练习': ['10,186', '97.0%', '¥ 336'], '指尖查词': ['13,208', '98.7%', '¥ 528'], '学伴对话': ['18,462', '96.5%', '¥ 1,486'], '作业批改': ['6,536', '95.6%', '¥ 936'] },
      rows: defaultRows
    };
  }
  const userPhone = formatBillingPhone(phone);
  return {
    models: '7', calls: '12', cost: '¥ 0.14',
    features: { '听写练习': ['3', '100%', '¥ 0.02'], '指尖查词': ['3', '100%', '¥ 0.01'], '学伴对话': ['4', '100%', '¥ 0.08'], '作业批改': ['2', '50.0%', '¥ 0.03'] },
    rows: [
      ['LP1-26A8-003982', userPhone, '2026-09-23 10:26:14', '学伴对话', 'asr-pro-v3', '次数', '1 次', '¥ 0.005', '0.46s', '成功'],
      ['LP1-26A8-003982', userPhone, '2026-09-23 10:26:15', '学伴对话', 'edu-llm-32k', 'Token', '892 Token', '¥ 0.056', '2.5s', '成功'],
      ['LP1-26A8-003982', userPhone, '2026-09-23 10:18:08', '指尖查词', 'ocr-edu-v5', '次数', '1 次', '¥ 0.004', '0.82s', '成功'],
      ['LP1-26A8-003982', userPhone, '2026-09-23 10:18:08', '指尖查词', 'hand-keypoint-v2', '次数', '1 次', '¥ 0.001', '0.28s', '成功'],
      ['LP1-26A8-003982', userPhone, '2026-09-23 09:54:41', '听写练习', 'tts-child-v2', '文本长度', '366 字符', '¥ 0.003', '0.57s', '成功'],
      ['LP1-26A8-003982', userPhone, '2026-09-23 09:32:18', '作业批改', 'edu-llm-8k', 'Token', '1,206 Token', '¥ 0.084', '35.2s', '成功'],
      ['LP1-26A8-003982', userPhone, '2026-09-23 09:29:05', '作业批改', 'edu-llm-8k', '次数', '1 次', '¥ 0.004', '11.6s', '失败']
    ]
  };
}

function renderBillingUsageData(page, phone) {
  const data = getBillingUsageData(phone);
  page.querySelector('#billingModelCount').textContent = billingModels.length;
  page.querySelector('#billingTotalCalls').textContent = data.calls;
  page.querySelector('#billingForecastCost').textContent = data.cost;
  page.querySelectorAll('[data-billing-feature]').forEach(function (card) {
    const feature = data.features[card.dataset.billingFeature];
    if (!feature) return;
    card.querySelector('[data-billing-calls]').textContent = feature[0];
    card.querySelector('[data-billing-success-rate]').textContent = feature[1];
    card.querySelector('[data-billing-cost]').textContent = feature[2];
  });
  const body = page.querySelector('#billingUsageTableBody');
  if (!body) return;
  data.rows.forEach(function (row) { const modelCode = row[4]; row.splice(4, 0, billingModelType(modelCode)); row[5] = billingModelDisplayName(modelCode); row.splice(8, 1); });
  body.innerHTML = data.rows.map(function (row) {
    const statusClass = row[9] === '成功' ? 'success' : 'danger';
    return '<tr>' + row.map(function (cell, index) {
      const content = index === 9 ? '<span class="status-pill ' + statusClass + '">' + escapeBillingText(cell) + '</span>' : escapeBillingText(cell);
      return '<td>' + (index === 5 ? '<strong>' + content + '</strong>' : content) + '</td>';
    }).join('') + '</tr>';
  }).join('');
  applyBillingUsageTableFilters(page);
}

function bindBillingFilters(page) {
  const queryButton = page.querySelector('[data-billing-filter-action="query"]');
  const resetButton = page.querySelector('[data-billing-filter-action="reset"]');
  if (!queryButton || !resetButton) return;
  function query() {
    renderBillingUsageData(page, '');
    showToast('已更新全量功能使用数据');
  }
  queryButton.addEventListener('click', query);
  resetButton.addEventListener('click', function () {
    const dates = page.querySelectorAll('.billing-filter input[type="date"]');
    if (dates.length >= 2) { dates[0].value = '2026-09-23'; dates[1].value = '2026-09-23'; }
    page.querySelectorAll('.billing-filter [data-range]').forEach(function (button) {
      const active = button.dataset.range === 'today';
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    const featureFilter = page.querySelector('#billingTableFeatureFilter');
    if (featureFilter) featureFilter.value = '全部功能';
    const modelTypeFilter = page.querySelector('#billingTableModelTypeFilter');
    if (modelTypeFilter) modelTypeFilter.value = '全部模型';
    const phoneFilter = page.querySelector('#billingTablePhoneFilter');
    if (phoneFilter) phoneFilter.value = '';
    renderBillingUsageData(page, '');
    showToast('筛选条件已重置');
  });
}

function bindBillingTablePhoneFilter(page) {
  const input = page.querySelector('#billingTablePhoneFilter');
  const featureFilter = page.querySelector('#billingTableFeatureFilter');
  const modelTypeFilter = page.querySelector('#billingTableModelTypeFilter');
  const button = page.querySelector('[data-billing-table-filter-action="apply"]');
  const body = page.querySelector('#billingUsageTableBody');
  if (!input || !featureFilter || !modelTypeFilter || !button || !body) return;

  const applyFilter = function () {
    applyBillingUsageTableFilters(page);
  };

  button.addEventListener('click', applyFilter);
}

function applyBillingUsageTableFilters(page) {
  const input = page.querySelector('#billingTablePhoneFilter');
  const featureFilter = page.querySelector('#billingTableFeatureFilter');
  const modelTypeFilter = page.querySelector('#billingTableModelTypeFilter');
  const body = page.querySelector('#billingUsageTableBody');
  if (!input || !featureFilter || !modelTypeFilter || !body) return;
  const keyword = input.value.trim().replace(/\D/g, '');
  const feature = featureFilter.value;
  const modelType = modelTypeFilter.value;
  const previousEmpty = body.querySelector('.billing-table-empty');
  if (previousEmpty) previousEmpty.remove();
  let visibleCount = 0;
  Array.from(body.querySelectorAll('tr')).forEach(function (row) {
    const phoneCell = row.cells[1];
    const featureCell = row.cells[3];
    const modelTypeCell = row.cells[4];
    const phone = phoneCell ? phoneCell.textContent.replace(/\D/g, '') : '';
    const matched = (!keyword || phone.indexOf(keyword) !== -1) && (feature === '全部功能' || (featureCell && featureCell.textContent.trim() === feature)) && (modelType === '全部模型' || (modelTypeCell && modelTypeCell.textContent.trim() === modelType));
    row.hidden = !matched;
    if (matched) visibleCount += 1;
  });
  if (!visibleCount) {
    const emptyRow = document.createElement('tr');
    emptyRow.className = 'billing-table-empty';
    emptyRow.innerHTML = '<td colspan="10" class="table-empty">未查询到匹配的使用记录</td>';
    body.appendChild(emptyRow);
  }
}

function billingModelStatus(status) {
  return '<span class="status-pill ' + (status === '启用' ? 'success' : 'neutral') + '">' + escapeBillingText(status) + '</span>';
}

function refreshBillingModelCount() {
  document.querySelectorAll('#billingModelCount').forEach(function (element) {
    element.textContent = billingModels.length;
  });
}

function renderBillingModelTable() {
  const body = document.getElementById('billingModelTableBody');
  const total = document.getElementById('billingModelTotal');
  if (!body || !total) return;
  const models = modelCategoryData[activeModelCategory] || [];
  total.textContent = '共 ' + models.length + ' 个模型';
  const pageCount = Math.max(1, Math.ceil(models.length / billingModelPageSize));
  billingModelPage = Math.min(billingModelPage, pageCount);
  const start = (billingModelPage - 1) * billingModelPageSize;
  body.innerHTML = models.slice(start, start + billingModelPageSize).map(function (model) {
    return '<tr><td>' + escapeBillingText(model.id) + '</td><td>' + escapeBillingText(model.name) + '</td><td>' + escapeBillingText(model.provider) + '</td>' +
      '<td><button class="switch-toggle memory-model-toggle" type="button" role="switch" aria-checked="' + model.enabled + '" aria-label="启用' + escapeBillingText(model.name) + '"><span></span></button></td><td><button class="switch-toggle memory-model-toggle" type="button" role="switch" aria-checked="' + model.isDefault + '" aria-label="设为默认' + escapeBillingText(model.name) + '"><span></span></button></td><td><div class="model-table-actions"><button class="table-action" type="button" data-edit-category-model="' + escapeBillingText(model.id) + '">修改</button><button class="table-action" type="button" data-copy-category-model="' + escapeBillingText(model.id) + '">创建副本</button><button class="table-action danger" type="button" data-delete-category-model="' + escapeBillingText(model.id) + '">删除</button></div></td></tr>';
  }).join('');
  const pager = document.getElementById('billingModelPagination');
  if (pager) {
    pager.innerHTML = '<span class="pagination-total">共 ' + models.length + ' 条</span><button type="button" aria-label="上一页" data-model-page="' + Math.max(1, billingModelPage - 1) + '" ' + (billingModelPage === 1 ? 'disabled' : '') + '>‹</button>' +
      Array.from({ length: pageCount }, function (_, index) { const page = index + 1; return '<button type="button" class="' + (page === billingModelPage ? 'active' : '') + '" aria-label="第' + page + '页" data-model-page="' + page + '">' + page + '</button>'; }).join('') +
      '<button type="button" aria-label="下一页" data-model-page="' + Math.min(pageCount, billingModelPage + 1) + '" ' + (billingModelPage === pageCount ? 'disabled' : '') + '>›</button>';
  }
}

function openBillingModelList() {
  navigate('billing-models');
  renderBillingModelTable();
}

function openBillingModelForm(modelId) {
  const form = document.getElementById('billingModelForm');
  const model = modelId ? Object.keys(modelCategoryData).reduce(function (found, category) { return found || modelCategoryData[category].find(function (item) { return item.id === modelId; }); }, null) : null;
  form.reset();
  const isCopy = modelFormMode === 'copy';
  document.getElementById('billingModelFormModal').classList.toggle('copy-mode', isCopy);
  document.getElementById('billingModelEditId').value = model ? model.id : '';
  document.getElementById('billingModelFormTitle').textContent = isCopy ? '创建副本' : '修改模型';
  document.getElementById('billingModelEnabled').setAttribute('aria-checked', String(model ? model.enabled : true));
  const providerSelect = document.getElementById('billingModelProvider');
  const providers = Array.from(new Set(Object.keys(modelCategoryData).flatMap(function (category) { return modelCategoryData[category].map(function (item) { return item.provider; }); })));
  providerSelect.innerHTML = providers.map(function (provider) { return '<option>' + escapeBillingText(provider) + '</option>'; }).join('');
  document.getElementById('billingModelSubmitLabel').textContent = '保存';
  if (model) {
    const copySuffix = isCopy ? '_副本' : '';
    document.getElementById('billingModelName').value = model.name + copySuffix;
    document.getElementById('billingModelCode').value = (model.code || model.provider) + copySuffix;
    providerSelect.value = model.provider;
    document.getElementById('billingModelSort').value = model.sort || '22';
    document.getElementById('billingModelDocs').value = model.docs || '';
    document.getElementById('billingModelRemarks').value = model.remarks || '';
    document.getElementById('billingModelWsUrl').value = model.wsUrl || 'ws://172.27.153.66:1949/v1/asr/stream';
    document.getElementById('billingModelSecret').value = model.secret || 'api-key';
    document.getElementById('billingModelConnectTimeout').value = model.connectTimeout || '10';
    document.getElementById('billingModelResultTimeout').value = model.resultTimeout || '8';
    document.getElementById('billingModelPreRoll').value = model.preRoll || '1';
    document.getElementById('billingModelOutputDir').value = model.outputDir || 'tmp/';
    document.getElementById('billingModelCopySecret').value = '';
    document.getElementById('billingModelCopyService').value = model.serviceAddress || 'https://dashscope.aliyuncs.com/compatible-mode/v1';
    document.getElementById('billingModelInvokeName').value = model.invokeModelName || model.provider;
    document.getElementById('billingModelCopyOutput').value = model.outputDir || 'tmp/';
  }
  closeOverlays();
  document.getElementById('billingModelFormModal').hidden = false;
  document.getElementById('modalBackdrop').hidden = false;
  window.setTimeout(function () { document.getElementById('billingModelName').focus(); }, 0);
}

function bindBillingModelManagement(page) {
  const view = page.querySelector('#viewBillingModelsButton');
  if (view) view.addEventListener('click', openBillingModelList);
}

function bindBillingModelsPage(page) {
  const create = page.querySelector('#newBillingModelButton');
  const body = page.querySelector('#billingModelTableBody');
  if (create) create.addEventListener('click', function () { openBillingModelForm(); });
  const categoryTabs = page.querySelector('.model-category-tabs');
  if (categoryTabs) categoryTabs.addEventListener('click', function (event) {
    const tab = event.target.closest('[data-model-category]');
    if (!tab) return;
    activeModelCategory = tab.dataset.modelCategory;
    billingModelPage = 1;
    categoryTabs.querySelectorAll('[data-model-category]').forEach(function (item) {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });
    renderBillingModelTable();
  });
  const scenarioFilter = page.querySelector('#billingModelScenarioFilter');
  const applyScenarioFilter = page.querySelector('#applyBillingModelScenarioFilter');
  if (applyScenarioFilter && scenarioFilter) applyScenarioFilter.addEventListener('click', function () {
    billingModelScenarioFilter = scenarioFilter.value;
    billingModelPage = 1;
    renderBillingModelTable();
  });
  if (body) body.addEventListener('click', function (event) {
    const editButton = event.target.closest('[data-edit-category-model]');
    if (editButton) {
      modelFormMode = 'edit';
      openBillingModelForm(editButton.dataset.editCategoryModel);
      return;
    }
    const copyButton = event.target.closest('[data-copy-category-model]');
    if (copyButton) {
      modelFormMode = 'copy';
      openBillingModelForm(copyButton.dataset.copyCategoryModel);
      return;
    }
    const deleteButton = event.target.closest('[data-delete-category-model]');
    if (deleteButton) {
      pendingModelDeletion = deleteButton.dataset.deleteCategoryModel;
      const selected = modelCategoryData[activeModelCategory].find(function (item) { return item.id === pendingModelDeletion; });
      document.getElementById('modelDeleteConfirmMessage').textContent = '确定删除模型“' + (selected ? selected.name : '') + '”吗？删除后无法恢复。';
      document.getElementById('modelDeleteConfirmModal').hidden = false;
      document.getElementById('modalBackdrop').hidden = false;
      return;
    }
    const button = event.target.closest('[data-billing-model-action]');
    if (!button) return;
    const model = billingModels.find(function (item) { return item.id === button.dataset.modelId; });
    if (!model) return;
    if (button.dataset.billingModelAction === 'edit') {
      openBillingModelForm(model.id);
      return;
    }
    if (window.confirm('确认删除模型“' + model.name + '”吗？删除后将不再参与计费计量。')) {
      billingModels = billingModels.filter(function (item) { return item.id !== model.id; });
      refreshBillingModelCount();
      renderBillingModelTable();
      showToast('模型已删除');
    }
  });
  const pager = page.querySelector('#billingModelPagination');
  if (pager) pager.addEventListener('click', function (event) {
    const button = event.target.closest('[data-model-page]');
    if (!button || button.disabled) return;
    billingModelPage = Number(button.dataset.modelPage);
    renderBillingModelTable();
  });
  renderBillingModelTable();
}

function renderPage(pageName) {
  const page = document.getElementById('page-' + pageName);
  if (!page || page.dataset.rendered === 'true' || !pageRenderers[pageName]) return;
  page.innerHTML = pageRenderers[pageName]();
  const tabs = page.querySelector('.subnav');
  if (tabs) {
    const activeTab = tabs.querySelector('button.active');
    const view = document.createElement('div');
    view.className = 'tab-view';
    view.dataset.defaultTab = activeTab ? activeTab.textContent.trim() : '';
    while (tabs.nextSibling) view.appendChild(tabs.nextSibling);
    tabs.after(view);
    page.defaultTabHtml = view.innerHTML;
  }
  page.dataset.rendered = 'true';
  hydrateIcons(page);
  if (pageName === 'metrics') bindMetricsTrendChart(page);
  if (pageName === 'billing') { bindBillingTrendChart(page); bindBillingFilters(page); bindBillingTablePhoneFilter(page); bindBillingModelManagement(page); }
  if (pageName === 'billing-models') bindBillingModelsPage(page);
}

function navigate(pageName) {
  renderPage(pageName);
  if (['dashboard', 'devices', 'users', 'content'].includes(pageName)) {
    document.getElementById('overviewChildren').hidden = false;
    document.querySelector('[data-overview-toggle]').setAttribute('aria-expanded', 'true');
  }
  if (['feature-dialogue', 'feature-dictionary', 'feature-dictation', 'feature-homework'].includes(pageName)) {
    document.getElementById('featureManagementChildren').hidden = false;
    document.querySelector('[data-feature-management-toggle]').setAttribute('aria-expanded', 'true');
  }
  if (pageName === 'billing') {
    document.getElementById('billingChildren').hidden = false;
    document.querySelector('[data-billing-toggle]').setAttribute('aria-expanded', 'true');
  }
  if (pageName === 'billing-models') {
    document.getElementById('modelsChildren').hidden = false;
    document.querySelector('[data-models-toggle]').setAttribute('aria-expanded', 'true');
  }
  if (pageName === 'entitlements') {
    document.getElementById('entitlementsChildren').hidden = false;
    document.querySelector('[data-entitlements-toggle]').setAttribute('aria-expanded', 'true');
  }
  if (['alerts-new', 'alerts-traffic', 'alerts-events', 'alerts-rules'].includes(pageName)) {
    document.getElementById('monitoringChildren').hidden = false;
    document.querySelector('[data-monitoring-toggle]').setAttribute('aria-expanded', 'true');
  }
  document.querySelectorAll('.page').forEach(function (page) { page.classList.toggle('active', page.id === 'page-' + pageName); });
  document.querySelectorAll('.nav-item').forEach(function (item) {
    const active = item.dataset.page === pageName;
    item.classList.toggle('active', active);
    if (active) item.setAttribute('aria-current','page'); else item.removeAttribute('aria-current');
  });
  const target = document.getElementById('page-' + pageName);
  document.getElementById('breadcrumbTitle').textContent = target ? target.dataset.title : pageName;
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('menuButton').setAttribute('aria-expanded','false');
  window.scrollTo({top:0,behavior:'smooth'});
  setTimeout(function () { document.getElementById('mainContent').focus(); }, 50);
}

function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toastText').textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(function () { toast.classList.remove('show'); }, 2800);
}

function openAlertModal() {
  document.getElementById('alertModal').hidden = false;
  document.getElementById('modalBackdrop').hidden = false;
  document.querySelector('#alertModal input').focus();
}

let activeAlertEventStatusButton = null;
function openAlertEventModal(statusButton) {
  activeAlertEventStatusButton = statusButton;
  const status = statusButton.dataset.status || statusButton.textContent.trim();
  document.getElementById('alertEventStatus').value = status;
  document.getElementById('alertEventNote').value = '';
  document.getElementById('alertEventModal').hidden = false;
  document.getElementById('modalBackdrop').hidden = false;
  document.getElementById('alertEventNote').focus();
}

function openContentModal(type) {
  const isSensitiveWord = type === 'sensitive-word';
  document.getElementById('contentModalTitle').textContent = isSensitiveWord ? '新增敏感词' : '新建配置';
  document.getElementById('contentModalSubtitle').textContent = isSensitiveWord ? '为 学伴对话新增敏感词内容' : '为核心功能新增内容或运行配置';
  document.getElementById('contentNameLabel').textContent = isSensitiveWord ? '敏感词 / 词组 *' : '配置名称 *';
  const input = document.getElementById('contentNameInput');
  input.placeholder = isSensitiveWord ? '请输入敏感词或词组' : '请输入配置名称';
  input.value = '';
  document.getElementById('contentModal').hidden = false;
  document.getElementById('modalBackdrop').hidden = false;
  input.focus();
}

function openAbilityModal() {
  document.getElementById('abilityModal').hidden = false;
  document.getElementById('modalBackdrop').hidden = false;
  document.querySelector('#abilityModal input').focus();
}

let editingEntitlementRow = null;
function openEntitlementModal(row) {
  const form = document.getElementById('entitlementForm');
  form.reset();
  editingEntitlementRow = row || null;
  if (row) {
    const cells = Array.from(row.querySelectorAll('td')).map(function (cell) { return cell.innerText.trim(); });
    document.getElementById('entitlementNameInput').value = cells[0];
    document.getElementById('entitlementFeature').value = cells[1];
    document.getElementById('entitlementType').value = cells[2] === '次数' ? 'times' : 'token';
    document.getElementById('entitlementPeriod').value = cells[3];
    document.getElementById('entitlementLimit').value = cells[4].replace(/[^\d.]/g, '') || '';
  } else document.getElementById('entitlementType').value = 'token';
  document.getElementById('entitlementUnit').textContent = document.getElementById('entitlementType').value === 'times' ? '次' : 'Token';
  document.getElementById('entitlementModalTitle').textContent = row ? '编辑配置' : '新建配置';
  document.querySelector('#entitlementForm .modal-actions .button.primary').textContent = row ? '保存修改' : '创建';
  document.getElementById('entitlementModal').hidden = false;
  document.getElementById('modalBackdrop').hidden = false;
  document.getElementById('entitlementNameInput').focus();
}

function closeOverlays() {
  document.getElementById('dialogueChatModal').hidden = true;
  document.getElementById('alertModal').hidden = true;
  document.getElementById('alertEventModal').hidden = true;
  document.getElementById('roleConfigModal').hidden = true;
  document.getElementById('contentModal').hidden = true;
  document.getElementById('abilityModal').hidden = true;
  document.getElementById('entitlementModal').hidden = true;
  document.getElementById('billingModelFormModal').hidden = true;
  document.getElementById('modelDeleteConfirmModal').hidden = true;
  document.getElementById('detailDrawer').hidden = true;
  document.getElementById('commandPalette').hidden = true;
  document.getElementById('modalBackdrop').hidden = true;
}

function applyQuickRange(button) {
  const ranges = { today: ['2026-09-23', '2026-09-23'], seven: ['2026-09-17', '2026-09-23'], month: ['2026-09-01', '2026-09-23'] };
  const filter = button.closest('.filter-bar');
  const range = ranges[button.dataset.range];
  if (!filter || !range) return;
  const dates = filter.querySelectorAll('input[type="date"]');
  if (dates.length >= 2) { dates[0].value = range[0]; dates[1].value = range[1]; }
  filter.querySelectorAll('[data-range]').forEach(function (item) {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
}

hydrateIcons(document);

document.addEventListener('click', function (event) {
  const homeworkDetailAction = event.target.closest('[data-homework-detail]');
  if (homeworkDetailAction) {
    event.stopPropagation();
    selectedHomeworkKey = homeworkDetailAction.dataset.homeworkDetail;
    document.getElementById('page-homework-detail').dataset.rendered = 'false';
    navigate('homework-detail');
    return;
  }
  if (event.target.closest('[data-homework-detail-back]')) {
    navigate('feature-homework');
    return;
  }
  const dictationDetailAction = event.target.closest('[data-dictation-detail]');
  if (dictationDetailAction) {
    event.stopPropagation();
    selectedDictationKey = dictationDetailAction.dataset.dictationDetail;
    document.getElementById('page-dictation-detail').dataset.rendered = 'false';
    navigate('dictation-detail');
    return;
  }
  if (event.target.closest('[data-dictation-back]')) {
    navigate('feature-dictation');
    return;
  }
  const fingerWordDetailAction = event.target.closest('[data-finger-word-detail]');
  if (fingerWordDetailAction) {
    event.stopPropagation();
    selectedFingerWordKey = fingerWordDetailAction.dataset.fingerWordDetail;
    document.getElementById('page-finger-word-detail').dataset.rendered = 'false';
    navigate('finger-word-detail');
    return;
  }
  if (event.target.closest('[data-finger-word-back]')) {
    navigate('feature-dictionary');
    return;
  }
  const dialogueDetailAction = event.target.closest('[data-ai-dialogue-detail]');
  if (dialogueDetailAction) {
    event.stopPropagation();
    selectedAIDialogueKey = dialogueDetailAction.dataset.aiDialogueDetail;
    document.getElementById('page-ai-dialogue-detail').dataset.rendered = 'false';
    navigate('ai-dialogue-detail');
    return;
  }
  if (event.target.closest('[data-ai-dialogue-back]')) {
    navigate('feature-dialogue');
    return;
  }
  const dialogueExpandButton = event.target.closest('[data-dialogue-expand]');
  if (dialogueExpandButton) {
    const rows = (aiDialogueDetailRows[selectedAIDialogueKey] || []).slice().sort(function (a, b) {
      return new Date(b[2]) - new Date(a[2]);
    });
    const row = rows[Number(dialogueExpandButton.dataset.dialogueIndex)];
    if (!row) return;
    const status = row[4] === '已回复' ? '<span class="status-pill success">已回复</span>' : '<span class="status-pill warning">未回复</span>';
    document.getElementById('dialogueChatMeta').innerHTML = escapeBillingText(row[2]) + ' · 对话时长 ' + escapeBillingText(row[3]) + ' · ' + status;
    const turns = aiDialogueChatTurns[selectedAIDialogueKey + '-' + dialogueExpandButton.dataset.dialogueIndex] || [[row[0], row[1]]];
    document.getElementById('dialogueChatMessages').innerHTML = turns.map(function (turn) {
      const answer = turn[1] === '—' ? '暂无回复' : turn[1];
      return '<div class="chat-turn"><div class="chat-message user"><div class="chat-message-content"><span class="chat-sender">用户</span><div class="chat-bubble">'+escapeBillingText(turn[0])+'</div></div><span class="chat-avatar" aria-hidden="true">用</span></div><div class="chat-message assistant"><span class="chat-avatar" aria-hidden="true">AI</span><div class="chat-message-content"><span class="chat-sender">AI 助手</span><div class="chat-bubble">'+escapeBillingText(answer)+'</div></div></div></div>';
    }).join('');
    document.getElementById('dialogueChatModal').hidden = false;
    document.getElementById('modalBackdrop').hidden = false;
    return;
  }
  const homeworkThumb = event.target.closest('.homework-thumb');
  if (homeworkThumb) {
    event.stopPropagation();
    const preview = document.getElementById('homeworkImagePreview');
    preview.showModal();
    return;
  }
  if (event.target.closest('.homework-preview-close')) {
    document.getElementById('homeworkImagePreview').close();
    return;
  }
  if (event.target.id === 'homeworkImagePreview') {
    document.getElementById('homeworkImagePreview').close();
    return;
  }
  const nav = event.target.closest('[data-page]');
  const navTarget = event.target.closest('[data-nav-target]');
  const alertEnabledToggle = event.target.closest('.alert-enabled-toggle');
  const entitlementToggle = event.target.closest('.entitlement-toggle');
  const alertEventAction = event.target.closest('[data-alert-event-action]');
  const deviceFilterAction = event.target.closest('[data-device-filter-action]');
  const userFilterAction = event.target.closest('[data-user-filter-action]');
  const homeworkFilterAction = event.target.closest('[data-homework-filter-action]');
  const drawer = event.target.closest('[data-drawer]');
  const segmentButton = event.target.closest('.segmented button');
  const subnavButton = event.target.closest('.subnav button');
  const rangeButton = event.target.closest('[data-range]');
  const alertAction = event.target.closest('[data-alert-action]');
  if (alertEnabledToggle) {
    event.stopPropagation();
    const enabled = alertEnabledToggle.getAttribute('aria-checked') === 'true';
    alertEnabledToggle.setAttribute('aria-checked', String(!enabled));
    showToast(enabled ? '告警配置已停用' : '告警配置已启用');
    return;
  }
  if (entitlementToggle) {
    event.stopPropagation();
    const enabled = entitlementToggle.getAttribute('aria-checked') === 'true';
    entitlementToggle.setAttribute('aria-checked', String(!enabled));
    showToast(enabled ? '权益配置已停用' : '权益配置已启用');
    return;
  }
  if (alertEventAction) {
    event.stopPropagation();
    openAlertEventModal(alertEventAction);
    return;
  }
  if (deviceFilterAction) {
    const filter = deviceFilterAction.closest('.device-filter');
    if (deviceFilterAction.dataset.deviceFilterAction === 'reset' && filter) {
      const dates = filter.querySelectorAll('input[type="date"]');
      if (dates.length >= 2) { dates[0].value = '2026-09-23'; dates[1].value = '2026-09-23'; }
      filter.querySelectorAll('[data-range]').forEach(function (item) {
        const active = item.dataset.range === 'today';
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      showToast('筛选条件已重置');
    } else {
      showToast('已按当前条件更新设备数据');
    }
    return;
  }
  if (userFilterAction) {
    const filter = userFilterAction.closest('.user-filter');
    if (userFilterAction.dataset.userFilterAction === 'reset' && filter) {
      const dates = filter.querySelectorAll('input[type="date"]');
      if (dates.length >= 2) { dates[0].value = '2026-09-23'; dates[1].value = '2026-09-23'; }
      filter.querySelectorAll('[data-range]').forEach(function (item) {
        const active = item.dataset.range === 'today';
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      showToast('筛选条件已重置');
    } else {
      showToast('已按当前条件更新用户数据');
    }
    return;
  }
  if (homeworkFilterAction) {
    const filter = homeworkFilterAction.closest('.homework-filter');
    if (homeworkFilterAction.dataset.homeworkFilterAction === 'reset' && filter) {
      const dates = filter.querySelectorAll('input[type="date"]');
      if (dates.length >= 2) { dates[0].value = '2026-09-23'; dates[1].value = '2026-09-23'; }
      filter.querySelectorAll('[data-range]').forEach(function (item) {
        const active = item.dataset.range === 'today';
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      showToast('筛选条件已重置');
    } else {
      showToast('已按当前条件更新作业数据');
    }
    return;
  }
  if (nav) navigate(nav.dataset.page);
  if (navTarget) {
    closeOverlays();
    navigate(navTarget.dataset.navTarget);
    if (navTarget.dataset.targetTab) {
      const targetPage = document.getElementById('page-' + navTarget.dataset.navTarget);
      switchAlertTab(targetPage, navTarget.dataset.targetTab);
    }
    if (navTarget.dataset.mnTabTarget) {
      const targetTab = document.querySelector('#page-alerts-new [data-mn-tab="' + navTarget.dataset.mnTabTarget + '"]');
      if (targetTab) targetTab.click();
    }
  }
  if (drawer) renderDrawer(drawer.dataset.drawer);
  if (segmentButton) {
    segmentButton.parentElement.querySelectorAll('button').forEach(function (item) { item.classList.toggle('active', item === segmentButton); });
    showToast('图表已切换为“' + segmentButton.textContent + '”');
  }
  if (subnavButton) {
    subnavButton.parentElement.querySelectorAll('button').forEach(function (item) {
      const active = item === subnavButton;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    renderTabView(subnavButton.closest('.page'), subnavButton.textContent.trim());
    showToast('已切换到“' + subnavButton.textContent + '”视图');
  }
  if (rangeButton) {
    applyQuickRange(rangeButton);
    showToast('已切换至“' + rangeButton.textContent + '”数据');
  }
  if (alertAction) {
    const alertPage = document.getElementById('page-alerts');
    if (alertAction.dataset.alertAction === 'abnormal') {
      const statusSelect = alertPage.querySelector('#alertStatusFilter');
      if (statusSelect) statusSelect.value = 'abnormal';
      filterAlertMetricRows(alertPage, 'abnormal');
      showToast('已筛选异常指标');
    }
    if (alertAction.dataset.alertAction === 'events') {
      switchAlertTab(alertPage, '告警事件');
      showToast('已跳转至“告警事件”视图');
    }
  }
  if (event.target.closest('#newAlertButton') || event.target.closest('#newAlertButton2')) openAlertModal();
  if (event.target.closest('[data-role-config-entry]')) {
    document.getElementById('roleConfigModal').hidden = false;
    document.getElementById('modalBackdrop').hidden = false;
  }
  const roleTemplate = event.target.closest('.role-template-list button');
  if (roleTemplate) roleTemplate.parentElement.querySelectorAll('button').forEach(function (button) { button.classList.toggle('active', button === roleTemplate); });
  const roleSegment = event.target.closest('.role-config-segmented button');
  if (roleSegment) roleSegment.parentElement.querySelectorAll('button').forEach(function (button) { button.classList.toggle('active', button === roleSegment); });
  const roleSwitch = event.target.closest('#roleConfigModal .switch-toggle');
  if (roleSwitch) roleSwitch.setAttribute('aria-checked', String(roleSwitch.getAttribute('aria-checked') !== 'true'));
  if (event.target.closest('#newContentConfigButton')) openContentModal('config');
  if (event.target.closest('#newSensitiveWordButton')) openContentModal('sensitive-word');
  if (event.target.closest('#newAbilityButton')) openAbilityModal();
  if (event.target.closest('#newEntitlementButton')) openEntitlementModal();
  const entitlementEdit = event.target.closest('[data-entitlement-edit]');
  if (entitlementEdit) openEntitlementModal(entitlementEdit.closest('tr'));
  const entitlementDelete = event.target.closest('[data-entitlement-delete]');
  if (entitlementDelete) {
    const row = entitlementDelete.closest('tr');
    if (window.confirm('确定删除权益配置“' + row.querySelector('td').innerText.trim() + '”吗？')) { row.remove(); showToast('权益配置已删除'); }
  }
  if (event.target.closest('#applyEntitlementFilter')) showToast('已按适用功能筛选权益配置');
  if (event.target.closest('[data-close-modal]') || event.target.id === 'modalBackdrop') closeOverlays();
});

document.addEventListener('keydown', function (event) {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.homework-thumb[role="button"]')) {
    event.preventDefault();
    document.getElementById('homeworkImagePreview').showModal();
  }
});

document.addEventListener('change', function (event) {
  if (event.target.id === 'alertStatusFilter') filterAlertMetricRows(document.getElementById('page-alerts'), event.target.value);
  if (event.target.id === 'entitlementType') document.getElementById('entitlementUnit').textContent = event.target.value === 'times' ? '次' : 'Token';
});

document.getElementById('mainNav').addEventListener('click', function (event) {
  const button = event.target.closest('.nav-item');
  if (button && button.hasAttribute('data-overview-toggle')) {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    document.getElementById('overviewChildren').hidden = !expanded;
    return;
  }
  if (button && button.hasAttribute('data-billing-toggle')) {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    document.getElementById('billingChildren').hidden = !expanded;
    return;
  }
  if (button && button.hasAttribute('data-entitlements-toggle')) {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    document.getElementById('entitlementsChildren').hidden = !expanded;
    return;
  }
  if (button && button.hasAttribute('data-feature-management-toggle')) {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    document.getElementById('featureManagementChildren').hidden = !expanded;
    return;
  }
  if (button && button.hasAttribute('data-monitoring-toggle')) {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    document.getElementById('monitoringChildren').hidden = !expanded;
    return;
  }
  if (button && button.hasAttribute('data-models-toggle')) {
    const expanded = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(expanded));
    document.getElementById('modelsChildren').hidden = !expanded;
    return;
  }
  if (button) navigate(button.dataset.page);
});

document.getElementById('menuButton').addEventListener('click', function () {
  const sidebar = document.getElementById('sidebar');
  const open = sidebar.classList.toggle('open');
  this.setAttribute('aria-expanded', String(open));
});


document.getElementById('closeDrawer').addEventListener('click', closeOverlays);
document.getElementById('applyFilter').addEventListener('click', function () { showToast('已按当前条件更新数据'); });
document.getElementById('resetFilter').addEventListener('click', function () {
  document.getElementById('startDate').value = '2026-09-23';
  document.getElementById('endDate').value = '2026-09-23';
  const dashboardFunctionSelect = document.querySelector('#page-dashboard .filter-bar select');
  if (dashboardFunctionSelect) dashboardFunctionSelect.selectedIndex = 0;
  document.querySelectorAll('#page-dashboard [data-range]').forEach(function (item) {
    const active = item.dataset.range === 'today';
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  showToast('筛选条件已重置');
});

document.getElementById('alertForm').addEventListener('submit', function (event) {
  event.preventDefault();
  closeOverlays();
  showToast('告警配置已创建并启用');
});

document.getElementById('roleConfigForm').addEventListener('submit', function (event) {
  event.preventDefault();
  closeOverlays();
  showToast('角色配置已保存');
});

document.getElementById('alertEventForm').addEventListener('submit', function (event) {
  event.preventDefault();
  if (!activeAlertEventStatusButton) return;
  const status = document.getElementById('alertEventStatus').value;
  const classes = { '待处理': 'danger', '处理中': 'warning', '已处理': 'success' };
  activeAlertEventStatusButton.className = 'alert-event-status status-pill ' + classes[status];
  activeAlertEventStatusButton.dataset.status = status;
  activeAlertEventStatusButton.textContent = status;
  const recoveryTime = activeAlertEventStatusButton.closest('tr').querySelector('[data-recovery-time]');
  if (recoveryTime && status === '已处理') recoveryTime.textContent = '刚刚';
  if (recoveryTime && status !== '已处理') recoveryTime.textContent = '—';
  activeAlertEventStatusButton = null;
  closeOverlays();
  showToast('告警事件已更新为“' + status + '”');
});

document.getElementById('contentForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const isSensitiveWord = document.getElementById('contentModalTitle').textContent === '新增敏感词';
  closeOverlays();
  showToast(isSensitiveWord ? '敏感词已新增' : '配置已创建');
});

document.getElementById('abilityForm').addEventListener('submit', function (event) {
  event.preventDefault();
  closeOverlays();
  showToast('能力配置已创建');
});

document.getElementById('entitlementForm').addEventListener('submit', function (event) {
  event.preventDefault();
  if (editingEntitlementRow) {
    const cells = editingEntitlementRow.querySelectorAll('td');
    cells[0].innerHTML = '<strong>' + escapeBillingText(document.getElementById('entitlementNameInput').value.trim()) + '</strong>';
    cells[1].textContent = document.getElementById('entitlementFeature').value;
    cells[2].textContent = document.getElementById('entitlementType').value === 'times' ? '次数' : 'Token';
    cells[3].textContent = document.getElementById('entitlementPeriod').value;
    cells[4].textContent = document.getElementById('entitlementLimit').value + (document.getElementById('entitlementType').value === 'times' ? ' 次' : ' Token');
    editingEntitlementRow = null;
    closeOverlays();
    showToast('权益配置已更新');
    return;
  }
  closeOverlays();
  showToast('权益配置已创建');
});

document.getElementById('billingModelTableBody').addEventListener('click', function (event) {
  const button = event.target.closest('[data-billing-model-action]');
  if (!button) return;
  const model = billingModels.find(function (item) { return item.id === button.dataset.modelId; });
  if (!model) return;
  if (button.dataset.billingModelAction === 'edit') {
    openBillingModelForm(model.id);
    return;
  }
  if (window.confirm('确认删除模型“' + model.name + '”吗？删除后将不再参与计费计量。')) {
    billingModels = billingModels.filter(function (item) { return item.id !== model.id; });
    refreshBillingModelCount();
    renderBillingModelTable();
    showToast('模型已删除');
  }
});

document.getElementById('billingModelForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const editId = document.getElementById('billingModelEditId').value;
  const value = function (id) { return document.getElementById(id).value.trim(); };
  const payload = {
    name: value('billingModelName'),
    code: value('billingModelCode'),
    provider: value('billingModelProvider'),
    sort: value('billingModelSort'),
    docs: value('billingModelDocs'),
    remarks: value('billingModelRemarks'),
    wsUrl: value('billingModelWsUrl'),
    secret: modelFormMode === 'copy' ? value('billingModelCopySecret') : value('billingModelSecret'),
    connectTimeout: value('billingModelConnectTimeout'),
    resultTimeout: value('billingModelResultTimeout'),
    preRoll: value('billingModelPreRoll'),
    outputDir: modelFormMode === 'copy' ? value('billingModelCopyOutput') : value('billingModelOutputDir'),
    serviceAddress: value('billingModelCopyService'),
    invokeModelName: value('billingModelInvokeName'),
    enabled: document.getElementById('billingModelEnabled').getAttribute('aria-checked') === 'true'
  };
  if (modelFormMode === 'copy') {
    const source = modelCategoryData[activeModelCategory].find(function (item) { return item.id === editId; });
    if (source) modelCategoryData[activeModelCategory].push(Object.assign({}, source, payload, { id: source.id + '_copy_' + billingModelSequence++, isDefault: false }));
    showToast('模型副本已创建');
  } else {
    Object.keys(modelCategoryData).some(function (category) {
      const model = modelCategoryData[category].find(function (item) { return item.id === editId; });
      if (!model) return false;
      Object.assign(model, payload);
      return true;
    });
    showToast('模型已更新');
  }
  renderBillingModelTable();
  document.getElementById('billingModelFormModal').hidden = true;
  document.getElementById('modalBackdrop').hidden = true;
});

document.getElementById('confirmDeleteModelButton').addEventListener('click', function () {
  const models = modelCategoryData[activeModelCategory] || [];
  const index = models.findIndex(function (item) { return item.id === pendingModelDeletion; });
  if (index >= 0) models.splice(index, 1);
  pendingModelDeletion = null;
  document.getElementById('modelDeleteConfirmModal').hidden = true;
  document.getElementById('modalBackdrop').hidden = true;
  renderBillingModelTable();
  showToast('模型已删除');
});

document.getElementById('billingModelEnabled').addEventListener('click', function (event) {
  const toggle = event.currentTarget;
  toggle.setAttribute('aria-checked', String(toggle.getAttribute('aria-checked') !== 'true'));
});
document.getElementById('toggleModelSecret').addEventListener('click', function () {
  const secret = document.getElementById('billingModelSecret');
  const visible = secret.type === 'password';
  secret.type = visible ? 'text' : 'password';
  this.setAttribute('aria-pressed', String(visible));
  this.setAttribute('aria-label', visible ? '隐藏 API 密钥' : '显示 API 密钥');
});

const featureTrendChart = document.getElementById('featureTrendChart');
if (featureTrendChart) {
  const trendTooltip = document.getElementById('trendTooltip');
  const trendGuide = document.getElementById('trendHoverGuide');
  const trendData = [
    { date: '09/17', values: ['5,200', '3,700', '2,500', '1,100'] },
    { date: '09/18', values: ['6,400', '4,500', '3,300', '1,500'] },
    { date: '09/19', values: ['7,800', '6,200', '4,600', '2,400'] },
    { date: '09/20', values: ['9,200', '7,000', '6,000', '3,100'] },
    { date: '09/21', values: ['12,000', '9,000', '7,300', '4,100'] },
    { date: '09/22', values: ['15,200', '10,200', '8,500', '5,300'] },
    { date: '09/23', values: ['16,000', '11,000', '9,000', '6,200'] }
  ];
  const trendNames = ['学伴对话', '指尖查词', '听写练习', '作业批改'];
  const trendColors = ['#2f6fed', '#4bbfb4', '#7e64cf', '#e49a42'];
  function showTrendData(index, clientX) {
    const safeIndex = Math.max(0, Math.min(trendData.length - 1, index));
    const data = trendData[safeIndex];
    const chartWidth = featureTrendChart.getBoundingClientRect().width;
    const pointX = ((48 + safeIndex * (692 / 6)) / 760) * chartWidth;
    trendGuide.setAttribute('x1', String(48 + safeIndex * (692 / 6)));
    trendGuide.setAttribute('x2', String(48 + safeIndex * (692 / 6)));
    trendGuide.hidden = false;
    trendTooltip.innerHTML = '<strong>' + data.date + ' 调用量</strong>' + data.values.map(function (value, itemIndex) {
      return '<span><i style="background:' + trendColors[itemIndex] + '"></i><label>' + trendNames[itemIndex] + '</label><b>' + value + '</b></span>';
    }).join('');
    trendTooltip.hidden = false;
    trendTooltip.style.left = Math.max(8, Math.min(chartWidth - 8, clientX || pointX)) + 'px';
    trendTooltip.style.top = '36px';
    trendTooltip.style.transform = (pointX > chartWidth * .72 ? 'translate(-105%, 0)' : 'translate(10px, 0)');
  }
  featureTrendChart.addEventListener('pointermove', function (event) {
    const rect = featureTrendChart.getBoundingClientRect();
    const graphStart = rect.width * (48 / 760);
    const graphWidth = rect.width * (692 / 760);
    const position = Math.max(0, Math.min(1, (event.clientX - rect.left - graphStart) / graphWidth));
    showTrendData(Math.round(position * 6), event.clientX - rect.left);
  });
  featureTrendChart.addEventListener('pointerleave', function () { trendTooltip.hidden = true; trendGuide.hidden = true; });
  featureTrendChart.querySelector('.trend-hit-area').addEventListener('focus', function () { showTrendData(6); });
  featureTrendChart.querySelector('.trend-hit-area').addEventListener('blur', function () { trendTooltip.hidden = true; trendGuide.hidden = true; });
}

const overviewTrendData = {
  device: { title: '设备指标', names: ['总设备量', '在线设备量', '新增设备量', '解绑设备量'], values: [['47,920','48,010','48,120','48,230','48,350','48,510','48,620'],['10,806','11,112','11,486','11,842','12,096','12,416','12,684'],['218','236','252','244','278','305','326'],['35','36','36','38','41','39','42']] },
  user: { title: '用户指标', names: ['总用户量', '活跃用户量', '新增用户数', '总访问量'], values: [['34,926','35,124','35,436','35,782','36,106','36,486','36,842'],['14,968','15,426','15,988','16,542','17,106','17,804','18,642'],['214','226','231','239','247','256','268'],['82,206','88,642','96,115','104,768','112,932','120,284','126,408']] },
  function: { title: '功能日活', names: ['学伴对话', '指尖查词', '听写练习', '作业批改'], values: [['8,920','9,468','10,124','10,806','11,436','12,082','12,680'],['6,418','6,902','7,486','7,962','8,486','8,986','9,416'],['5,236','5,614','6,072','6,486','6,928','7,382','7,805'],['3,412','3,698','4,126','4,462','4,768','5,026','5,218']] }
};

document.querySelectorAll('[data-overview-chart]').forEach(function (chart) {
  const config = overviewTrendData[chart.dataset.overviewChart];
  const svg = chart.querySelector('svg');
  if (!config || !svg) return;
  const guide = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  guide.setAttribute('class', 'trend-hover-guide');
  guide.setAttribute('y1', '20');
  guide.setAttribute('y2', '205');
  guide.setAttribute('hidden', '');
  svg.appendChild(guide);
  const tooltip = document.createElement('div');
  tooltip.className = 'trend-tooltip';
  tooltip.hidden = true;
  chart.appendChild(tooltip);
  const colors = ['#2f6fed', '#4bbfb4', '#7e64cf', '#e49a42'];
  function showOverviewTrend(index, clientX) {
    const pointIndex = Math.max(0, Math.min(6, index));
    const point = 48 + pointIndex * (692 / 6);
    const width = chart.getBoundingClientRect().width;
    const pointX = (point / 760) * width;
    guide.setAttribute('x1', String(point));
    guide.setAttribute('x2', String(point));
    guide.removeAttribute('hidden');
    tooltip.innerHTML = '<strong>09/' + String(17 + pointIndex).padStart(2, '0') + ' ' + config.title + '</strong>' + config.values.map(function (series, itemIndex) { return '<span><i style="background:' + colors[itemIndex] + '"></i><label>' + config.names[itemIndex] + '</label><b>' + series[pointIndex] + '</b></span>'; }).join('');
    tooltip.hidden = false;
    tooltip.style.left = Math.max(8, Math.min(width - 8, clientX || pointX)) + 'px';
    tooltip.style.top = '30px';
    tooltip.style.transform = pointX > width * .72 ? 'translate(-105%, 0)' : 'translate(10px, 0)';
  }
  chart.addEventListener('pointermove', function (event) {
    const rect = chart.getBoundingClientRect();
    const start = rect.width * (48 / 760);
    const width = rect.width * (692 / 760);
    const position = Math.max(0, Math.min(1, (event.clientX - rect.left - start) / width));
    showOverviewTrend(Math.round(position * 6), event.clientX - rect.left);
  });
  chart.addEventListener('pointerleave', function () { tooltip.hidden = true; guide.setAttribute('hidden', ''); });
});

document.addEventListener('keydown', function (event) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    document.getElementById('commandPalette').hidden = false;
    document.getElementById('commandInput').focus();
  }
  if (event.key === 'Escape') closeOverlays();
});
