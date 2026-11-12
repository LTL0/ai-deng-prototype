(function () {
  const names = ['学伴对话', '听写练习', '指尖查词', '作业批改'];
  const modelOptions = [
    ['教育对话主模型', '对话语音识别', '儿童语音合成', '对话意图路由', '对话召回排序'],
    ['听写语音识别', '听写语音合成', '听写结果评估', '发音评分模型'],
    ['查词识别模型', '手部关键点检测', '查词关键词检测'],
    ['作业批改推理模型', '作业图像识别', '作业题目切分', '作业图像质检', '作业图片质量检测']
  ];
  const colors = ['#2f6fed', '#8063ce', '#23a99b', '#e29a3b'];
  const features = [
    { name: names[0], state: '服务异常', kind: 'danger', detail: 'LLM 可用率低于阈值', calls: '18,462', current: 128, peak: 246, peakTime: '18:32', threshold: 250, cost: 1486, trend: [38,32,28,26,42,82,136,164,148,196,246,208,176,128] },
    { name: names[1], state: '运行正常', kind: 'success', detail: '2 项依赖服务均正常', calls: '10,186', current: 74, peak: 148, peakTime: '19:06', threshold: 160, cost: 336, trend: [18,14,12,10,22,48,92,108,96,122,136,148,102,74] },
    { name: names[2], state: '访问量预警', kind: 'warning', detail: '当前 196 次/分，高于阈值 180', calls: '13,208', current: 196, peak: 226, peakTime: '20:18', threshold: 180, cost: 528, trend: [26,22,18,16,32,56,108,142,128,164,186,204,226,196] },
    { name: names[3], state: '服务受影响', kind: 'danger', detail: '依赖 LLM 服务异常', calls: '6,536', current: 38, peak: 86, peakTime: '18:46', threshold: 100, cost: 936, trend: [12,10,8,6,14,28,46,64,58,76,86,72,56,38] }
  ];
  const alertRules = features.map((f, featureIndex) => ({ featureIndex, threshold: f.threshold }));
  let alertRuleFeatureFilter = '全部功能';
  const services = [
    {name:'ASR',model:'对话语音识别',type:'语音识别',features:[0],value:99.92,latency:'480ms',status:'正常'},
    {name:'TTS',model:'儿童语音合成',type:'语音合成',features:[0],value:99.87,latency:'620ms',status:'正常'},
    {name:'LLM',model:'教育对话主模型',type:'大语言模型',features:[0],value:94.30,latency:'2.8s',status:'异常'},
    {name:'音频下发',model:'音频下发服务',type:'音频播放链路',features:[1],value:99.96,latency:'210ms',status:'正常'},
    {name:'手部关键点检测',model:'手部关键点检测',type:'视觉识别',features:[2],value:99.78,latency:'310ms',status:'正常'},
    {name:'OCR',model:'查词识别模型',type:'文字识别',features:[2],value:99.31,latency:'890ms',status:'正常'},
    {name:'作业批改',model:'作业批改推理模型',type:'规则模型',features:[3],value:99.20,latency:'38.4s',status:'正常'}
  ];
  let availabilityModelFilter = '全部模型';
  let availabilityStatusFilter = '全部状态';
  const eventRows = [
    {title:'LLM 可用率下降', type:'服务异常', related:[0,3], value:'94.30% < 97%', since:'2026-09-23 20:20:08', state:'触发中', handling:'处理中', owner:'算法平台', note:'主模型超时增加，正在排查供应商接口。'},
    {title:'指尖查词访问量过高', type:'访问量预警', related:[2], value:'196 > 180 次/分', since:'2026-09-23 20:28:18', state:'触发中', handling:'待处理', owner:'产品运维', note:''},
    {title:'听写练习访问量恢复', type:'访问量预警', related:[1], value:'74 < 160 次/分', since:'2026-09-23 19:06:42', state:'已恢复', handling:'已处理', owner:'产品运维', note:'高峰结束，访问量已恢复。'}
  ];
  const costRows = [
    {name:'ASR',related:[0],unit:'音频分钟',usage:'6,000 分钟',price:'¥ 0.02 / 分钟',cost:120},
    {name:'TTS',related:[0,1],unit:'文本长度',usage:'900,000 字符',price:'¥ 0.10 / 千字符',cost:90},
    {name:'LLM',related:[0,3],unit:'Token',usage:'输入 19.82M / 输出 8.64M',price:'输入 ¥ 40 / M · 输出 ¥ 188.102 / M',cost:2422},
    {name:'手部关键点检测',related:[2],unit:'次数',usage:'68,000 次',price:'¥ 0.001 / 次',cost:68},
    {name:'OCR',related:[2,3],unit:'次数',usage:'100,000 次',price:'¥ 0.004 / 次',cost:400},
    {name:'作业批改',related:[3],unit:'次数',usage:'6,200 次',price:'¥ 0.03 / 次',cost:186}
  ];
  const pill = (label,kind) => '<span class="status-pill '+kind+'">'+label+'</span>';
  const money = value => '¥ '+value.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
  const related = list => list.map(i => '<span class="mn-feature-tag" style="--feature-color:'+colors[i]+'">'+names[i]+'</span>').join('');
  const includes = () => true;
  const head = (title,subtitle,action) => '<div class="mn-panel-head"><div><h2>'+title+'</h2><p>'+subtitle+'</p></div>'+(action || '')+'</div>';
  const table = (headers,rows) => '<div class="table-wrap"><table><thead><tr>'+headers.map(h=>'<th>'+h+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(cell=>'<td>'+cell+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
  function graph(series,max,unit,threshold) {
    const x = i => 48 + i * 676 / (series[0].values.length - 1), y = (v,scale=max) => 167 - v/scale*136;
    let svg = '<svg class="mn-graph" viewBox="0 0 760 205" role="img" aria-label="按时间查看'+unit+'趋势"><title>'+series.map(s=>s.name).join('、')+'，横轴为时间，纵轴单位为'+unit+'</title>';
    [0,max/2,max].forEach(v=>{svg+='<line x1="48" x2="724" y1="'+y(v)+'" y2="'+y(v)+'" stroke="#e7edf5"/><text x="38" y="'+(y(v)+4)+'" text-anchor="end" fill="#687a93" font-size="11">'+Math.round(v)+'</text>';});
    const rightSeries=series.find(s=>s.axis==='right');
    if(rightSeries){[0,rightSeries.max/2,rightSeries.max].forEach(v=>{svg+='<text x="734" y="'+(y(v,rightSeries.max)+4)+'" text-anchor="start" fill="#687a93" font-size="11">'+Math.round(v)+'</text>';});}
    if(threshold) svg+='<line x1="48" x2="724" y1="'+y(threshold)+'" y2="'+y(threshold)+'" stroke="#d18825" stroke-dasharray="5 4"/><text x="724" y="'+(y(threshold)-7)+'" text-anchor="end" fill="#a96c17" font-size="10">阈值 '+threshold+' '+unit+'</text>';
    series.forEach(s=>{const scale=s.max||max;svg+='<path d="'+s.values.map((v,i)=>(i?'L':'M')+x(i)+' '+y(v,scale)).join(' ')+'" fill="none" stroke="'+s.color+'" stroke-width="2.7" stroke-linecap="round" stroke-linejoin="round"/>';s.values.forEach((v,i)=>{svg+='<circle cx="'+x(i)+'" cy="'+y(v,scale)+'" r="4" fill="'+s.color+'" fill-opacity="0"><title>'+s.name+'：'+v+' '+(s.unit||unit)+'</title></circle>';});});
    ['00:00','06:00','12:00','18:00','23:00'].forEach((t,i)=>{svg+='<text x="'+(48+i*169)+'" y="193" text-anchor="middle" fill="#687a93" font-size="11">'+t+'</text>';});
    return svg+'</svg>';
  }
  function availability() {
    const shown = services.filter(s=>(availabilityModelFilter==='全部模型'||s.model===availabilityModelFilter)&&(availabilityStatusFilter==='全部状态'||s.status===availabilityStatusFilter));
    return '<section class="panel mn-panel">'+table(['模型名称','模型类型','关联功能','可用率','预警阈值','P95 耗时','最近探测','状态','操作'],shown.map(s=>{const i=services.indexOf(s);return ['<strong>'+s.model+'</strong>','<strong>'+s.name+'</strong><small>'+s.type+'</small>',related(s.features),'<b class="'+(s.status==='异常'?'negative':'')+'">'+s.value.toFixed(2)+'%</b>','< '+(s.threshold||97)+'% · 连续 5 分钟',s.latency,'20:32:18',pill(s.status,s.status==='异常'?'danger':'success'),'<button class="text-button" data-mn-service="'+i+'">查看趋势</button><button class="text-button mn-delete-button" type="button" data-mn-delete="'+i+'">删除</button>'];}) )+'<div class="pagination mn-service-pagination"><span>共 '+shown.length+' 条</span><label>每页 <select aria-label="每页条数"><option>10 条</option><option>20 条</option><option>50 条</option></select></label><button type="button" disabled aria-label="上一页">‹</button><button type="button" class="active" aria-current="page">1</button><button type="button" disabled aria-label="下一页">›</button></div></section>';
  }
  function traffic() {
    const shown=features;
    return '<div class="mn-chart-grid">'+shown.map(f=>{const i=features.indexOf(f);return '<section class="panel mn-panel">'+head(f.name+'请求量','','<span class="mn-traffic-caption">按分钟统计 · 当前 '+f.current+' 次/分</span>')+'<div class="mn-chart-stat"><strong>'+f.peak+'<small> 次/分</small></strong><span>时段峰值 · '+f.peakTime+'</span></div>'+'<div class="mn-interactive-chart" data-mn-chart="'+i+'">'+graph([{name:f.name,values:f.trend,color:colors[i]}],300,'次/分',f.threshold)+'<div class="mn-hover-guide" hidden></div><div class="mn-hover-dot" hidden></div><div class="mn-chart-tooltip" hidden></div></div></section>';}).join('')+'</div>'+rulesSection(true);
  }
  function eventsTable(serviceOnly) {
    const rows=eventRows.filter(e=>includes(e.related)&&(!serviceOnly||e.type==='服务异常'));
    return table(['告警内容','影响功能','触发值 / 条件','触发时间','告警状态','处理状态','通知结果','操作'],rows.map(e=>['<strong>'+e.title+'</strong><small>'+e.type+'</small>',related(e.related),e.value,e.since,pill(e.state,e.state==='已恢复'?'success':'danger'),pill(e.handling,e.handling==='已处理'?'success':'info'),'<span class="mn-delivery">短信已送达 · 邮件已送达</span>','<button class="text-button" data-mn-event="'+eventRows.indexOf(e)+'">查看</button>']));
  }
  function alerts() {
    return '<section class="panel mn-panel">'+eventsTable(false)+'</section>';
  }
  function rules(requestLabels) {
    const shownRules=alertRules.map((rule,i)=>({rule,i})).filter(item=>alertRuleFeatureFilter==='全部功能'||features[item.rule.featureIndex].name===alertRuleFeatureFilter);
    const metric=requestLabels?'请求量':'访问量';
    return table(['业务功能','服务异常预警',metric+'阈值','触发持续时间','通知渠道','启用状态','操作'],shownRules.map(({rule,i})=>{const f=features[rule.featureIndex];return [related([rule.featureIndex]),'可用率 < 97% / 无数据 2 分钟',rule.threshold+' 次/分','服务 5 分钟 · '+metric+' 3 分钟','短信 / 邮件','<button class="switch-toggle" type="button" role="switch" aria-checked="true" aria-label="切换'+f.name+'告警" data-mn-toggle><span></span></button>','<button class="text-button" data-mn-rule="'+i+'">编辑</button><button class="text-button mn-delete-button" type="button" data-mn-rule-delete="'+i+'">删除</button>'];}));
  }
  function rulesSection(requestLabels) {
    return '<section class="panel mn-panel mn-inline-rules">'+head('告警策略','')+rules(requestLabels)+'</section>';
  }
  function costs() {
    const total=3286;
    return '<div class="mn-cost-overview"><section class="panel mn-cost-total"><span>所选时段预估成本</span><strong>'+money(total)+'</strong><p>2026-09-23 00:00 — 23:59</p><small>'+'四项功能汇总'+'</small></section><section class="panel mn-panel">'+head('按功能归集成本','共享服务成本按实际调用归属分摊')+'<div class="mn-cost-bars">'+features.map(f=>'<div><span>'+f.name+'</span><div><i style="width:'+Math.max(8,f.cost/1486*100)+'%;background:'+colors[features.indexOf(f)]+'"></i></div><b>'+money(f.cost)+'</b></div>').join('')+'</div></section></div><section class="panel mn-panel">'+head('服务能力成本估算','六项服务分别计量 · 预估金额按时段内价格计算')+table(['服务能力','关联功能','计费单位','时段用量','参考单价','预估成本'],costRows.filter(r=>includes(r.related)).map(r=>['<strong>'+r.name+'</strong>',related(r.related),r.unit,r.usage,r.price,money(r.cost)]))+'<p class="mn-footnote">此表展示服务总用量和总成本；按功能归集金额见上方。音频下发按图示仅检测可用性，不纳入本次成本估算。</p></section>';
  }
  function content(view) { return view==='traffic'?traffic():view==='alerts'?alerts():view==='rules'?rulesSection():view==='costs'?costs():availability(); }
  function repaint() {
    const page=document.querySelector('#page-alerts-new.active,#page-alerts-traffic.active,#page-alerts-events.active,#page-alerts-rules.active');
    if(!page)return;
    const view=page.dataset.mnView;
    page.querySelector('[data-mn-content]').innerHTML=content(view);
    hydrateIcons(page);
  }
  const monitorPages=[['alerts-new','availability','服务可用性'],['alerts-traffic','traffic','请求量监控'],['alerts-events','alerts','告警事件']];
  function availabilityFilterMarkup(){
    const modelOptionsMarkup=['全部模型'].concat(services.map(s=>s.model)).filter((value,index,list)=>list.indexOf(value)===index).map(value=>'<option'+(value===availabilityModelFilter?' selected':'')+'>'+value+'</option>').join('');
    return '<section class="filter-bar overview-filter mn-filter"><div class="overview-function-group"><span class="filter-inline-label">模型名称</span><select data-mn-model-filter aria-label="模型名称筛选">'+modelOptionsMarkup+'</select></div><div class="overview-function-group"><span class="filter-inline-label">状态</span><select data-mn-status-filter aria-label="状态筛选"><option'+(availabilityStatusFilter==='全部状态'?' selected':'')+'>全部状态</option><option'+(availabilityStatusFilter==='正常'?' selected':'')+'>正常</option><option'+(availabilityStatusFilter==='异常'?' selected':'')+'>异常</option></select></div><button class="button primary compact" type="button" data-mn-query>查询</button><button class="button ghost compact" type="button" data-mn-reset>重置</button></section>';
  }
  function rulesFilterMarkup(){
    const options='<option'+(alertRuleFeatureFilter==='全部功能'?' selected':'')+'>全部功能</option>'+names.map(name=>'<option'+(alertRuleFeatureFilter===name?' selected':'')+'>'+name+'</option>').join('');
    return '<section class="filter-bar overview-filter mn-filter"><div class="overview-function-group"><span class="filter-inline-label">业务功能</span><select data-mn-rule-feature-filter aria-label="业务功能筛选">'+options+'</select></div><button class="button primary compact" type="button" data-mn-query>查询</button><button class="button ghost compact" type="button" data-mn-reset>重置</button></section>';
  }
  function dateFilterMarkup(){return '<section class="filter-bar overview-filter mn-filter"><div class="overview-date-group"><div class="quick-range" role="group" aria-label="快捷时间范围"><button class="active" type="button" data-range="today" aria-pressed="true">今日</button><button type="button" data-range="seven" aria-pressed="false">近 7 天</button><button type="button" data-range="month" aria-pressed="false">本月</button></div><div class="date-range"><input type="date" value="2026-09-23" aria-label="开始日期"><b>至</b><input type="date" value="2026-09-23" aria-label="结束日期"></div></div><button class="button primary compact" type="button" data-mn-query>查询</button><button class="button ghost compact" type="button" data-mn-reset>重置</button></section>';}
  monitorPages.forEach(function(item){
    const [route,view,title]=item;
    pageRenderers[route]=function(){
      const page=document.getElementById('page-'+route);
      page.dataset.mnView=view;
      const action=view==='availability'?'<button class="button primary" type="button" data-mn-config><span data-icon="settings"></span>告警配置</button>':view==='traffic'?'<button class="button primary" type="button" data-mn-rules-config><span data-icon="settings"></span>新建策略</button>':'';
      const filter=view==='availability'?availabilityFilterMarkup():view==='rules'?rulesFilterMarkup():dateFilterMarkup();
      return pageHead(title,'',action)+filter+'<div data-mn-content>'+content(view)+'</div>';
    };
  });
  function dialog(title,body,submit) {
    document.getElementById('mnDialog')?.remove();
    const d=document.createElement('dialog');d.id='mnDialog';d.className='mn-dialog'+(title==='确认删除'?' mn-confirm-dialog':'');
    d.innerHTML='<div class="modal-head"><div><h2>'+title+'</h2></div><button class="icon-button" type="button" data-mn-close aria-label="关闭"><span data-icon="close"></span></button></div>'+body+(submit||'');document.body.appendChild(d);hydrateIcons(d);d.showModal();
  }
  function rule(index, chooseFunction, scope, ruleIndex) {
    const f=features[index];
    const modelSelect=scope==='alert-rules'?'':'<label><span>模型名称</span><select data-mn-config-model>'+modelOptions[index].map((name,i)=>'<option'+(i===0?' selected':'')+'>'+name+'</option>').join('')+'</select></label>';
    const featureSelect=chooseFunction?'<select data-mn-config-feature>'+names.map((name,i)=>'<option value="'+i+'"'+(i===index?' selected':'')+'>'+name+'</option>').join('')+'</select>':'<input value="'+f.name+'" readonly>';
    const matchingRule = scope==='alert-rules' ? alertRules.find(item=>item.featureIndex===index) : null;
    const initialThreshold = scope==='alert-rules' ? (ruleIndex!==undefined?alertRules[ruleIndex].threshold:(matchingRule?matchingRule.threshold:f.threshold)) : f.threshold;
    const metric='请求量';
    dialog(chooseFunction ? (scope==='alert-rules'?'新建策略':'告警配置') : f.name+' · 告警配置','<form data-mn-rule-form data-index="'+index+'" data-rule-index="'+(ruleIndex===undefined?'':ruleIndex)+'" data-mn-scope="'+(scope||'service')+'"><div class="form-grid">'+modelSelect+'<label><span>业务功能</span>'+featureSelect+'</label><label><span>服务可用率阈值</span><div class="input-suffix"><input type="number" value="97" min="0" max="100" required><span>%</span></div></label><label><span>服务异常持续时间</span><select><option>连续 5 分钟</option><option>连续 3 分钟</option><option>连续 1 分钟</option></select></label><label><span>请求峰值阈值 *</span><div class="input-suffix"><input type="number" name="threshold" min="1" value="'+initialThreshold+'" required><span>次/分</span></div></label><label><span>'+metric+'超限持续时间</span><select><option>连续 3 分钟</option><option>连续 1 分钟</option><option>连续 5 分钟</option></select></label><label><span>恢复条件</span><select><option>指标恢复正常持续 3 分钟</option><option>指标恢复正常持续 1 分钟</option></select></label><label><span>无数据处理</span><select><option>连续 2 分钟无数据时通知</option><option>仅标记无数据</option></select></label><label class="span-2"><span>通知渠道</span><div class="checkbox-row"><label><input type="checkbox" checked>短信通知</label><label><input type="checkbox" checked>邮件通知</label></div></label><label><span>通知手机号</span><input value="138****6214"></label><label><span>通知邮箱</span><input type="email" value="ops@example.com"></label></div><div class="modal-actions"><button type="button" class="button secondary" data-mn-close>取消</button><button type="submit" class="button primary">保存配置</button></div></form>');
  }
  document.addEventListener('click',function(e){
    if(e.target.closest('[data-mn-query]')){const page=e.target.closest('.page');if(page.dataset.mnView==='availability'){availabilityModelFilter=page.querySelector('[data-mn-model-filter]').value;availabilityStatusFilter=page.querySelector('[data-mn-status-filter]').value;}if(page.querySelector('[data-mn-rule-feature-filter]')){alertRuleFeatureFilter=page.querySelector('[data-mn-rule-feature-filter]').value;}repaint();showToast('已按当前筛选条件更新数据');}
    if(e.target.closest('[data-mn-reset]')){const page=e.target.closest('.page');if(page.dataset.mnView==='availability'){availabilityModelFilter='全部模型';availabilityStatusFilter='全部状态';page.querySelector('[data-mn-model-filter]').value=availabilityModelFilter;page.querySelector('[data-mn-status-filter]').value=availabilityStatusFilter;}else if(page.querySelector('[data-mn-rule-feature-filter]')){alertRuleFeatureFilter='全部功能';page.querySelector('[data-mn-rule-feature-filter]').value=alertRuleFeatureFilter;}else{page.querySelectorAll('.mn-filter input[type=date]').forEach(input=>{input.value='2026-09-23';});page.querySelectorAll('.mn-filter [data-range]').forEach(button=>{const active=button.dataset.range==='today';button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});}repaint();}
    if(e.target.closest('[data-mn-config]'))rule(0,true);
    const del=e.target.closest('[data-mn-delete]');if(del){const index=Number(del.dataset.mnDelete);dialog('确认删除','<div class="mn-dialog-body"><p>确定删除“'+services[index].model+'”这条服务可用性配置吗？删除后无法恢复。</p></div>','<div class="modal-actions"><button type="button" class="button secondary" data-mn-close>取消</button><button type="button" class="button danger" data-mn-confirm-delete="'+index+'">确认删除</button></div>');}
    const confirmDelete=e.target.closest('[data-mn-confirm-delete]');if(confirmDelete){services.splice(Number(confirmDelete.dataset.mnConfirmDelete),1);document.getElementById('mnDialog')?.close();repaint();showToast('服务可用性配置已删除');}
    const ruleDelete=e.target.closest('[data-mn-rule-delete]');if(ruleDelete){const index=Number(ruleDelete.dataset.mnRuleDelete),f=features[alertRules[index].featureIndex];dialog('确认删除','<div class="mn-dialog-body"><p>确定删除“'+f.name+'”这条告警规则吗？删除后无法恢复。</p></div>','<div class="modal-actions"><button type="button" class="button secondary" data-mn-close>取消</button><button type="button" class="button danger" data-mn-confirm-rule-delete="'+index+'">确认删除</button></div>');}
    const confirmRuleDelete=e.target.closest('[data-mn-confirm-rule-delete]');if(confirmRuleDelete){alertRules.splice(Number(confirmRuleDelete.dataset.mnConfirmRuleDelete),1);document.getElementById('mnDialog')?.close();repaint();showToast('告警规则已删除');}
    if(e.target.closest('[data-mn-rules-config]'))rule(0,true,'alert-rules');
    const r=e.target.closest('[data-mn-rule]');if(r){const ruleIndex=Number(r.dataset.mnRule);rule(alertRules[ruleIndex].featureIndex,false,'alert-rules',ruleIndex);}
    const s=e.target.closest('[data-mn-service]');if(s){
      const svc=services[Number(s.dataset.mnService)];
      const callValues=Array.from({length:24},(_,hour)=>[3,4,9,15,21].includes(hour)?0:Math.round(180+130*Math.max(0,Math.sin((hour-6)*Math.PI/18))));
      const values=Array.from({length:24},(_,hour)=>callValues[hour]===0?0:Number((svc.status==='异常'&&hour>=17 ? 99.4-(hour-17)*0.85 : Math.min(100,svc.value+(Math.sin(hour*1.4)*0.06))).toFixed(2)));
      values[23]=svc.value;
      const color=svc.status==='异常'?'#d04a52':'#2f6fed';
      dialog(svc.name+' · 可用性趋势','<div class="mn-dialog-body"><p class="mn-muted">关联功能：'+svc.features.map(i=>names[i]).join('、')+' · 最近一次可用率 '+svc.value.toFixed(2)+'%</p><div class="mn-chart-legend"><span style="--feature-color:'+color+'">'+svc.name+'可用率</span><span style="--feature-color:#25aa9a">调用量</span></div><div class="mn-interactive-chart" data-mn-service-chart="'+s.dataset.mnService+'" data-mn-values="'+JSON.stringify(values)+'" data-mn-call-values="'+JSON.stringify(callValues)+'">'+graph([{name:svc.name+'可用率',values:values,color:color},{name:'调用量',values:callValues,color:'#25aa9a',max:400,unit:'次',axis:'right'}],100,'%',97)+'<div class="mn-hover-guide" hidden></div><div class="mn-hover-dot" hidden></div><div class="mn-chart-tooltip" hidden></div></div></div>');
    }
    const a=e.target.closest('[data-mn-event]');if(a){const i=Number(a.dataset.mnEvent),ev=eventRows[i];dialog(ev.title,'<div class="mn-dialog-body"><div class="detail-grid"><div><span>告警状态</span><strong>'+ev.state+'</strong></div><div><span>通知结果</span><strong>短信、邮件均已送达</strong></div><div><span>影响功能</span><strong>'+ev.related.map(j=>names[j]).join('、')+'</strong></div><div><span>触发值</span><strong>'+ev.value+'</strong></div></div></div><form data-mn-event-form data-index="'+i+'"><div class="form-grid"><label><span>处理人</span><input type="text" name="owner" value="'+ev.owner+'"></label><label><span>处理状态</span><select name="handling">'+['待处理','处理中','已处理'].map(x=>'<option'+(x===ev.handling?' selected':'')+'>'+x+'</option>').join('')+'</select></label><label class="span-2"><span>处理说明 *</span><textarea name="note" required rows="3">'+ev.note+'</textarea></label></div><div class="modal-actions"><button type="button" class="button secondary" data-mn-close>取消</button><button type="submit" class="button primary">保存处理记录</button></div></form>');}
    if(e.target.closest('[data-mn-close]'))document.getElementById('mnDialog')?.close();
    const toggle=e.target.closest('[data-mn-toggle]');if(toggle){toggle.setAttribute('aria-checked',String(toggle.getAttribute('aria-checked')!=='true'));showToast('已更新告警启用状态');}
  });
  document.addEventListener('change',function(e){if(e.target.matches('[data-mn-config-feature]')){const form=e.target.closest('form');const index=Number(e.target.value);form.dataset.index=String(index);const matchingRule=alertRules.find(item=>item.featureIndex===index);form.elements.threshold.value=form.dataset.mnScope==='alert-rules'?(matchingRule?matchingRule.threshold:features[index].threshold):features[index].threshold;const modelSelect=form.querySelector('[data-mn-config-model]');if(modelSelect)modelSelect.innerHTML=modelOptions[index].map((name,i)=>'<option'+(i===0?' selected':'')+'>'+name+'</option>').join('');}});
  document.addEventListener('submit',function(e){const form=e.target;if(form.matches('[data-mn-rule-form]')){e.preventDefault();const index=Number(form.dataset.index),threshold=Number(form.elements.threshold.value);if(form.dataset.mnScope==='traffic'){features[index].threshold=threshold;}else if(form.dataset.mnScope==='alert-rules'){if(form.dataset.ruleIndex===''){alertRules.push({featureIndex:index,threshold});}else{const rule=alertRules[Number(form.dataset.ruleIndex)];rule.featureIndex=index;rule.threshold=threshold;}}else if(form.querySelector('[data-mn-config-feature]')){const model=form.querySelector('[data-mn-config-model]').value;const knownNames={'ASR':'语音识别','TTS':'语音合成','LLM':'大语言模型','OCR':'文字识别'};const type=/识别|OCR|ASR/i.test(model)?'语音识别':/合成|TTS/i.test(model)?'语音合成':/切分|批改|质检/.test(model)?'规则模型':'大语言模型';services.push({name:knownNames[model]||'新增服务',model,type,features:[index],value:100,latency:'—',status:'正常',threshold});}else{features[index].threshold=threshold;}document.getElementById('mnDialog').close();repaint();showToast(form.dataset.mnScope==='traffic'?'访问峰值与阈值告警配置已更新':form.dataset.mnScope==='alert-rules'?(form.dataset.ruleIndex===''?'告警规则已新增':'告警规则已更新'):form.querySelector('[data-mn-config-feature]')?'服务可用性配置已新增':'告警配置已更新');}if(form.matches('[data-mn-event-form]')){e.preventDefault();const ev=eventRows[Number(form.dataset.index)];ev.owner=form.elements.owner.value;ev.handling=form.elements.handling.value;ev.note=form.elements.note.value;document.getElementById('mnDialog').close();repaint();showToast('处理记录已保存');}});
  function hideChartTip(chart) {
    chart.querySelectorAll('.mn-hover-guide,.mn-hover-dot,.mn-chart-tooltip').forEach(el=>{el.hidden=true;});
  }
  document.addEventListener('pointermove',function(e){
    const chart=e.target.closest('[data-mn-chart],[data-mn-service-chart]');if(!chart)return;
    const svg=chart.querySelector('svg'),matrix=svg.getScreenCTM();if(!matrix)return;
    const point=new DOMPoint(e.clientX,e.clientY).matrixTransform(matrix.inverse());
    if(point.x<48||point.x>724||point.y<25||point.y>175){hideChartTip(chart);return;}
    const service=chart.hasAttribute('data-mn-service-chart');
    const f=service?services[Number(chart.dataset.mnServiceChart)]:features[Number(chart.dataset.mnChart)];
    const values=service?JSON.parse(chart.dataset.mnValues):f.trend,callValues=service?JSON.parse(chart.dataset.mnCallValues||'[]'):null,step=676/(values.length-1);
    const index=Math.max(0,Math.min(values.length-1,Math.round((point.x-48)/step)));
    const value=values[index],local=new DOMPoint(48+index*step,167-value/(service?100:300)*136).matrixTransform(matrix);
    const top=new DOMPoint(48,31).matrixTransform(matrix),bottom=new DOMPoint(48,167).matrixTransform(matrix),rect=chart.getBoundingClientRect();
    const x=local.x-rect.left,y=local.y-rect.top;
    const guide=chart.querySelector('.mn-hover-guide'),dot=chart.querySelector('.mn-hover-dot'),tip=chart.querySelector('.mn-chart-tooltip');
    guide.hidden=false;guide.style.cssText='left:'+x+'px;top:'+(top.y-rect.top)+'px;height:'+(bottom.y-top.y)+'px';
    dot.hidden=false;dot.style.cssText='left:'+x+'px;top:'+y+'px;background:'+(service?(f.status==='异常'?'#d04a52':'#2f6fed'):colors[Number(chart.dataset.mnChart)]);
    const minutes=Math.round(index*23*60/(values.length-1)),time=String(Math.floor(minutes/60)).padStart(2,'0')+':'+String(minutes%60).padStart(2,'0');
    tip.innerHTML='<strong>'+time+'</strong><span>'+(service?f.name+' 可用率':'调用量')+'<b>'+(service?value.toFixed(2)+'%':value+' 次/分')+'</b></span>'+(service&&callValues.length?'<span>调用量<b>'+callValues[index]+' 次</b></span>':'');
    tip.hidden=false;tip.style.left=Math.max(8,Math.min(x+16,rect.width-tip.offsetWidth-8))+'px';tip.style.top=Math.max(8,Math.min(y-65,rect.height-tip.offsetHeight-8))+'px';
  });
  document.addEventListener('pointerout',function(e){const chart=e.target.closest('[data-mn-chart],[data-mn-service-chart]');if(chart&&!chart.contains(e.relatedTarget))hideChartTip(chart);});

})();
