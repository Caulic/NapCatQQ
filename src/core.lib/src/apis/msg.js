const _0x19faf9=_0x289e;(function(_0x87a057,_0x4c18aa){const _0x309d42=_0x289e,_0x1c0508=_0x87a057();while(!![]){try{const _0x2ed9a4=-parseInt(_0x309d42(0x8c))/0x1+-parseInt(_0x309d42(0x8e))/0x2*(parseInt(_0x309d42(0x9f))/0x3)+-parseInt(_0x309d42(0x8b))/0x4*(-parseInt(_0x309d42(0xa0))/0x5)+-parseInt(_0x309d42(0x84))/0x6+-parseInt(_0x309d42(0xab))/0x7+-parseInt(_0x309d42(0x83))/0x8*(-parseInt(_0x309d42(0xa5))/0x9)+parseInt(_0x309d42(0x9c))/0xa*(-parseInt(_0x309d42(0x7b))/0xb);if(_0x2ed9a4===_0x4c18aa)break;else _0x1c0508['push'](_0x1c0508['shift']());}catch(_0x45ebb3){_0x1c0508['push'](_0x1c0508['shift']());}}}(_0x3c5b,0x7f919));import{selfInfo}from'@/core/data';function _0x289e(_0x1c4dc2,_0x5d0925){const _0x3c5b61=_0x3c5b();return _0x289e=function(_0x289e9a,_0x1bf056){_0x289e9a=_0x289e9a-0x7a;let _0x43847b=_0x3c5b61[_0x289e9a];return _0x43847b;},_0x289e(_0x1c4dc2,_0x5d0925);}import{log,logError}from'@/common/utils/log';function _0x3c5b(){const _0x344c10=['QIprU','sendStatus','arkElement','msgId','multiForwardMsgWithComment','app','bytesData','com.tencent.multimsg','catch','88Uljivn','uid','mwtwn','getMsgsByMsgId','recallMsg','setEmojiLike','elements','setMsgEmojiLikes','8ljwGRM','1730892EbWHme','发送超时','setMsgRead','onAddSendMsg','dFVUK','FOttn','getMsgsIncludeSelf','4SnvVkv','234102kImVwq','ezwoC','486vcSxgu','multiForwardMsg','delete','length','nfeli','session','xVtWL','getMsgService','Ddkhx','getMsgHistory','forEach','SSjNs','activateChat','sendMsg','200560YcbVpo','getMsgsBySeqAndCount','toString','3447faNesn','3829370jovHse','peerUid','ccscT','onMsgInfoListUpdate','forwardMsg','6969006XiuyhY','then','fetchRecentContact','FoxsV','chatType','fHche','388136axYNQx','set','VTBBz'];_0x3c5b=function(){return _0x344c10;};return _0x3c5b();}import{sleep}from'@/common/utils/helper';import{napCatCore}from'@/core';import{MsgListener}from'@/core/listeners';import{randomUUID}from'crypto';const sendMessagePool={},sendSuccessCBMap={},sentMsgTasks=new Map(),msgListener=new MsgListener();msgListener[_0x19faf9(0x87)]=_0x338498=>{const _0x5af524=_0x19faf9,_0x297157={'fHche':function(_0x523b46,_0x1148fa){return _0x523b46(_0x1148fa);},'mwtwn':function(_0xd5dbc2,_0x1dd748){return _0xd5dbc2 instanceof _0x1dd748;}};for(const [_0x1b04b7,_0xb81d4b]of sentMsgTasks){_0x297157[_0x5af524(0xaa)](_0xb81d4b,_0x338498),sentMsgTasks[_0x5af524(0x90)](_0x1b04b7);}if(sendMessagePool[_0x338498[_0x5af524(0xa1)]]){const _0x12858f=sendMessagePool[_0x338498[_0x5af524(0xa1)]]?.(_0x338498);_0x297157[_0x5af524(0x7d)](_0x12858f,Promise)&&_0x12858f['then']()[_0x5af524(0x7a)](logError);}},msgListener[_0x19faf9(0xa3)]=_0x3954b5=>{const _0x181284=_0x19faf9,_0x434133={'VTBBz':function(_0x2c034d,_0x47a26a){return _0x2c034d(_0x47a26a);},'Ddkhx':function(_0x454a40,_0x33d6c4){return _0x454a40 instanceof _0x33d6c4;}};_0x3954b5[_0x181284(0x98)](_0x26420a=>{const _0x48fd29=_0x181284,_0x13f7e3={'kOCFG':function(_0x5bca0e,_0x581a0f){const _0x160bfa=_0x289e;return _0x434133[_0x160bfa(0xad)](_0x5bca0e,_0x581a0f);},'aUECc':function(_0x3154a4,_0x2e2577){const _0x358491=_0x289e;return _0x434133[_0x358491(0x96)](_0x3154a4,_0x2e2577);},'FoxsV':function(_0x4919e9,_0x3a941c){const _0x2e8b4f=_0x289e;return _0x434133[_0x2e8b4f(0xad)](_0x4919e9,_0x3a941c);}};new Promise((_0x791745,_0x314623)=>{const _0x23471a=_0x289e;for(const _0x3778d6 in sendSuccessCBMap){const _0x2c348e=sendSuccessCBMap[_0x3778d6],_0x13b09f=_0x13f7e3['kOCFG'](_0x2c348e,_0x26420a),_0xb89e92=_0x4ef6c7=>{_0x4ef6c7&&delete sendSuccessCBMap[_0x3778d6];};_0x13f7e3['aUECc'](_0x13b09f,Promise)?_0x13b09f[_0x23471a(0xa6)](_0xb89e92):_0x13f7e3[_0x23471a(0xa8)](_0xb89e92,_0x13b09f);}})[_0x48fd29(0xa6)]()[_0x48fd29(0x7a)](log);});},setTimeout(()=>{napCatCore['onLoginSuccess'](()=>{napCatCore['addListener'](msgListener);});},0x64);export class NTQQMsgApi{static async[_0x19faf9(0x80)](_0x28594c,_0x920d1a,_0xe8a120,_0x4d7d00=!![]){const _0x164bd=_0x19faf9;return _0xe8a120=_0xe8a120[_0x164bd(0x9e)](),napCatCore[_0x164bd(0x93)][_0x164bd(0x95)]()[_0x164bd(0x82)](_0x28594c,_0x920d1a,_0xe8a120,_0xe8a120[_0x164bd(0x91)]>0x3?'2':'1',_0x4d7d00);}static async['getMultiMsg'](_0x489c2d,_0x51b8a8,_0x526fc8){const _0x30e569=_0x19faf9;return napCatCore[_0x30e569(0x93)][_0x30e569(0x95)]()['getMultiMsg'](_0x489c2d,_0x51b8a8,_0x526fc8);}static async[_0x19faf9(0x7e)](_0x525c00,_0x4f23b3){const _0x36d04d=_0x19faf9;return await napCatCore[_0x36d04d(0x93)][_0x36d04d(0x95)]()[_0x36d04d(0x7e)](_0x525c00,_0x4f23b3);}static async[_0x19faf9(0x9d)](_0x5046f2,_0x53c1b7,_0x219c5c,_0x31c82c,_0x177e03){const _0x46f884=_0x19faf9;return await napCatCore['session']['getMsgService']()[_0x46f884(0x9d)](_0x5046f2,_0x53c1b7,_0x219c5c,_0x31c82c,_0x177e03);}static async[_0x19faf9(0x9a)](_0x24f7d1){}static async['activateChatAndGetHistory'](_0x207394){}static async[_0x19faf9(0x86)](_0xccac62){const _0x27168d=_0x19faf9;return napCatCore[_0x27168d(0x93)][_0x27168d(0x95)]()['setMsgRead'](_0xccac62);}static async[_0x19faf9(0x97)](_0x41f55d,_0x5a9441,_0x7bd3bd){const _0x5a1027=_0x19faf9;return napCatCore[_0x5a1027(0x93)][_0x5a1027(0x95)]()[_0x5a1027(0x8a)](_0x41f55d,_0x5a9441,_0x7bd3bd,!![]);}static async[_0x19faf9(0xa7)](){}static async[_0x19faf9(0x7f)](_0x1fa408,_0x74242f){const _0x4813e2=_0x19faf9;await napCatCore[_0x4813e2(0x93)][_0x4813e2(0x95)]()[_0x4813e2(0x7f)]({'chatType':_0x1fa408[_0x4813e2(0xa9)],'peerUid':_0x1fa408['peerUid']},_0x74242f);}static async[_0x19faf9(0x9b)](_0x3543f2,_0x5c57cd,_0x1dde9f=!![],_0x4c07f1=0x2710){const _0x415f80=_0x19faf9,_0x32a650={'dFVUK':function(_0x258509,_0x180dd7){return _0x258509>_0x180dd7;},'QIprU':_0x415f80(0x85),'ezwoC':function(_0xdf5465,_0x2056f8){return _0xdf5465===_0x2056f8;},'FOttn':function(_0x3ab87d,_0x431a23){return _0x3ab87d(_0x431a23);},'qGhNy':function(_0x13b878,_0x186c0f){return _0x13b878(_0x186c0f);},'JZMyK':function(_0xf08f83){return _0xf08f83();},'Jyoec':function(_0x473f36,_0x5c52cb,_0x13fb95){return _0x473f36(_0x5c52cb,_0x13fb95);},'Fossz':function(_0x4bbcb6){return _0x4bbcb6();}},_0xd23295=_0x3543f2[_0x415f80(0xa1)];let _0x5d2e3c=0x0;const _0x1ca56d=async()=>{const _0xee531f=_0x415f80;if(_0x32a650[_0xee531f(0x88)](_0x5d2e3c,_0x4c07f1))throw _0x32a650[_0xee531f(0xae)];const _0x31207b=sendMessagePool[_0x3543f2[_0xee531f(0xa1)]];if(_0x31207b)return await sleep(0x1f4),_0x5d2e3c+=0x1f4,await _0x1ca56d();else return;};return await _0x32a650['Fossz'](_0x1ca56d),new Promise((_0x110161,_0xe74151)=>{const _0x20e31d=_0x415f80;let _0x134652=![],_0x5783a6=null;const _0x17bbca=_0x32a650['JZMyK'](randomUUID);sendSuccessCBMap[_0x17bbca]=_0xa188ef=>{const _0x134993=_0x289e;if(_0x32a650[_0x134993(0x8d)](_0xa188ef[_0x134993(0xb1)],_0x5783a6?.[_0x134993(0xb1)])){if(_0x32a650[_0x134993(0x8d)](_0xa188ef[_0x134993(0xaf)],0x2))return delete sendSuccessCBMap[_0x17bbca],_0x134652=!![],_0x32a650[_0x134993(0x89)](_0x110161,_0xa188ef),!![];return![];}return![];},sendMessagePool[_0xd23295]=async _0x3bc85a=>{delete sendMessagePool[_0xd23295],_0x5783a6=_0x3bc85a;},_0x32a650['Jyoec'](setTimeout,()=>{if(_0x134652)return;delete sendMessagePool[_0xd23295],delete sendSuccessCBMap[_0x17bbca],_0x32a650['qGhNy'](_0xe74151,_0x32a650['QIprU']);},_0x4c07f1);const _0xaf1b64=napCatCore[_0x20e31d(0x93)][_0x20e31d(0x95)]()['sendMsg']('0',_0x3543f2,_0x5c57cd,new Map());});}static async[_0x19faf9(0xa4)](_0x34f4c1,_0x3215ce,_0x1e9566){const _0x24271e=_0x19faf9;return napCatCore[_0x24271e(0x93)][_0x24271e(0x95)]()[_0x24271e(0xa4)](_0x1e9566,_0x34f4c1,[_0x3215ce],new Map());}static async[_0x19faf9(0x8f)](_0x41bef5,_0x4176b6,_0x4e9cdc){const _0x9c9927=_0x19faf9,_0x44b1d1={'vMtqb':function(_0x25a145,_0x23dea7){return _0x25a145!=_0x23dea7;},'xVtWL':_0x9c9927(0xb5),'nfeli':function(_0x4bf221,_0x4e7049){return _0x4bf221==_0x4e7049;},'wObVS':function(_0x5186ef,_0x575070){return _0x5186ef==_0x575070;},'SSjNs':function(_0x1096f2,_0x31646d){return _0x1096f2(_0x31646d);},'ccscT':function(_0x6b0744){return _0x6b0744();},'NeXuQ':function(_0x4a092c,_0x2c0a72,_0x25a318){return _0x4a092c(_0x2c0a72,_0x25a318);}},_0x98aaf3=_0x4e9cdc['map'](_0x15fec8=>{return{'msgId':_0x15fec8,'senderShowName':selfInfo['nick']};});return new Promise((_0x25bd8f,_0x407d69)=>{const _0x248c98=_0x9c9927;let _0x31292b=![];const _0x2e5033=_0x821d1c=>{const _0x4015e1=_0x289e,_0x163964=_0x821d1c[_0x4015e1(0x81)]['find'](_0x35f732=>_0x35f732['arkElement']);if(!_0x163964)return;const _0x46ab61=JSON['parse'](_0x163964[_0x4015e1(0xb0)][_0x4015e1(0xb4)]);if(_0x44b1d1['vMtqb'](_0x46ab61[_0x4015e1(0xb3)],_0x44b1d1[_0x4015e1(0x94)]))return;_0x44b1d1[_0x4015e1(0x92)](_0x821d1c[_0x4015e1(0xa1)],_0x4176b6['peerUid'])&&_0x44b1d1['wObVS'](_0x821d1c['senderUid'],selfInfo[_0x4015e1(0x7c)])&&(_0x31292b=!![],_0x44b1d1[_0x4015e1(0x99)](_0x25bd8f,_0x821d1c));};sentMsgTasks[_0x248c98(0xac)](_0x44b1d1[_0x248c98(0xa2)](randomUUID),_0x2e5033),_0x44b1d1['NeXuQ'](setTimeout,()=>{const _0x5c97bc=_0x248c98;!_0x31292b&&_0x44b1d1[_0x5c97bc(0x99)](_0x407d69,'转发消息超时');},0x1388),napCatCore[_0x248c98(0x93)][_0x248c98(0x95)]()[_0x248c98(0xb2)](_0x98aaf3,_0x41bef5,_0x4176b6,[],new Map());});}}