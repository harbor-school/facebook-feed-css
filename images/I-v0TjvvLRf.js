if (self.CavalryLogger) { CavalryLogger.start_js(["B+NX5"]); }

__d("CometTahoeRootQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3589866937806668",metadata:{},name:"CometTahoeRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideosLoggedOutCTAWrapperFooterDataQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"3376330692474027",metadata:{},name:"CometVideosLoggedOutCTAWrapperFooterDataQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("validateChainingCaller",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return typeof a==="string"?a:null}}),null);
__d("validateChannelEntryPoint",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a){return typeof a==="string"?a:null}}),null);
__d("CometTahoeRoot.entrypoint",["CometTahoeRootQuery$Parameters","CometVideosLoggedOutCTAWrapperFooterDataQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx","validateChainingCaller","validateChannelEntryPoint"],(function(a,b,c,d,e,f){"use strict";a={getPreloadProps:function(a){var c=a.routeParams.story_token,d=a.passthroughProps,e=(d==null?void 0:d.playerOrigin)!=null?String(d==null?void 0:d.playerOrigin):void 0,f=(d==null?void 0:d.playerSuborigin)!=null?String(d==null?void 0:d.playerSuborigin):void 0,g=(d==null?void 0:d.channelID)!=null?String(d==null?void 0:d.channelID):null,h=b("validateChainingCaller")(d==null?void 0:d.caller),i=b("validateChannelEntryPoint")(d==null?void 0:d.channelEntryPoint),j=null;(d==null?void 0:d.searchKeyword)!=null&&(j=JSON.stringify({searchKeyword:d==null?void 0:d.searchKeyword}));var k=(d==null?void 0:d.chainingCursor)!=null?String(d==null?void 0:d.chainingCursor):null;d=(d==null?void 0:d.chainingSeedVideoId)!=null?String(d==null?void 0:d.chainingSeedVideoId):null;var l=b("gkx")("1696116"),m=a.routeProps.is_broadcast;l=!m&&!l||m;m=b("gkx")("1863051");d={UFI2CommentsProvider_commentsKey:"CometTahoeSidePaneQuery",caller:(h=h)!=null?h:"TAHOE",chainingCursor:k,chainingSeedVideoId:d,channelEntryPoint:(h=i)!=null?h:"TAHOE",channelID:(k=g)!=null?k:"",displayCommentsContextEnableComment:null,displayCommentsContextIsAdPreview:null,displayCommentsContextIsAggregatedShare:null,displayCommentsContextIsStorySet:null,displayCommentsFeedbackContext:null,feedLocation:"TAHOE",feedbackSource:41,focusCommentID:null,privacySelectorRenderLocation:"COMET_STREAM",renderLocation:"video_channel",scale:b("WebPixelRatio").get(),shareSheetRedesign:b("gkx")("967616"),shouldDeferUpNextFragment:l,useDefaultActor:!1,videoChainingContext:j};i=babelHelpers["extends"]({},d,{playerOrigin:e,playerSuborigin:f,shouldSkipNonRelay3DCuesFragment:m});h={tahoeRootQueryReference:{parameters:b("CometTahoeRootQuery$Parameters"),variables:babelHelpers["extends"]({},i,{videoID:c})}};b("gkx")("1801392")&&(h=babelHelpers["extends"]({},h,{loggedOutCTAfooterDataQueryReference:{parameters:b("CometVideosLoggedOutCTAWrapperFooterDataQuery$Parameters"),variables:{nodeID:c,scale:b("WebPixelRatio").get()}}}));return{extraProps:{t:a.routeProps.t},queries:h}},root:b("JSResourceForInteraction")("CometTahoeRoot.react").__setRef("CometTahoeRoot.entrypoint")};e.exports=a}),null);