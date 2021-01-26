if (self.CavalryLogger) { CavalryLogger.start_js(["lINUZ"]); }

__d("CometUFICommentBodyTextWithEntities_textWithEntities$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"length",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"offset",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d=[{kind:"Literal",name:"delight_surface",value:"COMMENT"}],e={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},f=[e],g={kind:"InlineFragment",selections:f,type:"Node",abstractKey:"__isNode"},h={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometUFICommentBodyTextWithEntities_textWithEntities$normalization",selections:[{alias:null,args:null,concreteType:"DelightAtRange",kind:"LinkedField",name:"delight_ranges",plural:!0,selections:[a,b,{alias:null,args:null,concreteType:"TextDelightCampaign",kind:"LinkedField",name:"campaign",plural:!1,selections:[c,{alias:null,args:d,concreteType:"TextDelightStylePair",kind:"LinkedField",name:"delight_styles",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"style",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"value",storageKey:null}],storageKey:'delight_styles(delight_surface:"COMMENT")'},{alias:null,args:d,concreteType:"DelightsAnimation",kind:"LinkedField",name:"delight_asset",plural:!1,selections:f,storageKey:'delight_asset(delight_surface:"COMMENT")'},e],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ImageAtRange",kind:"LinkedField",name:"image_ranges",plural:!0,selections:[a,b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity_with_image",plural:!1,selections:[c,{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},g],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"InlineStyleAtRange",kind:"LinkedField",name:"inline_style_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"inline_style",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"AggregatedEntitiesAtRange",kind:"LinkedField",name:"aggregated_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"sample_entities",plural:!0,selections:[c,{kind:"InlineFragment",selections:[e,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],type:"User",abstractKey:null},g],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"EntityAtRange",kind:"LinkedField",name:"ranges",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"entity",plural:!1,selections:[c,{kind:"TypeDiscriminator",abstractKey:"__isEntity"},{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:"mobileUrl",args:[{kind:"Literal",name:"site",value:"mobile"}],kind:"ScalarField",name:"url",storageKey:'url(site:"mobile")'},{kind:"InlineFragment",selections:[e,{kind:"InlineFragment",selections:[{alias:"profile_url",args:null,kind:"ScalarField",name:"url",storageKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"Actor",abstractKey:"__isActor"},{kind:"InlineFragment",selections:[{documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"GroupsCometHashtagsStoryMessageHashtagLink_hashtag",fragmentPropName:"hashtag",kind:"ModuleImport"}],type:"GroupHashtag",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"category_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"verification_status",storageKey:null},e,{alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},{documentName:"CometTextWithEntitiesRelay_textWithEntities",fragmentName:"PagesCometPageLink_page",fragmentPropName:"page",kind:"ModuleImport"}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"external_url",storageKey:null}],type:"ExternalUrl",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"time_index",storageKey:null}],type:"VideoTimeIndex",abstractKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"web_link",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"fbclid",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"lynx_mode",storageKey:null}],type:"ExternalWebLink",abstractKey:null}],storageKey:null}],type:"WebLinkable",abstractKey:"__isWebLinkable"},{kind:"InlineFragment",selections:[h,{alias:null,args:null,concreteType:"WorkUserInfo",kind:"LinkedField",name:"work_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_active_account",storageKey:null}],storageKey:null}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[h,{alias:null,args:null,kind:"ScalarField",name:"work_official_status",storageKey:null}],type:"Group",abstractKey:null},g],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entity_is_weak_reference",storageKey:null},a,b],storageKey:null},{alias:null,args:null,concreteType:"ColorAtRange",kind:"LinkedField",name:"color_ranges",plural:!0,selections:[a,b,{alias:null,args:null,kind:"ScalarField",name:"hex_rgb_color_with_pound_key",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"text",storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentAttachmentContainer.react",["React","stylex"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=b("React"),i={absoluteFill:{bottom:"i09qtzwb",boxSizing:"rq0escxv",end:"n7fi1qx3",position:"pmk7jnqg",start:"j9ispegn",top:"kr520xx4"},aspectRatioMaintainer:{maxWidth:"d2edcug0"},border:{borderTopColor:"t51s4qs2",borderEndColor:"bv6zxntz",borderBottomColor:"qc3rp1z7",borderStartColor:"rj06g9kl",borderTopStartRadius:"e72ty7fz",borderTopEndRadius:"qlfml3jp",borderBottomEndRadius:"inkptoze",borderBottomStartRadius:"qmr60zad",borderTopStyle:"goun2846",borderEndStyle:"ccm00jje",borderBottomStyle:"s44p3ltw",borderStartStyle:"mk2mc5f4",borderTopWidth:"frvqaej8",borderEndWidth:"ed0hlay0",borderBottomWidth:"afxsp9o4",borderStartWidth:"jcgfde61",boxSizing:"rq0escxv",pointerEvents:"hzruof5a"},root:{borderTopStartRadius:"e72ty7fz",borderTopEndRadius:"qlfml3jp",borderBottomEndRadius:"inkptoze",borderBottomStartRadius:"qmr60zad",display:"q9uorilb",marginBottom:"tvmbv18p",maxWidth:"d2edcug0",overflowX:"ni8dbmo4",overflowY:"stjgntxs",position:"l9j0dhe7",verticalAlign:"sf5mxxl7"}};function a(a){var c=a.children,d=a.height,e=a.width;a=a.xstyle;return h.jsxs("div",{className:(g||(g=b("stylex")))(i.root,a),children:[e!=null&&d!=null?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:(g||(g=b("stylex")))(i.absoluteFill),children:c}),h.jsx("div",{className:(g||(g=b("stylex")))(i.aspectRatioMaintainer),style:{paddingBottom:(e?d/e*100:0)+"%",width:e}})]}):c,h.jsx("div",{className:g(i.border,i.absoluteFill)})]})}}),null);
__d("UFI2ScaleRect",["invariant","FBLogger"],(function(a,b,c,d,e,f,g){"use strict";f.scaleToContain=a;f.shrinkToContain=c;function a(a){return h(a,!0)}function c(a){return h(a,!1)}function h(a,c){var d=a.srcHeight,e=a.srcWidth,f=a.maxHeight,h=a.maxWidth;a=a.gracefullyFallbackToMaxDimensionWhenHeightOrWidthIsZero;!1===a?(d>0||g(0,5272,d),e>0||g(0,5273,e)):(d===0||e===0)&&b("FBLogger")("ufi2").warn("Scaling UFI2 rect with invalid zero height or width: height=%s / width=%s",String(d),String(e));f>0||g(0,5274,f);h>0||g(0,5275,h);d=a&&d===0?f:d;a=a&&e===0?h:e;e=h/a;h=f/d;f=c?Math.min(e,h):Math.min(e,h,1);return{height:Math.round(d*f),width:Math.round(a*f)}}}),null);