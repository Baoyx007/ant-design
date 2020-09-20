(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{3235:function(t,d){t.exports={content:["section",["p","选项卡切换组件。"],["h2","何时使用"],["p","提供平级的区域将大块内容进行收纳和展现，保持界面整洁。"],["p","Ant Design 依次提供了三级选项卡，分别用于不同的场景。"],["ul",["li",["p","卡片式的页签，提供可关闭的样式，常用于容器顶部。"]],["li",["p","既可用于容器顶部，也可用于容器内部，是最通用的 Tabs。"]],["li",["p",["a",{title:null,href:"/components/radio/#components-radio-demo-radiobutton"},"Radio.Button"]," 可作为更次级的页签来使用。"]]]],meta:{category:"Components",subtitle:"标签页",type:"数据展示",title:"Tabs",cols:1,cover:"https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg",filename:"components/tabs/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Tabs"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","addIcon"],["td","自定义添加按钮"],["td","ReactNode"],["td","-"],["td","4.4.0"]],["tr",["td","activeKey"],["td","当前激活 tab 面板的 key"],["td","string"],["td","-"],["td"]],["tr",["td","animated"],["td","是否使用动画切换 Tabs，在 ",["code",'tabPosition="top" | "bottom"']," 时有效"],["td","boolean ","|"," {inkBar: boolean, tabPane: boolean}"],["td","false"],["td"]],["tr",["td","renderTabBar"],["td","替换 TabBar，用于二次封装标签头"],["td","(props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement"],["td","-"],["td"]],["tr",["td","defaultActiveKey"],["td","初始化选中面板的 key，如果没有设置 activeKey"],["td","string"],["td",["code","第一个面板"]],["td"]],["tr",["td","hideAdd"],["td","是否隐藏加号图标，在 ",["code",'type="editable-card"']," 时有效"],["td","boolean"],["td","false"],["td"]],["tr",["td","size"],["td","大小，提供 ",["code","large"]," ",["code","default"]," 和 ",["code","small"]," 三种大小"],["td","string"],["td",["code","default"]],["td"]],["tr",["td","centered"],["td","标签居中展示"],["td","boolean"],["td","false"],["td","4.4.0"]],["tr",["td","tabBarExtraContent"],["td","tab bar 上额外的元素"],["td","ReactNode ","|"," {left?: ReactNode, right?: ReactNode}"],["td","-"],["td"]],["tr",["td","tabBarGutter"],["td","tabs 之间的间隙"],["td","number"],["td","-"],["td"]],["tr",["td","tabBarStyle"],["td","tab bar 的样式对象"],["td","object"],["td","-"],["td"]],["tr",["td","tabPosition"],["td","页签位置，可选值有 ",["code","top"]," ",["code","right"]," ",["code","bottom"]," ",["code","left"]],["td","string"],["td",["code","top"]],["td"]],["tr",["td","type"],["td","页签的基本样式，可选 ",["code","line"],"、",["code","card"]," ",["code","editable-card"]," 类型"],["td","string"],["td",["code","line"]],["td"]],["tr",["td","onChange"],["td","切换面板的回调"],["td","function(activeKey) {}"],["td","-"],["td"]],["tr",["td","onEdit"],["td","新增和删除页签的回调，在 ",["code",'type="editable-card"']," 时有效"],["td","(targetKey, action): void"],["td","-"],["td"]],["tr",["td","onTabClick"],["td","tab 被点击的回调"],["td","function(key: string, event: MouseEvent)"],["td","-"],["td"]],["tr",["td","onTabScroll"],["td","tab 滚动时触发"],["td","function({ direction: ",["code","left"]," ","|"," ",["code","right"]," ","|"," ",["code","top"]," ","|"," ",["code","bottom"]," })"],["td","-"],["td","4.3.0"]],["tr",["td","keyboard"],["td","开启键盘切换功能"],["td","boolean"],["td","true"],["td"]]]],["h3","Tabs.TabPane"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","forceRender"],["td","被隐藏时是否渲染 DOM 结构"],["td","boolean"],["td","false"]],["tr",["td","key"],["td","对应 activeKey"],["td","string"],["td","-"]],["tr",["td","tab"],["td","选项卡头显示文字"],["td","string ","|"," ReactNode"],["td","-"]],["tr",["td","closeIcon"],["td","自定义关闭图标，",["code",'在 type="editable-card"'],"时有效"],["td","ReactNode"],["td","-"]]]]]}}}]);