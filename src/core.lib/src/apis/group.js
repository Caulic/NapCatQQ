const _0x2f7e98=_0x20f4;(function(_0x5503e4,_0x3ea84a){const _0x5994de=_0x20f4,_0x54f2d6=_0x5503e4();while(!![]){try{const _0x1e2f34=parseInt(_0x5994de(0xd7))/0x1*(parseInt(_0x5994de(0xc5))/0x2)+-parseInt(_0x5994de(0xb6))/0x3*(-parseInt(_0x5994de(0xe3))/0x4)+-parseInt(_0x5994de(0xd0))/0x5*(-parseInt(_0x5994de(0xe0))/0x6)+-parseInt(_0x5994de(0xb0))/0x7*(parseInt(_0x5994de(0xc3))/0x8)+parseInt(_0x5994de(0xd8))/0x9*(-parseInt(_0x5994de(0xba))/0xa)+parseInt(_0x5994de(0xcd))/0xb*(-parseInt(_0x5994de(0xd4))/0xc)+-parseInt(_0x5994de(0xb5))/0xd;if(_0x1e2f34===_0x3ea84a)break;else _0x54f2d6['push'](_0x54f2d6['shift']());}catch(_0x58da0a){_0x54f2d6['push'](_0x54f2d6['shift']());}}}(_0xf0fc,0x6166e));import{NTQQUserApi,napCatCore}from'@/core';function _0x20f4(_0x1f7257,_0x222339){const _0xf0fce0=_0xf0fc();return _0x20f4=function(_0x20f47b,_0x2eb4b0){_0x20f47b=_0x20f47b-0xad;let _0x4ecd5c=_0xf0fce0[_0x20f47b];return _0x4ecd5c;},_0x20f4(_0x1f7257,_0x222339);}function _0xf0fc(){const _0x4fc79d=['ADMvF','27624FZLceI','session','qun.qq.com','501207lmamQV','276498PDDuhj','groupMemberList_MainWindow','MDPeL','publishGroupBulletin','uin','finish','kickMember','modifyMemberRole','564312ISaewo','CgAfJ','gxvMk','586912lBXwoo','SmyuR','result','modifyMemberCardName','getGroupList','cEooF','delete','获取群系统消息列表超时','uid','setGroupName','setGroupTitle','errCode','groupCode','jmYRh','quitGroup','addListener','MrEuc','getGroupNotifies','kAgtr','chKZN','then','OByFT','aLFKS','setGroupShutUp','createMemberListScene','uploadGroupBulletinPic','获取群列表完成','finish:\x20','CtfgX','onGroupListUpdate','63259lXPAvs','getGroupService','setMemberCard','获取群成员列表出错,','LqiqR','7399470aTLKOW','12XSVwPK','operateSysNotify','onLoginSuccess','获取群系统消息列表完成','150sKPGvs','hYdUY','setMemberRole',')成员列表结果:','group','dtQVF','type','nJOZV','SVKhI','8CggRJe','VrAMp','2ZyPnmQ','FRsAk','set','setMemberShutUp','getSingleScreenNotifies','getPSkey','UjfEF','forEach','1474WKCsfe','Tuowq','seq','35eYscCt','xRiay','onGroupSingleScreenNotifies'];_0xf0fc=function(){return _0x4fc79d;};return _0xf0fc();}import{GroupListener}from'@/core/index';import{uid2UinMap}from'@/core/data';import{logDebug}from'@/common/utils/log';import{randomUUID}from'crypto';const groupMemberTasks=new Map(),SingleScreenNotifiesTasks=new Map(),groupListener=new GroupListener();groupListener[_0x2f7e98(0xd2)]=(_0x52cdda,_0x237c2d,_0x46a17e)=>{const _0x34afc1=_0x2f7e98,_0x216676={'jmYRh':function(_0xeba95f,_0x320e1d,_0x23d43a,_0x324e7e){return _0xeba95f(_0x320e1d,_0x23d43a,_0x324e7e);}};for(const [_0x269f3f,_0x12f495]of SingleScreenNotifiesTasks){_0x216676[_0x34afc1(0xf0)](_0x12f495,_0x52cdda,_0x237c2d,_0x46a17e),groupMemberTasks[_0x34afc1(0xe9)](_0x269f3f);}},groupListener[_0x2f7e98(0xaf)]=(_0x260ab3,_0xfb1731)=>{const _0xd9859f=_0x2f7e98,_0x125f86={'ADMvF':function(_0x44dac0,_0x123075,_0x4d9b39){return _0x44dac0(_0x123075,_0x4d9b39);}};for(const [_0x4d698d,_0x327752]of groupMemberTasks){_0x125f86[_0xd9859f(0xd3)](_0x327752,_0x260ab3,_0xfb1731),groupMemberTasks[_0xd9859f(0xe9)](_0x4d698d);}},setTimeout(()=>{const _0x31294c=_0x2f7e98;napCatCore[_0x31294c(0xb8)](()=>{const _0x18a259=_0x31294c;napCatCore[_0x18a259(0xf2)](groupListener);});},0x64);export class NTQQGroupApi{static async['getGroups'](_0x569683=![]){const _0x3e2fad=_0x2f7e98,_0x3b1d7d={'kAgtr':function(_0x485c68,_0x5a2e94){return _0x485c68(_0x5a2e94);},'SVKhI':'获取群列表超时','SmyuR':function(_0x51fd85,_0x11c993){return _0x51fd85(_0x11c993);},'CtfgX':function(_0x20a578,_0x210092,_0x33b7a3){return _0x20a578(_0x210092,_0x33b7a3);},'MrEuc':_0x3e2fad(0xfd),'LqiqR':function(_0x10e114){return _0x10e114();}};let _0x31bf49=![];return new Promise((_0x1c7d5b,_0x48c254)=>{const _0xe36713=_0x3e2fad;setTimeout(()=>{const _0x5525d4=_0x20f4;!_0x31bf49&&(_0x3b1d7d[_0x5525d4(0xf5)](logDebug,_0x3b1d7d[_0x5525d4(0xc2)]),_0x3b1d7d[_0x5525d4(0xe4)](_0x48c254,_0x3b1d7d[_0x5525d4(0xc2)]));},0x1388);const _0x86730=(_0x16aca0,_0x4b0ef4)=>{const _0x104099=_0x20f4;_0x31bf49=!![],_0x3b1d7d[_0x104099(0xae)](logDebug,_0x3b1d7d[_0x104099(0xf3)],_0x4b0ef4),_0x1c7d5b(_0x4b0ef4);};groupMemberTasks['set'](_0x3b1d7d[_0xe36713(0xb4)](randomUUID),_0x86730),napCatCore[_0xe36713(0xd5)]['getGroupService']()[_0xe36713(0xe7)](_0x569683)[_0xe36713(0xf7)]();});}static async[_0x2f7e98(0xc9)](_0x515f6d){const _0x3ba844=_0x2f7e98,_0x20b219={'UBitL':function(_0x3177b0,_0x585d12){return _0x3177b0(_0x585d12);},'dtQVF':function(_0x2435cb,_0x151b4e){return _0x2435cb(_0x151b4e);},'xRiay':function(_0xa37a52,_0x46cbe6,_0x127c8e){return _0xa37a52(_0x46cbe6,_0x127c8e);},'UjfEF':_0x3ba844(0xb9),'FRsAk':function(_0x19a4f7){return _0x19a4f7();}},_0x394a42=napCatCore[_0x3ba844(0xd5)][_0x3ba844(0xb1)]();return new Promise((_0x2b4f6f,_0x382e76)=>{const _0x448ba9=_0x3ba844,_0x179b61={'MDPeL':function(_0x5032bb,_0xe3a803){return _0x20b219['UBitL'](_0x5032bb,_0xe3a803);},'cEooF':_0x448ba9(0xea),'gxvMk':function(_0x1b57d9,_0x25cc87){const _0x1fb2ce=_0x448ba9;return _0x20b219[_0x1fb2ce(0xbf)](_0x1b57d9,_0x25cc87);},'OByFT':function(_0x7f813a,_0x24f3ec,_0x54eb05){const _0x607910=_0x448ba9;return _0x20b219[_0x607910(0xd1)](_0x7f813a,_0x24f3ec,_0x54eb05);},'VrAMp':_0x20b219[_0x448ba9(0xcb)]};let _0x2dffa8=![];setTimeout(()=>{const _0x2b93f4=_0x448ba9;!_0x2dffa8&&(_0x179b61[_0x2b93f4(0xda)](logDebug,_0x179b61['cEooF']),_0x179b61[_0x2b93f4(0xe2)](_0x382e76,_0x179b61[_0x2b93f4(0xe8)]));},0x1388);const _0x3e8bb2=(_0x130542,_0x27b8b8,_0x1e0962)=>{const _0x2ee27e=_0x448ba9;_0x2dffa8=!![],_0x179b61[_0x2ee27e(0xf8)](logDebug,_0x179b61[_0x2ee27e(0xc4)],_0x1e0962),_0x179b61[_0x2ee27e(0xda)](_0x2b4f6f,_0x1e0962);};SingleScreenNotifiesTasks[_0x448ba9(0xc7)](_0x20b219[_0x448ba9(0xc6)](randomUUID),_0x3e8bb2),_0x394a42[_0x448ba9(0xc9)](![],'',_0x515f6d);});}static async['getGroupMembers'](_0x29d0c2,_0x1271a2=0xbb8){const _0x1759e5=_0x2f7e98,_0x2cdba4={'hYdUY':_0x1759e5(0xd9),'CgAfJ':function(_0x44aeed,_0x20ef11){return _0x44aeed!==_0x20ef11;},'oEOnY':function(_0x48ea47,_0x2ea52d){return _0x48ea47+_0x2ea52d;},'Tuowq':_0x1759e5(0xb3),'txehv':function(_0x542374,_0x4c6898,_0x1de7e2){return _0x542374(_0x4c6898,_0x1de7e2);}},_0x3158e6=napCatCore['session'][_0x1759e5(0xb1)](),_0x223103=_0x3158e6[_0x1759e5(0xfb)](_0x29d0c2,_0x2cdba4[_0x1759e5(0xbb)]),_0x3b4efe=await _0x3158e6['getNextMemberList'](_0x223103,undefined,_0x1271a2);if(_0x2cdba4[_0x1759e5(0xe1)](_0x3b4efe[_0x1759e5(0xee)],0x0))throw _0x2cdba4['oEOnY'](_0x2cdba4[_0x1759e5(0xce)],_0x3b4efe['errMsg']);return _0x2cdba4['txehv'](logDebug,'获取群('+_0x29d0c2+_0x1759e5(0xbd),_0x1759e5(0xad)+_0x3b4efe[_0x1759e5(0xe5)][_0x1759e5(0xdd)]),_0x3b4efe[_0x1759e5(0xe5)]['infos'][_0x1759e5(0xcc)](_0x46332b=>{const _0x4e3657=_0x1759e5;uid2UinMap[_0x46332b[_0x4e3657(0xeb)]]=_0x46332b[_0x4e3657(0xdc)];}),_0x3b4efe[_0x1759e5(0xe5)]['infos'];}static async[_0x2f7e98(0xf4)](){}static async['getGroupIgnoreNotifies'](){}static async[_0x2f7e98(0xfc)](_0x4ff027,_0x37a31e){const _0x14cf41=_0x2f7e98,_0x24d115={'nJOZV':'qun.qq.com'},_0x41bdb0=(await NTQQUserApi[_0x14cf41(0xca)]([_0x24d115[_0x14cf41(0xc1)]]))[_0x14cf41(0xd6)];return napCatCore[_0x14cf41(0xd5)][_0x14cf41(0xb1)]()['uploadGroupBulletinPic'](_0x4ff027,_0x41bdb0,_0x37a31e);}static async['handleGroupRequest'](_0x1846be,_0x1ae619,_0x4fde7b){const _0x401ac7=_0x2f7e98;return napCatCore[_0x401ac7(0xd5)][_0x401ac7(0xb1)]()[_0x401ac7(0xb7)](![],{'operateType':_0x1ae619,'targetMsg':{'seq':_0x1846be[_0x401ac7(0xcf)],'type':_0x1846be[_0x401ac7(0xc0)],'groupCode':_0x1846be[_0x401ac7(0xbe)][_0x401ac7(0xef)],'postscript':_0x4fde7b||''}});}static async['quitGroup'](_0x186338){const _0x4e11e3=_0x2f7e98;return napCatCore[_0x4e11e3(0xd5)][_0x4e11e3(0xb1)]()[_0x4e11e3(0xf1)](_0x186338);}static async[_0x2f7e98(0xde)](_0x143b13,_0x4cf708,_0x5cf3d9=![],_0x3b8255=''){const _0x34467d=_0x2f7e98;return napCatCore[_0x34467d(0xd5)]['getGroupService']()[_0x34467d(0xde)](_0x143b13,_0x4cf708,_0x5cf3d9,_0x3b8255);}static async['banMember'](_0x76d00a,_0x5d458d){const _0x53003a=_0x2f7e98;return napCatCore[_0x53003a(0xd5)][_0x53003a(0xb1)]()[_0x53003a(0xc8)](_0x76d00a,_0x5d458d);}static async['banGroup'](_0x39e87b,_0x3d2186){const _0x31814d=_0x2f7e98;return napCatCore['session'][_0x31814d(0xb1)]()[_0x31814d(0xfa)](_0x39e87b,_0x3d2186);}static async[_0x2f7e98(0xb2)](_0x5d0a72,_0x1a2675,_0x1b65b9){const _0x301e71=_0x2f7e98;return napCatCore['session'][_0x301e71(0xb1)]()[_0x301e71(0xe6)](_0x5d0a72,_0x1a2675,_0x1b65b9);}static async[_0x2f7e98(0xbc)](_0x534f16,_0x329d35,_0x44f3a7){const _0x351a8b=_0x2f7e98;return napCatCore[_0x351a8b(0xd5)]['getGroupService']()[_0x351a8b(0xdf)](_0x534f16,_0x329d35,_0x44f3a7);}static async[_0x2f7e98(0xec)](_0x55373b,_0x5469db){const _0x14408c=_0x2f7e98;return napCatCore[_0x14408c(0xd5)][_0x14408c(0xb1)]()['modifyGroupName'](_0x55373b,_0x5469db,![]);}static async[_0x2f7e98(0xed)](_0x4ae6a1,_0x13fa9b,_0x1727f2){}static async[_0x2f7e98(0xdb)](_0x5f577e,_0x595f1d,_0x1d9c61=undefined,_0x22df64=0x0,_0x5657ca=0x0){const _0xacf0f9=_0x2f7e98,_0x5887b2={'aLFKS':_0xacf0f9(0xd6),'chKZN':function(_0xd7335b,_0x3fe776){return _0xd7335b(_0x3fe776);}},_0x657e5a=(await NTQQUserApi[_0xacf0f9(0xca)]([_0x5887b2[_0xacf0f9(0xf9)]]))[_0x5887b2[_0xacf0f9(0xf9)]];let _0x3885f0={'text':_0x5887b2[_0xacf0f9(0xf6)](encodeURI,_0x595f1d),'picInfo':_0x1d9c61,'oldFeedsId':'','pinned':_0x22df64,'confirmRequired':_0x5657ca};return napCatCore[_0xacf0f9(0xd5)][_0xacf0f9(0xb1)]()['publishGroupBulletin'](_0x5f577e,_0x657e5a,_0x3885f0);}}