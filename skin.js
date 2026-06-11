// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: isabella.ggsk
// Generated 2026-06-11T12:50:51

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_controls_right', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_controls_left', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbnails_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_share', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_hs_popups', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popups', 0, "", { ignoreInState: 0  });
	player.addVariable('image_hs_description', 0, "", { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popup_full', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_hs_popup', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_video_youtube_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_controller', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_prev_next', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_share_facebook', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_twitter', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share_copy', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_share', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, true, { ignoreInState: 1  });
	player.addVariable('width_controls_left', 1, 0, { ignoreInState: 0  });
	player.addVariable('width_controls_right', 1, 0, { ignoreInState: 0  });
	player.addVariable('pos_share_buttons', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	player.addVariable('share_api', 2, false, { ignoreInState: 0  });
	player.addVariable('share_url', 0, "", { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_vis_controls_left = {};
		me._variable_vis_controls_left.ggCurrentLogicState = -1;
		me._variable_vis_controls_left.logicBlock = function() {
			var newLogicState_vis_controls_left;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicState_vis_controls_left = 0;
			}
			else {
				newLogicState_vis_controls_left = -1;
			}
			if (me._variable_vis_controls_left.ggCurrentLogicState != newLogicState_vis_controls_left) {
				me._variable_vis_controls_left.ggCurrentLogicState = newLogicState_vis_controls_left;
				if (me._variable_vis_controls_left.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_controls_left', false);
				}
				else {
					player.setVariableValue('vis_controls_left', true);
				}
			}
		}
		me._variable_vis_video_hs_popup = {};
		me._variable_vis_video_hs_popup.ggCurrentLogicState = -1;
		me._variable_vis_video_hs_popup.logicBlock = function() {
			var newLogicState_vis_video_hs_popup;
			if (
				((player.getVariableValue('vis_video_youtube_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_file_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicState_vis_video_hs_popup = 0;
			}
			else {
				newLogicState_vis_video_hs_popup = -1;
			}
			if (me._variable_vis_video_hs_popup.ggCurrentLogicState != newLogicState_vis_video_hs_popup) {
				me._variable_vis_video_hs_popup.ggCurrentLogicState = newLogicState_vis_video_hs_popup;
				if (me._variable_vis_video_hs_popup.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_video_hs_popup', true);
				}
				else {
					player.setVariableValue('vis_video_hs_popup', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', false);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_opt_share = {};
		me._variable_opt_share.ggCurrentLogicState = -1;
		me._variable_opt_share.logicBlock = function() {
			var newLogicState_opt_share;
			if (
				((player.getVariableValue('opt_share_facebook') == true)) || 
				((player.getVariableValue('opt_share_twitter') == true)) || 
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicState_opt_share = 0;
			}
			else {
				newLogicState_opt_share = -1;
			}
			if (me._variable_opt_share.ggCurrentLogicState != newLogicState_opt_share) {
				me._variable_opt_share.ggCurrentLogicState = newLogicState_opt_share;
				if (me._variable_opt_share.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_share', true);
				}
				else {
					player.setVariableValue('opt_share', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._background_blur=document.createElement('div');
		el.ggId="background_blur";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._background_blur.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._background_blur.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map_full') == true)) || 
				((player.getVariableValue('vis_floorplan_full') == true)) || 
				((player.getVariableValue('vis_thumbnails_full') == true)) || 
				((player.getVariableValue('vis_image_hs_popup_full') == true)) || 
				((player.getVariableValue('vis_video_hs_popup') == true)) || 
				((player.getVariableValue('vis_pdf_hs_popup') == true)) || 
				((player.getVariableValue('vis_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._background_blur.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._background_blur.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._background_blur.style.transition='';
				if (me._background_blur.ggCurrentLogicStateVisible == 0) {
					me._background_blur.style.visibility=(Number(me._background_blur.style.opacity)>0||!me._background_blur.style.opacity)?'inherit':'hidden';
					me._background_blur.ggVisible=true;
				}
				else {
					me._background_blur.style.visibility="hidden";
					me._background_blur.ggVisible=false;
				}
			}
		}
		me._background_blur.logicBlock_visible();
		me._background_blur.onclick=function (e) {
			player.setVariableValue('vis_map_full', false);
			player.setVariableValue('vis_thumbnails_full', false);
			player.setVariableValue('vis_image_hs_popup_full', false);
			player.setVariableValue('vis_pdf_hs_popup', false);
			player.setVariableValue('vis_url_hs_popup', false);
			player.setVariableValue('vis_video_youtube_hs_popup', false);
			player.setVariableValue('vis_video_vimeo_hs_popup', false);
			player.setVariableValue('vis_video_file_hs_popup', false);
			player.setVariableValue('vis_video_url_hs_popup', false);
		}
		me._background_blur.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._background_blur);
		el=me._share=document.createElement('div');
		el.ggId="share";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : 64px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._share.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._share.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._share.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._share.style.transition='left 0s, bottom 0s';
				if (me._share.ggCurrentLogicStatePosition == 0) {
					me._share.style.left='16px';
					me._share.style.bottom='72px';
				}
				else {
					me._share.style.left='16px';
					me._share.style.bottom='72px';
				}
			}
		}
		me._share.logicBlock_position();
		me._share.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_share') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._share.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._share.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._share.style.transition='left 0s, bottom 0s';
				if (me._share.ggCurrentLogicStateVisible == 0) {
					me._share.style.visibility=(Number(me._share.style.opacity)>0||!me._share.style.opacity)?'inherit':'hidden';
					me._share.ggVisible=true;
				}
				else {
					me._share.style.visibility="hidden";
					me._share.ggVisible=false;
				}
			}
		}
		me._share.logicBlock_visible();
		me._share.ggUpdatePosition=function (useTransition) {
		}
		el=me._copy=document.createElement('div');
		els=me._copy__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaWNvbiI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIxOS4wMiAxNyA0NyAxNyA0NyA0NC45OCIvPgogIDxwYXRoIHN0eWxlPSJmaWxsOiNlNmU2ZTYiIGQ9Ik0xNSwyMVY0OUg0M1YyMVpNMzguMzIsMzdIMzF2Ny4zM0gyN1YzN0gxOS42NlYzM0gyN1YyNS42OGg0VjMzaDcuMzNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._copy__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._copy__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGU0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9Imljb24iPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHBvaW50cz0iMTkuMDIgMTcgNDcgMTcgNDcgNDQuOTgiLz4KICA8cGF0aCBzdHlsZT0iZmlsbDojMTQxNDE0IiBkPSJNMTUsMjFWNDlINDNWMjFaTTM4LjMyLDM3SDMxdj'+
			'cuMzNIMjdWMzdIMTkuNjZWMzNIMjdWMjUuNjhoNFYzM2g3LjMzWiIvPgogPC9nPgo8L3N2Zz4K';
		me._copy__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="copy";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._copy.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copy.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_copy') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._copy.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._copy.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._copy.style.transition='';
				if (me._copy.ggCurrentLogicStateVisible == 0) {
					me._copy.style.visibility=(Number(me._copy.style.opacity)>0||!me._copy.style.opacity)?'inherit':'hidden';
					me._copy.ggVisible=true;
				}
				else {
					me._copy.style.visibility="hidden";
					me._copy.ggVisible=false;
				}
			}
		}
		me._copy.logicBlock_visible();
		me._copy.onclick=function (e) {
			text = document.URL
i = text.indexOf("#");
if (i >= 1) {
text = text.substring(0, i);
}
text = text + "#" + player.getCurrentNode() + "," + (Math.round(player.getPan() * 100) / 100) + "," + (Math.round(player.getTilt() * 100) / 100) + "," + (Math.round(player.getFov() * 100) / 100) + "," + player.getProjection();

dummy = document.createElement('input');
document.body.appendChild(dummy);
dummy.value = text;
dummy.select();
document.execCommand('copy');
document.body.removeChild(dummy);
alert("The current view has been copied.");
		}
		me._copy.onmouseenter=function (e) {
			me._copy__img.style.visibility='hidden';
			me._copy__imgo.style.visibility='inherit';
			me.elementMouseOver['copy']=true;
		}
		me._copy.onmouseleave=function (e) {
			me._copy__img.style.visibility='inherit';
			me._copy__imgo.style.visibility='hidden';
			me.elementMouseOver['copy']=false;
		}
		me._copy.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._copy);
		el=me._twitter=document.createElement('div');
		els=me._twitter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPHBhdGggZD0iTTM1LjMsMjkuNmwxMi0xNGgtMi45TDM0LDI3LjhsLTguNC0xMi4ySDE2TDI4LjYsMzRMMTYsNDguN2gyLjlsMTEtMTIuOGw4LjgsMTIuOGg5LjZMMzUuMywyOS42TDM1LjMsMjkuNnogICBNMzEuNCwzNC4ybC0xLjMtMS44TDE5LjksMTcuOGg0LjRsOC4yLDExLjhsMS4zLDEuOGwxMC43LDE1LjNoLTQuNEwzMS40LDM0LjJMMzEuNCwzNC4yeiIgY2xhc3M9InN0MCIvPgo8L3N2Zz4K';
		me._twitter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._twitter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodF8xXyI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyLjUiIGN5PSIzMi41IiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8cGF0aCBkPSJNMzUuNiwyOS41bDEyLTE0aC0yLjlMMzQuMywyNy42TDI2LDE1LjVoLTkuNkwyOSwzMy45TDE2LjMsNDguNWgyLjlsMTEtMTIuOEwzOSw0OC41aDkuNkwzNS42LDI5LjVMMzUuNiwyOS41eiAgIE0zMS43LDM0bC0xLjMtMS44TDIwLjIsMTcuNmg0LjRsOC4yLDExLjhsMS4zLDEuOGwxMC43LDE1'+
			'LjNoLTQuNEwzMS43LDM0TDMxLjcsMzR6IiBjbGFzcz0ic3QxIi8+Cjwvc3ZnPgo=';
		me._twitter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="twitter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._twitter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._twitter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_twitter') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._twitter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._twitter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._twitter.style.transition='';
				if (me._twitter.ggCurrentLogicStateVisible == 0) {
					me._twitter.style.visibility=(Number(me._twitter.style.opacity)>0||!me._twitter.style.opacity)?'inherit':'hidden';
					me._twitter.ggVisible=true;
				}
				else {
					me._twitter.style.visibility="hidden";
					me._twitter.ggVisible=false;
				}
			}
		}
		me._twitter.logicBlock_visible();
		me._twitter.onclick=function (e) {
			window.open('http://twitter.com/share?url=' + location.href);
		}
		me._twitter.onmouseenter=function (e) {
			me._twitter__img.style.visibility='hidden';
			me._twitter__imgo.style.visibility='inherit';
			me.elementMouseOver['twitter']=true;
		}
		me._twitter.onmouseleave=function (e) {
			me._twitter__img.style.visibility='inherit';
			me._twitter__imgo.style.visibility='hidden';
			me.elementMouseOver['twitter']=false;
		}
		me._twitter.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._twitter);
		el=me._facebook=document.createElement('div');
		els=me._facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb24iPgogIDxwYXRoIGQ9Ik00NCwzOS4zbDEuNC04LjJoLTguN3YtNS4zYzAtMi4zLDEuMi00LjUsNS4xLTQuNWgzLjl2LTdjLTIuMy0wLjQtNC43LTAuNS03LTAuNmMtNy4xLDAtMTEuOCwzLjktMTEuOCwxMXY2LjQgICBoLTcuOXY4LjJoNy45djIwYzMuNiwwLjcsNi41LDAuNyw5LjcsMC4yVjM5LjNINDR6IiBjbGFzcz0ic3QwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._facebook__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._facebook__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodF8xXyI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyLjMiIGN5PSIzMi44IiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbiI+CiAgPHBhdGggZD0iTTQ0LDM5LjNsMS40LTguMmgtOC43di01LjNjMC0yLjMsMS4yLTQuNSw1LjEtNC41aDMuOXYtN2MtMi4zLTAuNC00LjctMC41LTctMC42Yy03LjEsMC0xMS44LDMuOS0xMS44LDExdjYuNCAgIGgtNy45djguMmg3Ljl2MjBjMy42LDAuNyw2LjUsMC43LDkuNywwLjJW'+
			'MzkuM0g0NHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._facebook__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._facebook.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._facebook.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_share_facebook') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._facebook.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._facebook.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._facebook.style.transition='';
				if (me._facebook.ggCurrentLogicStateVisible == 0) {
					me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
					me._facebook.ggVisible=true;
				}
				else {
					me._facebook.style.visibility="hidden";
					me._facebook.ggVisible=false;
				}
			}
		}
		me._facebook.logicBlock_visible();
		me._facebook.onclick=function (e) {
			window.open('https://www.facebook.com/sharer/sharer.php?u=' + location.href);
		}
		me._facebook.onmouseenter=function (e) {
			me._facebook__img.style.visibility='hidden';
			me._facebook__imgo.style.visibility='inherit';
			me.elementMouseOver['facebook']=true;
		}
		me._facebook.onmouseleave=function (e) {
			me._facebook__img.style.visibility='inherit';
			me._facebook__imgo.style.visibility='hidden';
			me.elementMouseOver['facebook']=false;
		}
		me._facebook.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._facebook);
		el=me._share_close=document.createElement('div');
		els=me._share_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._share_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._share_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._share_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="share_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._share_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._share_close.onclick=function (e) {
			player.setVariableValue('vis_share', false);
		}
		me._share_close.onmouseenter=function (e) {
			me._share_close__img.style.visibility='hidden';
			me._share_close__imgo.style.visibility='inherit';
			me.elementMouseOver['share_close']=true;
		}
		me._share_close.onmouseleave=function (e) {
			me._share_close__img.style.visibility='inherit';
			me._share_close__imgo.style.visibility='hidden';
			me.elementMouseOver['share_close']=false;
		}
		me._share_close.ggUpdatePosition=function (useTransition) {
		}
		me._share.appendChild(me._share_close);
		me.divSkin.appendChild(me._share);
		el=me._info=document.createElement('div');
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : calc(50% - 86px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info') == true)) && 
				((player._(me.ggUserdata.description) != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style.transition='';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.logicBlock_visible();
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_text=document.createElement('div');
		els=me._info_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 48px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 16px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("<strong style=\'font-size: 24px\'>%1<\/strong><br>\n<div>%2<\/div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_text.ggUpdateText();
		});
		el.appendChild(els);
		me._info_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._info_text);
		el=me._info_close=document.createElement('div');
		els=me._info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._info_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_close.onclick=function (e) {
			player.setVariableValue('vis_info', false);
		}
		me._info_close.onmouseenter=function (e) {
			me._info_close__img.style.visibility='hidden';
			me._info_close__imgo.style.visibility='inherit';
			me.elementMouseOver['info_close']=true;
		}
		me._info_close.onmouseleave=function (e) {
			me._info_close__img.style.visibility='inherit';
			me._info_close__imgo.style.visibility='hidden';
			me.elementMouseOver['info_close']=false;
		}
		me._info_close.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._info_close);
		me.divSkin.appendChild(me._info);
		el=me._map=document.createElement('div');
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='bottom : 72px;';
		hs+='cursor : default;';
		hs+='height : calc(50% - 86px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true)) || 
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style.transition='';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					me._map.ggVisible=true;
				}
				else {
					me._map.style.visibility="hidden";
					me._map.ggVisible=false;
				}
			}
		}
		me._map.logicBlock_visible();
		me._map.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_content=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_content";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='bottom : 10px;';
		hs+='height : calc(100% - 44px);';
		hs+='left : calc(50% - ((calc(100% - 20px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 20px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_content.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_content.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_content.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_content.style.transition='';
				if (me._map_content.ggCurrentLogicStateVisible == 0) {
					me._map_content.style.visibility=(Number(me._map_content.style.opacity)>0||!me._map_content.style.opacity)?'inherit':'hidden';
					if (me._map_content.ggMapNotLoaded && me._map_content.ggInitMap) {
						me._map_content.ggInitMap(false);
						me._map_content.ggInitMapMarkers(true);
					}
					me._map_content.ggVisible=true;
				}
				else {
					me._map_content.style.visibility="hidden";
					if (me._map_content.ggClearMap) me._map_content.ggClearMap();
					me._map_content.ggVisible=false;
				}
			}
		}
		me._map_content.logicBlock_visible();
		me._map_content.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_content);
		el=me._floorplan_content=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_content";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 4px;';
		hs+='bottom : 10px;';
		hs+='height : calc(100% - 44px);';
		hs+='left : calc(50% - ((calc(100% - 20px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 20px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_content.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_content.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_content.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_content.style.transition='';
				if (me._floorplan_content.ggCurrentLogicStateVisible == 0) {
					me._floorplan_content.style.visibility=(Number(me._floorplan_content.style.opacity)>0||!me._floorplan_content.style.opacity)?'inherit':'hidden';
					if (me._floorplan_content.ggMapNotLoaded && me._floorplan_content.ggInitMap) {
						me._floorplan_content.ggInitMap(false);
						me._floorplan_content.ggInitMapMarkers(true);
					}
					me._floorplan_content.ggVisible=true;
				}
				else {
					me._floorplan_content.style.visibility="hidden";
					if (me._floorplan_content.ggClearMap) me._floorplan_content.ggClearMap();
					me._floorplan_content.ggVisible=false;
				}
			}
		}
		me._floorplan_content.logicBlock_visible();
		me._floorplan_content.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._floorplan_content);
		el=me._map_close=document.createElement('div');
		els=me._map_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._map_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._map_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_close.onclick=function (e) {
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_floorplan', false);
		}
		me._map_close.onmouseenter=function (e) {
			me._map_close__img.style.visibility='hidden';
			me._map_close__imgo.style.visibility='inherit';
			me.elementMouseOver['map_close']=true;
		}
		me._map_close.onmouseleave=function (e) {
			me._map_close__img.style.visibility='inherit';
			me._map_close__imgo.style.visibility='hidden';
			me.elementMouseOver['map_close']=false;
		}
		me._map_close.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_close);
		el=me._map_full=document.createElement('div');
		els=me._map_full__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIzNS41NCAxNiA0OCAxNiA0OCAxNiA0OCAyOC40NiIvPgogIDxsaW5lIHkyPSIxNiIgc3'+
			'R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5MT0iMjgiIHgyPSI0OCIgeDE9IjM1Ljg5Ii8+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIyOC40NiA0OCAxNiA0OCAxNiA0OCAxNiAzNS41NCIvPgogIDxsaW5lIHkyPSI0OCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5MT0iMzYiIHgyPSIxNiIgeDE9IjI4LjExIi8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._map_full__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_full__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbW'+
			'l0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiLz4KICA8bGluZSB5Mj0iMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTE9IjI4IiB4Mj0iNDgiIHgxPSIzNS44OSIvPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHBvaW50cz0iMjguNDYgNDggMTYg'+
			'NDggMTYgNDggMTYgMzUuNTQiLz4KICA8bGluZSB5Mj0iNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTE9IjM2IiB4Mj0iMTYiIHgxPSIyOC4xMSIvPgogPC9nPgo8L3N2Zz4K';
		me._map_full__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_full.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_map') == true))
				)
			) {
				player.setVariableValue('vis_map_full', true);
			}
			if (
				(
					((player.getVariableValue('vis_floorplan') == true))
				)
			) {
				player.setVariableValue('vis_floorplan_full', true);
			}
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_floorplan', false);
		}
		me._map_full.onmouseenter=function (e) {
			me._map_full__img.style.visibility='hidden';
			me._map_full__imgo.style.visibility='inherit';
			me.elementMouseOver['map_full']=true;
		}
		me._map_full.onmouseleave=function (e) {
			me._map_full__img.style.visibility='inherit';
			me._map_full__imgo.style.visibility='hidden';
			me.elementMouseOver['map_full']=false;
		}
		me._map_full.ggUpdatePosition=function (useTransition) {
		}
		me._map.appendChild(me._map_full);
		me.divSkin.appendChild(me._map);
		el=me._map_fullscreen=document.createElement('div');
		el.ggId="map_fullscreen";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map_full') == true)) || 
				((player.getVariableValue('vis_floorplan_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_fullscreen.style.transition='';
				if (me._map_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._map_fullscreen.style.visibility=(Number(me._map_fullscreen.style.opacity)>0||!me._map_fullscreen.style.opacity)?'inherit':'hidden';
					me._map_fullscreen.ggVisible=true;
				}
				else {
					me._map_fullscreen.style.visibility="hidden";
					me._map_fullscreen.ggVisible=false;
				}
			}
		}
		me._map_fullscreen.logicBlock_visible();
		me._map_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_fs_content=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_fs_content";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='bottom : 16px;';
		hs+='height : calc(100% - 50px);';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fs_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_fs_content.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_fs_content.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_fs_content.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_fs_content.style.transition='';
				if (me._map_fs_content.ggCurrentLogicStateVisible == 0) {
					me._map_fs_content.style.visibility=(Number(me._map_fs_content.style.opacity)>0||!me._map_fs_content.style.opacity)?'inherit':'hidden';
					if (me._map_fs_content.ggMapNotLoaded && me._map_fs_content.ggInitMap) {
						me._map_fs_content.ggInitMap(false);
						me._map_fs_content.ggInitMapMarkers(true);
					}
					me._map_fs_content.ggVisible=true;
				}
				else {
					me._map_fs_content.style.visibility="hidden";
					if (me._map_fs_content.ggClearMap) me._map_fs_content.ggClearMap();
					me._map_fs_content.ggVisible=false;
				}
			}
		}
		me._map_fs_content.logicBlock_visible();
		me._map_fs_content.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._map_fs_content);
		el=me._floorplan_fs_content=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_fs_content";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='bottom : 16px;';
		hs+='height : calc(100% - 50px);';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_fs_content.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_fs_content.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_fs_content.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_fs_content.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_fs_content.style.transition='';
				if (me._floorplan_fs_content.ggCurrentLogicStateVisible == 0) {
					me._floorplan_fs_content.style.visibility=(Number(me._floorplan_fs_content.style.opacity)>0||!me._floorplan_fs_content.style.opacity)?'inherit':'hidden';
					if (me._floorplan_fs_content.ggMapNotLoaded && me._floorplan_fs_content.ggInitMap) {
						me._floorplan_fs_content.ggInitMap(false);
						me._floorplan_fs_content.ggInitMapMarkers(true);
					}
					me._floorplan_fs_content.ggVisible=true;
				}
				else {
					me._floorplan_fs_content.style.visibility="hidden";
					if (me._floorplan_fs_content.ggClearMap) me._floorplan_fs_content.ggClearMap();
					me._floorplan_fs_content.ggVisible=false;
				}
			}
		}
		me._floorplan_fs_content.logicBlock_visible();
		me._floorplan_fs_content.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._floorplan_fs_content);
		el=me._map_fs_close=document.createElement('div');
		els=me._map_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._map_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._map_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_fs_close.onclick=function (e) {
			player.setVariableValue('vis_map_full', false);
			player.setVariableValue('vis_floorplan_full', false);
		}
		me._map_fs_close.onmouseenter=function (e) {
			me._map_fs_close__img.style.visibility='hidden';
			me._map_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['map_fs_close']=true;
		}
		me._map_fs_close.onmouseleave=function (e) {
			me._map_fs_close__img.style.visibility='inherit';
			me._map_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['map_fs_close']=false;
		}
		me._map_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._map_fs_close);
		el=me._map_fs_small=document.createElement('div');
		els=me._map_fs_small__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSI0OCAyOC40NiAzNS41NCAyOC40NiAzNS41NCAyOC40NiAzNS41NCAxNiIvPgogIDxsaW'+
			'5lIHkyPSIyOC40NiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5MT0iMTYuNDUiIHgyPSIzNS41NCIgeDE9IjQ3LjY1Ii8+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIxNiAzNS41NCAyOC40NiAzNS41NCAyOC40NiAzNS41NCAyOC40NiA0OCIvPgogIDxsaW5lIHkyPSIzNS41NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lk'+
			'dGg6NHB4IiB5MT0iNDcuNTUiIHgyPSIyOC40NiIgeDE9IjE2LjM1Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_fs_small__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._map_fs_small__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbW'+
			'l0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHBvaW50cz0iNDggMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMTYiLz4KICA8bGluZSB5Mj0iMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTE9IjE2LjQ1IiB4Mj0iMzUuNTQiIHgxPSI0Ny42NSIvPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEi'+
			'IHBvaW50cz0iMTYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgNDgiLz4KICA8bGluZSB5Mj0iMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTE9IjQ3LjU1IiB4Mj0iMjguNDYiIHgxPSIxNi4zNSIvPgogPC9nPgo8L3N2Zz4K';
		me._map_fs_small__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="map_fs_small";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_fs_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_fs_small.onclick=function (e) {
			if (
				(
					((player.getVariableValue('vis_map_full') == true))
				)
			) {
				player.setVariableValue('vis_map', true);
			}
			if (
				(
					((player.getVariableValue('vis_floorplan_full') == true))
				)
			) {
				player.setVariableValue('vis_floorplan', true);
			}
			player.setVariableValue('vis_map_full', false);
			player.setVariableValue('vis_floorplan_full', false);
		}
		me._map_fs_small.onmouseenter=function (e) {
			me._map_fs_small__img.style.visibility='hidden';
			me._map_fs_small__imgo.style.visibility='inherit';
			me.elementMouseOver['map_fs_small']=true;
		}
		me._map_fs_small.onmouseleave=function (e) {
			me._map_fs_small__img.style.visibility='inherit';
			me._map_fs_small__imgo.style.visibility='hidden';
			me.elementMouseOver['map_fs_small']=false;
		}
		me._map_fs_small.ggUpdatePosition=function (useTransition) {
		}
		me._map_fullscreen.appendChild(me._map_fs_small);
		me.divSkin.appendChild(me._map_fullscreen);
		el=me._thumbnails=document.createElement('div');
		el.ggId="thumbnails";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='bottom : 12px;';
		hs+='cursor : default;';
		hs+='height : calc(50% - 86px);';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 290px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails.style.transition='';
				if (me._thumbnails.ggCurrentLogicStateVisible == 0) {
					me._thumbnails.style.visibility=(Number(me._thumbnails.style.opacity)>0||!me._thumbnails.style.opacity)?'inherit':'hidden';
					me._thumbnails.ggVisible=true;
				}
				else {
					me._thumbnails.style.visibility="hidden";
					me._thumbnails.ggVisible=false;
				}
			}
		}
		me._thumbnails.logicBlock_visible();
		me._thumbnails.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_scroller=document.createElement('div');
		els=me._thumbnails_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 127px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnails_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbnails_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbnails_scroller.ggScrollPosX = (me._thumbnails_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbnails_scroller.ggScrollPosX = Math.max(me._thumbnails_scroller.ggScrollPosX, 0);
			me._thumbnails_scroller.ggScrollPosX = Math.min(me._thumbnails_scroller.ggScrollPosX, me._thumbnails_scroller__horScrollBg.offsetWidth - me._thumbnails_scroller__horScrollFg.offsetWidth);
			me._thumbnails_scroller__horScrollFg.style.left = me._thumbnails_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_scroller.ggScrollPosX / (me._thumbnails_scroller__horScrollBg.offsetWidth - me._thumbnails_scroller__horScrollFg.offsetWidth);
			me._thumbnails_scroller__content.style.left = -(Math.round((me._thumbnails_scroller.ggContentWidth * (1.0 - me._thumbnails_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_scroller.ggScrollPosXPercent = (me._thumbnails_scroller__horScrollFg.offsetLeft / me._thumbnails_scroller__horScrollBg.offsetWidth);
		}
		me._thumbnails_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnails_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnails_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnails_scroller.ggScrollPosX >= me._thumbnails_scroller__horScrollBg.offsetWidth - me._thumbnails_scroller__horScrollFg.offsetWidth)) {
					me._thumbnails_scroller.ggScrollPosX = Math.min(me._thumbnails_scroller.ggScrollPosX, me._thumbnails_scroller__horScrollBg.offsetWidth - me._thumbnails_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnails_scroller.ggScrollPosX <= 0)) {
					me._thumbnails_scroller.ggScrollPosX = Math.max(me._thumbnails_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnails_scroller__horScrollFg.style.left = me._thumbnails_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_scroller.ggScrollPosX / (me._thumbnails_scroller__horScrollBg.offsetWidth - me._thumbnails_scroller__horScrollFg.offsetWidth);
			me._thumbnails_scroller__content.style.left = -(Math.round((me._thumbnails_scroller.ggContentWidth * (1.0 - me._thumbnails_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_scroller.ggScrollPosXPercent = (me._thumbnails_scroller__horScrollFg.offsetLeft / me._thumbnails_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnails_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbnails_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbnails_scroller.ggScrollPosY = (me._thumbnails_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbnails_scroller.ggScrollPosY = Math.max(me._thumbnails_scroller.ggScrollPosY, 0);
			me._thumbnails_scroller.ggScrollPosY = Math.min(me._thumbnails_scroller.ggScrollPosY, me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_scroller__vertScrollFg.style.top = me._thumbnails_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_scroller.ggScrollPosY / (me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_scroller__content.style.top = -(Math.round((me._thumbnails_scroller.ggContentHeight * (1.0 - me._thumbnails_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller.ggContentTopOffset + 'px';
			me._thumbnails_scroller.ggScrollPosYPercent = (me._thumbnails_scroller__vertScrollFg.offsetTop / me._thumbnails_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbnails_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnails_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnails_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnails_scroller.ggScrollPosY >= me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight)) {
					me._thumbnails_scroller.ggScrollPosY = Math.min(me._thumbnails_scroller.ggScrollPosY, me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnails_scroller.ggScrollPosY <= 0)) {
					me._thumbnails_scroller.ggScrollPosY = Math.max(me._thumbnails_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnails_scroller__vertScrollFg.style.top = me._thumbnails_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_scroller.ggScrollPosY / (me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_scroller__content.style.top = -(Math.round((me._thumbnails_scroller.ggContentHeight * (1.0 - me._thumbnails_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller.ggContentTopOffset + 'px';
			me._thumbnails_scroller.ggScrollPosYPercent = (me._thumbnails_scroller__vertScrollFg.offsetTop / me._thumbnails_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnails_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnails_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnails_scroller.ggHPercentVisible);
					me._thumbnails_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnails_scroller.clientWidth - (me._thumbnails_scroller.ggVertScrollVisible ? 4 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnails_scroller.clientWidth - (me._thumbnails_scroller.ggVertScrollVisible ? 4 : 0))) * me._thumbnails_scroller.ggHPercentVisible);
					me._thumbnails_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnails_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnails_scroller.ggVPercentVisible);
					me._thumbnails_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnails_scroller.clientHeight - (me._thumbnails_scroller.ggHorScrollVisible ? 4 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnails_scroller.clientHeight - (me._thumbnails_scroller.ggHorScrollVisible ? 4 : 0))) * me._thumbnails_scroller.ggVPercentVisible);
					me._thumbnails_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnails_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnails_scroller.ggDragInertiaX *= 0.96;
				me._thumbnails_scroller.ggDragInertiaY *= 0.96;
				me._thumbnails_scroller.ggScrollByX(me._thumbnails_scroller.ggDragInertiaX);
				me._thumbnails_scroller.ggScrollByY(me._thumbnails_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbnails_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnails_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnails_scroller__content.onmouseup = null;
			me._thumbnails_scroller__content.onmousemove = null;
			me._thumbnails_scroller__content.ontouchend = null;
			me._thumbnails_scroller__content.ontouchmove = null;
			me._thumbnails_scroller__content.onpointerup = null;
			me._thumbnails_scroller__content.onpointermove = null;
			setTimeout(function() { me._thumbnails_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbnails_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnails_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnails_scroller.ggDragStartY) > 10) me._thumbnails_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbnails_scroller.ggDragLastX) * me._thumbnails_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbnails_scroller.ggDragLastY) * me._thumbnails_scroller.ggVPercentVisible;
			me._thumbnails_scroller.ggDragInertiaX = -diffX;
			me._thumbnails_scroller.ggDragInertiaY = -diffY;
			me._thumbnails_scroller.ggDragLastX = eventX;
			me._thumbnails_scroller.ggDragLastY = eventY;
			me._thumbnails_scroller.ggScrollByX(-diffX);
			me._thumbnails_scroller.ggScrollByY(-diffY);
		}
		me._thumbnails_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnails_scroller.ggDragLastX = me._thumbnails_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnails_scroller.ggDragLastY = me._thumbnails_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnails_scroller__content.onmouseup = me._thumbnails_scroller__content.mousetouchend;
			me._thumbnails_scroller__content.ontouchend = me._thumbnails_scroller__content.mousetouchend;
			me._thumbnails_scroller__content.onmousemove = me._thumbnails_scroller__content.mousetouchmove;
			me._thumbnails_scroller__content.ontouchmove = me._thumbnails_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnails_scroller__content.onpointerup = me._thumbnails_scroller__content.ontouchend;
				me._thumbnails_scroller__content.onpointermove = me._thumbnails_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnails_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbnails_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnails_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnails_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 4px; height: 306px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnails_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 4px; height: 306px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnails_scroller.ggScrollPosY = 0;
		me._thumbnails_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_scroller.ggDragInertiaY *= 0.96;
					me._thumbnails_scroller.ggScrollByY(me._thumbnails_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnails_scroller.ggDragLastY;
				me._thumbnails_scroller.ggDragInertiaY = diffY;
				me._thumbnails_scroller.ggDragLastY = e.clientY;
				me._thumbnails_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_scroller.ggDragInertiaY *= 0.96;
					me._thumbnails_scroller.ggScrollByY(me._thumbnails_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnails_scroller.ggDragLastY;
				me._thumbnails_scroller.ggDragInertiaY = diffY;
				me._thumbnails_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnails_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnails_scroller.ggScrollHeight;
			if (e.offsetY < me._thumbnails_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnails_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnails_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnails_scroller.ggScrollByYSmooth(30 * me._thumbnails_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnails_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 4px; height: 4px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnails_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% -  54px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 34px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._thumbnails_scroller.ggScrollPosY / me._thumbnails_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnails_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 4) || (!me._thumbnails_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnails_scroller__vertScrollBg.style.visibility = 'inherit';
					me._thumbnails_scroller__vertScrollFg.style.visibility = 'inherit';
					me._thumbnails_scroller.ggVertScrollVisible = true;
				} else {
					me._thumbnails_scroller__vertScrollBg.style.visibility = 'hidden';
					me._thumbnails_scroller__vertScrollFg.style.visibility = 'hidden';
					me._thumbnails_scroller.ggVertScrollVisible = false;
				}
				if(me._thumbnails_scroller.ggVertScrollVisible) {
					me._thumbnails_scroller.ggAvailableWidth = me._thumbnails_scroller.clientWidth - 4;
					if (me._thumbnails_scroller.ggHorScrollVisible) {
						me._thumbnails_scroller.ggAvailableHeight = me._thumbnails_scroller.clientHeight - 4;
						me._thumbnails_scroller.ggAvailableHeightWithScale = me._thumbnails_scroller.getBoundingClientRect().height - me._thumbnails_scroller__vertScrollBg.getBoundingClientRect().width;
						me._thumbnails_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnails_scroller.ggAvailableHeight = me._thumbnails_scroller.clientHeight;
						me._thumbnails_scroller.ggAvailableHeightWithScale = me._thumbnails_scroller.getBoundingClientRect().height;
						me._thumbnails_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnails_scroller__vertScrollBg.style.height = me._thumbnails_scroller.ggAvailableHeight + 'px';
					me._thumbnails_scroller.ggVPercentVisible = contentHeight != 0 ? me._thumbnails_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnails_scroller.ggVPercentVisible > 1.0) me._thumbnails_scroller.ggVPercentVisible = 1.0;
					me._thumbnails_scroller.ggScrollHeight =  Math.round(me._thumbnails_scroller__vertScrollBg.offsetHeight * me._thumbnails_scroller.ggVPercentVisible);
					me._thumbnails_scroller__vertScrollFg.style.height = me._thumbnails_scroller.ggScrollHeight + 'px';
					me._thumbnails_scroller.ggScrollPosY = me._thumbnails_scroller.ggScrollPosYPercent * me._thumbnails_scroller.ggAvailableHeight;
					me._thumbnails_scroller.ggScrollPosY = Math.min(me._thumbnails_scroller.ggScrollPosY, me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
					me._thumbnails_scroller__vertScrollFg.style.top = me._thumbnails_scroller.ggScrollPosY + 'px';
					if (me._thumbnails_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_scroller.ggScrollPosY / (me._thumbnails_scroller__vertScrollBg.offsetHeight - me._thumbnails_scroller__vertScrollFg.offsetHeight);
						me._thumbnails_scroller__content.style.top = -(Math.round((me._thumbnails_scroller.ggContentHeight * (1.0 - me._thumbnails_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnails_scroller.ggAvailableWidth = me._thumbnails_scroller.clientWidth;
					me._thumbnails_scroller.ggScrollPosY = 0;
					me._thumbnails_scroller.ggScrollPosYPercent = 0.0;
					me._thumbnails_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnails_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnails_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbnails_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbnails_scroller);
					me._thumbnails_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnails_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 2;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 128;
		el.ggHeight = 128;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnails_cloner.ggUpdating == true) return;
			me._thumbnails_cloner.ggUpdating = true;
			var el=me._thumbnails_cloner;
			var curNumCols = 0;
			curNumCols = me._thumbnails_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnails_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnails_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnails_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnails_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnails_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnails_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnails_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnails_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnails_cloner.ggWidth + 'px';
				parameter.height=me._thumbnails_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnails_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbnails_cloner.ggNodeCount = me._thumbnails_cloner.ggNumFilterPassed;
			me._thumbnails_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnails_cloner.parentNode && me._thumbnails_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnails_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnails_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnails_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnails_cloner.childNodes.length; i++) {
				var child=me._thumbnails_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnails_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnails_cloner.ggUpdate();
		}
		me._thumbnails_scroller__content.appendChild(me._thumbnails_cloner);
		me._thumbnails.appendChild(me._thumbnails_scroller);
		el=me._thumbnails_close=document.createElement('div');
		els=me._thumbnails_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_close.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', !player.getVariableValue('vis_thumbnails'));
		}
		me._thumbnails_close.onmouseenter=function (e) {
			me._thumbnails_close__img.style.visibility='hidden';
			me._thumbnails_close__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_close']=true;
		}
		me._thumbnails_close.onmouseleave=function (e) {
			me._thumbnails_close__img.style.visibility='inherit';
			me._thumbnails_close__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_close']=false;
		}
		me._thumbnails_close.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails.appendChild(me._thumbnails_close);
		el=me._thumbnails_full=document.createElement('div');
		els=me._thumbnails_full__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIzNS41NCAxNiA0OCAxNiA0OCAxNiA0OCAyOC40NiIvPgogIDxsaW5lIHkyPSIxNiIgc3'+
			'R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5MT0iMjgiIHgyPSI0OCIgeDE9IjM1Ljg5Ii8+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIyOC40NiA0OCAxNiA0OCAxNiA0OCAxNiAzNS41NCIvPgogIDxsaW5lIHkyPSI0OCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5MT0iMzYiIHgyPSIxNiIgeDE9IjI4LjExIi8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnails_full__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_full__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbW'+
			'l0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiLz4KICA8bGluZSB5Mj0iMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTE9IjI4IiB4Mj0iNDgiIHgxPSIzNS44OSIvPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHBvaW50cz0iMjguNDYgNDggMTYg'+
			'NDggMTYgNDggMTYgMzUuNTQiLz4KICA8bGluZSB5Mj0iNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTE9IjM2IiB4Mj0iMTYiIHgxPSIyOC4xMSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_full__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_full.onclick=function (e) {
			player.setVariableValue('vis_thumbnails', false);
			player.setVariableValue('vis_thumbnails_full', true);
		}
		me._thumbnails_full.onmouseenter=function (e) {
			me._thumbnails_full__img.style.visibility='hidden';
			me._thumbnails_full__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_full']=true;
		}
		me._thumbnails_full.onmouseleave=function (e) {
			me._thumbnails_full__img.style.visibility='inherit';
			me._thumbnails_full__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_full']=false;
		}
		me._thumbnails_full.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails.appendChild(me._thumbnails_full);
		me.divSkin.appendChild(me._thumbnails);
		el=me._thumbnails_fullscreen=document.createElement('div');
		el.ggId="thumbnails_fullscreen";
		el.ggDx=0;
		el.ggDy=-18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 80px);';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 80px) + 0px) / 2) - 18px);';
		hs+='visibility : hidden;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnails_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbnails_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fullscreen.style.transition='';
				if (me._thumbnails_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fullscreen.style.visibility=(Number(me._thumbnails_fullscreen.style.opacity)>0||!me._thumbnails_fullscreen.style.opacity)?'inherit':'hidden';
					me._thumbnails_fullscreen.ggVisible=true;
				}
				else {
					me._thumbnails_fullscreen.style.visibility="hidden";
					me._thumbnails_fullscreen.ggVisible=false;
				}
			}
		}
		me._thumbnails_fullscreen.logicBlock_visible();
		me._thumbnails_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_fs_scroller=document.createElement('div');
		els=me._thumbnails_fs_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 127px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnails_fs_scroller.ggScrollByX = function(diffX) {
			if(!me._thumbnails_fs_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_fs_scroller.ggHPercentVisible >= 1.0) return;
			me._thumbnails_fs_scroller.ggScrollPosX = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft + diffX);
			me._thumbnails_fs_scroller.ggScrollPosX = Math.max(me._thumbnails_fs_scroller.ggScrollPosX, 0);
			me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosXPercent = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft / me._thumbnails_fs_scroller__horScrollBg.offsetWidth);
		}
		me._thumbnails_fs_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnails_fs_scroller.ggHorScrollVisible || diffX == 0 || me._thumbnails_fs_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnails_fs_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnails_fs_scroller.ggScrollPosX >= me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth)) {
					me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnails_fs_scroller.ggScrollPosX <= 0)) {
					me._thumbnails_fs_scroller.ggScrollPosX = Math.max(me._thumbnails_fs_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
			me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentLeftOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosXPercent = (me._thumbnails_fs_scroller__horScrollFg.offsetLeft / me._thumbnails_fs_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnails_fs_scroller.ggScrollByY = function(diffY) {
			if(!me._thumbnails_fs_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_fs_scroller.ggVPercentVisible >= 1.0) return;
			me._thumbnails_fs_scroller.ggScrollPosY = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop + diffY);
			me._thumbnails_fs_scroller.ggScrollPosY = Math.max(me._thumbnails_fs_scroller.ggScrollPosY, 0);
			me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosYPercent = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop / me._thumbnails_fs_scroller__vertScrollBg.offsetHeight);
		}
		me._thumbnails_fs_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnails_fs_scroller.ggVertScrollVisible || diffY == 0 || me._thumbnails_fs_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnails_fs_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnails_fs_scroller.ggScrollPosY >= me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight)) {
					me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnails_fs_scroller.ggScrollPosY <= 0)) {
					me._thumbnails_fs_scroller.ggScrollPosY = Math.max(me._thumbnails_fs_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
			me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
			me._thumbnails_fs_scroller.ggScrollPosYPercent = (me._thumbnails_fs_scroller__vertScrollFg.offsetTop / me._thumbnails_fs_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnails_fs_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnails_fs_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnails_fs_scroller.clientWidth - (me._thumbnails_fs_scroller.ggVertScrollVisible ? 5 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnails_fs_scroller.clientWidth - (me._thumbnails_fs_scroller.ggVertScrollVisible ? 5 : 0))) * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnails_fs_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnails_fs_scroller.clientHeight - (me._thumbnails_fs_scroller.ggHorScrollVisible ? 5 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnails_fs_scroller.clientHeight - (me._thumbnails_fs_scroller.ggHorScrollVisible ? 5 : 0))) * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnails_fs_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnails_fs_scroller.ggDragInertiaX *= 0.96;
				me._thumbnails_fs_scroller.ggDragInertiaY *= 0.96;
				me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
				me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
				if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnails_fs_scroller__content.onmouseup = null;
			me._thumbnails_fs_scroller__content.onmousemove = null;
			me._thumbnails_fs_scroller__content.ontouchend = null;
			me._thumbnails_fs_scroller__content.ontouchmove = null;
			me._thumbnails_fs_scroller__content.onpointerup = null;
			me._thumbnails_fs_scroller__content.onpointermove = null;
			setTimeout(function() { me._thumbnails_fs_scroller.ggIsDragging = false; }, 100);
		}
		me._thumbnails_fs_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnails_fs_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnails_fs_scroller.ggDragStartY) > 10) me._thumbnails_fs_scroller.ggIsDragging = true;
			var diffX = (eventX - me._thumbnails_fs_scroller.ggDragLastX) * me._thumbnails_fs_scroller.ggHPercentVisible;
			var diffY = (eventY - me._thumbnails_fs_scroller.ggDragLastY) * me._thumbnails_fs_scroller.ggVPercentVisible;
			me._thumbnails_fs_scroller.ggDragInertiaX = -diffX;
			me._thumbnails_fs_scroller.ggDragInertiaY = -diffY;
			me._thumbnails_fs_scroller.ggDragLastX = eventX;
			me._thumbnails_fs_scroller.ggDragLastY = eventY;
			me._thumbnails_fs_scroller.ggScrollByX(-diffX);
			me._thumbnails_fs_scroller.ggScrollByY(-diffY);
		}
		me._thumbnails_fs_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastX = me._thumbnails_fs_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnails_fs_scroller.ggDragLastY = me._thumbnails_fs_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnails_fs_scroller__content.onmouseup = me._thumbnails_fs_scroller__content.mousetouchend;
			me._thumbnails_fs_scroller__content.ontouchend = me._thumbnails_fs_scroller__content.mousetouchend;
			me._thumbnails_fs_scroller__content.onmousemove = me._thumbnails_fs_scroller__content.mousetouchmove;
			me._thumbnails_fs_scroller__content.ontouchmove = me._thumbnails_fs_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnails_fs_scroller__content.onpointerup = me._thumbnails_fs_scroller__content.ontouchend;
				me._thumbnails_fs_scroller__content.onpointermove = me._thumbnails_fs_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnails_fs_scroller__content.mousetouchstart;
		els.ontouchstart = me._thumbnails_fs_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnails_fs_scroller__content.mousetouchstart;
		}
		elHorScrollBg = me._thumbnails_fs_scroller__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 1160px; height: 5px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnails_fs_scroller__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 1160px; height: 5px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		me._thumbnails_fs_scroller.ggScrollPosX = 0;
		me._thumbnails_fs_scroller.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_fs_scroller.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaX *= 0.96;
					me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnails_fs_scroller.ggDragLastX;
				me._thumbnails_fs_scroller.ggDragInertiaX = diffX;
				me._thumbnails_fs_scroller.ggDragLastX = e.clientX;
				me._thumbnails_fs_scroller.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaX *= 0.96;
					me._thumbnails_fs_scroller.ggScrollByX(me._thumbnails_fs_scroller.ggDragInertiaX);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = (t ? t[0].clientX : e.clientX) - me._thumbnails_fs_scroller.ggDragLastX;
				me._thumbnails_fs_scroller.ggDragInertiaX = diffX;
				me._thumbnails_fs_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._thumbnails_fs_scroller.ggScrollByX(diffX);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elHorScrollFg.onpointerdown = elHorScrollFg.ontouchstart;
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnails_fs_scroller.ggScrollWidth;
			if (e.offsetX < me._thumbnails_fs_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_fs_scroller__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnails_fs_scroller.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnails_fs_scroller.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnails_fs_scroller.ggScrollByXSmooth(30 * me._thumbnails_fs_scroller.ggHPercentVisible * wheelDelta);
		});
		elVertScrollBg = me._thumbnails_fs_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 5px; height: 549px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnails_fs_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 5px; height: 549px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnails_fs_scroller.ggScrollPosY = 0;
		me._thumbnails_fs_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnails_fs_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaY *= 0.96;
					me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnails_fs_scroller.ggDragLastY;
				me._thumbnails_fs_scroller.ggDragInertiaY = diffY;
				me._thumbnails_fs_scroller.ggDragLastY = e.clientY;
				me._thumbnails_fs_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnails_fs_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnails_fs_scroller.ggDragInertiaY *= 0.96;
					me._thumbnails_fs_scroller.ggScrollByY(me._thumbnails_fs_scroller.ggDragInertiaY);
					if (Math.abs(me._thumbnails_fs_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnails_fs_scroller.ggDragLastY;
				me._thumbnails_fs_scroller.ggDragInertiaY = diffY;
				me._thumbnails_fs_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnails_fs_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnails_fs_scroller.ggScrollHeight;
			if (e.offsetY < me._thumbnails_fs_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnails_fs_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnails_fs_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnails_fs_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnails_fs_scroller.ggScrollByYSmooth(30 * me._thumbnails_fs_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnails_fs_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 5px; height: 5px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnails_fs_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% -  54px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 34px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = -(Math.round(me._thumbnails_fs_scroller.ggScrollPosX / me._thumbnails_fs_scroller.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._thumbnails_fs_scroller.ggScrollPosY / me._thumbnails_fs_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller.ggHorScrollVisible = true;
				} else {
					me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller.ggHorScrollVisible = false;
				}
				if ((me._thumbnails_fs_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 5) || (!me._thumbnails_fs_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnails_fs_scroller__vertScrollBg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller__vertScrollFg.style.visibility = 'inherit';
					me._thumbnails_fs_scroller.ggVertScrollVisible = true;
					if (!me._thumbnails_fs_scroller.ggHorScrollVisible && (contentWidth > offsetWidthWithScale - me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect().width)) {
						me._thumbnails_fs_scroller__horScrollBg.style.visibility = 'inherit';
						me._thumbnails_fs_scroller__horScrollFg.style.visibility = 'inherit';
						me._thumbnails_fs_scroller.ggHorScrollVisible = true;
					}
				} else {
					me._thumbnails_fs_scroller__vertScrollBg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller__vertScrollFg.style.visibility = 'hidden';
					me._thumbnails_fs_scroller.ggVertScrollVisible = false;
				}
				if(me._thumbnails_fs_scroller.ggHorScrollVisible) {
					me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight - 5;
					if (me._thumbnails_fs_scroller.ggVertScrollVisible) {
						me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth - 5;
						me._thumbnails_fs_scroller.ggAvailableWidthWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().width - me._thumbnails_fs_scroller__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth;
						me._thumbnails_fs_scroller.ggAvailableWidthWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().width;
					}
					me._thumbnails_fs_scroller__horScrollBg.style.width = me._thumbnails_fs_scroller.ggAvailableWidth + 'px';
					me._thumbnails_fs_scroller.ggHPercentVisible = contentWidth != 0 ? me._thumbnails_fs_scroller.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnails_fs_scroller.ggHPercentVisible > 1.0) me._thumbnails_fs_scroller.ggHPercentVisible = 1.0;
					me._thumbnails_fs_scroller.ggScrollWidth = Math.round(me._thumbnails_fs_scroller__horScrollBg.offsetWidth * me._thumbnails_fs_scroller.ggHPercentVisible);
					me._thumbnails_fs_scroller__horScrollFg.style.width = me._thumbnails_fs_scroller.ggScrollWidth + 'px';
					me._thumbnails_fs_scroller.ggScrollPosX = me._thumbnails_fs_scroller.ggScrollPosXPercent * me._thumbnails_fs_scroller.ggAvailableWidth;
					me._thumbnails_fs_scroller.ggScrollPosX = Math.min(me._thumbnails_fs_scroller.ggScrollPosX, me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
					me._thumbnails_fs_scroller__horScrollFg.style.left = me._thumbnails_fs_scroller.ggScrollPosX + 'px';
					if (me._thumbnails_fs_scroller.ggHPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosX / (me._thumbnails_fs_scroller__horScrollBg.offsetWidth - me._thumbnails_fs_scroller__horScrollFg.offsetWidth);
						me._thumbnails_fs_scroller__content.style.left = -(Math.round((me._thumbnails_fs_scroller.ggContentWidth * (1.0 - me._thumbnails_fs_scroller.ggHPercentVisible)) * percentScrolled)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight;
					me._thumbnails_fs_scroller.ggScrollPosX = 0;
					me._thumbnails_fs_scroller.ggScrollPosXPercent = 0.0;
					me._thumbnails_fs_scroller__content.style.left = this.ggContentLeftOffset + 'px';
				}
				if(me._thumbnails_fs_scroller.ggVertScrollVisible) {
					me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth - 5;
					if (me._thumbnails_fs_scroller.ggHorScrollVisible) {
						me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight - 5;
						me._thumbnails_fs_scroller.ggAvailableHeightWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().height - me._thumbnails_fs_scroller__vertScrollBg.getBoundingClientRect().width;
						me._thumbnails_fs_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnails_fs_scroller.ggAvailableHeight = me._thumbnails_fs_scroller.clientHeight;
						me._thumbnails_fs_scroller.ggAvailableHeightWithScale = me._thumbnails_fs_scroller.getBoundingClientRect().height;
						me._thumbnails_fs_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnails_fs_scroller__vertScrollBg.style.height = me._thumbnails_fs_scroller.ggAvailableHeight + 'px';
					me._thumbnails_fs_scroller.ggVPercentVisible = contentHeight != 0 ? me._thumbnails_fs_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnails_fs_scroller.ggVPercentVisible > 1.0) me._thumbnails_fs_scroller.ggVPercentVisible = 1.0;
					me._thumbnails_fs_scroller.ggScrollHeight =  Math.round(me._thumbnails_fs_scroller__vertScrollBg.offsetHeight * me._thumbnails_fs_scroller.ggVPercentVisible);
					me._thumbnails_fs_scroller__vertScrollFg.style.height = me._thumbnails_fs_scroller.ggScrollHeight + 'px';
					me._thumbnails_fs_scroller.ggScrollPosY = me._thumbnails_fs_scroller.ggScrollPosYPercent * me._thumbnails_fs_scroller.ggAvailableHeight;
					me._thumbnails_fs_scroller.ggScrollPosY = Math.min(me._thumbnails_fs_scroller.ggScrollPosY, me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
					me._thumbnails_fs_scroller__vertScrollFg.style.top = me._thumbnails_fs_scroller.ggScrollPosY + 'px';
					if (me._thumbnails_fs_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnails_fs_scroller.ggScrollPosY / (me._thumbnails_fs_scroller__vertScrollBg.offsetHeight - me._thumbnails_fs_scroller__vertScrollFg.offsetHeight);
						me._thumbnails_fs_scroller__content.style.top = -(Math.round((me._thumbnails_fs_scroller.ggContentHeight * (1.0 - me._thumbnails_fs_scroller.ggVPercentVisible)) * percentScrolled)) + me._thumbnails_fs_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnails_fs_scroller.ggAvailableWidth = me._thumbnails_fs_scroller.clientWidth;
					me._thumbnails_fs_scroller.ggScrollPosY = 0;
					me._thumbnails_fs_scroller.ggScrollPosYPercent = 0.0;
					me._thumbnails_fs_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnails_fs_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnails_fs_scroller.ggHorScrollVisible || vertScrollWasVisible != me._thumbnails_fs_scroller.ggVertScrollVisible) {
					skin.updateSize(me._thumbnails_fs_scroller);
					me._thumbnails_fs_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnails_fs_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 128;
		el.ggHeight = 128;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnails_fs_cloner.ggUpdating == true) return;
			me._thumbnails_fs_cloner.ggUpdating = true;
			var el=me._thumbnails_fs_cloner;
			var curNumCols = 0;
			var parentWidth = me._thumbnails_fs_cloner.parentNode.classList.contains('ggskin_subelement') ? (me._thumbnails_fs_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._thumbnails_fs_cloner.parentNode.parentNode.ggAvailableWidth : me._thumbnails_fs_cloner.parentNode.parentNode.clientWidth) : me._thumbnails_fs_cloner.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._thumbnails_fs_cloner.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._thumbnails_fs_cloner.offsetLeft) * me._thumbnails_fs_cloner.ggNumRepeat / 100.0) / me._thumbnails_fs_cloner.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnails_fs_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._thumbnails_fs_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._thumbnails_fs_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._thumbnails_fs_cloner.getFilteredNodes(tourNodes, filter);
			me._thumbnails_fs_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._thumbnails_fs_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._thumbnails_fs_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._thumbnails_fs_cloner.ggWidth) + 'px';
				parameter.width=me._thumbnails_fs_cloner.ggWidth + 'px';
				parameter.height=me._thumbnails_fs_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnails_fs_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._thumbnails_fs_cloner.ggNodeCount = me._thumbnails_fs_cloner.ggNumFilterPassed;
			me._thumbnails_fs_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnails_fs_cloner.parentNode && me._thumbnails_fs_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnails_fs_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnails_fs_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnails_fs_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnails_fs_cloner.childNodes.length; i++) {
				var child=me._thumbnails_fs_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnails_fs_cloner.ggUpdatePosition=function (useTransition) {
			me._thumbnails_fs_cloner.ggUpdate();
		}
		me._thumbnails_fs_scroller__content.appendChild(me._thumbnails_fs_cloner);
		me._thumbnails_fullscreen.appendChild(me._thumbnails_fs_scroller);
		el=me._thumbnails_fs_close=document.createElement('div');
		els=me._thumbnails_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnails_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_close.onclick=function (e) {
			player.setVariableValue('vis_thumbnails_full', false);
		}
		me._thumbnails_fs_close.onmouseenter=function (e) {
			me._thumbnails_fs_close__img.style.visibility='hidden';
			me._thumbnails_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_fs_close']=true;
		}
		me._thumbnails_fs_close.onmouseleave=function (e) {
			me._thumbnails_fs_close__img.style.visibility='inherit';
			me._thumbnails_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_fs_close']=false;
		}
		me._thumbnails_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen.appendChild(me._thumbnails_fs_close);
		el=me._thumbnails_small=document.createElement('div');
		els=me._thumbnails_small__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSI0OCAyOC40NiAzNS41NCAyOC40NiAzNS41NCAyOC40NiAzNS41NCAxNiIvPgogIDxsaW'+
			'5lIHkyPSIyOC40NiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5MT0iMTYuNDUiIHgyPSIzNS41NCIgeDE9IjQ3LjY1Ii8+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIxNiAzNS41NCAyOC40NiAzNS41NCAyOC40NiAzNS41NCAyOC40NiA0OCIvPgogIDxsaW5lIHkyPSIzNS41NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lk'+
			'dGg6NHB4IiB5MT0iNDcuNTUiIHgyPSIyOC40NiIgeDE9IjE2LjM1Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnails_small__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnails_small__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbW'+
			'l0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHBvaW50cz0iNDggMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMTYiLz4KICA8bGluZSB5Mj0iMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTE9IjE2LjQ1IiB4Mj0iMzUuNTQiIHgxPSI0Ny42NSIvPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEi'+
			'IHBvaW50cz0iMTYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgNDgiLz4KICA8bGluZSB5Mj0iMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTE9IjQ3LjU1IiB4Mj0iMjguNDYiIHgxPSIxNi4zNSIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_small__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="thumbnails_small";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_small.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_small.onclick=function (e) {
			player.setVariableValue('vis_thumbnails_full', false);
			player.setVariableValue('vis_thumbnails', true);
		}
		me._thumbnails_small.onmouseenter=function (e) {
			me._thumbnails_small__img.style.visibility='hidden';
			me._thumbnails_small__imgo.style.visibility='inherit';
			me.elementMouseOver['thumbnails_small']=true;
		}
		me._thumbnails_small.onmouseleave=function (e) {
			me._thumbnails_small__img.style.visibility='inherit';
			me._thumbnails_small__imgo.style.visibility='hidden';
			me.elementMouseOver['thumbnails_small']=false;
		}
		me._thumbnails_small.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fullscreen.appendChild(me._thumbnails_small);
		me.divSkin.appendChild(me._thumbnails_fullscreen);
		el=me._video_hs_popup=document.createElement('div');
		el.ggId="video_hs_popup";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_hs_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_hs_popup.style.transition='';
				if (me._video_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._video_hs_popup.style.visibility=(Number(me._video_hs_popup.style.opacity)>0||!me._video_hs_popup.style.opacity)?'inherit':'hidden';
					me._video_hs_popup.ggVisible=true;
				}
				else {
					me._video_hs_popup.style.visibility="hidden";
					me._video_hs_popup.ggVisible=false;
				}
			}
		}
		me._video_hs_popup.logicBlock_visible();
		me._video_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_hs_popup_close=document.createElement('div');
		els=me._video_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._video_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_video_youtube_hs_popup', false);
			player.setVariableValue('vis_video_vimeo_hs_popup', false);
			player.setVariableValue('vis_video_file_hs_popup', false);
			player.setVariableValue('vis_video_url_hs_popup', false);
		}
		me._video_hs_popup_close.onmouseenter=function (e) {
			me._video_hs_popup_close__img.style.visibility='hidden';
			me._video_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['video_hs_popup_close']=true;
		}
		me._video_hs_popup_close.onmouseleave=function (e) {
			me._video_hs_popup_close__img.style.visibility='inherit';
			me._video_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['video_hs_popup_close']=false;
		}
		me._video_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_hs_popup_close);
		el=me._video_youtube_hs_popup_vid=document.createElement('div');
		me._video_youtube_hs_popup_vid.seekbars = [];
			me._video_youtube_hs_popup_vid.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_youtube_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_youtube_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_youtube_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_youtube_hs_popup_vid.hasChildNodes()) {
				me._video_youtube_hs_popup_vid.removeChild(me._video_youtube_hs_popup_vid.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_youtube_hs_popup_vid.ggVideoNotLoaded == false && me._video_youtube_hs_popup_vid.ggDeactivate && player.isPlaying('video_youtube_hs_popup_vid')) { me._video_youtube_hs_popup_vid.ggDeactivate(); }
				me._video_youtube_hs_popup_vid.ggVideoNotLoaded = true;
				return;
			}
			me._video_youtube_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_youtube_hs_popup_vid__vid=document.createElement('iframe');
			me._video_youtube_hs_popup_vid__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_youtube_hs_popup_vid__vid.setAttribute('src', ggVideoUrl);
			me._video_youtube_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_youtube_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_youtube_hs_popup_vid__vid.setAttribute('allow', 'autoplay');
			me._video_youtube_hs_popup_vid__vid.setAttribute('allowfullscreen', 'true');
			me._video_youtube_hs_popup_vid__vid.setAttribute('style', 'border:none; ; ;');
			me._video_youtube_hs_popup_vid.appendChild(me._video_youtube_hs_popup_vid__vid);
			me._video_youtube_hs_popup_vid__vid.id = 'youtube-video';
			me._video_youtube_hs_popup_vid.ggYoutubeApiReady = function() {
				me._video_youtube_hs_popup_vid.ggApiPlayerType = 'youtube';
				me._video_youtube_hs_popup_vid.ggApiPlayerReady = false;
				me._video_youtube_hs_popup_vid.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._video_youtube_hs_popup_vid.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._video_youtube_hs_popup_vid.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._video_youtube_hs_popup_vid.ggMediaEnded) {
								me._video_youtube_hs_popup_vid.ggMediaEnded();
							}
							if (event.data == 1 && me._video_youtube_hs_popup_vid.ggActivate) {
								me._video_youtube_hs_popup_vid.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._video_youtube_hs_popup_vid.ggDeactivate) {
								me._video_youtube_hs_popup_vid.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'video_youtube_hs_popup_vid' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._video_youtube_hs_popup_vid.ggApiPlayer.unMute();
						if (args.state == 1) skin._video_youtube_hs_popup_vid.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._video_youtube_hs_popup_vid.ggApiPlayer.isMuted()) skin._video_youtube_hs_popup_vid.ggApiPlayer.unMute(); else skin._video_youtube_hs_popup_vid.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'video_youtube_hs_popup_vid' || args.id == '_main') {
						if (args.type == 'set') skin._video_youtube_hs_popup_vid.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._video_youtube_hs_popup_vid.ggApiPlayer.setVolume(skin._video_youtube_hs_popup_vid.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._video_youtube_hs_popup_vid.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_youtube_hs_popup_vid.ggYoutubeApiReady();}
		}
		el.ggId="video_youtube_hs_popup_vid";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 96px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 96px) + 0px) / 2) + 26px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_youtube_hs_popup_vid.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_youtube_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_youtube_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_youtube_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_youtube_hs_popup_vid.style.transition='';
				if (me._video_youtube_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_youtube_hs_popup_vid.style.visibility=(Number(me._video_youtube_hs_popup_vid.style.opacity)>0||!me._video_youtube_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_youtube_hs_popup_vid.ggVideoNotLoaded) {
						me._video_youtube_hs_popup_vid.ggInitMedia(me._video_youtube_hs_popup_vid.ggVideoSource);
					}
					me._video_youtube_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_youtube_hs_popup_vid.style.visibility="hidden";
					me._video_youtube_hs_popup_vid.ggInitMedia('');
					me._video_youtube_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_youtube_hs_popup_vid.logicBlock_visible();
		me._video_youtube_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_youtube_hs_popup_vid);
		el=me._video_vimeo_hs_popup_vid=document.createElement('div');
		me._video_vimeo_hs_popup_vid.seekbars = [];
		me._video_vimeo_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_vimeo_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_vimeo_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_vimeo_hs_popup_vid.hasChildNodes()) {
				me._video_vimeo_hs_popup_vid.removeChild(me._video_vimeo_hs_popup_vid.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_vimeo_hs_popup_vid.ggVideoNotLoaded == false && me._video_vimeo_hs_popup_vid.ggDeactivate && player.isPlaying('video_vimeo_hs_popup_vid')) { me._video_vimeo_hs_popup_vid.ggDeactivate(); }
				me._video_vimeo_hs_popup_vid.ggVideoNotLoaded = true;
				return;
			}
			me._video_vimeo_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_vimeo_hs_popup_vid__vid=document.createElement('iframe');
			me._video_vimeo_hs_popup_vid__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._video_vimeo_hs_popup_vid__vid.setAttribute('src', ggVideoUrl);
			me._video_vimeo_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('allow', 'autoplay');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('allowfullscreen', 'true');
			me._video_vimeo_hs_popup_vid__vid.setAttribute('style', 'border:none; ; ;');
			me._video_vimeo_hs_popup_vid.appendChild(me._video_vimeo_hs_popup_vid__vid);
			me._video_vimeo_hs_popup_vid.ggApiPlayerType = 'vimeo';
			me._video_vimeo_hs_popup_vid.ggApiPlayer = new Vimeo.Player(me._video_vimeo_hs_popup_vid__vid);
			if (player.getPlayerMuted()) me._video_vimeo_hs_popup_vid.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'video_vimeo_hs_popup_vid' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._video_vimeo_hs_popup_vid.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._video_vimeo_hs_popup_vid.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._video_vimeo_hs_popup_vid.ggApiPlayer.getVolume() > 0.0) skin._video_vimeo_hs_popup_vid.ggApiPlayer.setVolume(0); else skin._video_vimeo_hs_popup_vid.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'video_vimeo_hs_popup_vid' || args.id == '_main') {
					if (args.type == 'set') skin._video_vimeo_hs_popup_vid.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._video_vimeo_hs_popup_vid.ggApiPlayer.getVolume().then(function(volume) { skin._video_vimeo_hs_popup_vid.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._video_vimeo_hs_popup_vid.ggVideoSource = media;
		}
		el.ggId="video_vimeo_hs_popup_vid";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 96px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 96px) + 0px) / 2) + 26px);';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_vimeo_hs_popup_vid.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_vimeo_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_vimeo_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_vimeo_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_vimeo_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_vimeo_hs_popup_vid.style.transition='';
				if (me._video_vimeo_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_vimeo_hs_popup_vid.style.visibility=(Number(me._video_vimeo_hs_popup_vid.style.opacity)>0||!me._video_vimeo_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_vimeo_hs_popup_vid.ggVideoNotLoaded) {
						me._video_vimeo_hs_popup_vid.ggInitMedia(me._video_vimeo_hs_popup_vid.ggVideoSource);
					}
					me._video_vimeo_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_vimeo_hs_popup_vid.style.visibility="hidden";
					me._video_vimeo_hs_popup_vid.ggInitMedia('');
					me._video_vimeo_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_vimeo_hs_popup_vid.logicBlock_visible();
		me._video_vimeo_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_vimeo_hs_popup_vid);
		el=me._video_file_hs_popup_vid=document.createElement('div');
		me._video_file_hs_popup_vid.seekbars = [];
		me._video_file_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_hs_popup_vid.hasChildNodes()) {
				me._video_file_hs_popup_vid.removeChild(me._video_file_hs_popup_vid.lastChild);
			}
			if (me._video_file_hs_popup_vid__vid) {
				me._video_file_hs_popup_vid__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_hs_popup_vid.ggVideoNotLoaded == false && me._video_file_hs_popup_vid.ggDeactivate && player.isPlaying('video_file_hs_popup_vid')) { me._video_file_hs_popup_vid.ggDeactivate(); }
				me._video_file_hs_popup_vid.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_hs_popup_vid');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_file_hs_popup_vid__vid=document.createElement('video');
			me._video_file_hs_popup_vid__vid.className='ggskin ggskin_video';
			me._video_file_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_file_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_file_hs_popup_vid__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_hs_popup_vid__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_hs_popup_vid__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_hs_popup_vid__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_hs_popup_vid__vid.setAttribute('autoplay', '');
			me._video_file_hs_popup_vid__source=document.createElement('source');
			me._video_file_hs_popup_vid__source.setAttribute('src', media);
			me._video_file_hs_popup_vid__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_hs_popup_vid__vid.setAttribute('style', ';');
			me._video_file_hs_popup_vid__vid.style.outline = 'none';
			me._video_file_hs_popup_vid__vid.appendChild(me._video_file_hs_popup_vid__source);
			me._video_file_hs_popup_vid.appendChild(me._video_file_hs_popup_vid__vid);
			var videoEl = player.registerVideoElement('video_file_hs_popup_vid', me._video_file_hs_popup_vid__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_hs_popup_vid', 0.0);
			notifySeekbars();
			if (me._video_file_hs_popup_vid.ggActivate) {
				me._video_file_hs_popup_vid__vid.addEventListener('play', me._video_file_hs_popup_vid.ggActivate);
			}
			if (me._video_file_hs_popup_vid.ggDeactivate) {
				me._video_file_hs_popup_vid__vid.addEventListener('ended', me._video_file_hs_popup_vid.ggDeactivate);
				me._video_file_hs_popup_vid__vid.addEventListener('pause', me._video_file_hs_popup_vid.ggDeactivate);
			}
			me._video_file_hs_popup_vid.ggVideoSource = media;
		}
		el.ggId="video_file_hs_popup_vid";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 150px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_hs_popup_vid.ggIsActive=function() {
			if (me._video_file_hs_popup_vid__vid != null) {
				return (me._video_file_hs_popup_vid__vid.paused == false && me._video_file_hs_popup_vid__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_hs_popup_vid.style.transition='';
				if (me._video_file_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_file_hs_popup_vid.style.visibility=(Number(me._video_file_hs_popup_vid.style.opacity)>0||!me._video_file_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_file_hs_popup_vid.ggVideoNotLoaded) {
						me._video_file_hs_popup_vid.ggInitMedia(me._video_file_hs_popup_vid.ggVideoSource);
					}
					me._video_file_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_file_hs_popup_vid.style.visibility="hidden";
					me._video_file_hs_popup_vid.ggInitMedia('');
					me._video_file_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_file_hs_popup_vid.logicBlock_visible();
		me._video_file_hs_popup_vid.onclick=function (e) {
			if (me._video_file_hs_popup_vid.ggApiPlayer) {
				if (me._video_file_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_hs_popup_vid.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_hs_popup_vid.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_hs_popup_vid.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_hs_popup_vid.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_hs_popup_vid.ggApiPlayer.play();
						} else {
							me._video_file_hs_popup_vid.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_hs_popup_vid","1");
			}
		}
		me._video_file_hs_popup_vid.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_hs_popup_play.style.transition='none';
			} else {
				me._video_file_hs_popup_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_hs_popup_play.style.opacity='0';
			me._video_file_hs_popup_play.style.visibility='hidden';
		}
		me._video_file_hs_popup_vid.ggDeactivate=function () {
			me._video_file_hs_popup_play.style.transition='none';
			me._video_file_hs_popup_play.style.opacity='1';
			me._video_file_hs_popup_play.style.visibility=me._video_file_hs_popup_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_file_hs_popup_vid);
		el=me._video_file_hs_popup_play=document.createElement('div');
		els=me._video_file_hs_popup_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_hs_popup_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_hs_popup_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_file_hs_popup_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_hs_popup_play";
		el.ggDx=0;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 4px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_hs_popup_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_hs_popup_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_hs_popup_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_hs_popup_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_hs_popup_play.style.transition='';
				if (me._video_file_hs_popup_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_hs_popup_play.style.visibility=(Number(me._video_file_hs_popup_play.style.opacity)>0||!me._video_file_hs_popup_play.style.opacity)?'inherit':'hidden';
					me._video_file_hs_popup_play.ggVisible=true;
				}
				else {
					me._video_file_hs_popup_play.style.visibility="hidden";
					me._video_file_hs_popup_play.ggVisible=false;
				}
			}
		}
		me._video_file_hs_popup_play.logicBlock_visible();
		me._video_file_hs_popup_play.onclick=function (e) {
			if (me._video_file_hs_popup_vid.ggApiPlayer) {
				if (me._video_file_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_hs_popup_vid.ggApiPlayer.playVideo();
					};
					if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					me._video_file_hs_popup_vid.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_hs_popup_vid","1");
			}
		}
		me._video_file_hs_popup_play.onmouseenter=function (e) {
			me._video_file_hs_popup_play__img.style.visibility='hidden';
			me._video_file_hs_popup_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_hs_popup_play']=true;
		}
		me._video_file_hs_popup_play.onmouseleave=function (e) {
			me._video_file_hs_popup_play__img.style.visibility='inherit';
			me._video_file_hs_popup_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_hs_popup_play']=false;
		}
		me._video_file_hs_popup_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_file_hs_popup_play);
		el=me._video_url_hs_popup_vid=document.createElement('div');
		me._video_url_hs_popup_vid.seekbars = [];
		me._video_url_hs_popup_vid.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_hs_popup_vid.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_hs_popup_vid.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_hs_popup_vid.hasChildNodes()) {
				me._video_url_hs_popup_vid.removeChild(me._video_url_hs_popup_vid.lastChild);
			}
			if (me._video_url_hs_popup_vid__vid) {
				me._video_url_hs_popup_vid__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_hs_popup_vid.ggVideoNotLoaded == false && me._video_url_hs_popup_vid.ggDeactivate && player.isPlaying('video_url_hs_popup_vid')) { me._video_url_hs_popup_vid.ggDeactivate(); }
				me._video_url_hs_popup_vid.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_hs_popup_vid');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_hs_popup_vid.ggVideoNotLoaded = false;
			me._video_url_hs_popup_vid__vid=document.createElement('video');
			me._video_url_hs_popup_vid__vid.className='ggskin ggskin_video';
			me._video_url_hs_popup_vid__vid.setAttribute('width', '100%');
			me._video_url_hs_popup_vid__vid.setAttribute('height', '100%');
			me._video_url_hs_popup_vid__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_hs_popup_vid__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_hs_popup_vid__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_hs_popup_vid__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_hs_popup_vid__vid.setAttribute('autoplay', '');
			me._video_url_hs_popup_vid__source=document.createElement('source');
			me._video_url_hs_popup_vid__source.setAttribute('src', media);
			me._video_url_hs_popup_vid__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_hs_popup_vid__vid.setAttribute('style', ';');
			me._video_url_hs_popup_vid__vid.style.outline = 'none';
			me._video_url_hs_popup_vid__vid.appendChild(me._video_url_hs_popup_vid__source);
			me._video_url_hs_popup_vid.appendChild(me._video_url_hs_popup_vid__vid);
			var videoEl = player.registerVideoElement('video_url_hs_popup_vid', me._video_url_hs_popup_vid__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_hs_popup_vid', 0.0);
			notifySeekbars();
			if (me._video_url_hs_popup_vid.ggActivate) {
				me._video_url_hs_popup_vid__vid.addEventListener('play', me._video_url_hs_popup_vid.ggActivate);
			}
			if (me._video_url_hs_popup_vid.ggDeactivate) {
				me._video_url_hs_popup_vid__vid.addEventListener('ended', me._video_url_hs_popup_vid.ggDeactivate);
				me._video_url_hs_popup_vid__vid.addEventListener('pause', me._video_url_hs_popup_vid.ggDeactivate);
			}
			me._video_url_hs_popup_vid.ggVideoSource = media;
		}
		el.ggId="video_url_hs_popup_vid";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 150px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 82px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_hs_popup_vid.ggIsActive=function() {
			if (me._video_url_hs_popup_vid__vid != null) {
				return (me._video_url_hs_popup_vid__vid.paused == false && me._video_url_hs_popup_vid__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_hs_popup_vid.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_hs_popup_vid.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_hs_popup_vid.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_hs_popup_vid.style.transition='';
				if (me._video_url_hs_popup_vid.ggCurrentLogicStateVisible == 0) {
					me._video_url_hs_popup_vid.style.visibility=(Number(me._video_url_hs_popup_vid.style.opacity)>0||!me._video_url_hs_popup_vid.style.opacity)?'inherit':'hidden';
					if (me._video_url_hs_popup_vid.ggVideoNotLoaded) {
						me._video_url_hs_popup_vid.ggInitMedia(me._video_url_hs_popup_vid.ggVideoSource);
					}
					me._video_url_hs_popup_vid.ggVisible=true;
				}
				else {
					me._video_url_hs_popup_vid.style.visibility="hidden";
					me._video_url_hs_popup_vid.ggInitMedia('');
					me._video_url_hs_popup_vid.ggVisible=false;
				}
			}
		}
		me._video_url_hs_popup_vid.logicBlock_visible();
		me._video_url_hs_popup_vid.onclick=function (e) {
			if (me._video_url_hs_popup_vid.ggApiPlayer) {
				if (me._video_url_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_hs_popup_vid.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_hs_popup_vid.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_hs_popup_vid.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_hs_popup_vid.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_hs_popup_vid.ggApiPlayer.play();
						} else {
							me._video_url_hs_popup_vid.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_hs_popup_vid","1");
			}
		}
		me._video_url_hs_popup_vid.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_hs_popup_play.style.transition='none';
			} else {
				me._video_url_hs_popup_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_hs_popup_play.style.opacity='0';
			me._video_url_hs_popup_play.style.visibility='hidden';
		}
		me._video_url_hs_popup_vid.ggDeactivate=function () {
			me._video_url_hs_popup_play.style.transition='none';
			me._video_url_hs_popup_play.style.opacity='1';
			me._video_url_hs_popup_play.style.visibility=me._video_url_hs_popup_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_hs_popup_vid.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_url_hs_popup_vid);
		el=me._video_url_hs_popup_play=document.createElement('div');
		els=me._video_url_hs_popup_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_hs_popup_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_hs_popup_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_url_hs_popup_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_hs_popup_play";
		el.ggDx=0;
		el.ggDy=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 4px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_hs_popup_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_hs_popup_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_hs_popup_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_hs_popup_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_hs_popup_play.style.transition='';
				if (me._video_url_hs_popup_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_hs_popup_play.style.visibility=(Number(me._video_url_hs_popup_play.style.opacity)>0||!me._video_url_hs_popup_play.style.opacity)?'inherit':'hidden';
					me._video_url_hs_popup_play.ggVisible=true;
				}
				else {
					me._video_url_hs_popup_play.style.visibility="hidden";
					me._video_url_hs_popup_play.ggVisible=false;
				}
			}
		}
		me._video_url_hs_popup_play.logicBlock_visible();
		me._video_url_hs_popup_play.onclick=function (e) {
			if (me._video_url_hs_popup_vid.ggApiPlayer) {
				if (me._video_url_hs_popup_vid.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_hs_popup_vid.ggApiPlayer.playVideo();
					};
					if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_hs_popup_vid.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_hs_popup_vid.ggApiPlayerType == 'vimeo') {
					me._video_url_hs_popup_vid.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_hs_popup_vid","1");
			}
		}
		me._video_url_hs_popup_play.onmouseenter=function (e) {
			me._video_url_hs_popup_play__img.style.visibility='hidden';
			me._video_url_hs_popup_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_hs_popup_play']=true;
		}
		me._video_url_hs_popup_play.onmouseleave=function (e) {
			me._video_url_hs_popup_play__img.style.visibility='inherit';
			me._video_url_hs_popup_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_hs_popup_play']=false;
		}
		me._video_url_hs_popup_play.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_url_hs_popup_play);
		el=me._video_controller=document.createElement('div');
		el.ggId="video_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 2%;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((360px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller.style.transition='';
				if (me._video_controller.ggCurrentLogicStateVisible == 0) {
					me._video_controller.style.visibility=(Number(me._video_controller.style.opacity)>0||!me._video_controller.style.opacity)?'inherit':'hidden';
					me._video_controller.ggVisible=true;
				}
				else {
					me._video_controller.style.visibility="hidden";
					me._video_controller.ggVisible=false;
				}
			}
		}
		me._video_controller.logicBlock_visible();
		me._video_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar=document.createElement('div');
		me._video_controller_seekbar__playhead=document.createElement('div');
		me._video_controller_seekbar.mediaEl = null;
		me._video_controller_seekbar.fromBufferSource = false;
		me._video_controller_seekbar.ggMediaId = '';
		el.ggId="video_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((6px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar || e.target == me._video_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar.onmousedown = me._video_controller_seekbar.ontouchstart = me._video_controller_seekbar.mouseTouchHandling;
		me._video_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar.style.background = '#282828';
				me._video_controller_seekbar.ggConnected = false;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.removeEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.removeEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar.mediaEl = player.getMediaObject(me._video_controller_seekbar.ggMediaId);
			if (me._video_controller_seekbar.mediaEl) {
				me._video_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				me._video_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar__playhead.style.left = '-11px';
				if (me._video_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.addEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.addEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_controller_seekbar.ggConnected) return;
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.mediaEl.readyState || (me._video_controller_seekbar.fromBufferSource && args && args['id'] == me._video_controller_seekbar.mediaEl.id)) {
					if (me._video_controller_seekbar.fromBufferSource) {
						var percent = me._video_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar.mediaEl.currentTime / me._video_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar.clientWidth - 2 * 3 + 0) * percent);
					playheadpos += -11;
					me._video_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._video_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(230,230,230,1) ' + currPos + '%';
					if (me._video_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar.mediaEl.buffered.start(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar.mediaEl.buffered.end(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(40,40,40,1) ' + currPos + '%, rgba(40,40,40,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(40,40,40,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar.appendChild(me._video_controller_seekbar__playhead);
		hs+='background : #282828;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		var hs_playhead = 'height: 27px;';
		hs_playhead += 'width: 27px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -11px;';
		hs_playhead += 'top: -10.5px;';
		hs_playhead += 'border-radius: 14px;';
		hs_playhead += cssPrefix + 'border-radius: 14px;';
		hs_playhead += 'background-color: rgba(74,74,74,1);';
		me._video_controller_seekbar.setAttribute('style', hs);
		me._video_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar.ggIsActive=function() {
			if (me._video_controller_seekbar.mediaEl != null) {
				return (me._video_controller_seekbar.mediaEl.paused == false && me._video_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar.updatePlayback();
		}
		me._video_controller.appendChild(me._video_controller_seekbar);
		me._video_hs_popup.appendChild(me._video_controller);
		el=me._video_hs_popup_title=document.createElement('div');
		els=me._video_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="video_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._video_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._video_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._video_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._video_hs_popup.appendChild(me._video_hs_popup_title);
		me.divSkin.appendChild(me._video_hs_popup);
		el=me._pdf_hs_popup=document.createElement('div');
		el.ggId="pdf_hs_popup";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_hs_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._pdf_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_hs_popup.style.transition='';
				if (me._pdf_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._pdf_hs_popup.style.visibility=(Number(me._pdf_hs_popup.style.opacity)>0||!me._pdf_hs_popup.style.opacity)?'inherit':'hidden';
					me._pdf_hs_popup.ggVisible=true;
				}
				else {
					me._pdf_hs_popup.style.visibility="hidden";
					me._pdf_hs_popup.ggVisible=false;
				}
			}
		}
		me._pdf_hs_popup.logicBlock_visible();
		me._pdf_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._pdf_hs_popup_close=document.createElement('div');
		els=me._pdf_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._pdf_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pdf_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._pdf_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="pdf_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_pdf_hs_popup', false);
		}
		me._pdf_hs_popup_close.onmouseenter=function (e) {
			me._pdf_hs_popup_close__img.style.visibility='hidden';
			me._pdf_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['pdf_hs_popup_close']=true;
		}
		me._pdf_hs_popup_close.onmouseleave=function (e) {
			me._pdf_hs_popup_close__img.style.visibility='inherit';
			me._pdf_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['pdf_hs_popup_close']=false;
		}
		me._pdf_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_hs_popup.appendChild(me._pdf_hs_popup_close);
		el=me._pdf_hs_popup_title=document.createElement('div');
		els=me._pdf_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="pdf_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._pdf_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._pdf_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._pdf_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_hs_popup.appendChild(me._pdf_hs_popup_title);
		el=me._pdf_hs_popup_pdf=document.createElement('div');
		els=me._pdf_hs_popup_pdf__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_hs_popup_pdf__pdf.setAttribute('frameborder', '0');
		me._pdf_hs_popup_pdf__pdf.setAttribute('width', '100%');
		me._pdf_hs_popup_pdf__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_hs_popup_pdf.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_hs_popup_pdf.ggPdfSource == file) return;
				me._pdf_hs_popup_pdf.pdfNotLoaded = false;
				me._pdf_hs_popup_pdf.ggPdfSource = file;
				let pdfUrl = (me._pdf_hs_popup_pdf.ggPdfSource.indexOf(':') != -1 || me._pdf_hs_popup_pdf.ggPdfSource.startsWith('/') || me._pdf_hs_popup_pdf.ggPdfSource.startsWith('./')) ? me._pdf_hs_popup_pdf.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_hs_popup_pdf.ggPdfSource;
				me._pdf_hs_popup_pdf__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_hs_popup_pdf__pdf.style.display = 'block';
			} else {
				me._pdf_hs_popup_pdf__pdf.setAttribute('src', '');
				me._pdf_hs_popup_pdf__pdf.style.display = 'none';
				me._pdf_hs_popup_pdf.pdfNotLoaded = true;
				me._pdf_hs_popup_pdf.ggPdfSource = '';
			}
		}
		me._pdf_hs_popup_pdf.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_hs_popup_pdf.ggInitPdf('');
		el.ggId="pdf_hs_popup_pdf";
		el.ggDx=0;
		el.ggDy=26;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='height : calc(100% - 96px);';
		hs+='left : calc(50% - ((calc(100% - 48px) + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 96px) + 2px) / 2) + 26px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 48px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_hs_popup_pdf.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_hs_popup_pdf.ggUpdatePosition=function (useTransition) {
		}
		me._pdf_hs_popup.appendChild(me._pdf_hs_popup_pdf);
		me.divSkin.appendChild(me._pdf_hs_popup);
		el=me._image_hs_popup_fullscreen=document.createElement('div');
		el.ggId="image_hs_popup_fullscreen";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_hs_popup_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_hs_popup_full') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_hs_popup_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_hs_popup_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_hs_popup_fullscreen.style.transition='';
				if (me._image_hs_popup_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._image_hs_popup_fullscreen.style.visibility=(Number(me._image_hs_popup_fullscreen.style.opacity)>0||!me._image_hs_popup_fullscreen.style.opacity)?'inherit':'hidden';
					me._image_hs_popup_fullscreen.ggVisible=true;
				}
				else {
					me._image_hs_popup_fullscreen.style.visibility="hidden";
					me._image_hs_popup_fullscreen.ggVisible=false;
				}
			}
		}
		me._image_hs_popup_fullscreen.logicBlock_visible();
		me._image_hs_popup_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup_fs_description=document.createElement('div');
		els=me._image_hs_popup_fs_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_fs_description";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 16px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._image_hs_popup_fs_description.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(player.getVariableValue('image_hs_description', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')))));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_fs_description.ggUpdateText();
		player.addListener('varchanged_image_hs_description', function() {
			me._image_hs_popup_fs_description.ggUpdateText();
		});
		el.appendChild(els);
		me._image_hs_popup_fs_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_description.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_description);
		el=me._image_hs_popup_fs_img=document.createElement('div');
		els=me._image_hs_popup_fs_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_hs_popup_fs_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_hs_popup_fs_img.ggSubElement.setAttribute('alt', player._(me._image_hs_popup_fs_img.ggAltText));
			me._image_hs_popup_fs_img.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_hs_popup_fs_img.ggText_untranslated = img;
			me._image_hs_popup_fs_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_hs_popup_fs_img.ggSubElement.style.width = '0px';
			me._image_hs_popup_fs_img.ggSubElement.style.height = '0px';
			me._image_hs_popup_fs_img.ggSubElement.src='';
			me._image_hs_popup_fs_img.ggSubElement.src=me._image_hs_popup_fs_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_hs_popup_fs_img.ggText != player._(me._image_hs_popup_fs_img.ggText_untranslated)) {
				me._image_hs_popup_fs_img.ggText = player._(me._image_hs_popup_fs_img.ggText_untranslated);
				me._image_hs_popup_fs_img.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_hs_popup_fs_img";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 196px);';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_fs_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_img.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('image_hs_description') == ""))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._image_hs_popup_fs_img.ggCurrentLogicStateSize != newLogicStateSize) {
				me._image_hs_popup_fs_img.ggCurrentLogicStateSize = newLogicStateSize;
				me._image_hs_popup_fs_img.style.transition='width 0s, height 0s';
				if (me._image_hs_popup_fs_img.ggCurrentLogicStateSize == 0) {
					me._image_hs_popup_fs_img.style.width='calc(100% - 32px)';
					me._image_hs_popup_fs_img.style.height='calc(100% - 116px)';
					me._image_hs_popup_fs_img.style.left = 'calc(50% - (calc(100% - 32px) / 2))';
					skin.updateSize(me._image_hs_popup_fs_img);
				}
				else {
					me._image_hs_popup_fs_img.style.width='calc(100% - 32px)';
					me._image_hs_popup_fs_img.style.height='calc(100% - 196px)';
					me._image_hs_popup_fs_img.style.left = 'calc(50% - (calc(100% - 32px) / 2))';
					skin.updateSize(me._image_hs_popup_fs_img);
				}
			}
		}
		me._image_hs_popup_fs_img.logicBlock_size();
		me._image_hs_popup_fs_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_hs_popup_fs_img.clientWidth;
			var parentHeight = me._image_hs_popup_fs_img.clientHeight;
			var img = me._image_hs_popup_fs_img__img;
			var aspectRatioDiv = me._image_hs_popup_fs_img.clientWidth / me._image_hs_popup_fs_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_hs_popup_fs_img.ggScrollbars || currentWidth < me._image_hs_popup_fs_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_hs_popup_fs_img.scrollLeft=currentWidth / 2 - me._image_hs_popup_fs_img.clientWidth / 2;
			}
			if (!me._image_hs_popup_fs_img.ggScrollbars || currentHeight < me._image_hs_popup_fs_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_hs_popup_fs_img.scrollTop=currentHeight / 2 - me._image_hs_popup_fs_img.clientHeight / 2;
			}
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_img);
		el=me._image_hs_popup_fs_title=document.createElement('div');
		els=me._image_hs_popup_fs_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_fs_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._image_hs_popup_fs_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_fs_title.ggUpdateText();
		el.appendChild(els);
		me._image_hs_popup_fs_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_title.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_title);
		el=me._image_hs_popup_fs_close=document.createElement('div');
		els=me._image_hs_popup_fs_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_fs_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_fs_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_hs_popup_fs_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_fs_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_fs_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_hs_popup_fs_close.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popup_full', false);
		}
		me._image_hs_popup_fs_close.onmouseenter=function (e) {
			me._image_hs_popup_fs_close__img.style.visibility='hidden';
			me._image_hs_popup_fs_close__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_fs_close']=true;
		}
		me._image_hs_popup_fs_close.onmouseleave=function (e) {
			me._image_hs_popup_fs_close__img.style.visibility='inherit';
			me._image_hs_popup_fs_close__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_fs_close']=false;
		}
		me._image_hs_popup_fs_close.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup_fullscreen.appendChild(me._image_hs_popup_fs_close);
		me.divSkin.appendChild(me._image_hs_popup_fullscreen);
		el=me._url_hs_popup=document.createElement('div');
		el.ggId="url_hs_popup";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_hs_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._url_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._url_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._url_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._url_hs_popup.style.transition='';
				if (me._url_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._url_hs_popup.style.visibility=(Number(me._url_hs_popup.style.opacity)>0||!me._url_hs_popup.style.opacity)?'inherit':'hidden';
					me._url_hs_popup.ggVisible=true;
				}
				else {
					me._url_hs_popup.style.visibility="hidden";
					me._url_hs_popup.ggVisible=false;
				}
			}
		}
		me._url_hs_popup.logicBlock_visible();
		me._url_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._url_hs_popup_close=document.createElement('div');
		els=me._url_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._url_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._url_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._url_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="url_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._url_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_url_hs_popup', false);
		}
		me._url_hs_popup_close.onmouseenter=function (e) {
			me._url_hs_popup_close__img.style.visibility='hidden';
			me._url_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['url_hs_popup_close']=true;
		}
		me._url_hs_popup_close.onmouseleave=function (e) {
			me._url_hs_popup_close__img.style.visibility='inherit';
			me._url_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['url_hs_popup_close']=false;
		}
		me._url_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._url_hs_popup.appendChild(me._url_hs_popup_close);
		el=me._url_hs_popup_title=document.createElement('div');
		els=me._url_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 500;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._url_hs_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_hs_popup_title.ggUpdateText();
		el.appendChild(els);
		me._url_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._url_hs_popup.appendChild(me._url_hs_popup_title);
		el=me._url_hs_popup_iframe=document.createElement('div');
		els=me._url_hs_popup_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_hs_popup_iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._url_hs_popup_iframe.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_hs_popup_iframe.ggUpdateText();
		el.appendChild(els);
		me._url_hs_popup_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_hs_popup_iframe.ggUpdatePosition=function (useTransition) {
		}
		me._url_hs_popup.appendChild(me._url_hs_popup_iframe);
		me.divSkin.appendChild(me._url_hs_popup);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 5px solid #000000;';
		hs+='border-radius : 32px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB5Mj0iMTUuOCIgeTE9IjQ3LjgiIHgyPSI0Ny44IiB4MT0iMTUuOCIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB5Mj0iMTUuOCIgeTE9IjQ3LjgiIHgyPSI0Ny44IiB4MT0iMTUuOCIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=75;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 75px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('toggle_audio', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-75;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) - 75px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		el=me._safe_area_phone=document.createElement('div');
		el.ggId="safe_area_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - env(safe-area-inset-top) - env(safe-area-inset-bottom));';
		hs+='left : env(safe-area-inset-left);';
		hs+='position : absolute;';
		hs+='top : env(safe-area-inset-top);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right));';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._safe_area_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._safe_area_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._popup_phone=document.createElement('div');
		el.ggId="popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 8px 8px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 90px);';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 16px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_phone.style.transition='';
				if (me._popup_phone.ggCurrentLogicStateVisible == 0) {
					me._popup_phone.style.visibility=(Number(me._popup_phone.style.opacity)>0||!me._popup_phone.style.opacity)?'inherit':'hidden';
					me._popup_phone.ggVisible=true;
				}
				else {
					me._popup_phone.style.visibility="hidden";
					me._popup_phone.ggVisible=false;
				}
			}
		}
		me._popup_phone.logicBlock_visible();
		me._popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._close_popup_phone=document.createElement('div');
		els=me._close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_popup', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
			player.setVariableValue('vis_phone_video_file', false);
			player.setVariableValue('vis_phone_video_url', false);
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_info', false);
			player.setVariableValue('vis_phone_map', false);
			player.setVariableValue('vis_phone_floorplan', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me._close_popup_phone__img.style.visibility='hidden';
			me._close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['close_popup_phone']=true;
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me._close_popup_phone__img.style.visibility='inherit';
			me._close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['close_popup_phone']=false;
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._close_popup_phone);
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.logicBlock_visible();
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._popup_phone.appendChild(me._info_popup_phone);
		el=me._thumbnail_scroller_phone=document.createElement('div');
		els=me._thumbnail_scroller_phone__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 127px;';
		hs+='left : 50%;';
		hs+='margin-left : -63.5px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 127px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_scroller_phone.ggScrollByX = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosX = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft + diffX);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
			me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
		}
		me._thumbnail_scroller_phone.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_scroller_phone.ggHorScrollVisible || diffX == 0 || me._thumbnail_scroller_phone.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_scroller_phone.ggScrollPosX >= me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.min(me._thumbnail_scroller_phone.ggScrollPosX, me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_scroller_phone.ggScrollPosX <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosX = Math.max(me._thumbnail_scroller_phone.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__horScrollFg.style.left = me._thumbnail_scroller_phone.ggScrollPosX + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosX / (me._thumbnail_scroller_phone__horScrollBg.offsetWidth - me._thumbnail_scroller_phone__horScrollFg.offsetWidth);
			me._thumbnail_scroller_phone__content.style.left = -(Math.round((me._thumbnail_scroller_phone.ggContentWidth * (1.0 - me._thumbnail_scroller_phone.ggHPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentLeftOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosXPercent = (me._thumbnail_scroller_phone__horScrollFg.offsetLeft / me._thumbnail_scroller_phone__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollByY = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			me._thumbnail_scroller_phone.ggScrollPosY = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop + diffY);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
			me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
		}
		me._thumbnail_scroller_phone.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_scroller_phone.ggVertScrollVisible || diffY == 0 || me._thumbnail_scroller_phone.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_scroller_phone.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_scroller_phone.ggScrollPosY >= me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_scroller_phone.ggScrollPosY <= 0)) {
					me._thumbnail_scroller_phone.ggScrollPosY = Math.max(me._thumbnail_scroller_phone.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
			let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
			me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
			me._thumbnail_scroller_phone.ggScrollPosYPercent = (me._thumbnail_scroller_phone__vertScrollFg.offsetTop / me._thumbnail_scroller_phone__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_scroller_phone.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_scroller_phone.clientWidth - (me._thumbnail_scroller_phone.ggVertScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggHPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_scroller_phone.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_scroller_phone.clientHeight - (me._thumbnail_scroller_phone.ggHorScrollVisible ? 8 : 0))) * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._thumbnail_scroller_phone__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._thumbnail_scroller_phone.ggDragInertiaX *= 0.96;
				me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
				me._thumbnail_scroller_phone.ggScrollByX(me._thumbnail_scroller_phone.ggDragInertiaX);
				me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
				if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._thumbnail_scroller_phone__content.onmouseup = null;
			me._thumbnail_scroller_phone__content.onmousemove = null;
			me._thumbnail_scroller_phone__content.ontouchend = null;
			me._thumbnail_scroller_phone__content.ontouchmove = null;
			me._thumbnail_scroller_phone__content.onpointerup = null;
			me._thumbnail_scroller_phone__content.onpointermove = null;
			setTimeout(function() { me._thumbnail_scroller_phone.ggIsDragging = false; }, 100);
		}
		me._thumbnail_scroller_phone__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._thumbnail_scroller_phone.ggDragStartX) > 10 || Math.abs(eventY - me._thumbnail_scroller_phone.ggDragStartY) > 10) me._thumbnail_scroller_phone.ggIsDragging = true;
			var diffX = (eventX - me._thumbnail_scroller_phone.ggDragLastX) * me._thumbnail_scroller_phone.ggHPercentVisible;
			var diffY = (eventY - me._thumbnail_scroller_phone.ggDragLastY) * me._thumbnail_scroller_phone.ggVPercentVisible;
			me._thumbnail_scroller_phone.ggDragInertiaX = -diffX;
			me._thumbnail_scroller_phone.ggDragInertiaY = -diffY;
			me._thumbnail_scroller_phone.ggDragLastX = eventX;
			me._thumbnail_scroller_phone.ggDragLastY = eventY;
			me._thumbnail_scroller_phone.ggScrollByX(-diffX);
			me._thumbnail_scroller_phone.ggScrollByY(-diffY);
		}
		me._thumbnail_scroller_phone__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastX = me._thumbnail_scroller_phone.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._thumbnail_scroller_phone.ggDragLastY = me._thumbnail_scroller_phone.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._thumbnail_scroller_phone__content.onmouseup = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.ontouchend = me._thumbnail_scroller_phone__content.mousetouchend;
			me._thumbnail_scroller_phone__content.onmousemove = me._thumbnail_scroller_phone__content.mousetouchmove;
			me._thumbnail_scroller_phone__content.ontouchmove = me._thumbnail_scroller_phone__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._thumbnail_scroller_phone__content.onpointerup = me._thumbnail_scroller_phone__content.ontouchend;
				me._thumbnail_scroller_phone__content.onpointermove = me._thumbnail_scroller_phone__content.ontouchmove;
			}
		}
		els.onmousedown = me._thumbnail_scroller_phone__content.mousetouchstart;
		els.ontouchstart = me._thumbnail_scroller_phone__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._thumbnail_scroller_phone__content.mousetouchstart;
		}
		elVertScrollBg = me._thumbnail_scroller_phone__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._thumbnail_scroller_phone__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 8px; height: 717px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._thumbnail_scroller_phone.ggScrollPosY = 0;
		me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_scroller_phone.ggDragInertiaY *= 0.96;
					me._thumbnail_scroller_phone.ggScrollByY(me._thumbnail_scroller_phone.ggDragInertiaY);
					if (Math.abs(me._thumbnail_scroller_phone.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._thumbnail_scroller_phone.ggDragLastY;
				me._thumbnail_scroller_phone.ggDragInertiaY = diffY;
				me._thumbnail_scroller_phone.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._thumbnail_scroller_phone.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if (e.offsetY < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect();
			var diffY = me._thumbnail_scroller_phone.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._thumbnail_scroller_phone.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._thumbnail_scroller_phone.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._thumbnail_scroller_phone.ggScrollByYSmooth(30 * me._thumbnail_scroller_phone.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._thumbnail_scroller_phone__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 8px; height: 8px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_scroller_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 70px);';
		hs+='left : 20px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 40px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_scroller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_scroller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_scroller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_scroller_phone.style.transition='';
				if (me._thumbnail_scroller_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_scroller_phone.style.visibility=(Number(me._thumbnail_scroller_phone.style.opacity)>0||!me._thumbnail_scroller_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_scroller_phone.ggVisible=true;
				}
				else {
					me._thumbnail_scroller_phone.style.visibility="hidden";
					me._thumbnail_scroller_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 8;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (8/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = -(Math.round(me._thumbnail_scroller_phone.ggScrollPosY / me._thumbnail_scroller_phone.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight - 8) || (!me._thumbnail_scroller_phone.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'inherit';
					me._thumbnail_scroller_phone.ggVertScrollVisible = true;
				} else {
					me._thumbnail_scroller_phone__vertScrollBg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone__vertScrollFg.style.visibility = 'hidden';
					me._thumbnail_scroller_phone.ggVertScrollVisible = false;
				}
				if(me._thumbnail_scroller_phone.ggVertScrollVisible) {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth - 8;
					if (me._thumbnail_scroller_phone.ggHorScrollVisible) {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight - 8;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height - me._thumbnail_scroller_phone__vertScrollBg.getBoundingClientRect().width;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'inherit';
					} else {
						me._thumbnail_scroller_phone.ggAvailableHeight = me._thumbnail_scroller_phone.clientHeight;
						me._thumbnail_scroller_phone.ggAvailableHeightWithScale = me._thumbnail_scroller_phone.getBoundingClientRect().height;
						me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
					}
					me._thumbnail_scroller_phone__vertScrollBg.style.height = me._thumbnail_scroller_phone.ggAvailableHeight + 'px';
					me._thumbnail_scroller_phone.ggVPercentVisible = contentHeight != 0 ? me._thumbnail_scroller_phone.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._thumbnail_scroller_phone.ggVPercentVisible > 1.0) me._thumbnail_scroller_phone.ggVPercentVisible = 1.0;
					me._thumbnail_scroller_phone.ggScrollHeight =  Math.round(me._thumbnail_scroller_phone__vertScrollBg.offsetHeight * me._thumbnail_scroller_phone.ggVPercentVisible);
					me._thumbnail_scroller_phone__vertScrollFg.style.height = me._thumbnail_scroller_phone.ggScrollHeight + 'px';
					me._thumbnail_scroller_phone.ggScrollPosY = me._thumbnail_scroller_phone.ggScrollPosYPercent * me._thumbnail_scroller_phone.ggAvailableHeight;
					me._thumbnail_scroller_phone.ggScrollPosY = Math.min(me._thumbnail_scroller_phone.ggScrollPosY, me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
					me._thumbnail_scroller_phone__vertScrollFg.style.top = me._thumbnail_scroller_phone.ggScrollPosY + 'px';
					if (me._thumbnail_scroller_phone.ggVPercentVisible < 1.0) {
						let percentScrolled = me._thumbnail_scroller_phone.ggScrollPosY / (me._thumbnail_scroller_phone__vertScrollBg.offsetHeight - me._thumbnail_scroller_phone__vertScrollFg.offsetHeight);
						me._thumbnail_scroller_phone__content.style.top = -(Math.round((me._thumbnail_scroller_phone.ggContentHeight * (1.0 - me._thumbnail_scroller_phone.ggVPercentVisible)) * percentScrolled)) + me._thumbnail_scroller_phone.ggContentTopOffset + 'px';
					}
				} else {
					me._thumbnail_scroller_phone.ggAvailableWidth = me._thumbnail_scroller_phone.clientWidth;
					me._thumbnail_scroller_phone.ggScrollPosY = 0;
					me._thumbnail_scroller_phone.ggScrollPosYPercent = 0.0;
					me._thumbnail_scroller_phone__content.style.top = this.ggContentTopOffset + 'px';
					me._thumbnail_scroller_phone__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._thumbnail_scroller_phone.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_scroller_phone.ggVertScrollVisible) {
					skin.updateSize(me._thumbnail_scroller_phone);
					me._thumbnail_scroller_phone.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_cloner_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 128;
		el.ggHeight = 128;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner_phone.ggUpdating == true) return;
			me._node_cloner_phone.ggUpdating = true;
			var el=me._node_cloner_phone;
			var curNumCols = 0;
			var parentWidth = me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') ? (me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._node_cloner_phone.parentNode.parentNode.ggAvailableWidth : me._node_cloner_phone.parentNode.parentNode.clientWidth) : me._node_cloner_phone.parentNode.clientWidth;
			if (parentWidth == 0) parentWidth = me._node_cloner_phone.parentNode.parentNode.clientWidth;
			curNumCols = Math.floor(((parentWidth - me._node_cloner_phone.offsetLeft) * me._node_cloner_phone.ggNumRepeat / 100.0) / me._node_cloner_phone.offsetWidth);
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._node_cloner_phone.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._node_cloner_phone.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._node_cloner_phone.getFilteredNodes(tourNodes, filter);
			me._node_cloner_phone.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._node_cloner_phone.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._node_cloner_phone.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._node_cloner_phone.ggWidth) + 'px';
				parameter.width=me._node_cloner_phone.ggWidth + 'px';
				parameter.height=me._node_cloner_phone.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_phone_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._node_cloner_phone.ggNodeCount = me._node_cloner_phone.ggNumFilterPassed;
			me._node_cloner_phone.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner_phone.parentNode && me._node_cloner_phone.parentNode.classList.contains('ggskin_subelement') && me._node_cloner_phone.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner_phone.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "_nope";
		el.ggId="node_cloner_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 128px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 128px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_cloner_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner_phone.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner_phone.childNodes.length; i++) {
				var child=me._node_cloner_phone.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner_phone.ggUpdatePosition=function (useTransition) {
			me._node_cloner_phone.ggUpdate();
		}
		me._thumbnail_scroller_phone__content.appendChild(me._node_cloner_phone);
		me._popup_phone.appendChild(me._thumbnail_scroller_phone);
		el=me._map_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="map_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_el_phone.style.transition='';
				if (me._map_el_phone.ggCurrentLogicStateVisible == 0) {
					me._map_el_phone.style.visibility=(Number(me._map_el_phone.style.opacity)>0||!me._map_el_phone.style.opacity)?'inherit':'hidden';
					if (me._map_el_phone.ggMapNotLoaded && me._map_el_phone.ggInitMap) {
						me._map_el_phone.ggInitMap(false);
						me._map_el_phone.ggInitMapMarkers(true);
					}
					me._map_el_phone.ggVisible=true;
				}
				else {
					me._map_el_phone.style.visibility="hidden";
					if (me._map_el_phone.ggClearMap) me._map_el_phone.ggClearMap();
					me._map_el_phone.ggVisible=false;
				}
			}
		}
		me._map_el_phone.logicBlock_visible();
		me._map_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._map_el_phone);
		el=me._floorplan_el_phone=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan_el_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_el_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_el_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan_el_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan_el_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan_el_phone.style.transition='';
				if (me._floorplan_el_phone.ggCurrentLogicStateVisible == 0) {
					me._floorplan_el_phone.style.visibility=(Number(me._floorplan_el_phone.style.opacity)>0||!me._floorplan_el_phone.style.opacity)?'inherit':'hidden';
					if (me._floorplan_el_phone.ggMapNotLoaded && me._floorplan_el_phone.ggInitMap) {
						me._floorplan_el_phone.ggInitMap(false);
						me._floorplan_el_phone.ggInitMapMarkers(true);
					}
					me._floorplan_el_phone.ggVisible=true;
				}
				else {
					me._floorplan_el_phone.style.visibility="hidden";
					if (me._floorplan_el_phone.ggClearMap) me._floorplan_el_phone.ggClearMap();
					me._floorplan_el_phone.ggVisible=false;
				}
			}
		}
		me._floorplan_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._floorplan_el_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._popup_phone.appendChild(me._image_popup_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 50px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 50px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.logicBlock_visible();
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((6px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = '#282828';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-11px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 3 + 0) * percent);
					playheadpos += -11;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(230,230,230,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(40,40,40,1) ' + currPos + '%, rgba(40,40,40,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(40,40,40,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='background : #282828;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		var hs_playhead = 'height: 27px;';
		hs_playhead += 'width: 27px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -11px;';
		hs_playhead += 'top: -10.5px;';
		hs_playhead += 'border-radius: 14px;';
		hs_playhead += cssPrefix + 'border-radius: 14px;';
		hs_playhead += 'background-color: rgba(74,74,74,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		me._popup_phone.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone__vid.id = 'youtube-video';
			me._youtube_popup_phone.ggYoutubeApiReady = function() {
				me._youtube_popup_phone.ggApiPlayerType = 'youtube';
				me._youtube_popup_phone.ggApiPlayerReady = false;
				me._youtube_popup_phone.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._youtube_popup_phone.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._youtube_popup_phone.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._youtube_popup_phone.ggMediaEnded) {
								me._youtube_popup_phone.ggMediaEnded();
							}
							if (event.data == 1 && me._youtube_popup_phone.ggActivate) {
								me._youtube_popup_phone.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._youtube_popup_phone.ggDeactivate) {
								me._youtube_popup_phone.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._youtube_popup_phone.ggApiPlayer.unMute();
						if (args.state == 1) skin._youtube_popup_phone.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._youtube_popup_phone.ggApiPlayer.isMuted()) skin._youtube_popup_phone.ggApiPlayer.unMute(); else skin._youtube_popup_phone.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_main') {
						if (args.type == 'set') skin._youtube_popup_phone.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._youtube_popup_phone.ggApiPlayer.setVolume(skin._youtube_popup_phone.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggApiPlayerType = 'vimeo';
			me._vimeo_popup_phone.ggApiPlayer = new Vimeo.Player(me._vimeo_popup_phone__vid);
			if (player.getPlayerMuted()) me._vimeo_popup_phone.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._vimeo_popup_phone.ggApiPlayer.getVolume() > 0.0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0); else skin._vimeo_popup_phone.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_main') {
					if (args.type == 'set') skin._vimeo_popup_phone.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._vimeo_popup_phone.ggApiPlayer.getVolume().then(function(volume) { skin._vimeo_popup_phone.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_file_popup_phone.ggActivate) {
				me._video_file_popup_phone__vid.addEventListener('play', me._video_file_popup_phone.ggActivate);
			}
			if (me._video_file_popup_phone.ggDeactivate) {
				me._video_file_popup_phone__vid.addEventListener('ended', me._video_file_popup_phone.ggDeactivate);
				me._video_file_popup_phone__vid.addEventListener('pause', me._video_file_popup_phone.ggDeactivate);
			}
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggActivate=function () {
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.style.opacity='0';
			me._video_file_popup_phone_play.style.visibility='hidden';
		}
		me._video_file_popup_phone.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.style.opacity='1';
			me._video_file_popup_phone_play.style.visibility=me._video_file_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_file_popup_phone);
		el=me._video_file_popup_phone_play=document.createElement('div');
		els=me._video_file_popup_phone_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_popup_phone_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_popup_phone_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_file_popup_phone_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_popup_phone_play";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone_play.style.transition='';
				if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone_play.style.visibility=(Number(me._video_file_popup_phone_play.style.opacity)>0||!me._video_file_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_file_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_file_popup_phone_play.style.visibility="hidden";
					me._video_file_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_file_popup_phone_play.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_file_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone_play.onmouseenter=function (e) {
			me._video_file_popup_phone_play__img.style.visibility='hidden';
			me._video_file_popup_phone_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_popup_phone_play']=true;
		}
		me._video_file_popup_phone_play.onmouseleave=function (e) {
			me._video_file_popup_phone_play__img.style.visibility='inherit';
			me._video_file_popup_phone_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_popup_phone_play']=false;
		}
		me._video_file_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_file_popup_phone_play);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_url_popup_phone.ggActivate) {
				me._video_url_popup_phone__vid.addEventListener('play', me._video_url_popup_phone.ggActivate);
			}
			if (me._video_url_popup_phone.ggDeactivate) {
				me._video_url_popup_phone__vid.addEventListener('ended', me._video_url_popup_phone.ggDeactivate);
				me._video_url_popup_phone__vid.addEventListener('pause', me._video_url_popup_phone.ggDeactivate);
			}
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggActivate=function () {
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.style.opacity='0';
			me._video_url_popup_phone_play.style.visibility='hidden';
		}
		me._video_url_popup_phone.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.style.opacity='1';
			me._video_url_popup_phone_play.style.visibility=me._video_url_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_url_popup_phone);
		el=me._video_url_popup_phone_play=document.createElement('div');
		els=me._video_url_popup_phone_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNFNkU2RTY7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMjYuNiwyMi45TDQyLjQsMzJsLTE1LjcsOS4xVjIyLjkgTTIyLjYsMTZ2MzJsMjcuNy0xNkwyMi42LDE2eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_popup_phone_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_popup_phone_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzRENEQ0RDt9JiN4ZDsKCS5zdDF7ZmlsbDojMTQxNDE0O30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSByPSIyNyIgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTI2LjYsMjIuOUw0Mi40LDMybC0xNS43LDkuMVYyMi45IE0yMi42LDE2djMybDI3LjctMTZMMjIuNiwxNnoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_url_popup_phone_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_popup_phone_play";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone_play.style.transition='';
				if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone_play.style.visibility=(Number(me._video_url_popup_phone_play.style.opacity)>0||!me._video_url_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_url_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_url_popup_phone_play.style.visibility="hidden";
					me._video_url_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone_play.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_url_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone_play.onmouseenter=function (e) {
			me._video_url_popup_phone_play__img.style.visibility='hidden';
			me._video_url_popup_phone_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_popup_phone_play']=true;
		}
		me._video_url_popup_phone_play.onmouseleave=function (e) {
			me._video_url_popup_phone_play__img.style.visibility='inherit';
			me._video_url_popup_phone_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_popup_phone_play']=false;
		}
		me._video_url_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone.appendChild(me._video_url_popup_phone_play);
		me._safe_area_phone.appendChild(me._popup_phone);
		me.divSkin.appendChild(me._safe_area_phone);
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=-0.07;
		el.ggDy=34.94;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 14.625%;';
		hs+='left : calc(50% - ((22.7143% + 0px) / 2) - 0.07%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14.625% + 0px) / 2) + 34.94%);';
		hs+='visibility : inherit;';
		hs+='width : 22.7143%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node1")) || 
				((player.getCurrentNode() == "node2")) || 
				((player.getCurrentNode() == "node4")) || 
				((player.getCurrentNode() == "node8")) || 
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_1.style.transition='';
				if (me._container_1.ggCurrentLogicStateVisible == 0) {
					me._container_1.style.visibility="hidden";
					me._container_1.ggVisible=false;
				}
				else {
					me._container_1.style.visibility=(Number(me._container_1.style.opacity)>0||!me._container_1.style.opacity)?'inherit':'hidden';
					me._container_1.ggVisible=true;
				}
			}
		}
		me._container_1.logicBlock_visible();
		me._container_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1_1=document.createElement('div');
		el.ggId="Rectangle 1_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e8e8e8;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='bottom : 25%;';
		hs+='cursor : default;';
		hs+='height : 65%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0%);';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._rectangle_1_1);
		el=me._svg_1_2=document.createElement('div');
		els=me._svg_1_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgd2lkdGg9IjEwMCUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDsiIHZpZXdCb3g9IjAgMCAyNzUgMjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIGhlaWdodD0iMTAwJSIgeG1sOnNwYWNlPSJwcm'+
			'VzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDI1LDI1KSIgaWQ9IkxpdmVsbG9fMSI+CiAgPHVzZSB3aWR0aD0iMjI1cHgiIHg9IjAiIHhsaW5rOmhyZWY9IiNfSW1hZ2UxIiB5PSIwIiBoZWlnaHQ9IjIyNXB4Ii8+CiA8L2c+CiA8Y2lyY2xlIHI9IjQ2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMjMwLDIzMCwyMzApO3N0cm9rZS13aWR0aDo0LjE3cHg7IiBjeD0iMTM4IiBjeT0iMTM4IiBpZD0iRWxsaXNzZV8xIi8+CiA8ZGVmcz4KICA8aW1hZ2Ugd2lkdGg9IjIy'+
			'NXB4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQVlBQUFBK3M5SjZBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBWlJFbEVRVlI0bk8yZFAyemNScjdIdjlhZERqRWI2NEVxVkpoNEd4ZGtvVUlid0FiZXVuQmtiNVBDZy9pdTBMMnJkZ05jZ0tjVWw4UnU3b0FENGhRcDBpaHhVdWdkWU1DcklqaEFWWUpSOFZ5c3JTQ0FONFdCY0FzYnAybThoMVZoQXlhZ3FLQXU4Qld2SUxsZXk1STQzT1cvR2Y0K2dMR1NURkkvYVBqbGIzNS9PSE1LUk9Fd3h1b0E1Z0JFbjJmQ3J6SDI4MGx4QWV5TmZmMXorTDBMWUk5ejdrNXhiU0'+
			'lGVGhWdFFKVUl4VllIVUFQd2R2aFpLODZpRVlQdzMvZmhwMHZpekE4U1lVWXd4bW9BbGdFc0lSRGVjb0htVElvTFlCdEFIOEEyNTN4UXFEV2FRaUpNaVRIUnZSMSsxb3F6SmpNR0NFVDVQVWlVcVVFaW5BTEcyREtBZHhHSWJwcTRUVlVpVC9rZDUzeTdXRlBVaFVTWUVNYllOUVRDdTRZZ2FVSUU3QUg0Rm9FZ3Z5M2FHSlVnRVVvUUpsUStCQWxQbGtpUXR5akJFdytKOEJnWVkzTUEyZ2pFVnl2VUdMVVpBTGdGb01NNTM0czV0cEtRQ0E4Unhua3RCQUlrMHFVRFlJUGl4MWNoRVlZd3h0b0FQZ0Y1dlR4d0VVeFZPMFViVWdZcUxjSnd5dmtSQXM5WEs5YWFTaklBc0FIZ3l5cFBWU3Nwd2pIeGZRaEt0SlNC'+
			'UFFSeFl5WEZXQ2tSa3ZoS1R5WEZXQmtSaGpIZkZ5RHhxY0FlZ0krckVqTnFMOEl3MjNrSEZQT3B5QURBZTdwblU3VVZZZGpMZVFkcU5rNFRyN0tOUUl5RGd1M0loSm1pRGNnQ3h0aE5BRTlBQXRTRlpRQlB3bkhWRHEwOElVMDlLOEVBbWsxUnRSQmhtUFg4QkVIbWs2Z0dYd0w0Vkljc3F2SWlKTzlYYVFiUXdDc3FIUk15eHI0QWNCOGt3S3BTQTNBL3ZBK1VSVWxQR0w1YWRBZlZmSkdXT0JvWGdWZFU3dFdwWHhWdFFGTENvdnZmUWQ2UGVKVUZBUC90T000eklZUlNRbFJLaEl5eE93QnVBbmlqWUZPSWN2SUdnR3VPNDh3SkllNFdiWXdzU2t4SHcrem5mZEQwazVESEJYQlpoZXhwNlVVWXhuLzNRVDJmUk'+
			'hMMkVBaXgxTlBUVW1kSHcvaVBCRWhNeWh5QzdHbTdhRU5Pb3JReElXUHNJd0Ryb1BpUG1JNG9UdnhaQ1BGajBjWWNSU21ubzJFQ3BsMjBIWVIyZERqbjd4VnR4R0ZLNXdsSmdFU0cxQjNIcVFraHZpdmFrSEZLNHdrcEEwcmtTS2t5cDZVUUlRbVFLSURTQ0xGd0VaSUFpUUlwaFJBTEZTRUprQ2dCaFF1eE1CR1NBSWtTVWFnUWl5eldrd0NKc2hCMVpSVkNJU0lNeXhBa1FLSk0xTVA3TW5keXJ4TlNIWkFvTVlYVUVYTVZZZGlLOXVjOGZ5ZEJKS1NlZDR0YmJpSU1tMmpYOC9wOUJERUY3emlPODgrOFhnN09KVHRLcnlNUkNwTGJhMUNaaXpBc1JUd0JDWEJxVE5PRWFacXh4M21lQjgvemNyQkllL1lBdkps'+
			'MTZlTFhXVjQ4aER5Z0pKSElITWZCNmRPbllWblc2SE5TaHNNaERnNE9ScDg3T3pza1VubWlXdlpiV2Y2U1REMWh1QlFkTGNoN0RMWnR3M0VjMkxhTnMyZlB3akNNM0g2MzcvdlkzZDJGRUFJN096c1FRdVQydXhYa1M4NzV4MWxkUERNUmhvbVlRdW91WmNVMFRkVHJkZFRyZGRpMlhiUTVyeUdFZ091NmNGMlhQT1hydkpmVlZtMlppSkFTTVM4eFRSUE5aaFAxZWwwcW5pc0xudWZCZFYxMHUxMFNaRUJtaVpxc1JQZ1RLdHdSWXhnR2xwYVcwR3cycDRybnlzSndPRVMzMjBXLzM0ZnYrMFdiVXlRdTV6ejErREIxRVZZNURqUk5FNHd4TEMwdDVScmY1WVh2KytqMysrQ2NWOWs3cGg0ZnBpckNjSE9Xd2hwaG'+
			'k4SzI3ZEdVc3lwRVU5V0tKblF1cDdrSlRXb2lET3VCUDZGQ3k5UGJ0ZzNHV0NtVExIa2hoQURudkdwaUhBQjRLNjM2WVpwMXdrOVFFUUZHMDg1R281SFo3eEJDak9wNXo1OC9IMDMvWkc3MjZLRmdtaWJtNStkSDljY3NIaGEyYmVQR2pSdm85WHBWbXFiV0VOenZxVXhMVS9HRVZabUdHb2FCWnJPSnExZXZwbnJkNFhBSUljVG9NOHNiT1JLalpWbWp6elRaMnRwQ3Q5dXRTZ0lubFdscFdpSjhBczI5b0czYmFMZmJxWlFab2dUSHpzNU80Um5IS0pQck9FNXFDU1hQODlEcGRLb3dSUjF3enQrYzlpSlRpNUF4ZGhPQmE5WVN3ekRRYXJXbVRycEV3b3VLNFdVbGFpWklRNUN1NjJKalkwTjNyL2dwNS96bU5C'+
			'ZVlTb1NNc1JxQzVtd3RzVzBicTZ1clU5Mk1xdGJZMHFwMStyNlA5ZlYxM2IzaW01enp3YVFuVHl2Qyt3Q1dwN2xHV1ZsWldVR3oyWno0L0Y2dmh3Y1BIbWh4ODltMmpZc1hMMDZWaU9wMnU5amMzRXpScWxLeHpUbS9QT25KRTR0UTEyU01hWnBZWFYyZCtPbXZjNVp3MnF6d2NEakUydHFhVWpPQ0JFeWNwSmxHaE5vbFl5ekx3dlhyMXllYWZycXVpODNOVFMzRmR4alROTkZ1dHljcWVmaStqN1cxTlF5SHd3d3NLNVNKa3pRVExXOFJ2aUhSbnVUY3N0Sm9OUENuUC8wSnM3T3ppYzRiRG9lNGZmczI3dDY5aTRPRGc0eXNLeGNIQndmbzlYb1FRc0N5TEp3NWMwYjYzTm5aV1Z5NmRBbWU1MkYzZHpkREszTm'+
			'5idElsTVJKN1FoM2ZsR2VNSmE3OStiNlBlL2Z1Z1hPZWtWWHF3QmpEbFN0WEVzOGd0cmEyZFB2N1RmUW1mbUpQNkRqT253RzhrL1M4c3RKdXR4TW5ZSVFRK09xcnIwcGRhc2dUSVFRZVBud0l5N0lTMVZGdDI4YjgvTHhPZjhjM0FQd2loTmhPY2xJaUVZWmU4Ty9RWlBmY2RydWRPTW13dWJtSmI3NzVwakpUVDFtaUtlckJ3UUVXRnhlbHo3TXNTemNoMWgzSCtac1E0bCt5SnlRU29VNWVNS2tBUGMvRDJ0cWFUamRMSmp4NThnVDlmaCtMaTR2UzAxUE5oSmpZRzBxTFVDY3ZtRlNBcnV2aTY2Ky9ya1RtTXczMjkvZlI2L1d3c0xDQWhZVUZxWE0wRTJJaWJ5Z3RRbDI4WUZJQmRydGRiR3hzNE1XTEZ4bGFw'+
			'Ujh2WHJ6QXc0Y1BZUmdHenAwN0ozV09Sa0pNNUEyVGlQQU9GTStJTXNZU0pXRTZuUTd1M3IyYm9VWDY4K2pSSTNpZUo5MTdhMWtXVHAwNnBVT25VVTBJY1V2bVFDa1I2bEFYYkRRYVdGbFprVHJXOTMzY3ZuMGJEeDgrek5pcWFyQzd1NHZkM1Ywc0xpNUsxV0Z0MjlhaGppaGRONVRkR3UzREtRMHFGTXV5MEc2M3BZNk5Pam8wbUJLVkN0ZDFFN1dzdGR0dEhSYkprdEpOckNjTWUwU1YzVW5KTUF6ODlhOS9sWG9DYTl4U1ZRcjI5L2Z4K1BGam5EOS9YbW84enA4L2p4OSsrRUhsZUh6QmNaenZoUkNEa3c2UzhZU3RkT3dwQnRsZVVCSmdQaVJwNGpZTUE5ZXZYOC9CcWt5SjFjK0puakI4WDdDVGtqRzVzN0'+
			't5SXAwUXVIMzd0ZzdKQUNYWTM5L0hzMmZQY09IQ2hkaGp6NXc1QThNdzhPalJveHdzeTRTNjR6aTNUaXBYeEhuQ2F5a2JsQnZSTW9ReWREb2RpZ0Z6eG5WZGREb2RxV09iemFicUs5cTFUL3JQT0JFcW1aQXhEQU9ycTZ0U3gzYTdYZlI2dll3dElvNmkxK3VoMisxS0hUdnRDZ2NGYzZLT2poVmh1SjlFTFcxcjhxRFZha2tOV1BRT0lGRWNtNXViVXJPUWFLMGZSYW1GZWpxU2t6eWhrbDdRdG0ycE9ORHpQR3hzYk9SZ0VSSEh4c2FHVkV0Z1dYZXprdVJZUFowa1F1WGlRY013cE91QjYrdnJ1aTZ6b0J6UllsQXl0TnR0VmFlbHgrcnB5T3dvWSt3YUZPeVFlZWVkZDZTOG9Pd1VpTWlQL2YxOXFkZWdETVBB'+
			'di8vOWJ4VXoyVzg0anRNWFF2emo4SDhjNXduZnpkaWcxREZOVStydGVDR0VkREtBeUJmWkRXYXVYcjJxMUY2UFl4eXBxK05FcU54VWxERVdlNHp2KzlKcGNhSVlPcDJPVkpnZ005NGw1RWhkdlNiQ3NFMU5xYmNsYk51V2VqM3AzcjE3OUU1Z3lmRThEL2Z1M1lzOXJ0Rm9xSmlrbVF2MTlRcEhlVUxscHFJeVQ4WGhjS2pib2tMYXdqbVhhaDlVMUJ1K3BxK2pSTGljdlIzcFlkdTIxQk9SNm9GcUlUTmVzbU5mTXBZUC8rQVZFWWE5b2twdE55dlRtaWFFVURHYlZtbGt4K3ppeFlzNVdKTXE5VkJuSXc1N3d1WGNURWtCMHpTbFNoS1VqRkVUbVhGck5Cb3Faa3FYeDc4NUxNSzM4N05qZW1SaWdsNnZSOGtZUm'+
			'ZFOFQ2cXZWOEhZOEJXZEtlc0pvNjI3NHFCa2pOcklqRjlhbTV2bXlQTDROeU1SaHZQVVdyNjJUSTdNSDU2OG9QckllRVBaQjNLSnFJM0hoZU9lY0RsM1U2WkFKaUh6NE1HREhDd2hza1ptSEtmWlM3SWdscU12eGtXb3pLUEVOTTNZUllDR3d5RmxSRFZCQ0JGYk4weTZEMFlKR09sTlNVOG84OVNqL2xDOWtCbFB4YnpoS0swL2M5UVB5MDVjV2NMM2ZmVDcvWnlzSWZLZzMrL0g5cFRLcmlkVUVwYWpMMmFBMFZ2MFNtQ2FadXkwUTJiQUNMV1FlYkRLM0J0bEl0SmQ1QW1WRWFITTA0N2VGZFFUbVhGVnpCdStJc0phY1hZa1EyWXFTaUxVRTlkMWRadVMxb0NYSWxTbVV5YXVZWmRpUWIySkcxL0ZHcnJmQmhU'+
			'emhESi80SjJkblJ3c0lZcENabndWRW1JTlVFeUVqdVBFSGtPZVVHOWt4bGZtUGlrSk5RQ1lVU2t6R3ZlRUd3NkhsQlhWSE4vM1l3djNDbmxDTU1icU0xQm9LWXV6WjgrZStQL1VJVk1ONHNZNTdqNHBHWE16VUtROFlacG1iTU0yN2FoVURlTEcyVEFNbGVxRjZuaENtVDhxZWNKcUlEUE9Db2x3YmdiQWZ4WnRoUXd5d1RhOXRsUU5aTVpab2VUTW1Sa29raGs5ZmZyMGlmOVBYckJheEkxMzNQMVNJdXF5ZTlZWFR0eXJTK1FGcTBYY2VLdTAzNzB5TVdIY2s0MUVXQzNpeGxzaFQ2aE9kalR1eWZiOCtmT2NMQ0hLUU54NEsrUUoxWm1PeGtHZXNGcm9OTjVLaUZDaGRETlJJbFM1YjdRUklXVkhxOFh1N203c0'+
			'1TUkNnc2dRblhxRVNZUUVVVEFrUW9Jb0dCSWhRUlFNaVpBZ0NvWkVTQkFGUXlJa2lJSWhFUkpLb3RoV2FDZWloQWhsV3BSVVdsZUVtQjZaSlN4VWFXM1RSb1FFY1JoVjdoc2xSQ2lES2kxS1JEcm9OTjR6QUpSWU16NXVjWi81K2ZtY0xDSEtRTng0SzdUb2x6c0RZSzlvSzJRNE9EZzQ4ZjkxZWpJUzhjU05kOXo5VWlMMmxKbU94czN2U1lUVkltNjhGZktFNmt4SDQwUkkyZEZxRVRmZUNubENkd2JBejBWYklZUE1SaURrRGF1QnpOSVZDbTBNOUxNeU1TSFZDb2tJbldxRUNHTkNaYWFqY1M5eUtyUzREekVGY2VQcys3NUtJbFFuT3dyRUwybEFuckFheEkyenpOSVhKV0p2aG5PdWhDY0U0dGVSc1N4THE1'+
			'NUM0blVNdzRqMWhDcXROOFE1ZDZNU3hhQklRMlNSQ2JhWGxwWnlzSVFvQ3BueFZTZ3BNd0JldHEwTkNqTWpBVEpQT0lVMkFpRW1RR1o4RmZLRUErQ2xDTDh2em81a3hQMkJ5UlBxVGR6NEtpUkFJTlNkVXA0UUFGejM1QkRXTUF6VTYwcXM3RThrcEY2dng4YjhjZmRIeVJnQUwwV29qT1V5ZjJRU29aN0lqS3RpSW5TQlVJUXFaVWc5ejR1dEFTMHRMVkdXVkRNTXc0aWRpc3JjRzJVaTB0MTRBN2N5UXBTWmtsSnNxQmN5RDFiRnZPQjI5TVhNVVQ4c085MXVOL2FZWnJPWmd5VkVYc2lNcDh4OVVTSkdUNHh4RWZZTE1HUWlQTStMZlZYRnNpenFvTkVFMjdaakMvVEQ0VkNwcVNqRzlLYWtKd1Rrbm5vWEwxN0'+
			'13UklpYTJUR1VURXZDQncxSGVXY0Q2QlFxYUxmNzhjMmREY2FEWHE5U1hGTTAwU2owVGp4R04vMzBlOHJNNUVEZ0VHb053Q3ZML1MwbmFzcFV5RDdoMmVNNVdBTmtSVXk0eWZ6UUM0WjIrUGZIQmFoTXAwekFNQTVqejJHdktHNnlIaEJRTzQrS0JtdjZFeFpUd2dFQ1JxWnRIUzczYzdlR0NKMVpNYXQxK3VwbHBBQlR2S0U0VHhWcVdLTFRFQnUyelpsU2hWRGRzd2VQSGlRZ3pXcDRvN0hnOERSaS85dTUySktTZ2docEpwMlYxWldjckNHU0F1WjhaSWQrNUt4ZmZnSFI0bnd1K3p0U0JlWm1NQ3lMRXJTS0FKalRHcXBFZ1ZqUWVBSWZiMG1Rczc1TmhSYThnSUlub2k5WGkvMnVDdFhybENTcHVTWXBva3JW'+
			'NjdFSHRmcjlWVDBnbnVodmw3aHVNVi92ODNXbHZTUmVTb2Foa0ZKbXBMVGJyZWxtdThWOVlKSDZ1bzRFU28zSmZVOEQxdGJXN0hIMmJaTmZhVWxwZGxzU2lWanRyYTJWTXlJQXNmbzZrZ1JjczYvaFdKVFVpRElsTW9NenNyS0NpMlBXRElzeTVKS3huaWVwMktMR2hCTVJSTjVRa0RCS2FudisraDBPbExIcnE2dTBqdUhKY0V3REt5dXJrb2QyK2wwVk91T2lUaFdUeWVKOEZZR2htU09FRUtxZ0crYUpscXRWZzRXRVhHMFdpMnBoSm5ydWlvbVl5S08xZE94SWd6ZitoMWtZVTNXYkd4c1NEMHQ2L1U2MVE4TFptVmxSV3JaQ3QvM3NiR3hrWU5GbVRBNGFmV0t1SzNSbFBTR3Z1OWpmWDFkNnRobXN5blZuMG'+
			'lrVDZQUmtFNlNyYSt2cXpvTkJXSjBGQ2ZDVG5wMjVJc1FRanFBYjdmYnREaFV6dFRyZGVseVViZmJWWGthQ3NUbzZFUVJjczczNGk1UVpqWTNONlUzaTJ5MVdwUXh6UW5Mc3FUajhlRndpTTNOell3dHlwUk9xS05qa2RtcFY5bUpPQUNzcmExSlRXTU13OEQxNjlkSmlCbGpXUmF1WDc4dWxabjJmUjlyYTJzNVdKVXBzZnI1VmR3QlFvaUI0empYQUN5a1lsTE92SGp4QW84ZlA4YWxTNWRpajUyZG5jWDU4K2Z4K1BGajdPL3Y1MkJkdFVnaVFBRDQvUFBQVlMzS1I3aWM4Ny9FSFJRclFnQndIT2NYQU5lbU5xa2c5dmYzNFhtZVZOd1hDZkhaczJkNCt2UnBEdFpWZzNxOW5xZzIyK2wwOE9qUm80eXR5cHkv'+
			'Q0NGaTYyVlNJaFJDdUk3anRBSE1UV3RWVWV6dTd1TFVxVk5TYlZHenM3TzRjT0VDUE05VGJhKzdVdEpvTlBEKysrOWpkblpXNnZpdHJTMVZ1MkxHR1hETzM1TTVVRXFFQU9BNHpuOEFXSjdVb2pJZ2hNRDgvTHgwM0JmdGZhREJFN2t3VmxaVzhMdmYvVTc2K0Y2dnAzb2lKdUtXRUdKYjVzQWtJblFCL0ErQU55WTBxaFM0cnB0SWlPZk9uWU5sV1hqOCtERmV2SGlSc1hYNllCZ0cvdmpIUHlaYWRyTFg2MG0zSFphY1BRQi9FRUw4UytaZ2FSRUtJZjdsT001cEtPNE5nZVJDWEZoWXdJVUxGeUNFb0lTTkJKWmw0Y2FOR3poMzdwejBPUm9KRUFBKzU1ei9uK3pCMGlJRTlQR0dRSEloR29hQlM1Y3U0ZURnQU'+
			'UrZVBNbllPblZwTnB1Sm0rTTFFMkFpTHdna0ZLRk8zaEJJTGtRQVdGeGNoT000RUVMZzRPQWdRK3ZVd2pSTmZQREJCMUtsb0hFMEV5Q1EwQXNDQ1VVSTZPVU5nVUNJc2xuVGlHZzl6Ti84NWplcXQxT2xBbU1NclZZTEN3dkpTc2xiVzF1NkpHRWlFbnRCWUFJUmh0N3dHUlN1R3g1R0NDRmRSNHlZbloyRmJkdW8xK3Q0K3ZTcDZrWGxpYkJ0RzZ1cnE3aHc0WUowK1NHaTArbm9VSVk0ekNybi9NZWtKNTJhOUxjeHhwNEFxRTE2ZmhsSjJ0RXhqaEFDblU2bkVtSTBUUlB0ZG51aXRWeWpWalRabmw2RkdIRE8zNXpreE1TZU1NSnhuRDZBOXFUbmw1SDkvWDM4OE1NUFdGeGN4Smt6WnhLZGE1b21tczBtNXVm'+
			'bk1Sd090WXdYVGRQRTczLy9lN1RiN1lsV3JSc09oL2pzczg5MGZWRDlWZ2d4bU9URWlUMGhBRERHN2tPVEpNMWhWbFpXcGxvUXF0ZnI0Y0dEQjFyRWpMWnQ0K0xGaTFPOWQ5bnRkbldMLzhiWjVweGZudlRrYVVWWUE2QnR2ajZLZWFaWmkyWTRIS0xiN1NxM2MxQzA1WGl6Mlp6cXpaTG9CV3NkSGtZbjhPYmhwZTJUTUpVSUFZQXhkaFBBSjlOZXA2d1lob0ZXcXpYMVM3L1JWbTZ1NjVaNmIvVjZ2WTU2dlM2MVIzd2NydXRLTHpXaU1KOXl6bTlPYzRHcFJRam9tYVE1akczYkU4ZENoNGtFdWJPelU3aUhqRHllNHppcENBOElsaVhzZERxNmV6OWdpbVRNT0dtSmNCbkEvVFN1VldZTXcwQ3oyY1RWcTFkVH'+
			'ZlNXdPSVFRWXZTWlplTENOTTNSSHZBeWU4RW5KWG9EUW5QdkYzSDVxR1h0azVLS0NBR0FNZllGZ0kvU3VsNlpNVTBUakxGTUY0aUt4T2g1SHA0L2Z6NFM1dTd1N29rM3VHRVlPSHYyN01qTytmbDVtS1k1RWw5VzlIbzljTTUxelh3ZXhaZWM4NC9UdUZDYUlwd0Q4Qk0wbjVhT1k5czJHR09WM3Z0UUNBSE9lUldtbnVNTUFMd1Z0M2FNTEttSkVLak90UFF3MGY0V1ZWcXhUYWNTekFTa01nMk5TRldFUUxXbXBZZUpwcWxwSlRqS1JwUlFxdGkwOHpDcFRVTWpVaGNoQURER2ZnSlFIYmR3aUxScWJHVkIxVnBuQnJpYzg3ZlN2dWl2MDc1Z3lIc0lwcVhLcmtrekRiN3ZvOWZyb2Rmcmpkclo2dlc2VWh1VWVw'+
			'NEgxM1dsZDdxcUFIc0FmcHZGaFRQeGhBREFHR3NEdUpQVjlWWEVOTTFSTWJ5TXlaeG9NeDNYZFVsNHIvTWU1N3lUeFlVekV5RlE3ZmhRQnR1MjRUZ09iTnZHMmJObmM0MGpmZC9IN3U0dWhCRFkyZG1wYW9KRmx0VGp3SEV5RlNGQThXRVNvbnFlNHpnNGZmbzBMTXNhZlU1SzlFWkg5TG16c3pPcVB4SlNaQklIanBOVlREak9aUVJOM3BXTUQ1TVFpZU00cnhTSlZQWTZ4TlRzSWJoL015VnpUd2dBakxFNktweW9JWlJrRDBFOU1QTnUrNGxmNmsyQ0VPS3Bia3RpRU5xem1uVEJwa25KUllUQWFDbjlud0c4azlmdkpJZ0orWmh6L3I5NS9iTGNSQWdBUW9nZkhjZXBnUkkxUkhucHlPeWtsQ2E1aWhBQWhCRG'+
			'ZrUkNKa3RLUjNjUWxUWEpKekJ3RmxTNklrcEY1S2VJNFpIYnF6WXJMQU1xN3pnTlJKVnprVUlvNGpzSThJVEI2Qi9FK3lDTVN4ZUVpS0VXazhtN2dKQlFxUW9DRVNCUks0UUlFU2lCQ2dJUklGRUlwQkFpVVJJUUFDWkhJbGRJSUVDaVJDQ01ZWTNlZzJmTDZSS2tvcEF4eEVyblhDZU9nT2lLUklhVVRJRkJDRVFJaklWS0xHNUVtSCtmZENTTkxLVVVJakZyYy9vbGd3eGt0TmlRbENtRVBRVE4yYnIyZ1NTbGRUSGdZZWcyS21JTGNYa2VhaHRLTEVLRE1LVEVScGNxQW5vUVNJb3lnTldzSVNUSmRFeVp0U2hzVEhvVVE0aTdGaWNRSlJQSGY1MFVia2dTbFBHRkVHQ2ZlQVUxUGlaZTRBSDQ3eldhZFJhR2tD'+
			'Q05vZWtxRUtEWDlQSXpTSWdSR205RGNRWVYyZ3lKR0RCQXN5cnRkc0IxVG9WUk1lQlJDaUlIak9Cc0lZc1QvS3RvZUlqZStCUEFIenZrL2lqWmtXcFQzaE9PUVY2d0VBMmpnL2NiUlNvUVJqTEdiQUQ0cDJnNGlkVDdsbk44czJvaTAwVktFQU1BWXF5SHdpc3ZGV2tLa3dEWUM3emNvMkk1TTBGYUVFVFJGVlpvQk5KdDZIb1gySW93SXQycjdBdFNEcWdKN0NONTY2QlJ0U0I0b254MlZKVndCL0c4QWZrRlE1S2VPbS9LeEIrQnpCRm5QSDRzMkppOHE0d25IQ1J2Q1B3THdJY2d6bG9FOUFMY1FGTjFMMzNDZE5wVVVZY1NZR0Z1Z21MRUlCZ0EyVUZIeFJWUmFoT09FTWVPSG9IN1VQSEFCM0twS3pCY0hpZk'+
			'FRWVRhMUJWcHNLZ3M2QURaMHozWW1oVVI0RE9GVXRZM0FPOVlLTlVadEJnaml2VTZWcDV3blFTS1VJSHgxNmtNRW01eFNJaWVlUFFEZklwaHlsbnBwaVRKQUlrd0lZK3dhZ0hkQmdqeE1KTHp2T09mZkZtMk1TcEFJcHlDTUg5OUYwQnBYeFlTT2k2Q2w3RHVLOHlhSFJKZ1NZYS9xTW9DM3c4OWFjZFpreGdDQjZMNEhzSzFyTDJmZWtBZ3pZa3lVU3dpODVIS0I1a3pLTmdKdjF3ZUpMak5JaERrU0puanFDTHprMitGbnJUaUxSZ3pDZjkrSG55NGxWUEtEUkZnQ1FuSE9JUkRvSElBemVCbGp6bUc2ZU5ORmtEU0p2djQ1L040RnNFZGlLNTcvQi9Ea09BT3cwejhMQUFBQUFFbEZUa1N1UW1DQyIgaWQ9Il9J'+
			'bWFnZTEiIGhlaWdodD0iMjI1cHgiLz4KIDwvZGVmcz4KPC9zdmc+Cg==';
		me._svg_1_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1_2";
		el.ggDx=0;
		el.ggDy=-12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42.735%;';
		hs+='left : calc(50% - ((15.7233% + 0px) / 2) + 0%);';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42.735% + 0px) / 2) - 12%);';
		hs+='visibility : inherit;';
		hs+='width : 15.7233%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1_2.onclick=function (e) {
			player.openNext("{node6}","$(cur)");
		}
		me._svg_1_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._svg_1_2);
		el=me._svg_1_1=document.createElement('div');
		els=me._svg_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgd2lkdGg9IjEwMCUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiIHZpZXdCb3g9IjAgMCAyNzUgMjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNlcmlmPSJodHRwOi8vd3'+
			'd3LnNlcmlmLmNvbS8iIGhlaWdodD0iMTAwJSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDI1LDI1KSIgaWQ9IkxpdmVsbG9fMSI+CiAgPHVzZSB3aWR0aD0iMjI1cHgiIHg9IjAiIHhsaW5rOmhyZWY9IiNfSW1hZ2UxIiB5PSIwIiBoZWlnaHQ9IjIyNXB4Ii8+CiA8L2c+CiA8ZGVmcz4KICA8aW1hZ2Ugd2lkdGg9IjIyNXB4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhD'+
			'QVlBQUFBK3M5SjZBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBWlJFbEVRVlI0bk8yZFAyemNScjdIdjlhZERqRWI2NEVxVkpoNEd4ZGtvVUlid0FiZXVuQmtiNVBDZy9pdTBMMnJkZ05jZ0tjVWw4UnU3b0FENGhRcDBpaHhVdWdkWU1DcklqaEFWWUpSOFZ5c3JTQ0FONFdCY0FzYnAybThoMVZoQXlhZ3FLQXU4Qld2SUxsZXk1STQzT1cvR2Y0K2dMR1NURkkvYVBqbGIzNS9PSE1LUk9Fd3h1b0E1Z0JFbjJmQ3J6SDI4MGx4QWV5TmZmMXorTDBMWUk5ejdrNXhiU0lGVGhWdFFKVUl4VllIVUFQd2R2aFpLODZpRVlQdzMvZmhwMHZpekE4U1lVWXd4bW9BbGdFc0lSRGVjb0htVElvTFlCdEFIOE'+
			'EyNTN4UXFEV2FRaUpNaVRIUnZSMSsxb3F6SmpNR0NFVDVQVWlVcVVFaW5BTEcyREtBZHhHSWJwcTRUVlVpVC9rZDUzeTdXRlBVaFVTWUVNYllOUVRDdTRZZ2FVSUU3QUg0Rm9FZ3Z5M2FHSlVnRVVvUUpsUStCQWxQbGtpUXR5akJFdytKOEJnWVkzTUEyZ2pFVnl2VUdMVVpBTGdGb01NNTM0czV0cEtRQ0E4Unhua3RCQUlrMHFVRFlJUGl4MWNoRVlZd3h0b0FQZ0Y1dlR4d0VVeFZPMFViVWdZcUxjSnd5dmtSQXM5WEs5YWFTaklBc0FIZ3l5cFBWU3Nwd2pIeGZRaEt0SlNCUFFSeFl5WEZXQ2tSa3ZoS1R5WEZXQmtSaGpIZkZ5RHhxY0FlZ0krckVqTnFMOEl3MjNrSEZQT3B5QURBZTdwblU3VVZZZGpM'+
			'ZVFkcU5rNFRyN0tOUUl5RGd1M0loSm1pRGNnQ3h0aE5BRTlBQXRTRlpRQlB3bkhWRHEwOElVMDlLOEVBbWsxUnRSQmhtUFg4QkVIbWs2Z0dYd0w0Vkljc3F2SWlKTzlYYVFiUXdDc3FIUk15eHI0QWNCOGt3S3BTQTNBL3ZBK1VSVWxQR0w1YWRBZlZmSkdXT0JvWGdWZFU3dFdwWHhWdFFGTENvdnZmUWQ2UGVKVUZBUC90T000eklZUlNRbFJLaEl5eE93QnVBbmlqWUZPSWN2SUdnR3VPNDh3SkllNFdiWXdzU2t4SHcrem5mZEQwazVESEJYQlpoZXhwNlVVWXhuLzNRVDJmUkhMMkVBaXgxTlBUVW1kSHcvaVBCRWhNeWh5QzdHbTdhRU5Pb3JReElXUHNJd0Ryb1BpUG1JNG9UdnhaQ1BGajBjWWNSU21ubz'+
			'JFQ3BsMjBIWVIyZERqbjd4VnR4R0ZLNXdsSmdFU0cxQjNIcVFraHZpdmFrSEZLNHdrcEEwcmtTS2t5cDZVUUlRbVFLSURTQ0xGd0VaSUFpUUlwaFJBTEZTRUprQ2dCaFF1eE1CR1NBSWtTVWFnUWl5eldrd0NKc2hCMVpSVkNJU0lNeXhBa1FLSk0xTVA3TW5keXJ4TlNIWkFvTVlYVUVYTVZZZGlLOXVjOGZ5ZEJKS1NlZDR0YmJpSU1tMmpYOC9wOUJERUY3emlPODgrOFhnN09KVHRLcnlNUkNwTGJhMUNaaXpBc1JUd0JDWEJxVE5PRWFacXh4M21lQjgvemNyQkllL1lBdkpsMTZlTFhXVjQ4aER5Z0pKSElITWZCNmRPbllWblc2SE5TaHNNaERnNE9ScDg3T3pza1VubWlXdlpiV2Y2U1REMWh1QlFkTGNo'+
			'N0RMWnR3M0VjMkxhTnMyZlB3akNNM0g2MzcvdlkzZDJGRUFJN096c1FRdVQydXhYa1M4NzV4MWxkUERNUmhvbVlRdW91WmNVMFRkVHJkZFRyZGRpMlhiUTVyeUdFZ091NmNGMlhQT1hydkpmVlZtMlppSkFTTVM4eFRSUE5aaFAxZWwwcW5pc0xudWZCZFYxMHUxMFNaRUJtaVpxc1JQZ1RLdHdSWXhnR2xwYVcwR3cycDRybnlzSndPRVMzMjBXLzM0ZnYrMFdiVXlRdTV6ejErREIxRVZZNURqUk5FNHd4TEMwdDVScmY1WVh2KytqMysrQ2NWOWs3cGg0ZnBpckNjSE9Xd2hwaGk4SzI3ZEdVc3lwRVU5V0tKblF1cDdrSlRXb2lET3VCUDZGQ3k5UGJ0ZzNHV0NtVExIa2hoQURudkdwaUhBQjRLNjM2WVpwMX'+
			'drOVFFUUZHMDg1R281SFo3eEJDak9wNXo1OC9IMDMvWkc3MjZLRmdtaWJtNStkSDljY3NIaGEyYmVQR2pSdm85WHBWbXFiV0VOenZxVXhMVS9HRVZabUdHb2FCWnJPSnExZXZwbnJkNFhBSUljVG9NOHNiT1JLalpWbWp6elRaMnRwQ3Q5dXRTZ0lubFdscFdpSjhBczI5b0czYmFMZmJxWlFab2dUSHpzNU80Um5IS0pQck9FNXFDU1hQODlEcGRLb3dSUjF3enQrYzlpSlRpNUF4ZGhPQmE5WVN3ekRRYXJXbVRycEV3b3VLNFdVbGFpWklRNUN1NjJKalkwTjNyL2dwNS96bU5CZVlTb1NNc1JxQzVtd3RzVzBicTZ1clU5Mk1xdGJZMHFwMStyNlA5ZlYxM2IzaW01enp3YVFuVHl2Qyt3Q1dwN2xHV1ZsWldV'+
			'R3oyWno0L0Y2dmh3Y1BIbWh4ODltMmpZc1hMMDZWaU9wMnU5amMzRXpScWxLeHpUbS9QT25KRTR0UTEyU01hWnBZWFYyZCtPbXZjNVp3MnF6d2NEakUydHFhVWpPQ0JFeWNwSmxHaE5vbFl5ekx3dlhyMXllYWZycXVpODNOVFMzRmR4alROTkZ1dHljcWVmaStqN1cxTlF5SHd3d3NLNVNKa3pRVExXOFJ2aUhSbnVUY3N0Sm9OUENuUC8wSnM3T3ppYzRiRG9lNGZmczI3dDY5aTRPRGc0eXNLeGNIQndmbzlYb1FRc0N5TEp3NWMwYjYzTm5aV1Z5NmRBbWU1MkYzZHpkREszTm5idElsTVJKN1FoM2ZsR2VNSmE3OStiNlBlL2Z1Z1hPZWtWWHF3QmpEbFN0WEVzOGd0cmEyZFB2N1RmUW1mbUpQNkRqT253Rz'+
			'hrL1M4c3RKdXR4TW5ZSVFRK09xcnIwcGRhc2dUSVFRZVBud0l5N0lTMVZGdDI4YjgvTHhPZjhjM0FQd2loTmhPY2xJaUVZWmU4Ty9RWlBmY2RydWRPTW13dWJtSmI3NzVwakpUVDFtaUtlckJ3UUVXRnhlbHo3TXNTemNoMWgzSCtac1E0bCt5SnlRU29VNWVNS2tBUGMvRDJ0cWFUamRMSmp4NThnVDlmaCtMaTR2UzAxUE5oSmpZRzBxTFVDY3ZtRlNBcnV2aTY2Ky9ya1RtTXczMjkvZlI2L1d3c0xDQWhZVUZxWE0wRTJJaWJ5Z3RRbDI4WUZJQmRydGRiR3hzNE1XTEZ4bGFwUjh2WHJ6QXc0Y1BZUmdHenAwN0ozV09Sa0pNNUEyVGlQQU9GTStJTXNZU0pXRTZuUTd1M3IyYm9VWDY4K2pSSTNpZUo5MTdh'+
			'MWtXVHAwNnBVT25VVTBJY1V2bVFDa1I2bEFYYkRRYVdGbFprVHJXOTMzY3ZuMGJEeDgrek5pcWFyQzd1NHZkM1Ywc0xpNUsxV0Z0MjlhaGppaGRONVRkR3UzREtRMHFGTXV5MEc2M3BZNk5Pam8wbUJLVkN0ZDFFN1dzdGR0dEhSYkprdEpOckNjTWUwU1YzVW5KTUF6ODlhOS9sWG9DYTl4U1ZRcjI5L2Z4K1BGam5EOS9YbW84enA4L2p4OSsrRUhsZUh6QmNaenZoUkNEa3c2UzhZU3RkT3dwQnRsZVVCSmdQaVJwNGpZTUE5ZXZYOC9CcWt5SjFjK0puakI4WDdDVGtqRzVzN0t5SXAwUXVIMzd0ZzdKQUNYWTM5L0hzMmZQY09IQ2hkaGp6NXc1QThNdzhPalJveHdzeTRTNjR6aTNUaXBYeEhuQ2F5a2JsQn'+
			'ZSTW9ReWREb2RpZ0Z6eG5WZGREb2RxV09iemFicUs5cTFUL3JQT0JFcW1aQXhEQU9ycTZ0U3gzYTdYZlI2dll3dElvNmkxK3VoMisxS0hUdnRDZ2NGYzZLT2poVmh1SjlFTFcxcjhxRFZha2tOV1BRT0lGRWNtNXViVXJPUWFLMGZSYW1GZWpxU2t6eWhrbDdRdG0ycE9ORHpQR3hzYk9SZ0VSSEh4c2FHVkV0Z1dYZXprdVJZUFowa1F1WGlRY013cE91QjYrdnJ1aTZ6b0J6UllsQXl0TnR0VmFlbHgrcnB5T3dvWSt3YUZPeVFlZWVkZDZTOG9Pd1VpTWlQL2YxOXFkZWdETVBBdi8vOWJ4VXoyVzg0anRNWFF2emo4SDhjNXduZnpkaWcxREZOVStydGVDR0VkREtBeUJmWkRXYXVYcjJxMUY2UFl4eXBxK05F'+
			'cU54VWxERVdlNHp2KzlKcGNhSVlPcDJPVkpnZ005NGw1RWhkdlNiQ3NFMU5xYmNsYk51V2VqM3AzcjE3OUU1Z3lmRThEL2Z1M1lzOXJ0Rm9xSmlrbVF2MTlRcEhlVUxscHFJeVQ4WGhjS2pib2tMYXdqbVhhaDlVMUJ1K3BxK2pSTGljdlIzcFlkdTIxQk9SNm9GcUlUTmVzbU5mTXBZUC8rQVZFWWE5b2twdE55dlRtaWFFVURHYlZtbGt4K3ppeFlzNVdKTXE5VkJuSXc1N3d1WGNURWtCMHpTbFNoS1VqRkVUbVhGck5Cb3Faa3FYeDc4NUxNSzM4N05qZW1SaWdsNnZSOGtZUmZFOFQ2cXZWOEhZOEJXZEtlc0pvNjI3NHFCa2pOcklqRjlhbTV2bXlQTDROeU1SaHZQVVdyNjJUSTdNSDU2OG9QckllRVBaQj'+
			'NLSnFJM0hoZU9lY0RsM1U2WkFKaUh6NE1HREhDd2hza1ptSEtmWlM3SWdscU12eGtXb3pLUEVOTTNZUllDR3d5RmxSRFZCQ0JGYk4weTZEMFlKR09sTlNVOG84OVNqL2xDOWtCbFB4YnpoS0swL2M5UVB5MDVjV2NMM2ZmVDcvWnlzSWZLZzMrL0g5cFRLcmlkVUVwYWpMMmFBMFZ2MFNtQ2FadXkwUTJiQUNMV1FlYkRLM0J0bEl0SmQ1QW1WRWFITTA0N2VGZFFUbVhGVnpCdStJc0phY1hZa1EyWXFTaUxVRTlkMWRadVMxb0NYSWxTbVV5YXVZWmRpUWIySkcxL0ZHcnJmQmhUemhESi80SjJkblJ3c0lZcENabndWRW1JTlVFeUVqdVBFSGtPZVVHOWt4bGZtUGlrSk5RQ1lVU2t6R3ZlRUd3NkhsQlhWSE4v'+
			'M1l3djNDbmxDTU1icU0xQm9LWXV6WjgrZStQL1VJVk1ONHNZNTdqNHBHWE16VUtROFlacG1iTU0yN2FoVURlTEcyVEFNbGVxRjZuaENtVDhxZWNKcUlEUE9Db2x3YmdiQWZ4WnRoUXd5d1RhOXRsUU5aTVpab2VUTW1Sa29raGs5ZmZyMGlmOVBYckJheEkxMzNQMVNJdXF5ZTlZWFR0eXJTK1FGcTBYY2VLdTAzNzB5TVdIY2s0MUVXQzNpeGxzaFQ2aE9kalR1eWZiOCtmT2NMQ0hLUU54NEsrUUoxWm1PeGtHZXNGcm9OTjVLaUZDaGRETlJJbFM1YjdRUklXVkhxOFh1N203c01TUkNnc2dRblhxRVNZUUVVVEFrUW9Jb0dCSWhRUlFNaVpBZ0NvWkVTQkFGUXlJa2lJSWhFUkpLb3RoV2FDZWloQWhsV3BSVV'+
			'dsZUVtQjZaSlN4VWFXM1RSb1FFY1JoVjdoc2xSQ2lES2kxS1JEcm9OTjR6QUpSWU16NXVjWi81K2ZtY0xDSEtRTng0SzdUb2x6c0RZSzlvSzJRNE9EZzQ4ZjkxZWpJUzhjU05kOXo5VWlMMmxKbU94czN2U1lUVkltNjhGZktFNmt4SDQwUkkyZEZxRVRmZUNubENkd2JBejBWYklZUE1SaURrRGF1QnpOSVZDbTBNOUxNeU1TSFZDb2tJbldxRUNHTkNaYWFqY1M5eUtyUzREekVGY2VQcys3NUtJbFFuT3dyRUwybEFuckFheEkyenpOSVhKV0p2aG5PdWhDY0U0dGVSc1N4THE1NUM0blVNdzRqMWhDcXROOFE1ZDZNU3hhQklRMlNSQ2JhWGxwWnlzSVFvQ3BueFZTZ3BNd0JldHEwTkNqTWpBVEpQT0lVMkFp'+
			'RW1RR1o4RmZLRUErQ2xDTDh2em81a3hQMkJ5UlBxVGR6NEtpUkFJTlNkVXA0UUFGejM1QkRXTUF6VTYwcXM3RThrcEY2dng4YjhjZmRIeVJnQUwwV29qT1V5ZjJRU29aN0lqS3RpSW5TQlVJUXFaVWc5ejR1dEFTMHRMVkdXVkRNTXc0aWRpc3JjRzJVaTB0MTRBN2N5UXBTWmtsSnNxQmN5RDFiRnZPQjI5TVhNVVQ4c085MXVOL2FZWnJPWmd5VkVYc2lNcDh4OVVTSkdUNHh4RWZZTE1HUWlQTStMZlZYRnNpenFvTkVFMjdaakMvVEQ0VkNwcVNqRzlLYWtKd1Rrbm5vWEwxN013UklpYTJUR1VURXZDQncxSGVXY0Q2QlFxYUxmNzhjMmREY2FEWHE5U1hGTTAwU2owVGp4R04vMzBlOHJNNUVEZ0VHb053Q3'+
			'ZML1MwbmFzcFV5RDdoMmVNNVdBTmtSVXk0eWZ6UUM0WjIrUGZIQmFoTXAwekFNQTVqejJHdktHNnlIaEJRTzQrS0JtdjZFeFpUd2dFQ1JxWnRIUzczYzdlR0NKMVpNYXQxK3VwbHBBQlR2S0U0VHhWcVdLTFRFQnUyelpsU2hWRGRzd2VQSGlRZ3pXcDRvN0hnOERSaS85dTUySktTZ2docEpwMlYxWldjckNHU0F1WjhaSWQrNUt4ZmZnSFI0bnd1K3p0U0JlWm1NQ3lMRXJTS0FKalRHcXBFZ1ZqUWVBSWZiMG1Rczc1TmhSYThnSUlub2k5WGkvMnVDdFhybENTcHVTWXBva3JWNjdFSHRmcjlWVDBnbnVodmw3aHVNVi92ODNXbHZTUmVTb2Foa0ZKbXBMVGJyZWxtdThWOVlKSDZ1bzRFU28zSmZVOEQxdGJX'+
			'N0hIMmJaTmZhVWxwZGxzU2lWanRyYTJWTXlJQXNmbzZrZ1JjczYvaFdKVFVpRElsTW9NenNyS0NpMlBXRElzeTVKS3huaWVwMktMR2hCTVJSTjVRa0RCS2FudisraDBPbExIcnE2dTBqdUhKY0V3REt5dXJrb2QyK2wwVk91T2lUaFdUeWVKOEZZR2htU09FRUtxZ0crYUpscXRWZzRXRVhHMFdpMnBoSm5ydWlvbVl5S08xZE94SWd6ZitoMWtZVTNXYkd4c1NEMHQ2L1U2MVE4TFptVmxSV3JaQ3QvM3NiR3hrWU5GbVRBNGFmV0t1SzNSbFBTR3Z1OWpmWDFkNnRobXN5blZuMGlrVDZQUmtFNlNyYSt2cXpvTkJXSjBGQ2ZDVG5wMjVJc1FRanFBYjdmYnREaFV6dFRyZGVseVViZmJWWGthQ3NUbzZFUVJjcz'+
			'czNGk1UVpqWTNONlUzaTJ5MVdwUXh6UW5Mc3FUajhlRndpTTNOell3dHlwUk9xS05qa2RtcFY5bUpPQUNzcmExSlRXTU13OEQxNjlkSmlCbGpXUmF1WDc4dWxabjJmUjlyYTJzNVdKVXBzZnI1VmR3QlFvaUI0empYQUN5a1lsTE92SGp4QW84ZlA4YWxTNWRpajUyZG5jWDU4K2Z4K1BGajdPL3Y1MkJkdFVnaVFBRDQvUFBQVlMzS1I3aWM4Ny9FSFJRclFnQndIT2NYQU5lbU5xa2c5dmYzNFhtZVZOd1hDZkhaczJkNCt2UnBEdFpWZzNxOW5xZzIyK2wwOE9qUm80eXR5cHkvQ0NGaTYyVlNJaFJDdUk3anRBSE1UV3RWVWV6dTd1TFVxVk5TYlZHenM3TzRjT0VDUE05VGJhKzdVdEpvTlBEKysrOWpkblpX'+
			'NnZpdHJTMVZ1MkxHR1hETzM1TTVVRXFFQU9BNHpuOEFXSjdVb2pJZ2hNRDgvTHgwM0JmdGZhREJFN2t3VmxaVzhMdmYvVTc2K0Y2dnAzb2lKdUtXRUdKYjVzQWtJblFCL0ErQU55WTBxaFM0cnB0SWlPZk9uWU5sV1hqOCtERmV2SGlSc1hYNllCZ0cvdmpIUHlaYWRyTFg2MG0zSFphY1BRQi9FRUw4UytaZ2FSRUtJZjdsT001cEtPNE5nZVJDWEZoWXdJVUxGeUNFb0lTTkJKWmw0Y2FOR3poMzdwejBPUm9KRUFBKzU1ei9uK3pCMGlJRTlQR0dRSEloR29hQlM1Y3U0ZURnQUUrZVBNbllPblZwTnB1Sm0rTTFFMkFpTHdna0ZLRk8zaEJJTGtRQVdGeGNoT000RUVMZzRPQWdRK3ZVd2pSTmZQREJCMUtsb0'+
			'hFMEV5Q1EwQXNDQ1VVSTZPVU5nVUNJc2xuVGlHZzl6Ti84NWplcXQxT2xBbU1NclZZTEN3dkpTc2xiVzF1NkpHRWlFbnRCWUFJUmh0N3dHUlN1R3g1R0NDRmRSNHlZbloyRmJkdW8xK3Q0K3ZTcDZrWGxpYkJ0RzZ1cnE3aHc0WUowK1NHaTArbm9VSVk0ekNybi9NZWtKNTJhOUxjeHhwNEFxRTE2ZmhsSjJ0RXhqaEFDblU2bkVtSTBUUlB0ZG51aXRWeWpWalRabmw2RkdIRE8zNXpreE1TZU1NSnhuRDZBOXFUbmw1SDkvWDM4OE1NUFdGeGN4Smt6WnhLZGE1b21tczBtNXVmbk1Sd090WXdYVGRQRTczLy9lN1RiN1lsV3JSc09oL2pzczg5MGZWRDlWZ2d4bU9URWlUMGhBRERHN2tPVEpNMWhWbFpXcGxv'+
			'UXF0ZnI0Y0dEQjFyRWpMWnQ0K0xGaTFPOWQ5bnRkbldMLzhiWjVweGZudlRrYVVWWUE2QnR2ajZLZWFaWmkyWTRIS0xiN1NxM2MxQzA1WGl6Mlp6cXpaTG9CV3NkSGtZbjhPYmhwZTJUTUpVSUFZQXhkaFBBSjlOZXA2d1lob0ZXcXpYMVM3L1JWbTZ1NjVaNmIvVjZ2WTU2dlM2MVIzd2NydXRLTHpXaU1KOXl6bTlPYzRHcFJRam9tYVE1akczYkU4ZENoNGtFdWJPelU3aUhqRHllNHppcENBOElsaVhzZERxNmV6OWdpbVRNT0dtSmNCbkEvVFN1VldZTXcwQ3oyY1RWcTFkVHZlNXdPSVFRWXZTWlplTENOTTNSSHZBeWU4RW5KWG9EUW5QdkYzSDVxR1h0azVLS0NBR0FNZllGZ0kvU3VsNlpNVTBUakxGTU'+
			'Y0aUt4T2g1SHA0L2Z6NFM1dTd1N29rM3VHRVlPSHYyN01qTytmbDVtS1k1RWw5VzlIbzljTTUxelh3ZXhaZWM4NC9UdUZDYUlwd0Q4Qk0wbjVhT1k5czJHR09WM3Z0UUNBSE9lUldtbnVNTUFMd1Z0M2FNTEttSkVLak90UFF3MGY0V1ZWcXhUYWNTekFTa01nMk5TRldFUUxXbXBZZUpwcWxwSlRqS1JwUlFxdGkwOHpDcFRVTWpVaGNoQURER2ZnSlFIYmR3aUxScWJHVkIxVnBuQnJpYzg3ZlN2dWl2MDc1Z3lIc0lwcVhLcmtrekRiN3ZvOWZyb2Rmcmpkclo2dlc2VWh1VWVwNEgxM1dsZDdxcUFIc0FmcHZGaFRQeGhBREFHR3NEdUpQVjlWWEVOTTFSTWJ5TXlaeG9NeDNYZFVsNHIvTWU1N3lUeFlVekV5'+
			'RlE3ZmhRQnR1MjRUZ09iTnZHMmJObmM0MGpmZC9IN3U0dWhCRFkyZG1wYW9KRmx0VGp3SEV5RlNGQThXRVNvbnFlNHpnNGZmbzBMTXNhZlU1SzlFWkg5TG16c3pPcVB4SlNaQklIanBOVlREak9aUVJOM3BXTUQ1TVFpZU00cnhTSlZQWTZ4TlRzSWJoL015VnpUd2dBakxFNktweW9JWlJrRDBFOU1QTnUrNGxmNmsyQ0VPS3Bia3RpRU5xem1uVEJwa25KUllUQWFDbjlud0c4azlmdkpJZ0orWmh6L3I5NS9iTGNSQWdBUW9nZkhjZXBnUkkxUkhucHlPeWtsQ2E1aWhBQWhCRGZrUkNKa3RLUjNjUWxUWEpKekJ3RmxTNklrcEY1S2VJNFpIYnF6WXJMQU1xN3pnTlJKVnprVUlvNGpzSThJVEI2Qi9FK3lDTV'+
			'N4ZUVpS0VXazhtN2dKQlFxUW9DRVNCUks0UUlFU2lCQ2dJUklGRUlwQkFpVVJJUUFDWkhJbGRJSUVDaVJDQ01ZWTNlZzJmTDZSS2tvcEF4eEVyblhDZU9nT2lLUklhVVRJRkJDRVFJaklWS0xHNUVtSCtmZENTTkxLVVVJakZyYy9vbGd3eGt0TmlRbENtRVBRVE4yYnIyZ1NTbGRUSGdZZWcyS21JTGNYa2VhaHRLTEVLRE1LVEVScGNxQW5vUVNJb3lnTldzSVNUSmRFeVp0U2hzVEhvVVE0aTdGaWNRSlJQSGY1MFVia2dTbFBHRkVHQ2ZlQVUxUGlaZTRBSDQ3eldhZFJhR2tDQ05vZWtxRUtEWDlQSXpTSWdSR205RGNRWVYyZ3lKR0RCQXN5cnRkc0IxVG9WUk1lQlJDaUlIak9Cc0lZc1QvS3RvZUlqZStC'+
			'UEFIenZrL2lqWmtXcFQzaE9PUVY2d0VBMmpnL2NiUlNvUVJqTEdiQUQ0cDJnNGlkVDdsbk44czJvaTAwVktFQU1BWXF5SHdpc3ZGV2tLa3dEWUM3emNvMkk1TTBGYUVFVFJGVlpvQk5KdDZIb1gySW93SXQycjdBdFNEcWdKN0NONTY2QlJ0U0I0b254MlZKVndCL0c4QWZrRlE1S2VPbS9LeEIrQnpCRm5QSDRzMkppOHE0d25IQ1J2Q1B3THdJY2d6bG9FOUFMY1FGTjFMMzNDZE5wVVVZY1NZR0Z1Z21MRUlCZ0EyVUZIeFJWUmFoT09FTWVPSG9IN1VQSEFCM0twS3pCY0hpZkFRWVRhMUJWcHNLZ3M2QURaMHozWW1oVVI0RE9GVXRZM0FPOVlLTlVadEJnaml2VTZWcDV3blFTS1VJSHgxNmtNRW01eFNJaW'+
			'VlUFFEZklwaHlsbnBwaVRKQUlrd0lZK3dhZ0hkQmdqeE1KTHp2T09mZkZtMk1TcEFJcHlDTUg5OUYwQnBYeFlTT2k2Q2w3RHVLOHlhSFJKZ1NZYS9xTW9DM3c4OWFjZFpreGdDQjZMNEhzSzFyTDJmZWtBZ3pZa3lVU3dpODVIS0I1a3pLTmdKdjF3ZUpMak5JaERrU0puanFDTHprMitGbnJUaUxSZ3pDZjkrSG55NGxWUEtEUkZnQ1FuSE9JUkRvSElBemVCbGp6bUc2ZU5ORmtEU0p2djQ1L040RnNFZGlLNTcvQi9Ea09BT3cwejhMQUFBQUFFbEZUa1N1UW1DQyIgaWQ9Il9JbWFnZTEiIGhlaWdodD0iMjI1cHgiLz4KIDwvZGVmcz4KPC9zdmc+Cg==';
		me._svg_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1_1";
		el.ggDx=-22;
		el.ggDy=-12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42.735%;';
		hs+='left : calc(50% - ((15.7233% + 0px) / 2) - 22%);';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42.735% + 0px) / 2) - 12%);';
		hs+='visibility : inherit;';
		hs+='width : 15.7233%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1_1.onclick=function (e) {
			player.openNext("{node5}","$(cur)");
		}
		me._svg_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._svg_1_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=-22;
		el.ggDy=13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 15.3846%;';
		hs+='left : calc(50% - ((19.8113% + 0px) / 2) - 22%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15.3846% + 0px) / 2) + 13%);';
		hs+='visibility : inherit;';
		hs+='width : 19.8113%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Oggi", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._text_1);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggDy=13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 14.5299%;';
		hs+='left : calc(50% - ((22.956% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14.5299% + 0px) / 2) + 13%);';
		hs+='visibility : inherit;';
		hs+='width : 22.956%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("XVII secolo", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2.ggUpdateText();
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._text_2);
		el=me._svg_1_3=document.createElement('div');
		els=me._svg_1_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgd2lkdGg9IjEwMCUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDsiIHZpZXdCb3g9IjAgMCAyNzUgMjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIGhlaWdodD0iMTAwJSIgeG1sOnNwYWNlPSJwcm'+
			'VzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDI1LDI1KSIgaWQ9IkxpdmVsbG9fMSI+CiAgPHVzZSB3aWR0aD0iMjI1cHgiIHg9IjAiIHhsaW5rOmhyZWY9IiNfSW1hZ2UxIiB5PSIwIiBoZWlnaHQ9IjIyNXB4Ii8+CiA8L2c+CiA8Y2lyY2xlIHI9IjQ2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMjMwLDIzMCwyMzApO3N0cm9rZS13aWR0aDo0LjE3cHg7IiBjeD0iMTM4IiBjeT0iMTM4IiBpZD0iRWxsaXNzZV8xIi8+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCg0Ljkx'+
			'NjA0NiwwLDAsNC45MTYwNDYsLTE5LjMxMzQ3NCwtMTguNDgzNDc0KSI+CiAgPGNpcmNsZSByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMjMwLDIzMCwyMzApO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGRlZnM+CiAgPGltYWdlIHdpZHRoPSIyMjVweCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FZQUFBQStzOUo2QUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQVpSRWxFUVZSNG5PMmRQMnpjUnI3SHY5YWREakViNj'+
			'RFcVZKaDRHeGRrb1VJYndBYmV1bkJrYjVQQ2cvaXUwTDJyZGdOY2dLY1VsOFJ1N29BRDRoUXAwaWh4VXVnZFlNQ3JJamhBVllKUjhWeXNyU0NBTjRXQmNBc2JwMm04aDFWaEF5YWdxS0F1OEJXdklMbGV5NUk0M09XL0dmNCtnTEdTVEZJL2FQamxiMzUvT0hNS1JPRXd4dW9BNWdCRW4yZkNyekgyODBseEFleU5mZjF6K0wwTFlJOXo3azV4YlNJRlRoVnRRSlVJeFZZSFVBUHdkdmhaSzg2aUVZUHczL2ZocDB2aXpBOFNZVVl3eG1vQWxnRXNJUkRlY29IbVRJb0xZQnRBSDhBMjUzeFFxRFdhUWlKTWlUSFJ2UjErMW9xekpqTUdDRVQ1UFVpVXFVRWluQUxHMkRLQWR4R0licHE0VFZVaVQva2Q1M3k3V0ZQ'+
			'VWhVU1lFTWJZTlFUQ3U0WWdhVUlFN0FINEZvRWd2eTNhR0pVZ0VVb1FKbFErQkFsUGxraVF0eWpCRXcrSjhCZ1lZM01BMmdqRVZ5dlVHTFVaQUxnRm9NTTUzNHM1dHBLUUNBOFJ4bmt0QkFJazBxVURZSVBpeDFjaEVZWXd4dG9BUGdGNXZUeHdFVXhWTzBVYlVnWXFMY0p3eXZrUkFzOVhLOWFhU2pJQXNBSGd5eXBQVlNzcHdqSHhmUWhLdEpTQlBRUnhZeVhGV0NrUmt2aEtUeVhGV0JrUmhqSGZGeUR4cWNBZWdJK3JFak5xTDhJdzIza0hGUE9weUFEQWU3cG5VN1VWWWRqTGVRZHFOazRUcjdLTlFJeURndTNJaEptaURjZ0N4dGhOQUU5QUF0U0ZaUUJQd25IVkRxMDhJVTA5SzhFQW1rMVJ0UkJobVBYOE'+
			'JFSG1rNmdHWHdMNFZJY3NxdklpSk85WGFRYlF3Q3NxSFJNeXhyNEFjQjhrd0twU0EzQS92QStVUlVsUEdMNWFkQWZWZkpHV09Cb1hnVmRVN3RXcFh4VnRRRkxDb3Z2ZlFkNlBlSlVGQVAvdE9NNHpJWVJTUWxSS2hJeXhPd0J1QW5pallGT0ljdklHZ0d1TzQ4d0pJZTRXYll3c1NreEh3K3puZmREMGs1REhCWEJaaGV4cDZVVVl4bi8zUVQyZlJITDJFQWl4MU5QVFVtZEh3L2lQQkVoTXloeUM3R203YUVOT29yUXhJV1BzSXdEcm9QaVBtSTRvVHZ4WkNQRmowY1ljUlNtbm8yRUNwbDIwSFlSMmREam43eFZ0eEdGSzV3bEpnRVNHMUIzSHFRa2h2aXZha0hGSzR3a3BBMHJrU0treXA2VVFJUW1RS0lEU0NM'+
			'RndFWklBaVFJcGhSQUxGU0VKa0NnQmhRdXhNQkdTQUlrU1VhZ1FpeXpXa3dDSnNoQjFaUlZDSVNJTXl4QWtRS0pNMU1QN01uZHlyeE5TSFpBb01ZWFVFWE1WWWRpSzl1YzhmeWRCSktTZWQ0dGJiaUlNbTJqWDgvcDlCREVGN3ppTzg4KzhYZzdPSlR0S3J5TVJDcExiYTFDWml6QXNSVHdCQ1hCcVROT0VhWnF4eDNtZUI4L3pjckJJZS9ZQXZKbDE2ZUxYV1Y0OGhEeWdKSkhJSE1mQjZkT25ZVm5XNkhOU2hzTWhEZzRPUnA4N096c2tVbm1pV3ZaYldmNlNURDFodUJRZExjaDdETFp0dzNFYzJMYU5zMmZQd2pDTTNINjM3L3ZZM2QyRkVBSTdPenNRUXVUMnV4WGtTODc1eDFsZFBETVJob21ZUXVvdVpjVT'+
			'BUZFRyZGRUcmRkaTJYYlE1cnlHRWdPdTZjRjJYUE9YcnZKZlZWbTJaaUpBU01TOHhUUlBOWmhQMWVsMHFuaXNMbnVmQmRWMTB1MTBTWkVCbWlacXNSUGdUS3R3Ull4Z0dscGFXMEd3MnA0cm55c0p3T0VTMzIwVy8zNGZ2KzBXYlV5UXU1enoxK0RCMUVWWTVEalJORTR3eExDMHQ1UnJmNVlYdisrajMrK0NjVjlrN3BoNGZwaXJDY0hPV3docGhpOEsyN2RHVXN5cEVVOVdLSm5RdXA3a0pUV29pRE91QlA2RkN5OVBidGczR1dDbVRMSGtoaEFEbnZHcGlIQUI0SzYzNllacDF3azlRRVFGRzA4NUdvNUhaN3hCQ2pPcDV6NTgvSDAzL1pHNzI2S0ZnbWlibTUrZEg5Y2NzSGhhMmJlUEdqUnZvOVhwVm1xYldF'+
			'Tnp2cVV4TFUvR0VWWm1HR29hQlpyT0pxMWV2cG5yZDRYQUlJY1RvTThzYk9SS2paVm1qenpUWjJ0cEN0OXV0U2dJbmxXbHBXaUo4QXMyOW9HM2JhTGZicVpRWm9nVEh6czVPNFJuSEtKUHJPRTVxQ1NYUDg5RHBkS293UlIxd3p0K2M5aUpUaTVBeGRoT0JhOVlTd3pEUWFyV21UcnBFd291SzRXVWxhaVpJUTVDdTYySmpZME4zci9ncDUvem1OQmVZU29TTXNScUM1bXd0c1cwYnE2dXJVOTJNcXRiWTBxcDErcjZQOWZWMTNiM2ltNXp6d2FRblR5dkMrd0NXcDdsR1dWbFpXVUd6Mlp6NC9GNnZod2NQSG1oeDg5bTJqWXNYTDA2VmlPcDJ1OWpjM0V6UnFsS3h6VG0vUE9uSkU0dFExMlNNYVpwWVhWMmQrT2'+
			'12YzVadzJxendjRGpFMnRxYVVqT0NCRXljcEpsR2hOb2xZeXpMd3ZYcjF5ZWFmcnF1aTgzTlRTM0ZkeGpUTk5GdXR5Y3FlZmkrajdXMU5ReUh3d3dzSzVTSmt6UVRMVzhSdmlIUm51VGNzdEpvTlBDblAvMEpzN096aWM0YkRvZTRmZnMyN3Q2OWk0T0RnNHlzS3hjSEJ3Zm85WG9RUXNDeUxKdzVjMGI2M05uWldWeTZkQW1lNTJGM2R6ZERLM05uYnRJbE1SSjdRaDNmbEdlTUphNzkrYjZQZS9mdWdYT2VrVlhxd0JqRGxTdFhFczhndHJhMmRQdjdUZlFtZm1KUDZEak9ud0c4ay9TOHN0SnV0eE1uWUlRUStPcXJyMHBkYXNnVElRUWVQbndJeTdJUzFWRnQyOGI4L0x4T2Y4YzNBUHdpaE5oT2NsSWlFWVpl'+
			'OE8vUVpQZmNkcnVkT01td3VibUpiNzc1cGpKVFQxbWlLZXJCd1FFV0Z4ZWx6N01zU3pjaDFoM0grWnNRNGwreUp5UVNvVTVlTUtrQVBjL0QydHFhVGpkTEpqeDU4Z1Q5ZmgrTGk0dlMwMVBOaEpqWUcwcUxVQ2N2bUZTQXJ1dmk2NisvcmtUbU13MzI5L2ZSNi9Xd3NMQ0FoWVVGcVhNMEUySWlieWd0UWwyOFlGSUJkcnRkYkd4czRNV0xGeGxhcFI4dlhyekF3NGNQWVJnR3pwMDdKM1dPUmtKTTVBMlRpUEFPRk0rSU1zWVNKV0U2blE3dTNyMmJvVVg2OCtqUkkzaWVKOTE3YTFrV1RwMDZwVU9uVVUwSWNVdm1RQ2tSNmxBWGJEUWFXRmxaa1RyVzkzM2N2bjBiRHg4K3pOaXFhckM3dTR2ZDNWMHNMaTVLMV'+
			'dGdDI5YWhqaWhkTjVUZEd1M0RLUTBxRk11eTBHNjNwWTZOT2pvMG1CS1ZDdGQxRTdXc3RkdHRIUmJKa3RKTnJDY01lMFNWM1VuSk1Bejg5YTkvbFhvQ2E5eFNWUXIyOS9meCtQRmpuRDkvWG1vOHpwOC9qeDkrK0VIbGVIekJjWnp2aFJDRGt3NlM4WVN0ZE93cEJ0bGVVQkpnUGlScDRqWU1BOWV2WDgvQnFreUoxYytKbmpCOFg3Q1Rrakc1czdLeUlwMFF1SDM3dGc3SkFDWFkzOS9IczJmUGNPSENoZGhqejV3NUE4TXc4T2pSb3h3c3k0UzY0emkzVGlwWHhIbkNheWtibEJ2Uk1vUXlkRG9kaWdGenhuVmRkRG9kcVdPYnphYnFLOXExVC9yUE9CRXFtWkF4REFPcnE2dFN4M2E3WGZSNnZZd3RJbzZpMSt1'+
			'aDIrMUtIVHZ0Q2djRmM2S09qaFZodUo5RUxXMXI4cURWYWtrTldQUU9JRkVjbTV1YlVyT1FhSzBmUmFtRmVqcVNrenloa2w3UXRtMnBPTkR6UEd4c2JPUmdFUkhIeHNhR1ZFdGdXWGV6a3VSWVBaMGtRdVhpUWNNd3BPdUI2K3ZydWk2em9CelJZbEF5dE50dFZhZWx4K3JweU93b1krd2FGT3lRZWVlZGQ2UzhvT3dVaU1pUC9mMTlxZGVnRE1QQXYvLzlieFV6Mlc4NGp0TVhRdnpqOEg4YzV3bmZ6ZGlnMURGTlUrcnRlQ0dFZERLQXlCZlpEV2F1WHIycTFGNlBZeHlwcStORXFOeFVsREVXZTR6dis5SnBjYUlZT3AyT1ZKZ2dNOTRsNUVoZHZTYkNzRTFOcWJjbGJOdVdlajNwM3IxNzlFNWd5ZkU4RC9mdT'+
			'NZczlydEZvcUppa21RdjE5UXBIZVVMbHBxSXlUOFhoY0tqYm9rTGF3am1YYWg5VTFCdStwcStqUkxpY3ZSM3BZZHUyMUJPUjZvRnFJVE5lc21OZk1wWVAvK0FWRVlhOW9rcHROeXZUbWlhRVVER2JWbWxreCt6aXhZczVXSk1xOVZCbkl3NTd3dVhjVEVrQjB6U2xTaEtVakZFVG1YRnJOQm9xWmtxWHg3ODVMTUszODdOamVtUmlnbDZ2UjhrWVJmRThUNnF2VjhIWThCV2RLZXNKbzYyNzRxQmtqTnJJakY5YW01dm15UEw0TnlNUmh2UFVXcjYyVEk3TUg1NjhvUHJJZUVQWkIzS0pxSTNIaGVPZWNEbDNVNlpBSmlIejRNR0RIQ3doc2tabUhLZlpTN0lnbHFNdnhrV296S1BFTk0zWVJZQ0d3eUZsUkRWQkNC'+
			'RmJOMHk2RDBZSkdPbE5TVThvODlTai9sQzlrQmxQeGJ6aEtLMC9jOVFQeTA1Y1djTDNmZlQ3L1p5c0lmS2czKy9IOXBUS3JpZFVFcGFqTDJhQTBWdjBTbUNhWnV5MFEyYkFDTFdRZWJESzNCdGxJdEpkNUFtVkVhSE0wNDdlRmRRVG1YRlZ6QnUrSXNKYWNYWWtRMllxU2lMVUU5ZDFkWnVTMW9DWElsU21VeWF1WVpkaVFiMkpHMS9GR3JyZkJoVHpoREovNEoyZG5Sd3NJWXBDWm53VkVtSU5VRXlFanVQRUhrT2VVRzlreGxmbVBpa0pOUUNZVVNrekd2ZUVHdzZIbEJYVkhOLzNZd3YzQ25sQ01NYnFNMUJvS1l1elo4K2UrUC9VSVZNTjRzWTU3ajRwR1hNelVLUThZWnBtYk1NMjdhaFVEZUxHMlRBTWxlcU'+
			'Y2bmhDbVQ4cWVjSnFJRFBPQ29sd2JnYkFmeFp0aFF3eXdUYTl0bFFOWk1aWm9lVE1tUmtva2hrOWZmcjBpZjlQWHJCYXhJMTMzUDFTSXVxeWU5WVhUdHlyUytRRnEwWGNlS3UwMzcweU1XSGNrNDFFV0MzaXhsc2hUNmhPZGpUdXlmYjgrZk9jTENIS1FOeDRLK1FKMVptT3hrR2VzRnJvTk41S2lGQ2hkRE5SSWxTNWI3UVJJV1ZIcThYdTdtN3NNU1JDZ3NnUW5YcUVTWVFFVVRBa1FvSW9HQkloUVJRTWlaQWdDb1pFU0JBRlF5SWtpSUloRVJKS290aFdhQ2VpaEFobFdwUlVXbGVFbUI2WkpTeFVhVzNUUm9RRWNSaFY3aHNsUkNpREtpMUtSRHJvTk40ekFKUllNejV1Y1ovNStmbWNMQ0hLUU54NEs3VG9s'+
			'enNEWUs5b0syUTRPRGc0OGY5MWVqSVM4Y1NOZDl6OVVpTDJsSm1PeHMzdlNZVFZJbTY4RmZLRTZreEg0MFJJMmRGcUVUZmVDbmxDZHdiQXowVmJJWVBNUmlEa0RhdUJ6TklWQ20wTTlMTXlNU0hWQ29rSW5XcUVDR05DWmFhamNTOXlLclM0RHpFRmNlUHMrNzVLSWxRbk93ckVMMmxBbnJBYXhJMnp6TklYSldKdmhuT3VoQ2NFNHRlUnNTeExxNTVDNG5VTXc0ajFoQ3F0TjhRNWQ2TVN4YUJJUTJTUkNiYVhscFp5c0lRb0NwbnhWU2dwTXdCZXRxME5Dak1qQVRKUE9JVTJBaUVtUUdaOEZmS0VBK0NsQ0w4dnpvNWt4UDJCeVJQcVRkejRLaVJBSU5TZFVwNFFBRnozNUJEV01BelU2MHFzN0U4a3BGNnZ4OG'+
			'I4Y2ZkSHlSZ0FMMFdvak9VeWYyUVNvWjdJakt0aUluU0JVSVFxWlVnOXo0dXRBUzB0TFZHV1ZETU13NGlkaXNyY0cyVWkwdDE0QTdjeVFwU1prbEpzcUJjeUQxYkZ2T0IyOU1YTVVUOHNPOTF1Ti9hWVpyT1pneVZFWHNpTXA4eDlVU0pHVDR4eEVmWUxNR1FpUE0rTGZWWEZzaXpxb05FRTI3WmpDL1RENFZDcHFTakc5S2FrSndUa25ub1hMMTdNd1JJaWEyVEdVVEV2Q0J3MUhlV2NENkJRcWFMZjc4YzJkRGNhRFhxOVNYRk0wMFNqMFRqeEdOLzMwZThyTTVFRGdFR29Od0N2TC9TMG5hc3BVeUQ3aDJlTTVXQU5rUlV5NHlmelFDNFoyK1BmSEJhaE1wMHpBTUE1anoyR3ZLRzZ5SGhCUU80K0tCbXY2RXha'+
			'VHdnRUNScVp0SFM3M2M3ZUdDSjFaTWF0MSt1cGxwQUJUdktFNFR4VnFXS0xURUJ1MnpabFNoVkRkc3dlUEhpUWd6V3A0bzdIZzhEUmkvOXU1MkpLU2dnaHBKcDJWMVpXY3JDR1NBdVo4WklkKzVLeGZmZ0hSNG53dSt6dFNCZVptTUN5TEVyU0tBSmpUR3FwRWdWalFlQUlmYjBtUXM3NU5oUmE4Z0lJbm9pOVhpLzJ1Q3RYcmxDU3B1U1lwb2tyVjY3RUh0ZnI5VlQwZ251aHZsN2h1TVYvdjgzV2x2U1JlU29haGtGSm1wTFRicmVsbXU4VjlZSkg2dW80RVNvM0pmVThEMXRiVzdISDJiWk5mYVVscGRsc1NpVmp0cmEyVk15SUFzZm82a2dSY3M2L2hXSlRVaURJbE1vTXpzcktDaTJQV0RJc3k1Skt4bmllcD'+
			'JLTEdoQk1SUk41UWtEQkthbnYrK2gwT2xMSHJxNnUwanVISmNFd0RLeXVya29kMitsMFZPdU9pVGhXVHllSjhGWUdobVNPRUVLcWdHK2FKbHF0Vmc0V0VYRzBXaTJwaEpucnVpb21ZeUtPMWRPeElnemYraDFrWVUzV2JHeHNTRDB0Ni9VNjFROExabVZsUldyWkN0LzNzYkd4a1lORm1UQTRhZldLdUszUmxQU0d2dTlqZlgxZDZ0aG1zeW5WbjBpa1Q2UFJrRTZTcmErdnF6b05CV0owRkNmQ1RucDI1SXNRUWpxQWI3ZmJ0RGhVenRUcmRlbHlVYmZiVlhrYUNzVG82RVFSY3M3MzRpNVFaalkzTjZVM2kyeTFXcFF4elFuTHNxVGo4ZUZ3aU0zTnpZd3R5cFJPcUtOamtkbXBWOW1KT0FDc3JhMUpUV01NdzhE'+
			'MTY5ZEppQmxqV1JhdVg3OHVsWm4yZlI5cmEyczVXSlVwc2ZyNVZkd0JRb2lCNHpqWEFDeWtZbExPdkhqeEFvOGZQOGFsUzVkaWo1MmRuY1g1OCtmeCtQRmo3Ty92NTJCZHRVZ2lRQUQ0L1BQUFZTM0tSN2ljODcvRUhSUXJRZ0J3SE9jWEFOZW1OcWtnOXZmMzRYbWVWTndYQ2ZIWnMyZDQrdlJwRHRaVmczcTlucWcyMitsMDhPalJvNHl0eXB5L0NDRmk2MlZTSWhSQ3VJN2p0QUhNVFd0VlVlenU3dUxVcVZOU2JWR3pzN080Y09FQ1BNOVRiYSs3VXRKb05QRCsrKzlqZG5aVzZ2aXRyUzFWdTJMR0dYRE8zNU01VUVxRUFPQTR6bjhBV0o3VW9qSWdoTUQ4L0x4MDNCZnRmYURCRTdrd1ZsWlc4THZmL1U3Ni'+
			'tGNnZwM29pSnVLV0VHSmI1c0FrSW5RQi9BK0FOeVkwcWhTNHJwdElpT2ZPbllObFdYajgrREZldkhpUnNYWDZZQmdHL3ZqSFB5WmFkckxYNjBtM0haYWNQUUIvRUVMOFMrWmdhUkVLSWY3bE9NNXBLTzROZ2VSQ1hGaFl3SVVMRnlDRW9JU05CSlpsNGNhTkd6aDM3cHowT1JvSkVBQSs1NXovbit6QjBpSUU5UEdHUUhJaEdvYUJTNWN1NGVEZ0FFK2VQTW5ZT25WcE5wdUptK00xRTJBaUx3Z2tGS0ZPM2hCSUxrUUFXRnhjaE9NNEVFTGc0T0FnUSt2VXdqUk5mUERCQjFLbG9IRTBFeUNRMEFzQ0NVVUk2T1VOZ1VDSXNsblRpR2c5ek4vODVqZXF0MU9sQW1NTXJWWUxDd3ZKU3NsYlcxdTZKR0VpRW50QllB'+
			'SVJodDd3R1JTdUd4NUdDQ0ZkUjR5WW5aMkZiZHVvMSt0NCt2U3A2a1hsaWJCdEc2dXJxN2h3NFlKMCtTR2kwK25vVUlZNHpDcm4vTWVrSjUyYTlMY3h4cDRBcUUxNmZobEoydEV4amhBQ25VNm5FbUkwVFJQdGRudWl0VnlqVmpUWm5sNkZHSERPMzV6a3hNU2VNTUp4bkQ2QTlxVG5sNUg5L1gzODhNTVBXRnhjeEprelp4S2RhNW9tbXMwbTV1Zm5NUndPdFl3WFRkUEU3My8vZTdUYjdZbFdyUnNPaC9qc3M4OTBmVkQ5VmdneG1PVEVpVDBoQURERzdrT1RKTTFoVmxaV3Bsb1FxdGZyNGNHREIxckVqTFp0NCtMRmkxTzlkOW50ZG5XTC84Ylo1cHhmbnZUa2FVVllBNkJ0dmo2S2VhWlppMlk0SEtMYjdTcT'+
			'NjMUMwNVhpejJaenF6WkxvQldzZEhrWW44T2JocGUyVE1KVUlBWUF4ZGhQQUo5TmVwNndZaG9GV3F6WDFTNy9SVm02dTY1WjZiL1Y2dlk1NnZTNjFSM3djcnV0S0x6V2lNSjl5em05T2M0R3BSUWpvbWFRNWpHM2JFOGRDaDRrRXViT3pVN2lIakR5ZTR6aXBDQThJbGlYc2REcTZlejlnaW1UTU9HbUpjQm5BL1RTdVZXWU13MEN6MmNUVnExZFR2ZTV3T0lRUVl2U1paZUxDTk0zUkh2QXllOEVuSlhvRFFuUHZGM0g1cUdYdGs1S0tDQUdBTWZZRmdJL1N1bDZaTVUwVGpMRk1GNGlLeE9oNUhwNC9mejRTNXU3dTdvazN1R0VZT0h2MjdNak8rZmw1bUtZNUVsOVc5SG85Y001MXpYd2V4WmVjODQvVHVGQ2FJ'+
			'cHdEOEJNMG41YU9ZOXMyR0dPVjN2dFFDQUhPZVJXbW51TU1BTHdWdDNhTUxLbUpFS2pPdFBRdzBmNFdWVnF4VGFjU3pBU2tNZzJOU0ZXRVFMV21wWWVKcHFscEpUaktScFJRcXRpMDh6Q3BUVU1qVWhjaEFEREdmZ0pRSGJkd2lMUnFiR1ZCMVZwbkJyaWM4N2ZTdnVpdjA3NWd5SHNJcHFYS3Jra3pEYjd2bzlmcm9kZnJqZHJaNnZXNlVodVVlcDRIMTNXbGQ3cXFBSHNBZnB2RmhUUHhoQURBR0dzRHVKUFY5VlhFTk0xUk1ieU15WnhvTXgzWGRVbDRyL01lNTd5VHhZVXpFeUZRN2ZoUUJ0dTI0VGdPYk52RzJiTm5jNDBqZmQvSDd1NHVoQkRZMmRtcGFvSkZsdFRqd0hFeUZTRkE4V0VTb25xZTR6ZzRmZm'+
			'8wTE1zYWZVNUs5RVpIOUxtenN6T3FQeEpTWkJJSGpwTlZURGpPWlFSTjNwV01ENU1RaWVNNHJ4U0pWUFk2eE5Uc0liaC9NeVZ6VHdnQWpMRTZLcHlvSVpSa0QwRTlNUE51KzRsZjZrMkNFT0twYmt0aUVOcXptblRCcGtuSlJZVEFhQ245bndHOGs5ZnZKSWdKK1poei9yOTUvYkxjUkFnQVFvZ2ZIY2VwZ1JJMVJIbnB5T3lrbENhNWloQUFoQkRma1JDSmt0S1IzY1FsVFhKSnpCd0ZsUzZJa3BGNUtlSTRaSGJxellyTEFNcTd6Z05SSlZ6a1VJbzRqc0k4SVRCNkIvRSt5Q01TeGVFaUtFV2s4bTdnSkJRcVFvQ0VTQlJLNFFJRVNpQkNnSVJJRkVJcEJBaVVSSVFBQ1pISWxkSUlFQ2lSQ0NNWVkzZWcyZkw2'+
			'Uktrb3BBeHhFcm5YQ2VPZ09pS1JJYVVUSUZCQ0VRSWpJVktMRzVFbUgrZmRDU05MS1VVSWpGcmMvb2xnd3hrdE5pUWxDbUVQUVROMmJyMmdTU2xkVEhnWWVnMkttSUxjWGtlYWh0S0xFS0RNS1RFUnBjcUFub1FTSW95Z05Xc0lTVEpkRXladFNoc1RIb1VRNGk3RmljUUpSUEhmNTBVYmtnU2xQR0ZFR0NmZUFVMVBpWmU0QUg0N3pXYWRSYUdrQ0NOb2VrcUVLRFg5UEl6U0lnUkdtOURjUVlWMmd5SkdEQkFzeXJ0ZHNCMVRvVlJNZUJSQ2lJSGpPQnNJWXNUL0t0b2VJamUrQlBBSHp2ay9palprV3BUM2hPT1FWNndFQTJqZy9jYlJTb1FSakxHYkFENHAyZzRpZFQ3bG5OOHMyb2kwMFZLRUFNQVlxeUh3aX'+
			'N2RldrS2t3RFlDN3pjbzJJNU0wRmFFRVRSRlZab0JOSnQ2SG9YMklvd0l0MnI3QXRTRHFnSjdDTjU2NkJSdFNCNG9ueDJWSlZ3Qi9HOEFma0ZRNUtlT20vS3hCK0J6QkZuUEg0czJKaThxNHduSENSdkNQd0x3SWNnemxvRTlBTGNRRk4xTDMzQ2ROcFVVWWNTWUdGdWdtTEVJQmdBMlVGSHhSVlJhaE9PRU1lT0hvSDdVUEhBQjNLcEt6QmNIaWZBUVlUYTFCVnBzS2dzNkFEWjB6M1ltaFVSNERPRlV0WTNBTzlZS05VWnRCZ2ppdlU2VnA1d25RU0tVSUh4MTZrTUVtNXhTSWllZVBRRGZJcGh5bG5wcGlUSkFJa3dJWSt3YWdIZEJnanhNSkx6dk9PZmZGbTJNU3BBSXB5Q01IOTlGMEJwWHhZU09pNkNsN0R1'+
			'Szh5YUhSSmdTWWEvcU1vQzN3ODlhY2Raa3hnQ0I2TDRIc0sxckwyZmVrQWd6WWt5VVN3aTg1SEtCNWt6S05nSnYxd2VKTGpOSWhEa1NKbmpxQ0x6azIrRm5yVGlMUmd6Q2Y5K0hueTRsVlBLRFJGZ0NRbkhPSVJEb0hJQXplQmxqem1HNmVOTkZrRFNKdnY0NS9ONEZzRWRpSzU3L0IvRGtPQU93MHo4TEFBQUFBRWxGVGtTdVFtQ0MiIGlkPSJfSW1hZ2UxIiBoZWlnaHQ9IjIyNXB4Ii8+CiA8L2RlZnM+Cjwvc3ZnPgo=';
		me._svg_1_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1_3";
		el.ggDx=22;
		el.ggDy=-12.8205;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42.735%;';
		hs+='left : calc(50% - ((15.7233% + 0px) / 2) + 22%);';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42.735% + 0px) / 2) - 12.8205%);';
		hs+='visibility : inherit;';
		hs+='width : 15.7233%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1_3.onclick=function (e) {
			player.openNext("{node7}","$(cur)");
		}
		me._svg_1_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._svg_1_3);
		el=me._text_2_1=document.createElement('div');
		els=me._text_2_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2_1";
		el.ggDx=22;
		el.ggDy=13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 14.5299%;';
		hs+='left : calc(50% - ((22.956% + 0px) / 2) + 22%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14.5299% + 0px) / 2) + 13%);';
		hs+='visibility : inherit;';
		hs+='width : 22.956%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_2_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Sezione", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_2_1.ggUpdateText();
		el.appendChild(els);
		me._text_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._text_2_1);
		me.divSkin.appendChild(me._container_1);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=0;
		el.ggDy=35;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 14.625%;';
		hs+='left : calc(50% - ((22.7143% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14.625% + 0px) / 2) + 35%);';
		hs+='visibility : hidden;';
		hs+='width : 22.7143%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node1")) || 
				((player.getCurrentNode() == "node2")) || 
				((player.getCurrentNode() == "node4")) || 
				((player.getCurrentNode() == "node8")) || 
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_2.style.transition='';
				if (me._container_2.ggCurrentLogicStateVisible == 0) {
					me._container_2.style.visibility=(Number(me._container_2.style.opacity)>0||!me._container_2.style.opacity)?'inherit':'hidden';
					me._container_2.ggVisible=true;
				}
				else {
					me._container_2.style.visibility="hidden";
					me._container_2.ggVisible=false;
				}
			}
		}
		me._container_2.logicBlock_visible();
		me._container_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2_1=document.createElement('div');
		el.ggId="Rectangle 2_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e8e8e8;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='bottom : 25%;';
		hs+='cursor : default;';
		hs+='height : 65%;';
		hs+='left : calc(50% - ((85% + 0px) / 2) + 0%);';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 85%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._rectangle_2_1);
		el=me._svg_2_2=document.createElement('div');
		els=me._svg_2_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgd2lkdGg9IjEwMCUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDsiIHZpZXdCb3g9IjAgMCAyNzUgMjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIGhlaWdodD0iMTAwJSIgeG1sOnNwYWNlPSJwcm'+
			'VzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDI1LDI1KSIgaWQ9IkxpdmVsbG9fMSI+CiAgPHVzZSB3aWR0aD0iMjI1cHgiIHg9IjAiIHhsaW5rOmhyZWY9IiNfSW1hZ2UxIiB5PSIwIiBoZWlnaHQ9IjIyNXB4Ii8+CiA8L2c+CiA8Y2lyY2xlIHI9IjQ2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMjMwLDIzMCwyMzApO3N0cm9rZS13aWR0aDo0LjE3cHg7IiBjeD0iMTM4IiBjeT0iMTM4IiBpZD0iRWxsaXNzZV8xIi8+CiA8ZGVmcz4KICA8aW1hZ2Ugd2lkdGg9IjIy'+
			'NXB4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhDQVlBQUFBK3M5SjZBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBWlJFbEVRVlI0bk8yZFAyemNScjdIdjlhZERqRWI2NEVxVkpoNEd4ZGtvVUlid0FiZXVuQmtiNVBDZy9pdTBMMnJkZ05jZ0tjVWw4UnU3b0FENGhRcDBpaHhVdWdkWU1DcklqaEFWWUpSOFZ5c3JTQ0FONFdCY0FzYnAybThoMVZoQXlhZ3FLQXU4Qld2SUxsZXk1STQzT1cvR2Y0K2dMR1NURkkvYVBqbGIzNS9PSE1LUk9Fd3h1b0E1Z0JFbjJmQ3J6SDI4MGx4QWV5TmZmMXorTDBMWUk5ejdrNXhiU0'+
			'lGVGhWdFFKVUl4VllIVUFQd2R2aFpLODZpRVlQdzMvZmhwMHZpekE4U1lVWXd4bW9BbGdFc0lSRGVjb0htVElvTFlCdEFIOEEyNTN4UXFEV2FRaUpNaVRIUnZSMSsxb3F6SmpNR0NFVDVQVWlVcVVFaW5BTEcyREtBZHhHSWJwcTRUVlVpVC9rZDUzeTdXRlBVaFVTWUVNYllOUVRDdTRZZ2FVSUU3QUg0Rm9FZ3Z5M2FHSlVnRVVvUUpsUStCQWxQbGtpUXR5akJFdytKOEJnWVkzTUEyZ2pFVnl2VUdMVVpBTGdGb01NNTM0czV0cEtRQ0E4Unhua3RCQUlrMHFVRFlJUGl4MWNoRVlZd3h0b0FQZ0Y1dlR4d0VVeFZPMFViVWdZcUxjSnd5dmtSQXM5WEs5YWFTaklBc0FIZ3l5cFBWU3Nwd2pIeGZRaEt0SlNC'+
			'UFFSeFl5WEZXQ2tSa3ZoS1R5WEZXQmtSaGpIZkZ5RHhxY0FlZ0krckVqTnFMOEl3MjNrSEZQT3B5QURBZTdwblU3VVZZZGpMZVFkcU5rNFRyN0tOUUl5RGd1M0loSm1pRGNnQ3h0aE5BRTlBQXRTRlpRQlB3bkhWRHEwOElVMDlLOEVBbWsxUnRSQmhtUFg4QkVIbWs2Z0dYd0w0Vkljc3F2SWlKTzlYYVFiUXdDc3FIUk15eHI0QWNCOGt3S3BTQTNBL3ZBK1VSVWxQR0w1YWRBZlZmSkdXT0JvWGdWZFU3dFdwWHhWdFFGTENvdnZmUWQ2UGVKVUZBUC90T000eklZUlNRbFJLaEl5eE93QnVBbmlqWUZPSWN2SUdnR3VPNDh3SkllNFdiWXdzU2t4SHcrem5mZEQwazVESEJYQlpoZXhwNlVVWXhuLzNRVDJmUk'+
			'hMMkVBaXgxTlBUVW1kSHcvaVBCRWhNeWh5QzdHbTdhRU5Pb3JReElXUHNJd0Ryb1BpUG1JNG9UdnhaQ1BGajBjWWNSU21ubzJFQ3BsMjBIWVIyZERqbjd4VnR4R0ZLNXdsSmdFU0cxQjNIcVFraHZpdmFrSEZLNHdrcEEwcmtTS2t5cDZVUUlRbVFLSURTQ0xGd0VaSUFpUUlwaFJBTEZTRUprQ2dCaFF1eE1CR1NBSWtTVWFnUWl5eldrd0NKc2hCMVpSVkNJU0lNeXhBa1FLSk0xTVA3TW5keXJ4TlNIWkFvTVlYVUVYTVZZZGlLOXVjOGZ5ZEJKS1NlZDR0YmJpSU1tMmpYOC9wOUJERUY3emlPODgrOFhnN09KVHRLcnlNUkNwTGJhMUNaaXpBc1JUd0JDWEJxVE5PRWFacXh4M21lQjgvemNyQkllL1lBdkps'+
			'MTZlTFhXVjQ4aER5Z0pKSElITWZCNmRPbllWblc2SE5TaHNNaERnNE9ScDg3T3pza1VubWlXdlpiV2Y2U1REMWh1QlFkTGNoN0RMWnR3M0VjMkxhTnMyZlB3akNNM0g2MzcvdlkzZDJGRUFJN096c1FRdVQydXhYa1M4NzV4MWxkUERNUmhvbVlRdW91WmNVMFRkVHJkZFRyZGRpMlhiUTVyeUdFZ091NmNGMlhQT1hydkpmVlZtMlppSkFTTVM4eFRSUE5aaFAxZWwwcW5pc0xudWZCZFYxMHUxMFNaRUJtaVpxc1JQZ1RLdHdSWXhnR2xwYVcwR3cycDRybnlzSndPRVMzMjBXLzM0ZnYrMFdiVXlRdTV6ejErREIxRVZZNURqUk5FNHd4TEMwdDVScmY1WVh2KytqMysrQ2NWOWs3cGg0ZnBpckNjSE9Xd2hwaG'+
			'k4SzI3ZEdVc3lwRVU5V0tKblF1cDdrSlRXb2lET3VCUDZGQ3k5UGJ0ZzNHV0NtVExIa2hoQURudkdwaUhBQjRLNjM2WVpwMXdrOVFFUUZHMDg1R281SFo3eEJDak9wNXo1OC9IMDMvWkc3MjZLRmdtaWJtNStkSDljY3NIaGEyYmVQR2pSdm85WHBWbXFiV0VOenZxVXhMVS9HRVZabUdHb2FCWnJPSnExZXZwbnJkNFhBSUljVG9NOHNiT1JLalpWbWp6elRaMnRwQ3Q5dXRTZ0lubFdscFdpSjhBczI5b0czYmFMZmJxWlFab2dUSHpzNU80Um5IS0pQck9FNXFDU1hQODlEcGRLb3dSUjF3enQrYzlpSlRpNUF4ZGhPQmE5WVN3ekRRYXJXbVRycEV3b3VLNFdVbGFpWklRNUN1NjJKalkwTjNyL2dwNS96bU5C'+
			'ZVlTb1NNc1JxQzVtd3RzVzBicTZ1clU5Mk1xdGJZMHFwMStyNlA5ZlYxM2IzaW01enp3YVFuVHl2Qyt3Q1dwN2xHV1ZsWldVR3oyWno0L0Y2dmh3Y1BIbWh4ODltMmpZc1hMMDZWaU9wMnU5amMzRXpScWxLeHpUbS9QT25KRTR0UTEyU01hWnBZWFYyZCtPbXZjNVp3MnF6d2NEakUydHFhVWpPQ0JFeWNwSmxHaE5vbFl5ekx3dlhyMXllYWZycXVpODNOVFMzRmR4alROTkZ1dHljcWVmaStqN1cxTlF5SHd3d3NLNVNKa3pRVExXOFJ2aUhSbnVUY3N0Sm9OUENuUC8wSnM3T3ppYzRiRG9lNGZmczI3dDY5aTRPRGc0eXNLeGNIQndmbzlYb1FRc0N5TEp3NWMwYjYzTm5aV1Z5NmRBbWU1MkYzZHpkREszTm'+
			'5idElsTVJKN1FoM2ZsR2VNSmE3OStiNlBlL2Z1Z1hPZWtWWHF3QmpEbFN0WEVzOGd0cmEyZFB2N1RmUW1mbUpQNkRqT253RzhrL1M4c3RKdXR4TW5ZSVFRK09xcnIwcGRhc2dUSVFRZVBud0l5N0lTMVZGdDI4YjgvTHhPZjhjM0FQd2loTmhPY2xJaUVZWmU4Ty9RWlBmY2RydWRPTW13dWJtSmI3NzVwakpUVDFtaUtlckJ3UUVXRnhlbHo3TXNTemNoMWgzSCtac1E0bCt5SnlRU29VNWVNS2tBUGMvRDJ0cWFUamRMSmp4NThnVDlmaCtMaTR2UzAxUE5oSmpZRzBxTFVDY3ZtRlNBcnV2aTY2Ky9ya1RtTXczMjkvZlI2L1d3c0xDQWhZVUZxWE0wRTJJaWJ5Z3RRbDI4WUZJQmRydGRiR3hzNE1XTEZ4bGFw'+
			'Ujh2WHJ6QXc0Y1BZUmdHenAwN0ozV09Sa0pNNUEyVGlQQU9GTStJTXNZU0pXRTZuUTd1M3IyYm9VWDY4K2pSSTNpZUo5MTdhMWtXVHAwNnBVT25VVTBJY1V2bVFDa1I2bEFYYkRRYVdGbFprVHJXOTMzY3ZuMGJEeDgrek5pcWFyQzd1NHZkM1Ywc0xpNUsxV0Z0MjlhaGppaGRONVRkR3UzREtRMHFGTXV5MEc2M3BZNk5Pam8wbUJLVkN0ZDFFN1dzdGR0dEhSYkprdEpOckNjTWUwU1YzVW5KTUF6ODlhOS9sWG9DYTl4U1ZRcjI5L2Z4K1BGam5EOS9YbW84enA4L2p4OSsrRUhsZUh6QmNaenZoUkNEa3c2UzhZU3RkT3dwQnRsZVVCSmdQaVJwNGpZTUE5ZXZYOC9CcWt5SjFjK0puakI4WDdDVGtqRzVzN0'+
			't5SXAwUXVIMzd0ZzdKQUNYWTM5L0hzMmZQY09IQ2hkaGp6NXc1QThNdzhPalJveHdzeTRTNjR6aTNUaXBYeEhuQ2F5a2JsQnZSTW9ReWREb2RpZ0Z6eG5WZGREb2RxV09iemFicUs5cTFUL3JQT0JFcW1aQXhEQU9ycTZ0U3gzYTdYZlI2dll3dElvNmkxK3VoMisxS0hUdnRDZ2NGYzZLT2poVmh1SjlFTFcxcjhxRFZha2tOV1BRT0lGRWNtNXViVXJPUWFLMGZSYW1GZWpxU2t6eWhrbDdRdG0ycE9ORHpQR3hzYk9SZ0VSSEh4c2FHVkV0Z1dYZXprdVJZUFowa1F1WGlRY013cE91QjYrdnJ1aTZ6b0J6UllsQXl0TnR0VmFlbHgrcnB5T3dvWSt3YUZPeVFlZWVkZDZTOG9Pd1VpTWlQL2YxOXFkZWdETVBB'+
			'di8vOWJ4VXoyVzg0anRNWFF2emo4SDhjNXduZnpkaWcxREZOVStydGVDR0VkREtBeUJmWkRXYXVYcjJxMUY2UFl4eXBxK05FcU54VWxERVdlNHp2KzlKcGNhSVlPcDJPVkpnZ005NGw1RWhkdlNiQ3NFMU5xYmNsYk51V2VqM3AzcjE3OUU1Z3lmRThEL2Z1M1lzOXJ0Rm9xSmlrbVF2MTlRcEhlVUxscHFJeVQ4WGhjS2pib2tMYXdqbVhhaDlVMUJ1K3BxK2pSTGljdlIzcFlkdTIxQk9SNm9GcUlUTmVzbU5mTXBZUC8rQVZFWWE5b2twdE55dlRtaWFFVURHYlZtbGt4K3ppeFlzNVdKTXE5VkJuSXc1N3d1WGNURWtCMHpTbFNoS1VqRkVUbVhGck5Cb3Faa3FYeDc4NUxNSzM4N05qZW1SaWdsNnZSOGtZUm'+
			'ZFOFQ2cXZWOEhZOEJXZEtlc0pvNjI3NHFCa2pOcklqRjlhbTV2bXlQTDROeU1SaHZQVVdyNjJUSTdNSDU2OG9QckllRVBaQjNLSnFJM0hoZU9lY0RsM1U2WkFKaUh6NE1HREhDd2hza1ptSEtmWlM3SWdscU12eGtXb3pLUEVOTTNZUllDR3d5RmxSRFZCQ0JGYk4weTZEMFlKR09sTlNVOG84OVNqL2xDOWtCbFB4YnpoS0swL2M5UVB5MDVjV2NMM2ZmVDcvWnlzSWZLZzMrL0g5cFRLcmlkVUVwYWpMMmFBMFZ2MFNtQ2FadXkwUTJiQUNMV1FlYkRLM0J0bEl0SmQ1QW1WRWFITTA0N2VGZFFUbVhGVnpCdStJc0phY1hZa1EyWXFTaUxVRTlkMWRadVMxb0NYSWxTbVV5YXVZWmRpUWIySkcxL0ZHcnJmQmhU'+
			'emhESi80SjJkblJ3c0lZcENabndWRW1JTlVFeUVqdVBFSGtPZVVHOWt4bGZtUGlrSk5RQ1lVU2t6R3ZlRUd3NkhsQlhWSE4vM1l3djNDbmxDTU1icU0xQm9LWXV6WjgrZStQL1VJVk1ONHNZNTdqNHBHWE16VUtROFlacG1iTU0yN2FoVURlTEcyVEFNbGVxRjZuaENtVDhxZWNKcUlEUE9Db2x3YmdiQWZ4WnRoUXd5d1RhOXRsUU5aTVpab2VUTW1Sa29raGs5ZmZyMGlmOVBYckJheEkxMzNQMVNJdXF5ZTlZWFR0eXJTK1FGcTBYY2VLdTAzNzB5TVdIY2s0MUVXQzNpeGxzaFQ2aE9kalR1eWZiOCtmT2NMQ0hLUU54NEsrUUoxWm1PeGtHZXNGcm9OTjVLaUZDaGRETlJJbFM1YjdRUklXVkhxOFh1N203c0'+
			'1TUkNnc2dRblhxRVNZUUVVVEFrUW9Jb0dCSWhRUlFNaVpBZ0NvWkVTQkFGUXlJa2lJSWhFUkpLb3RoV2FDZWloQWhsV3BSVVdsZUVtQjZaSlN4VWFXM1RSb1FFY1JoVjdoc2xSQ2lES2kxS1JEcm9OTjR6QUpSWU16NXVjWi81K2ZtY0xDSEtRTng0SzdUb2x6c0RZSzlvSzJRNE9EZzQ4ZjkxZWpJUzhjU05kOXo5VWlMMmxKbU94czN2U1lUVkltNjhGZktFNmt4SDQwUkkyZEZxRVRmZUNubENkd2JBejBWYklZUE1SaURrRGF1QnpOSVZDbTBNOUxNeU1TSFZDb2tJbldxRUNHTkNaYWFqY1M5eUtyUzREekVGY2VQcys3NUtJbFFuT3dyRUwybEFuckFheEkyenpOSVhKV0p2aG5PdWhDY0U0dGVSc1N4THE1'+
			'NUM0blVNdzRqMWhDcXROOFE1ZDZNU3hhQklRMlNSQ2JhWGxwWnlzSVFvQ3BueFZTZ3BNd0JldHEwTkNqTWpBVEpQT0lVMkFpRW1RR1o4RmZLRUErQ2xDTDh2em81a3hQMkJ5UlBxVGR6NEtpUkFJTlNkVXA0UUFGejM1QkRXTUF6VTYwcXM3RThrcEY2dng4YjhjZmRIeVJnQUwwV29qT1V5ZjJRU29aN0lqS3RpSW5TQlVJUXFaVWc5ejR1dEFTMHRMVkdXVkRNTXc0aWRpc3JjRzJVaTB0MTRBN2N5UXBTWmtsSnNxQmN5RDFiRnZPQjI5TVhNVVQ4c085MXVOL2FZWnJPWmd5VkVYc2lNcDh4OVVTSkdUNHh4RWZZTE1HUWlQTStMZlZYRnNpenFvTkVFMjdaakMvVEQ0VkNwcVNqRzlLYWtKd1Rrbm5vWEwxN0'+
			'13UklpYTJUR1VURXZDQncxSGVXY0Q2QlFxYUxmNzhjMmREY2FEWHE5U1hGTTAwU2owVGp4R04vMzBlOHJNNUVEZ0VHb053Q3ZML1MwbmFzcFV5RDdoMmVNNVdBTmtSVXk0eWZ6UUM0WjIrUGZIQmFoTXAwekFNQTVqejJHdktHNnlIaEJRTzQrS0JtdjZFeFpUd2dFQ1JxWnRIUzczYzdlR0NKMVpNYXQxK3VwbHBBQlR2S0U0VHhWcVdLTFRFQnUyelpsU2hWRGRzd2VQSGlRZ3pXcDRvN0hnOERSaS85dTUySktTZ2docEpwMlYxWldjckNHU0F1WjhaSWQrNUt4ZmZnSFI0bnd1K3p0U0JlWm1NQ3lMRXJTS0FKalRHcXBFZ1ZqUWVBSWZiMG1Rczc1TmhSYThnSUlub2k5WGkvMnVDdFhybENTcHVTWXBva3JW'+
			'NjdFSHRmcjlWVDBnbnVodmw3aHVNVi92ODNXbHZTUmVTb2Foa0ZKbXBMVGJyZWxtdThWOVlKSDZ1bzRFU28zSmZVOEQxdGJXN0hIMmJaTmZhVWxwZGxzU2lWanRyYTJWTXlJQXNmbzZrZ1JjczYvaFdKVFVpRElsTW9NenNyS0NpMlBXRElzeTVKS3huaWVwMktMR2hCTVJSTjVRa0RCS2FudisraDBPbExIcnE2dTBqdUhKY0V3REt5dXJrb2QyK2wwVk91T2lUaFdUeWVKOEZZR2htU09FRUtxZ0crYUpscXRWZzRXRVhHMFdpMnBoSm5ydWlvbVl5S08xZE94SWd6ZitoMWtZVTNXYkd4c1NEMHQ2L1U2MVE4TFptVmxSV3JaQ3QvM3NiR3hrWU5GbVRBNGFmV0t1SzNSbFBTR3Z1OWpmWDFkNnRobXN5blZuMG'+
			'lrVDZQUmtFNlNyYSt2cXpvTkJXSjBGQ2ZDVG5wMjVJc1FRanFBYjdmYnREaFV6dFRyZGVseVViZmJWWGthQ3NUbzZFUVJjczczNGk1UVpqWTNONlUzaTJ5MVdwUXh6UW5Mc3FUajhlRndpTTNOell3dHlwUk9xS05qa2RtcFY5bUpPQUNzcmExSlRXTU13OEQxNjlkSmlCbGpXUmF1WDc4dWxabjJmUjlyYTJzNVdKVXBzZnI1VmR3QlFvaUI0empYQUN5a1lsTE92SGp4QW84ZlA4YWxTNWRpajUyZG5jWDU4K2Z4K1BGajdPL3Y1MkJkdFVnaVFBRDQvUFBQVlMzS1I3aWM4Ny9FSFJRclFnQndIT2NYQU5lbU5xa2c5dmYzNFhtZVZOd1hDZkhaczJkNCt2UnBEdFpWZzNxOW5xZzIyK2wwOE9qUm80eXR5cHkv'+
			'Q0NGaTYyVlNJaFJDdUk3anRBSE1UV3RWVWV6dTd1TFVxVk5TYlZHenM3TzRjT0VDUE05VGJhKzdVdEpvTlBEKysrOWpkblpXNnZpdHJTMVZ1MkxHR1hETzM1TTVVRXFFQU9BNHpuOEFXSjdVb2pJZ2hNRDgvTHgwM0JmdGZhREJFN2t3VmxaVzhMdmYvVTc2K0Y2dnAzb2lKdUtXRUdKYjVzQWtJblFCL0ErQU55WTBxaFM0cnB0SWlPZk9uWU5sV1hqOCtERmV2SGlSc1hYNllCZ0cvdmpIUHlaYWRyTFg2MG0zSFphY1BRQi9FRUw4UytaZ2FSRUtJZjdsT001cEtPNE5nZVJDWEZoWXdJVUxGeUNFb0lTTkJKWmw0Y2FOR3poMzdwejBPUm9KRUFBKzU1ei9uK3pCMGlJRTlQR0dRSEloR29hQlM1Y3U0ZURnQU'+
			'UrZVBNbllPblZwTnB1Sm0rTTFFMkFpTHdna0ZLRk8zaEJJTGtRQVdGeGNoT000RUVMZzRPQWdRK3ZVd2pSTmZQREJCMUtsb0hFMEV5Q1EwQXNDQ1VVSTZPVU5nVUNJc2xuVGlHZzl6Ti84NWplcXQxT2xBbU1NclZZTEN3dkpTc2xiVzF1NkpHRWlFbnRCWUFJUmh0N3dHUlN1R3g1R0NDRmRSNHlZbloyRmJkdW8xK3Q0K3ZTcDZrWGxpYkJ0RzZ1cnE3aHc0WUowK1NHaTArbm9VSVk0ekNybi9NZWtKNTJhOUxjeHhwNEFxRTE2ZmhsSjJ0RXhqaEFDblU2bkVtSTBUUlB0ZG51aXRWeWpWalRabmw2RkdIRE8zNXpreE1TZU1NSnhuRDZBOXFUbmw1SDkvWDM4OE1NUFdGeGN4Smt6WnhLZGE1b21tczBtNXVm'+
			'bk1Sd090WXdYVGRQRTczLy9lN1RiN1lsV3JSc09oL2pzczg5MGZWRDlWZ2d4bU9URWlUMGhBRERHN2tPVEpNMWhWbFpXcGxvUXF0ZnI0Y0dEQjFyRWpMWnQ0K0xGaTFPOWQ5bnRkbldMLzhiWjVweGZudlRrYVVWWUE2QnR2ajZLZWFaWmkyWTRIS0xiN1NxM2MxQzA1WGl6Mlp6cXpaTG9CV3NkSGtZbjhPYmhwZTJUTUpVSUFZQXhkaFBBSjlOZXA2d1lob0ZXcXpYMVM3L1JWbTZ1NjVaNmIvVjZ2WTU2dlM2MVIzd2NydXRLTHpXaU1KOXl6bTlPYzRHcFJRam9tYVE1akczYkU4ZENoNGtFdWJPelU3aUhqRHllNHppcENBOElsaVhzZERxNmV6OWdpbVRNT0dtSmNCbkEvVFN1VldZTXcwQ3oyY1RWcTFkVH'+
			'ZlNXdPSVFRWXZTWlplTENOTTNSSHZBeWU4RW5KWG9EUW5QdkYzSDVxR1h0azVLS0NBR0FNZllGZ0kvU3VsNlpNVTBUakxGTUY0aUt4T2g1SHA0L2Z6NFM1dTd1N29rM3VHRVlPSHYyN01qTytmbDVtS1k1RWw5VzlIbzljTTUxelh3ZXhaZWM4NC9UdUZDYUlwd0Q4Qk0wbjVhT1k5czJHR09WM3Z0UUNBSE9lUldtbnVNTUFMd1Z0M2FNTEttSkVLak90UFF3MGY0V1ZWcXhUYWNTekFTa01nMk5TRldFUUxXbXBZZUpwcWxwSlRqS1JwUlFxdGkwOHpDcFRVTWpVaGNoQURER2ZnSlFIYmR3aUxScWJHVkIxVnBuQnJpYzg3ZlN2dWl2MDc1Z3lIc0lwcVhLcmtrekRiN3ZvOWZyb2Rmcmpkclo2dlc2VWh1VWVw'+
			'NEgxM1dsZDdxcUFIc0FmcHZGaFRQeGhBREFHR3NEdUpQVjlWWEVOTTFSTWJ5TXlaeG9NeDNYZFVsNHIvTWU1N3lUeFlVekV5RlE3ZmhRQnR1MjRUZ09iTnZHMmJObmM0MGpmZC9IN3U0dWhCRFkyZG1wYW9KRmx0VGp3SEV5RlNGQThXRVNvbnFlNHpnNGZmbzBMTXNhZlU1SzlFWkg5TG16c3pPcVB4SlNaQklIanBOVlREak9aUVJOM3BXTUQ1TVFpZU00cnhTSlZQWTZ4TlRzSWJoL015VnpUd2dBakxFNktweW9JWlJrRDBFOU1QTnUrNGxmNmsyQ0VPS3Bia3RpRU5xem1uVEJwa25KUllUQWFDbjlud0c4azlmdkpJZ0orWmh6L3I5NS9iTGNSQWdBUW9nZkhjZXBnUkkxUkhucHlPeWtsQ2E1aWhBQWhCRG'+
			'ZrUkNKa3RLUjNjUWxUWEpKekJ3RmxTNklrcEY1S2VJNFpIYnF6WXJMQU1xN3pnTlJKVnprVUlvNGpzSThJVEI2Qi9FK3lDTVN4ZUVpS0VXazhtN2dKQlFxUW9DRVNCUks0UUlFU2lCQ2dJUklGRUlwQkFpVVJJUUFDWkhJbGRJSUVDaVJDQ01ZWTNlZzJmTDZSS2tvcEF4eEVyblhDZU9nT2lLUklhVVRJRkJDRVFJaklWS0xHNUVtSCtmZENTTkxLVVVJakZyYy9vbGd3eGt0TmlRbENtRVBRVE4yYnIyZ1NTbGRUSGdZZWcyS21JTGNYa2VhaHRLTEVLRE1LVEVScGNxQW5vUVNJb3lnTldzSVNUSmRFeVp0U2hzVEhvVVE0aTdGaWNRSlJQSGY1MFVia2dTbFBHRkVHQ2ZlQVUxUGlaZTRBSDQ3eldhZFJhR2tD'+
			'Q05vZWtxRUtEWDlQSXpTSWdSR205RGNRWVYyZ3lKR0RCQXN5cnRkc0IxVG9WUk1lQlJDaUlIak9Cc0lZc1QvS3RvZUlqZStCUEFIenZrL2lqWmtXcFQzaE9PUVY2d0VBMmpnL2NiUlNvUVJqTEdiQUQ0cDJnNGlkVDdsbk44czJvaTAwVktFQU1BWXF5SHdpc3ZGV2tLa3dEWUM3emNvMkk1TTBGYUVFVFJGVlpvQk5KdDZIb1gySW93SXQycjdBdFNEcWdKN0NONTY2QlJ0U0I0b254MlZKVndCL0c4QWZrRlE1S2VPbS9LeEIrQnpCRm5QSDRzMkppOHE0d25IQ1J2Q1B3THdJY2d6bG9FOUFMY1FGTjFMMzNDZE5wVVVZY1NZR0Z1Z21MRUlCZ0EyVUZIeFJWUmFoT09FTWVPSG9IN1VQSEFCM0twS3pCY0hpZk'+
			'FRWVRhMUJWcHNLZ3M2QURaMHozWW1oVVI0RE9GVXRZM0FPOVlLTlVadEJnaml2VTZWcDV3blFTS1VJSHgxNmtNRW01eFNJaWVlUFFEZklwaHlsbnBwaVRKQUlrd0lZK3dhZ0hkQmdqeE1KTHp2T09mZkZtMk1TcEFJcHlDTUg5OUYwQnBYeFlTT2k2Q2w3RHVLOHlhSFJKZ1NZYS9xTW9DM3c4OWFjZFpreGdDQjZMNEhzSzFyTDJmZWtBZ3pZa3lVU3dpODVIS0I1a3pLTmdKdjF3ZUpMak5JaERrU0puanFDTHprMitGbnJUaUxSZ3pDZjkrSG55NGxWUEtEUkZnQ1FuSE9JUkRvSElBemVCbGp6bUc2ZU5ORmtEU0p2djQ1L040RnNFZGlLNTcvQi9Ea09BT3cwejhMQUFBQUFFbEZUa1N1UW1DQyIgaWQ9Il9J'+
			'bWFnZTEiIGhlaWdodD0iMjI1cHgiLz4KIDwvZGVmcz4KPC9zdmc+Cg==';
		me._svg_2_2__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_2";
		el.ggDx=0;
		el.ggDy=-12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42.735%;';
		hs+='left : calc(50% - ((15.7233% + 0px) / 2) + 0%);';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42.735% + 0px) / 2) - 12%);';
		hs+='visibility : inherit;';
		hs+='width : 15.7233%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_2.onclick=function (e) {
			player.openNext("{node2}","$(cur)");
		}
		me._svg_2_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._svg_2_2);
		el=me._svg_2_1=document.createElement('div');
		els=me._svg_2_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgd2lkdGg9IjEwMCUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiIHZpZXdCb3g9IjAgMCAyNzUgMjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNlcmlmPSJodHRwOi8vd3'+
			'd3LnNlcmlmLmNvbS8iIGhlaWdodD0iMTAwJSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDI1LDI1KSIgaWQ9IkxpdmVsbG9fMSI+CiAgPHVzZSB3aWR0aD0iMjI1cHgiIHg9IjAiIHhsaW5rOmhyZWY9IiNfSW1hZ2UxIiB5PSIwIiBoZWlnaHQ9IjIyNXB4Ii8+CiA8L2c+CiA8ZGVmcz4KICA8aW1hZ2Ugd2lkdGg9IjIyNXB4IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU9FQUFBRGhD'+
			'QVlBQUFBK3M5SjZBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBWlJFbEVRVlI0bk8yZFAyemNScjdIdjlhZERqRWI2NEVxVkpoNEd4ZGtvVUlid0FiZXVuQmtiNVBDZy9pdTBMMnJkZ05jZ0tjVWw4UnU3b0FENGhRcDBpaHhVdWdkWU1DcklqaEFWWUpSOFZ5c3JTQ0FONFdCY0FzYnAybThoMVZoQXlhZ3FLQXU4Qld2SUxsZXk1STQzT1cvR2Y0K2dMR1NURkkvYVBqbGIzNS9PSE1LUk9Fd3h1b0E1Z0JFbjJmQ3J6SDI4MGx4QWV5TmZmMXorTDBMWUk5ejdrNXhiU0lGVGhWdFFKVUl4VllIVUFQd2R2aFpLODZpRVlQdzMvZmhwMHZpekE4U1lVWXd4bW9BbGdFc0lSRGVjb0htVElvTFlCdEFIOE'+
			'EyNTN4UXFEV2FRaUpNaVRIUnZSMSsxb3F6SmpNR0NFVDVQVWlVcVVFaW5BTEcyREtBZHhHSWJwcTRUVlVpVC9rZDUzeTdXRlBVaFVTWUVNYllOUVRDdTRZZ2FVSUU3QUg0Rm9FZ3Z5M2FHSlVnRVVvUUpsUStCQWxQbGtpUXR5akJFdytKOEJnWVkzTUEyZ2pFVnl2VUdMVVpBTGdGb01NNTM0czV0cEtRQ0E4Unhua3RCQUlrMHFVRFlJUGl4MWNoRVlZd3h0b0FQZ0Y1dlR4d0VVeFZPMFViVWdZcUxjSnd5dmtSQXM5WEs5YWFTaklBc0FIZ3l5cFBWU3Nwd2pIeGZRaEt0SlNCUFFSeFl5WEZXQ2tSa3ZoS1R5WEZXQmtSaGpIZkZ5RHhxY0FlZ0krckVqTnFMOEl3MjNrSEZQT3B5QURBZTdwblU3VVZZZGpM'+
			'ZVFkcU5rNFRyN0tOUUl5RGd1M0loSm1pRGNnQ3h0aE5BRTlBQXRTRlpRQlB3bkhWRHEwOElVMDlLOEVBbWsxUnRSQmhtUFg4QkVIbWs2Z0dYd0w0Vkljc3F2SWlKTzlYYVFiUXdDc3FIUk15eHI0QWNCOGt3S3BTQTNBL3ZBK1VSVWxQR0w1YWRBZlZmSkdXT0JvWGdWZFU3dFdwWHhWdFFGTENvdnZmUWQ2UGVKVUZBUC90T000eklZUlNRbFJLaEl5eE93QnVBbmlqWUZPSWN2SUdnR3VPNDh3SkllNFdiWXdzU2t4SHcrem5mZEQwazVESEJYQlpoZXhwNlVVWXhuLzNRVDJmUkhMMkVBaXgxTlBUVW1kSHcvaVBCRWhNeWh5QzdHbTdhRU5Pb3JReElXUHNJd0Ryb1BpUG1JNG9UdnhaQ1BGajBjWWNSU21ubz'+
			'JFQ3BsMjBIWVIyZERqbjd4VnR4R0ZLNXdsSmdFU0cxQjNIcVFraHZpdmFrSEZLNHdrcEEwcmtTS2t5cDZVUUlRbVFLSURTQ0xGd0VaSUFpUUlwaFJBTEZTRUprQ2dCaFF1eE1CR1NBSWtTVWFnUWl5eldrd0NKc2hCMVpSVkNJU0lNeXhBa1FLSk0xTVA3TW5keXJ4TlNIWkFvTVlYVUVYTVZZZGlLOXVjOGZ5ZEJKS1NlZDR0YmJpSU1tMmpYOC9wOUJERUY3emlPODgrOFhnN09KVHRLcnlNUkNwTGJhMUNaaXpBc1JUd0JDWEJxVE5PRWFacXh4M21lQjgvemNyQkllL1lBdkpsMTZlTFhXVjQ4aER5Z0pKSElITWZCNmRPbllWblc2SE5TaHNNaERnNE9ScDg3T3pza1VubWlXdlpiV2Y2U1REMWh1QlFkTGNo'+
			'N0RMWnR3M0VjMkxhTnMyZlB3akNNM0g2MzcvdlkzZDJGRUFJN096c1FRdVQydXhYa1M4NzV4MWxkUERNUmhvbVlRdW91WmNVMFRkVHJkZFRyZGRpMlhiUTVyeUdFZ091NmNGMlhQT1hydkpmVlZtMlppSkFTTVM4eFRSUE5aaFAxZWwwcW5pc0xudWZCZFYxMHUxMFNaRUJtaVpxc1JQZ1RLdHdSWXhnR2xwYVcwR3cycDRybnlzSndPRVMzMjBXLzM0ZnYrMFdiVXlRdTV6ejErREIxRVZZNURqUk5FNHd4TEMwdDVScmY1WVh2KytqMysrQ2NWOWs3cGg0ZnBpckNjSE9Xd2hwaGk4SzI3ZEdVc3lwRVU5V0tKblF1cDdrSlRXb2lET3VCUDZGQ3k5UGJ0ZzNHV0NtVExIa2hoQURudkdwaUhBQjRLNjM2WVpwMX'+
			'drOVFFUUZHMDg1R281SFo3eEJDak9wNXo1OC9IMDMvWkc3MjZLRmdtaWJtNStkSDljY3NIaGEyYmVQR2pSdm85WHBWbXFiV0VOenZxVXhMVS9HRVZabUdHb2FCWnJPSnExZXZwbnJkNFhBSUljVG9NOHNiT1JLalpWbWp6elRaMnRwQ3Q5dXRTZ0lubFdscFdpSjhBczI5b0czYmFMZmJxWlFab2dUSHpzNU80Um5IS0pQck9FNXFDU1hQODlEcGRLb3dSUjF3enQrYzlpSlRpNUF4ZGhPQmE5WVN3ekRRYXJXbVRycEV3b3VLNFdVbGFpWklRNUN1NjJKalkwTjNyL2dwNS96bU5CZVlTb1NNc1JxQzVtd3RzVzBicTZ1clU5Mk1xdGJZMHFwMStyNlA5ZlYxM2IzaW01enp3YVFuVHl2Qyt3Q1dwN2xHV1ZsWldV'+
			'R3oyWno0L0Y2dmh3Y1BIbWh4ODltMmpZc1hMMDZWaU9wMnU5amMzRXpScWxLeHpUbS9QT25KRTR0UTEyU01hWnBZWFYyZCtPbXZjNVp3MnF6d2NEakUydHFhVWpPQ0JFeWNwSmxHaE5vbFl5ekx3dlhyMXllYWZycXVpODNOVFMzRmR4alROTkZ1dHljcWVmaStqN1cxTlF5SHd3d3NLNVNKa3pRVExXOFJ2aUhSbnVUY3N0Sm9OUENuUC8wSnM3T3ppYzRiRG9lNGZmczI3dDY5aTRPRGc0eXNLeGNIQndmbzlYb1FRc0N5TEp3NWMwYjYzTm5aV1Z5NmRBbWU1MkYzZHpkREszTm5idElsTVJKN1FoM2ZsR2VNSmE3OStiNlBlL2Z1Z1hPZWtWWHF3QmpEbFN0WEVzOGd0cmEyZFB2N1RmUW1mbUpQNkRqT253Rz'+
			'hrL1M4c3RKdXR4TW5ZSVFRK09xcnIwcGRhc2dUSVFRZVBud0l5N0lTMVZGdDI4YjgvTHhPZjhjM0FQd2loTmhPY2xJaUVZWmU4Ty9RWlBmY2RydWRPTW13dWJtSmI3NzVwakpUVDFtaUtlckJ3UUVXRnhlbHo3TXNTemNoMWgzSCtac1E0bCt5SnlRU29VNWVNS2tBUGMvRDJ0cWFUamRMSmp4NThnVDlmaCtMaTR2UzAxUE5oSmpZRzBxTFVDY3ZtRlNBcnV2aTY2Ky9ya1RtTXczMjkvZlI2L1d3c0xDQWhZVUZxWE0wRTJJaWJ5Z3RRbDI4WUZJQmRydGRiR3hzNE1XTEZ4bGFwUjh2WHJ6QXc0Y1BZUmdHenAwN0ozV09Sa0pNNUEyVGlQQU9GTStJTXNZU0pXRTZuUTd1M3IyYm9VWDY4K2pSSTNpZUo5MTdh'+
			'MWtXVHAwNnBVT25VVTBJY1V2bVFDa1I2bEFYYkRRYVdGbFprVHJXOTMzY3ZuMGJEeDgrek5pcWFyQzd1NHZkM1Ywc0xpNUsxV0Z0MjlhaGppaGRONVRkR3UzREtRMHFGTXV5MEc2M3BZNk5Pam8wbUJLVkN0ZDFFN1dzdGR0dEhSYkprdEpOckNjTWUwU1YzVW5KTUF6ODlhOS9sWG9DYTl4U1ZRcjI5L2Z4K1BGam5EOS9YbW84enA4L2p4OSsrRUhsZUh6QmNaenZoUkNEa3c2UzhZU3RkT3dwQnRsZVVCSmdQaVJwNGpZTUE5ZXZYOC9CcWt5SjFjK0puakI4WDdDVGtqRzVzN0t5SXAwUXVIMzd0ZzdKQUNYWTM5L0hzMmZQY09IQ2hkaGp6NXc1QThNdzhPalJveHdzeTRTNjR6aTNUaXBYeEhuQ2F5a2JsQn'+
			'ZSTW9ReWREb2RpZ0Z6eG5WZGREb2RxV09iemFicUs5cTFUL3JQT0JFcW1aQXhEQU9ycTZ0U3gzYTdYZlI2dll3dElvNmkxK3VoMisxS0hUdnRDZ2NGYzZLT2poVmh1SjlFTFcxcjhxRFZha2tOV1BRT0lGRWNtNXViVXJPUWFLMGZSYW1GZWpxU2t6eWhrbDdRdG0ycE9ORHpQR3hzYk9SZ0VSSEh4c2FHVkV0Z1dYZXprdVJZUFowa1F1WGlRY013cE91QjYrdnJ1aTZ6b0J6UllsQXl0TnR0VmFlbHgrcnB5T3dvWSt3YUZPeVFlZWVkZDZTOG9Pd1VpTWlQL2YxOXFkZWdETVBBdi8vOWJ4VXoyVzg0anRNWFF2emo4SDhjNXduZnpkaWcxREZOVStydGVDR0VkREtBeUJmWkRXYXVYcjJxMUY2UFl4eXBxK05F'+
			'cU54VWxERVdlNHp2KzlKcGNhSVlPcDJPVkpnZ005NGw1RWhkdlNiQ3NFMU5xYmNsYk51V2VqM3AzcjE3OUU1Z3lmRThEL2Z1M1lzOXJ0Rm9xSmlrbVF2MTlRcEhlVUxscHFJeVQ4WGhjS2pib2tMYXdqbVhhaDlVMUJ1K3BxK2pSTGljdlIzcFlkdTIxQk9SNm9GcUlUTmVzbU5mTXBZUC8rQVZFWWE5b2twdE55dlRtaWFFVURHYlZtbGt4K3ppeFlzNVdKTXE5VkJuSXc1N3d1WGNURWtCMHpTbFNoS1VqRkVUbVhGck5Cb3Faa3FYeDc4NUxNSzM4N05qZW1SaWdsNnZSOGtZUmZFOFQ2cXZWOEhZOEJXZEtlc0pvNjI3NHFCa2pOcklqRjlhbTV2bXlQTDROeU1SaHZQVVdyNjJUSTdNSDU2OG9QckllRVBaQj'+
			'NLSnFJM0hoZU9lY0RsM1U2WkFKaUh6NE1HREhDd2hza1ptSEtmWlM3SWdscU12eGtXb3pLUEVOTTNZUllDR3d5RmxSRFZCQ0JGYk4weTZEMFlKR09sTlNVOG84OVNqL2xDOWtCbFB4YnpoS0swL2M5UVB5MDVjV2NMM2ZmVDcvWnlzSWZLZzMrL0g5cFRLcmlkVUVwYWpMMmFBMFZ2MFNtQ2FadXkwUTJiQUNMV1FlYkRLM0J0bEl0SmQ1QW1WRWFITTA0N2VGZFFUbVhGVnpCdStJc0phY1hZa1EyWXFTaUxVRTlkMWRadVMxb0NYSWxTbVV5YXVZWmRpUWIySkcxL0ZHcnJmQmhUemhESi80SjJkblJ3c0lZcENabndWRW1JTlVFeUVqdVBFSGtPZVVHOWt4bGZtUGlrSk5RQ1lVU2t6R3ZlRUd3NkhsQlhWSE4v'+
			'M1l3djNDbmxDTU1icU0xQm9LWXV6WjgrZStQL1VJVk1ONHNZNTdqNHBHWE16VUtROFlacG1iTU0yN2FoVURlTEcyVEFNbGVxRjZuaENtVDhxZWNKcUlEUE9Db2x3YmdiQWZ4WnRoUXd5d1RhOXRsUU5aTVpab2VUTW1Sa29raGs5ZmZyMGlmOVBYckJheEkxMzNQMVNJdXF5ZTlZWFR0eXJTK1FGcTBYY2VLdTAzNzB5TVdIY2s0MUVXQzNpeGxzaFQ2aE9kalR1eWZiOCtmT2NMQ0hLUU54NEsrUUoxWm1PeGtHZXNGcm9OTjVLaUZDaGRETlJJbFM1YjdRUklXVkhxOFh1N203c01TUkNnc2dRblhxRVNZUUVVVEFrUW9Jb0dCSWhRUlFNaVpBZ0NvWkVTQkFGUXlJa2lJSWhFUkpLb3RoV2FDZWloQWhsV3BSVV'+
			'dsZUVtQjZaSlN4VWFXM1RSb1FFY1JoVjdoc2xSQ2lES2kxS1JEcm9OTjR6QUpSWU16NXVjWi81K2ZtY0xDSEtRTng0SzdUb2x6c0RZSzlvSzJRNE9EZzQ4ZjkxZWpJUzhjU05kOXo5VWlMMmxKbU94czN2U1lUVkltNjhGZktFNmt4SDQwUkkyZEZxRVRmZUNubENkd2JBejBWYklZUE1SaURrRGF1QnpOSVZDbTBNOUxNeU1TSFZDb2tJbldxRUNHTkNaYWFqY1M5eUtyUzREekVGY2VQcys3NUtJbFFuT3dyRUwybEFuckFheEkyenpOSVhKV0p2aG5PdWhDY0U0dGVSc1N4THE1NUM0blVNdzRqMWhDcXROOFE1ZDZNU3hhQklRMlNSQ2JhWGxwWnlzSVFvQ3BueFZTZ3BNd0JldHEwTkNqTWpBVEpQT0lVMkFp'+
			'RW1RR1o4RmZLRUErQ2xDTDh2em81a3hQMkJ5UlBxVGR6NEtpUkFJTlNkVXA0UUFGejM1QkRXTUF6VTYwcXM3RThrcEY2dng4YjhjZmRIeVJnQUwwV29qT1V5ZjJRU29aN0lqS3RpSW5TQlVJUXFaVWc5ejR1dEFTMHRMVkdXVkRNTXc0aWRpc3JjRzJVaTB0MTRBN2N5UXBTWmtsSnNxQmN5RDFiRnZPQjI5TVhNVVQ4c085MXVOL2FZWnJPWmd5VkVYc2lNcDh4OVVTSkdUNHh4RWZZTE1HUWlQTStMZlZYRnNpenFvTkVFMjdaakMvVEQ0VkNwcVNqRzlLYWtKd1Rrbm5vWEwxN013UklpYTJUR1VURXZDQncxSGVXY0Q2QlFxYUxmNzhjMmREY2FEWHE5U1hGTTAwU2owVGp4R04vMzBlOHJNNUVEZ0VHb053Q3'+
			'ZML1MwbmFzcFV5RDdoMmVNNVdBTmtSVXk0eWZ6UUM0WjIrUGZIQmFoTXAwekFNQTVqejJHdktHNnlIaEJRTzQrS0JtdjZFeFpUd2dFQ1JxWnRIUzczYzdlR0NKMVpNYXQxK3VwbHBBQlR2S0U0VHhWcVdLTFRFQnUyelpsU2hWRGRzd2VQSGlRZ3pXcDRvN0hnOERSaS85dTUySktTZ2docEpwMlYxWldjckNHU0F1WjhaSWQrNUt4ZmZnSFI0bnd1K3p0U0JlWm1NQ3lMRXJTS0FKalRHcXBFZ1ZqUWVBSWZiMG1Rczc1TmhSYThnSUlub2k5WGkvMnVDdFhybENTcHVTWXBva3JWNjdFSHRmcjlWVDBnbnVodmw3aHVNVi92ODNXbHZTUmVTb2Foa0ZKbXBMVGJyZWxtdThWOVlKSDZ1bzRFU28zSmZVOEQxdGJX'+
			'N0hIMmJaTmZhVWxwZGxzU2lWanRyYTJWTXlJQXNmbzZrZ1JjczYvaFdKVFVpRElsTW9NenNyS0NpMlBXRElzeTVKS3huaWVwMktMR2hCTVJSTjVRa0RCS2FudisraDBPbExIcnE2dTBqdUhKY0V3REt5dXJrb2QyK2wwVk91T2lUaFdUeWVKOEZZR2htU09FRUtxZ0crYUpscXRWZzRXRVhHMFdpMnBoSm5ydWlvbVl5S08xZE94SWd6ZitoMWtZVTNXYkd4c1NEMHQ2L1U2MVE4TFptVmxSV3JaQ3QvM3NiR3hrWU5GbVRBNGFmV0t1SzNSbFBTR3Z1OWpmWDFkNnRobXN5blZuMGlrVDZQUmtFNlNyYSt2cXpvTkJXSjBGQ2ZDVG5wMjVJc1FRanFBYjdmYnREaFV6dFRyZGVseVViZmJWWGthQ3NUbzZFUVJjcz'+
			'czNGk1UVpqWTNONlUzaTJ5MVdwUXh6UW5Mc3FUajhlRndpTTNOell3dHlwUk9xS05qa2RtcFY5bUpPQUNzcmExSlRXTU13OEQxNjlkSmlCbGpXUmF1WDc4dWxabjJmUjlyYTJzNVdKVXBzZnI1VmR3QlFvaUI0empYQUN5a1lsTE92SGp4QW84ZlA4YWxTNWRpajUyZG5jWDU4K2Z4K1BGajdPL3Y1MkJkdFVnaVFBRDQvUFBQVlMzS1I3aWM4Ny9FSFJRclFnQndIT2NYQU5lbU5xa2c5dmYzNFhtZVZOd1hDZkhaczJkNCt2UnBEdFpWZzNxOW5xZzIyK2wwOE9qUm80eXR5cHkvQ0NGaTYyVlNJaFJDdUk3anRBSE1UV3RWVWV6dTd1TFVxVk5TYlZHenM3TzRjT0VDUE05VGJhKzdVdEpvTlBEKysrOWpkblpX'+
			'NnZpdHJTMVZ1MkxHR1hETzM1TTVVRXFFQU9BNHpuOEFXSjdVb2pJZ2hNRDgvTHgwM0JmdGZhREJFN2t3VmxaVzhMdmYvVTc2K0Y2dnAzb2lKdUtXRUdKYjVzQWtJblFCL0ErQU55WTBxaFM0cnB0SWlPZk9uWU5sV1hqOCtERmV2SGlSc1hYNllCZ0cvdmpIUHlaYWRyTFg2MG0zSFphY1BRQi9FRUw4UytaZ2FSRUtJZjdsT001cEtPNE5nZVJDWEZoWXdJVUxGeUNFb0lTTkJKWmw0Y2FOR3poMzdwejBPUm9KRUFBKzU1ei9uK3pCMGlJRTlQR0dRSEloR29hQlM1Y3U0ZURnQUUrZVBNbllPblZwTnB1Sm0rTTFFMkFpTHdna0ZLRk8zaEJJTGtRQVdGeGNoT000RUVMZzRPQWdRK3ZVd2pSTmZQREJCMUtsb0'+
			'hFMEV5Q1EwQXNDQ1VVSTZPVU5nVUNJc2xuVGlHZzl6Ti84NWplcXQxT2xBbU1NclZZTEN3dkpTc2xiVzF1NkpHRWlFbnRCWUFJUmh0N3dHUlN1R3g1R0NDRmRSNHlZbloyRmJkdW8xK3Q0K3ZTcDZrWGxpYkJ0RzZ1cnE3aHc0WUowK1NHaTArbm9VSVk0ekNybi9NZWtKNTJhOUxjeHhwNEFxRTE2ZmhsSjJ0RXhqaEFDblU2bkVtSTBUUlB0ZG51aXRWeWpWalRabmw2RkdIRE8zNXpreE1TZU1NSnhuRDZBOXFUbmw1SDkvWDM4OE1NUFdGeGN4Smt6WnhLZGE1b21tczBtNXVmbk1Sd090WXdYVGRQRTczLy9lN1RiN1lsV3JSc09oL2pzczg5MGZWRDlWZ2d4bU9URWlUMGhBRERHN2tPVEpNMWhWbFpXcGxv'+
			'UXF0ZnI0Y0dEQjFyRWpMWnQ0K0xGaTFPOWQ5bnRkbldMLzhiWjVweGZudlRrYVVWWUE2QnR2ajZLZWFaWmkyWTRIS0xiN1NxM2MxQzA1WGl6Mlp6cXpaTG9CV3NkSGtZbjhPYmhwZTJUTUpVSUFZQXhkaFBBSjlOZXA2d1lob0ZXcXpYMVM3L1JWbTZ1NjVaNmIvVjZ2WTU2dlM2MVIzd2NydXRLTHpXaU1KOXl6bTlPYzRHcFJRam9tYVE1akczYkU4ZENoNGtFdWJPelU3aUhqRHllNHppcENBOElsaVhzZERxNmV6OWdpbVRNT0dtSmNCbkEvVFN1VldZTXcwQ3oyY1RWcTFkVHZlNXdPSVFRWXZTWlplTENOTTNSSHZBeWU4RW5KWG9EUW5QdkYzSDVxR1h0azVLS0NBR0FNZllGZ0kvU3VsNlpNVTBUakxGTU'+
			'Y0aUt4T2g1SHA0L2Z6NFM1dTd1N29rM3VHRVlPSHYyN01qTytmbDVtS1k1RWw5VzlIbzljTTUxelh3ZXhaZWM4NC9UdUZDYUlwd0Q4Qk0wbjVhT1k5czJHR09WM3Z0UUNBSE9lUldtbnVNTUFMd1Z0M2FNTEttSkVLak90UFF3MGY0V1ZWcXhUYWNTekFTa01nMk5TRldFUUxXbXBZZUpwcWxwSlRqS1JwUlFxdGkwOHpDcFRVTWpVaGNoQURER2ZnSlFIYmR3aUxScWJHVkIxVnBuQnJpYzg3ZlN2dWl2MDc1Z3lIc0lwcVhLcmtrekRiN3ZvOWZyb2Rmcmpkclo2dlc2VWh1VWVwNEgxM1dsZDdxcUFIc0FmcHZGaFRQeGhBREFHR3NEdUpQVjlWWEVOTTFSTWJ5TXlaeG9NeDNYZFVsNHIvTWU1N3lUeFlVekV5'+
			'RlE3ZmhRQnR1MjRUZ09iTnZHMmJObmM0MGpmZC9IN3U0dWhCRFkyZG1wYW9KRmx0VGp3SEV5RlNGQThXRVNvbnFlNHpnNGZmbzBMTXNhZlU1SzlFWkg5TG16c3pPcVB4SlNaQklIanBOVlREak9aUVJOM3BXTUQ1TVFpZU00cnhTSlZQWTZ4TlRzSWJoL015VnpUd2dBakxFNktweW9JWlJrRDBFOU1QTnUrNGxmNmsyQ0VPS3Bia3RpRU5xem1uVEJwa25KUllUQWFDbjlud0c4azlmdkpJZ0orWmh6L3I5NS9iTGNSQWdBUW9nZkhjZXBnUkkxUkhucHlPeWtsQ2E1aWhBQWhCRGZrUkNKa3RLUjNjUWxUWEpKekJ3RmxTNklrcEY1S2VJNFpIYnF6WXJMQU1xN3pnTlJKVnprVUlvNGpzSThJVEI2Qi9FK3lDTV'+
			'N4ZUVpS0VXazhtN2dKQlFxUW9DRVNCUks0UUlFU2lCQ2dJUklGRUlwQkFpVVJJUUFDWkhJbGRJSUVDaVJDQ01ZWTNlZzJmTDZSS2tvcEF4eEVyblhDZU9nT2lLUklhVVRJRkJDRVFJaklWS0xHNUVtSCtmZENTTkxLVVVJakZyYy9vbGd3eGt0TmlRbENtRVBRVE4yYnIyZ1NTbGRUSGdZZWcyS21JTGNYa2VhaHRLTEVLRE1LVEVScGNxQW5vUVNJb3lnTldzSVNUSmRFeVp0U2hzVEhvVVE0aTdGaWNRSlJQSGY1MFVia2dTbFBHRkVHQ2ZlQVUxUGlaZTRBSDQ3eldhZFJhR2tDQ05vZWtxRUtEWDlQSXpTSWdSR205RGNRWVYyZ3lKR0RCQXN5cnRkc0IxVG9WUk1lQlJDaUlIak9Cc0lZc1QvS3RvZUlqZStC'+
			'UEFIenZrL2lqWmtXcFQzaE9PUVY2d0VBMmpnL2NiUlNvUVJqTEdiQUQ0cDJnNGlkVDdsbk44czJvaTAwVktFQU1BWXF5SHdpc3ZGV2tLa3dEWUM3emNvMkk1TTBGYUVFVFJGVlpvQk5KdDZIb1gySW93SXQycjdBdFNEcWdKN0NONTY2QlJ0U0I0b254MlZKVndCL0c4QWZrRlE1S2VPbS9LeEIrQnpCRm5QSDRzMkppOHE0d25IQ1J2Q1B3THdJY2d6bG9FOUFMY1FGTjFMMzNDZE5wVVVZY1NZR0Z1Z21MRUlCZ0EyVUZIeFJWUmFoT09FTWVPSG9IN1VQSEFCM0twS3pCY0hpZkFRWVRhMUJWcHNLZ3M2QURaMHozWW1oVVI0RE9GVXRZM0FPOVlLTlVadEJnaml2VTZWcDV3blFTS1VJSHgxNmtNRW01eFNJaW'+
			'VlUFFEZklwaHlsbnBwaVRKQUlrd0lZK3dhZ0hkQmdqeE1KTHp2T09mZkZtMk1TcEFJcHlDTUg5OUYwQnBYeFlTT2k2Q2w3RHVLOHlhSFJKZ1NZYS9xTW9DM3c4OWFjZFpreGdDQjZMNEhzSzFyTDJmZWtBZ3pZa3lVU3dpODVIS0I1a3pLTmdKdjF3ZUpMak5JaERrU0puanFDTHprMitGbnJUaUxSZ3pDZjkrSG55NGxWUEtEUkZnQ1FuSE9JUkRvSElBemVCbGp6bUc2ZU5ORmtEU0p2djQ1L040RnNFZGlLNTcvQi9Ea09BT3cwejhMQUFBQUFFbEZUa1N1UW1DQyIgaWQ9Il9JbWFnZTEiIGhlaWdodD0iMjI1cHgiLz4KIDwvZGVmcz4KPC9zdmc+Cg==';
		me._svg_2_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_1";
		el.ggDx=-25;
		el.ggDy=-12;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42.735%;';
		hs+='left : calc(50% - ((15.7233% + 0px) / 2) - 25%);';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42.735% + 0px) / 2) - 12%);';
		hs+='visibility : inherit;';
		hs+='width : 15.7233%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_1.onclick=function (e) {
			player.openNext("{node1}","$(cur)");
		}
		me._svg_2_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._svg_2_1);
		el=me._testo_1=document.createElement('div');
		els=me._testo_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Testo 1";
		el.ggDx=-25;
		el.ggDy=13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 15.3846%;';
		hs+='left : calc(50% - ((19.8113% + 0px) / 2) - 25%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((15.3846% + 0px) / 2) + 13%);';
		hs+='visibility : inherit;';
		hs+='width : 19.8113%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._testo_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Oggi", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._testo_1.ggUpdateText();
		el.appendChild(els);
		me._testo_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._testo_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._testo_1);
		el=me._testo_2=document.createElement('div');
		els=me._testo_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Testo 2";
		el.ggDx=0;
		el.ggDy=11.97;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 13.6752%;';
		hs+='left : calc(50% - ((41.25% + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13.6752% + 0px) / 2) + 11.97%);';
		hs+='visibility : inherit;';
		hs+='width : 41.25%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._testo_2.ggUpdateText=function() {
			var params = [];
			var hs = player._("Albero della Vita", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._testo_2.ggUpdateText();
		el.appendChild(els);
		me._testo_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._testo_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._testo_2);
		el=me._svg_2_3=document.createElement('div');
		els=me._svg_2_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgd2lkdGg9IjEwMCUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDsiIHZpZXdCb3g9IjAgMCAyNzUgMjc1IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIGhlaWdodD0iMTAwJSIgeG1sOnNwYWNlPSJwcm'+
			'VzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgxLDAsMCwxLDI1LDI1KSIgaWQ9IkxpdmVsbG9fMSI+CiAgPHVzZSB3aWR0aD0iMjI1cHgiIHg9IjAiIHhsaW5rOmhyZWY9IiNfSW1hZ2UxIiB5PSIwIiBoZWlnaHQ9IjIyNXB4Ii8+CiA8L2c+CiA8Y2lyY2xlIHI9IjQ2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMjMwLDIzMCwyMzApO3N0cm9rZS13aWR0aDo0LjE3cHg7IiBjeD0iMTM4IiBjeT0iMTM4IiBpZD0iRWxsaXNzZV8xIi8+CiA8ZyB0cmFuc2Zvcm09Im1hdHJpeCg0Ljkx'+
			'NjA0NiwwLDAsNC45MTYwNDYsLTE5LjMxMzQ3NCwtMTguNDgzNDc0KSI+CiAgPGNpcmNsZSByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTpyZ2IoMjMwLDIzMCwyMzApO3N0cm9rZS13aWR0aDoycHg7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGRlZnM+CiAgPGltYWdlIHdpZHRoPSIyMjVweCIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFPRUFBQURoQ0FZQUFBQStzOUo2QUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQVpSRWxFUVZSNG5PMmRQMnpjUnI3SHY5YWREakViNj'+
			'RFcVZKaDRHeGRrb1VJYndBYmV1bkJrYjVQQ2cvaXUwTDJyZGdOY2dLY1VsOFJ1N29BRDRoUXAwaWh4VXVnZFlNQ3JJamhBVllKUjhWeXNyU0NBTjRXQmNBc2JwMm04aDFWaEF5YWdxS0F1OEJXdklMbGV5NUk0M09XL0dmNCtnTEdTVEZJL2FQamxiMzUvT0hNS1JPRXd4dW9BNWdCRW4yZkNyekgyODBseEFleU5mZjF6K0wwTFlJOXo3azV4YlNJRlRoVnRRSlVJeFZZSFVBUHdkdmhaSzg2aUVZUHczL2ZocDB2aXpBOFNZVVl3eG1vQWxnRXNJUkRlY29IbVRJb0xZQnRBSDhBMjUzeFFxRFdhUWlKTWlUSFJ2UjErMW9xekpqTUdDRVQ1UFVpVXFVRWluQUxHMkRLQWR4R0licHE0VFZVaVQva2Q1M3k3V0ZQ'+
			'VWhVU1lFTWJZTlFUQ3U0WWdhVUlFN0FINEZvRWd2eTNhR0pVZ0VVb1FKbFErQkFsUGxraVF0eWpCRXcrSjhCZ1lZM01BMmdqRVZ5dlVHTFVaQUxnRm9NTTUzNHM1dHBLUUNBOFJ4bmt0QkFJazBxVURZSVBpeDFjaEVZWXd4dG9BUGdGNXZUeHdFVXhWTzBVYlVnWXFMY0p3eXZrUkFzOVhLOWFhU2pJQXNBSGd5eXBQVlNzcHdqSHhmUWhLdEpTQlBRUnhZeVhGV0NrUmt2aEtUeVhGV0JrUmhqSGZGeUR4cWNBZWdJK3JFak5xTDhJdzIza0hGUE9weUFEQWU3cG5VN1VWWWRqTGVRZHFOazRUcjdLTlFJeURndTNJaEptaURjZ0N4dGhOQUU5QUF0U0ZaUUJQd25IVkRxMDhJVTA5SzhFQW1rMVJ0UkJobVBYOE'+
			'JFSG1rNmdHWHdMNFZJY3NxdklpSk85WGFRYlF3Q3NxSFJNeXhyNEFjQjhrd0twU0EzQS92QStVUlVsUEdMNWFkQWZWZkpHV09Cb1hnVmRVN3RXcFh4VnRRRkxDb3Z2ZlFkNlBlSlVGQVAvdE9NNHpJWVJTUWxSS2hJeXhPd0J1QW5pallGT0ljdklHZ0d1TzQ4d0pJZTRXYll3c1NreEh3K3puZmREMGs1REhCWEJaaGV4cDZVVVl4bi8zUVQyZlJITDJFQWl4MU5QVFVtZEh3L2lQQkVoTXloeUM3R203YUVOT29yUXhJV1BzSXdEcm9QaVBtSTRvVHZ4WkNQRmowY1ljUlNtbm8yRUNwbDIwSFlSMmREam43eFZ0eEdGSzV3bEpnRVNHMUIzSHFRa2h2aXZha0hGSzR3a3BBMHJrU0treXA2VVFJUW1RS0lEU0NM'+
			'RndFWklBaVFJcGhSQUxGU0VKa0NnQmhRdXhNQkdTQUlrU1VhZ1FpeXpXa3dDSnNoQjFaUlZDSVNJTXl4QWtRS0pNMU1QN01uZHlyeE5TSFpBb01ZWFVFWE1WWWRpSzl1YzhmeWRCSktTZWQ0dGJiaUlNbTJqWDgvcDlCREVGN3ppTzg4KzhYZzdPSlR0S3J5TVJDcExiYTFDWml6QXNSVHdCQ1hCcVROT0VhWnF4eDNtZUI4L3pjckJJZS9ZQXZKbDE2ZUxYV1Y0OGhEeWdKSkhJSE1mQjZkT25ZVm5XNkhOU2hzTWhEZzRPUnA4N096c2tVbm1pV3ZaYldmNlNURDFodUJRZExjaDdETFp0dzNFYzJMYU5zMmZQd2pDTTNINjM3L3ZZM2QyRkVBSTdPenNRUXVUMnV4WGtTODc1eDFsZFBETVJob21ZUXVvdVpjVT'+
			'BUZFRyZGRUcmRkaTJYYlE1cnlHRWdPdTZjRjJYUE9YcnZKZlZWbTJaaUpBU01TOHhUUlBOWmhQMWVsMHFuaXNMbnVmQmRWMTB1MTBTWkVCbWlacXNSUGdUS3R3Ull4Z0dscGFXMEd3MnA0cm55c0p3T0VTMzIwVy8zNGZ2KzBXYlV5UXU1enoxK0RCMUVWWTVEalJORTR3eExDMHQ1UnJmNVlYdisrajMrK0NjVjlrN3BoNGZwaXJDY0hPV3docGhpOEsyN2RHVXN5cEVVOVdLSm5RdXA3a0pUV29pRE91QlA2RkN5OVBidGczR1dDbVRMSGtoaEFEbnZHcGlIQUI0SzYzNllacDF3azlRRVFGRzA4NUdvNUhaN3hCQ2pPcDV6NTgvSDAzL1pHNzI2S0ZnbWlibTUrZEg5Y2NzSGhhMmJlUEdqUnZvOVhwVm1xYldF'+
			'Tnp2cVV4TFUvR0VWWm1HR29hQlpyT0pxMWV2cG5yZDRYQUlJY1RvTThzYk9SS2paVm1qenpUWjJ0cEN0OXV0U2dJbmxXbHBXaUo4QXMyOW9HM2JhTGZicVpRWm9nVEh6czVPNFJuSEtKUHJPRTVxQ1NYUDg5RHBkS293UlIxd3p0K2M5aUpUaTVBeGRoT0JhOVlTd3pEUWFyV21UcnBFd291SzRXVWxhaVpJUTVDdTYySmpZME4zci9ncDUvem1OQmVZU29TTXNScUM1bXd0c1cwYnE2dXJVOTJNcXRiWTBxcDErcjZQOWZWMTNiM2ltNXp6d2FRblR5dkMrd0NXcDdsR1dWbFpXVUd6Mlp6NC9GNnZod2NQSG1oeDg5bTJqWXNYTDA2VmlPcDJ1OWpjM0V6UnFsS3h6VG0vUE9uSkU0dFExMlNNYVpwWVhWMmQrT2'+
			'12YzVadzJxendjRGpFMnRxYVVqT0NCRXljcEpsR2hOb2xZeXpMd3ZYcjF5ZWFmcnF1aTgzTlRTM0ZkeGpUTk5GdXR5Y3FlZmkrajdXMU5ReUh3d3dzSzVTSmt6UVRMVzhSdmlIUm51VGNzdEpvTlBDblAvMEpzN096aWM0YkRvZTRmZnMyN3Q2OWk0T0RnNHlzS3hjSEJ3Zm85WG9RUXNDeUxKdzVjMGI2M05uWldWeTZkQW1lNTJGM2R6ZERLM05uYnRJbE1SSjdRaDNmbEdlTUphNzkrYjZQZS9mdWdYT2VrVlhxd0JqRGxTdFhFczhndHJhMmRQdjdUZlFtZm1KUDZEak9ud0c4ay9TOHN0SnV0eE1uWUlRUStPcXJyMHBkYXNnVElRUWVQbndJeTdJUzFWRnQyOGI4L0x4T2Y4YzNBUHdpaE5oT2NsSWlFWVpl'+
			'OE8vUVpQZmNkcnVkT01td3VibUpiNzc1cGpKVFQxbWlLZXJCd1FFV0Z4ZWx6N01zU3pjaDFoM0grWnNRNGwreUp5UVNvVTVlTUtrQVBjL0QydHFhVGpkTEpqeDU4Z1Q5ZmgrTGk0dlMwMVBOaEpqWUcwcUxVQ2N2bUZTQXJ1dmk2NisvcmtUbU13MzI5L2ZSNi9Xd3NMQ0FoWVVGcVhNMEUySWlieWd0UWwyOFlGSUJkcnRkYkd4czRNV0xGeGxhcFI4dlhyekF3NGNQWVJnR3pwMDdKM1dPUmtKTTVBMlRpUEFPRk0rSU1zWVNKV0U2blE3dTNyMmJvVVg2OCtqUkkzaWVKOTE3YTFrV1RwMDZwVU9uVVUwSWNVdm1RQ2tSNmxBWGJEUWFXRmxaa1RyVzkzM2N2bjBiRHg4K3pOaXFhckM3dTR2ZDNWMHNMaTVLMV'+
			'dGdDI5YWhqaWhkTjVUZEd1M0RLUTBxRk11eTBHNjNwWTZOT2pvMG1CS1ZDdGQxRTdXc3RkdHRIUmJKa3RKTnJDY01lMFNWM1VuSk1Bejg5YTkvbFhvQ2E5eFNWUXIyOS9meCtQRmpuRDkvWG1vOHpwOC9qeDkrK0VIbGVIekJjWnp2aFJDRGt3NlM4WVN0ZE93cEJ0bGVVQkpnUGlScDRqWU1BOWV2WDgvQnFreUoxYytKbmpCOFg3Q1Rrakc1czdLeUlwMFF1SDM3dGc3SkFDWFkzOS9IczJmUGNPSENoZGhqejV3NUE4TXc4T2pSb3h3c3k0UzY0emkzVGlwWHhIbkNheWtibEJ2Uk1vUXlkRG9kaWdGenhuVmRkRG9kcVdPYnphYnFLOXExVC9yUE9CRXFtWkF4REFPcnE2dFN4M2E3WGZSNnZZd3RJbzZpMSt1'+
			'aDIrMUtIVHZ0Q2djRmM2S09qaFZodUo5RUxXMXI4cURWYWtrTldQUU9JRkVjbTV1YlVyT1FhSzBmUmFtRmVqcVNrenloa2w3UXRtMnBPTkR6UEd4c2JPUmdFUkhIeHNhR1ZFdGdXWGV6a3VSWVBaMGtRdVhpUWNNd3BPdUI2K3ZydWk2em9CelJZbEF5dE50dFZhZWx4K3JweU93b1krd2FGT3lRZWVlZGQ2UzhvT3dVaU1pUC9mMTlxZGVnRE1QQXYvLzlieFV6Mlc4NGp0TVhRdnpqOEg4YzV3bmZ6ZGlnMURGTlUrcnRlQ0dFZERLQXlCZlpEV2F1WHIycTFGNlBZeHlwcStORXFOeFVsREVXZTR6dis5SnBjYUlZT3AyT1ZKZ2dNOTRsNUVoZHZTYkNzRTFOcWJjbGJOdVdlajNwM3IxNzlFNWd5ZkU4RC9mdT'+
			'NZczlydEZvcUppa21RdjE5UXBIZVVMbHBxSXlUOFhoY0tqYm9rTGF3am1YYWg5VTFCdStwcStqUkxpY3ZSM3BZZHUyMUJPUjZvRnFJVE5lc21OZk1wWVAvK0FWRVlhOW9rcHROeXZUbWlhRVVER2JWbWxreCt6aXhZczVXSk1xOVZCbkl3NTd3dVhjVEVrQjB6U2xTaEtVakZFVG1YRnJOQm9xWmtxWHg3ODVMTUszODdOamVtUmlnbDZ2UjhrWVJmRThUNnF2VjhIWThCV2RLZXNKbzYyNzRxQmtqTnJJakY5YW01dm15UEw0TnlNUmh2UFVXcjYyVEk3TUg1NjhvUHJJZUVQWkIzS0pxSTNIaGVPZWNEbDNVNlpBSmlIejRNR0RIQ3doc2tabUhLZlpTN0lnbHFNdnhrV296S1BFTk0zWVJZQ0d3eUZsUkRWQkNC'+
			'RmJOMHk2RDBZSkdPbE5TVThvODlTai9sQzlrQmxQeGJ6aEtLMC9jOVFQeTA1Y1djTDNmZlQ3L1p5c0lmS2czKy9IOXBUS3JpZFVFcGFqTDJhQTBWdjBTbUNhWnV5MFEyYkFDTFdRZWJESzNCdGxJdEpkNUFtVkVhSE0wNDdlRmRRVG1YRlZ6QnUrSXNKYWNYWWtRMllxU2lMVUU5ZDFkWnVTMW9DWElsU21VeWF1WVpkaVFiMkpHMS9GR3JyZkJoVHpoREovNEoyZG5Sd3NJWXBDWm53VkVtSU5VRXlFanVQRUhrT2VVRzlreGxmbVBpa0pOUUNZVVNrekd2ZUVHdzZIbEJYVkhOLzNZd3YzQ25sQ01NYnFNMUJvS1l1elo4K2UrUC9VSVZNTjRzWTU3ajRwR1hNelVLUThZWnBtYk1NMjdhaFVEZUxHMlRBTWxlcU'+
			'Y2bmhDbVQ4cWVjSnFJRFBPQ29sd2JnYkFmeFp0aFF3eXdUYTl0bFFOWk1aWm9lVE1tUmtva2hrOWZmcjBpZjlQWHJCYXhJMTMzUDFTSXVxeWU5WVhUdHlyUytRRnEwWGNlS3UwMzcweU1XSGNrNDFFV0MzaXhsc2hUNmhPZGpUdXlmYjgrZk9jTENIS1FOeDRLK1FKMVptT3hrR2VzRnJvTk41S2lGQ2hkRE5SSWxTNWI3UVJJV1ZIcThYdTdtN3NNU1JDZ3NnUW5YcUVTWVFFVVRBa1FvSW9HQkloUVJRTWlaQWdDb1pFU0JBRlF5SWtpSUloRVJKS290aFdhQ2VpaEFobFdwUlVXbGVFbUI2WkpTeFVhVzNUUm9RRWNSaFY3aHNsUkNpREtpMUtSRHJvTk40ekFKUllNejV1Y1ovNStmbWNMQ0hLUU54NEs3VG9s'+
			'enNEWUs5b0syUTRPRGc0OGY5MWVqSVM4Y1NOZDl6OVVpTDJsSm1PeHMzdlNZVFZJbTY4RmZLRTZreEg0MFJJMmRGcUVUZmVDbmxDZHdiQXowVmJJWVBNUmlEa0RhdUJ6TklWQ20wTTlMTXlNU0hWQ29rSW5XcUVDR05DWmFhamNTOXlLclM0RHpFRmNlUHMrNzVLSWxRbk93ckVMMmxBbnJBYXhJMnp6TklYSldKdmhuT3VoQ2NFNHRlUnNTeExxNTVDNG5VTXc0ajFoQ3F0TjhRNWQ2TVN4YUJJUTJTUkNiYVhscFp5c0lRb0NwbnhWU2dwTXdCZXRxME5Dak1qQVRKUE9JVTJBaUVtUUdaOEZmS0VBK0NsQ0w4dnpvNWt4UDJCeVJQcVRkejRLaVJBSU5TZFVwNFFBRnozNUJEV01BelU2MHFzN0U4a3BGNnZ4OG'+
			'I4Y2ZkSHlSZ0FMMFdvak9VeWYyUVNvWjdJakt0aUluU0JVSVFxWlVnOXo0dXRBUzB0TFZHV1ZETU13NGlkaXNyY0cyVWkwdDE0QTdjeVFwU1prbEpzcUJjeUQxYkZ2T0IyOU1YTVVUOHNPOTF1Ti9hWVpyT1pneVZFWHNpTXA4eDlVU0pHVDR4eEVmWUxNR1FpUE0rTGZWWEZzaXpxb05FRTI3WmpDL1RENFZDcHFTakc5S2FrSndUa25ub1hMMTdNd1JJaWEyVEdVVEV2Q0J3MUhlV2NENkJRcWFMZjc4YzJkRGNhRFhxOVNYRk0wMFNqMFRqeEdOLzMwZThyTTVFRGdFR29Od0N2TC9TMG5hc3BVeUQ3aDJlTTVXQU5rUlV5NHlmelFDNFoyK1BmSEJhaE1wMHpBTUE1anoyR3ZLRzZ5SGhCUU80K0tCbXY2RXha'+
			'VHdnRUNScVp0SFM3M2M3ZUdDSjFaTWF0MSt1cGxwQUJUdktFNFR4VnFXS0xURUJ1MnpabFNoVkRkc3dlUEhpUWd6V3A0bzdIZzhEUmkvOXU1MkpLU2dnaHBKcDJWMVpXY3JDR1NBdVo4WklkKzVLeGZmZ0hSNG53dSt6dFNCZVptTUN5TEVyU0tBSmpUR3FwRWdWalFlQUlmYjBtUXM3NU5oUmE4Z0lJbm9pOVhpLzJ1Q3RYcmxDU3B1U1lwb2tyVjY3RUh0ZnI5VlQwZ251aHZsN2h1TVYvdjgzV2x2U1JlU29haGtGSm1wTFRicmVsbXU4VjlZSkg2dW80RVNvM0pmVThEMXRiVzdISDJiWk5mYVVscGRsc1NpVmp0cmEyVk15SUFzZm82a2dSY3M2L2hXSlRVaURJbE1vTXpzcktDaTJQV0RJc3k1Skt4bmllcD'+
			'JLTEdoQk1SUk41UWtEQkthbnYrK2gwT2xMSHJxNnUwanVISmNFd0RLeXVya29kMitsMFZPdU9pVGhXVHllSjhGWUdobVNPRUVLcWdHK2FKbHF0Vmc0V0VYRzBXaTJwaEpucnVpb21ZeUtPMWRPeElnemYraDFrWVUzV2JHeHNTRDB0Ni9VNjFROExabVZsUldyWkN0LzNzYkd4a1lORm1UQTRhZldLdUszUmxQU0d2dTlqZlgxZDZ0aG1zeW5WbjBpa1Q2UFJrRTZTcmErdnF6b05CV0owRkNmQ1RucDI1SXNRUWpxQWI3ZmJ0RGhVenRUcmRlbHlVYmZiVlhrYUNzVG82RVFSY3M3MzRpNVFaalkzTjZVM2kyeTFXcFF4elFuTHNxVGo4ZUZ3aU0zTnpZd3R5cFJPcUtOamtkbXBWOW1KT0FDc3JhMUpUV01NdzhE'+
			'MTY5ZEppQmxqV1JhdVg3OHVsWm4yZlI5cmEyczVXSlVwc2ZyNVZkd0JRb2lCNHpqWEFDeWtZbExPdkhqeEFvOGZQOGFsUzVkaWo1MmRuY1g1OCtmeCtQRmo3Ty92NTJCZHRVZ2lRQUQ0L1BQUFZTM0tSN2ljODcvRUhSUXJRZ0J3SE9jWEFOZW1OcWtnOXZmMzRYbWVWTndYQ2ZIWnMyZDQrdlJwRHRaVmczcTlucWcyMitsMDhPalJvNHl0eXB5L0NDRmk2MlZTSWhSQ3VJN2p0QUhNVFd0VlVlenU3dUxVcVZOU2JWR3pzN080Y09FQ1BNOVRiYSs3VXRKb05QRCsrKzlqZG5aVzZ2aXRyUzFWdTJMR0dYRE8zNU01VUVxRUFPQTR6bjhBV0o3VW9qSWdoTUQ4L0x4MDNCZnRmYURCRTdrd1ZsWlc4THZmL1U3Ni'+
			'tGNnZwM29pSnVLV0VHSmI1c0FrSW5RQi9BK0FOeVkwcWhTNHJwdElpT2ZPbllObFdYajgrREZldkhpUnNYWDZZQmdHL3ZqSFB5WmFkckxYNjBtM0haYWNQUUIvRUVMOFMrWmdhUkVLSWY3bE9NNXBLTzROZ2VSQ1hGaFl3SVVMRnlDRW9JU05CSlpsNGNhTkd6aDM3cHowT1JvSkVBQSs1NXovbit6QjBpSUU5UEdHUUhJaEdvYUJTNWN1NGVEZ0FFK2VQTW5ZT25WcE5wdUptK00xRTJBaUx3Z2tGS0ZPM2hCSUxrUUFXRnhjaE9NNEVFTGc0T0FnUSt2VXdqUk5mUERCQjFLbG9IRTBFeUNRMEFzQ0NVVUk2T1VOZ1VDSXNsblRpR2c5ek4vODVqZXF0MU9sQW1NTXJWWUxDd3ZKU3NsYlcxdTZKR0VpRW50QllB'+
			'SVJodDd3R1JTdUd4NUdDQ0ZkUjR5WW5aMkZiZHVvMSt0NCt2U3A2a1hsaWJCdEc2dXJxN2h3NFlKMCtTR2kwK25vVUlZNHpDcm4vTWVrSjUyYTlMY3h4cDRBcUUxNmZobEoydEV4amhBQ25VNm5FbUkwVFJQdGRudWl0VnlqVmpUWm5sNkZHSERPMzV6a3hNU2VNTUp4bkQ2QTlxVG5sNUg5L1gzODhNTVBXRnhjeEprelp4S2RhNW9tbXMwbTV1Zm5NUndPdFl3WFRkUEU3My8vZTdUYjdZbFdyUnNPaC9qc3M4OTBmVkQ5VmdneG1PVEVpVDBoQURERzdrT1RKTTFoVmxaV3Bsb1FxdGZyNGNHREIxckVqTFp0NCtMRmkxTzlkOW50ZG5XTC84Ylo1cHhmbnZUa2FVVllBNkJ0dmo2S2VhWlppMlk0SEtMYjdTcT'+
			'NjMUMwNVhpejJaenF6WkxvQldzZEhrWW44T2JocGUyVE1KVUlBWUF4ZGhQQUo5TmVwNndZaG9GV3F6WDFTNy9SVm02dTY1WjZiL1Y2dlk1NnZTNjFSM3djcnV0S0x6V2lNSjl5em05T2M0R3BSUWpvbWFRNWpHM2JFOGRDaDRrRXViT3pVN2lIakR5ZTR6aXBDQThJbGlYc2REcTZlejlnaW1UTU9HbUpjQm5BL1RTdVZXWU13MEN6MmNUVnExZFR2ZTV3T0lRUVl2U1paZUxDTk0zUkh2QXllOEVuSlhvRFFuUHZGM0g1cUdYdGs1S0tDQUdBTWZZRmdJL1N1bDZaTVUwVGpMRk1GNGlLeE9oNUhwNC9mejRTNXU3dTdvazN1R0VZT0h2MjdNak8rZmw1bUtZNUVsOVc5SG85Y001MXpYd2V4WmVjODQvVHVGQ2FJ'+
			'cHdEOEJNMG41YU9ZOXMyR0dPVjN2dFFDQUhPZVJXbW51TU1BTHdWdDNhTUxLbUpFS2pPdFBRdzBmNFdWVnF4VGFjU3pBU2tNZzJOU0ZXRVFMV21wWWVKcHFscEpUaktScFJRcXRpMDh6Q3BUVU1qVWhjaEFEREdmZ0pRSGJkd2lMUnFiR1ZCMVZwbkJyaWM4N2ZTdnVpdjA3NWd5SHNJcHFYS3Jra3pEYjd2bzlmcm9kZnJqZHJaNnZXNlVodVVlcDRIMTNXbGQ3cXFBSHNBZnB2RmhUUHhoQURBR0dzRHVKUFY5VlhFTk0xUk1ieU15WnhvTXgzWGRVbDRyL01lNTd5VHhZVXpFeUZRN2ZoUUJ0dTI0VGdPYk52RzJiTm5jNDBqZmQvSDd1NHVoQkRZMmRtcGFvSkZsdFRqd0hFeUZTRkE4V0VTb25xZTR6ZzRmZm'+
			'8wTE1zYWZVNUs5RVpIOUxtenN6T3FQeEpTWkJJSGpwTlZURGpPWlFSTjNwV01ENU1RaWVNNHJ4U0pWUFk2eE5Uc0liaC9NeVZ6VHdnQWpMRTZLcHlvSVpSa0QwRTlNUE51KzRsZjZrMkNFT0twYmt0aUVOcXptblRCcGtuSlJZVEFhQ245bndHOGs5ZnZKSWdKK1poei9yOTUvYkxjUkFnQVFvZ2ZIY2VwZ1JJMVJIbnB5T3lrbENhNWloQUFoQkRma1JDSmt0S1IzY1FsVFhKSnpCd0ZsUzZJa3BGNUtlSTRaSGJxellyTEFNcTd6Z05SSlZ6a1VJbzRqc0k4SVRCNkIvRSt5Q01TeGVFaUtFV2s4bTdnSkJRcVFvQ0VTQlJLNFFJRVNpQkNnSVJJRkVJcEJBaVVSSVFBQ1pISWxkSUlFQ2lSQ0NNWVkzZWcyZkw2'+
			'Uktrb3BBeHhFcm5YQ2VPZ09pS1JJYVVUSUZCQ0VRSWpJVktMRzVFbUgrZmRDU05MS1VVSWpGcmMvb2xnd3hrdE5pUWxDbUVQUVROMmJyMmdTU2xkVEhnWWVnMkttSUxjWGtlYWh0S0xFS0RNS1RFUnBjcUFub1FTSW95Z05Xc0lTVEpkRXladFNoc1RIb1VRNGk3RmljUUpSUEhmNTBVYmtnU2xQR0ZFR0NmZUFVMVBpWmU0QUg0N3pXYWRSYUdrQ0NOb2VrcUVLRFg5UEl6U0lnUkdtOURjUVlWMmd5SkdEQkFzeXJ0ZHNCMVRvVlJNZUJSQ2lJSGpPQnNJWXNUL0t0b2VJamUrQlBBSHp2ay9palprV3BUM2hPT1FWNndFQTJqZy9jYlJTb1FSakxHYkFENHAyZzRpZFQ3bG5OOHMyb2kwMFZLRUFNQVlxeUh3aX'+
			'N2RldrS2t3RFlDN3pjbzJJNU0wRmFFRVRSRlZab0JOSnQ2SG9YMklvd0l0MnI3QXRTRHFnSjdDTjU2NkJSdFNCNG9ueDJWSlZ3Qi9HOEFma0ZRNUtlT20vS3hCK0J6QkZuUEg0czJKaThxNHduSENSdkNQd0x3SWNnemxvRTlBTGNRRk4xTDMzQ2ROcFVVWWNTWUdGdWdtTEVJQmdBMlVGSHhSVlJhaE9PRU1lT0hvSDdVUEhBQjNLcEt6QmNIaWZBUVlUYTFCVnBzS2dzNkFEWjB6M1ltaFVSNERPRlV0WTNBTzlZS05VWnRCZ2ppdlU2VnA1d25RU0tVSUh4MTZrTUVtNXhTSWllZVBRRGZJcGh5bG5wcGlUSkFJa3dJWSt3YWdIZEJnanhNSkx6dk9PZmZGbTJNU3BBSXB5Q01IOTlGMEJwWHhZU09pNkNsN0R1'+
			'Szh5YUhSSmdTWWEvcU1vQzN3ODlhY2Raa3hnQ0I2TDRIc0sxckwyZmVrQWd6WWt5VVN3aTg1SEtCNWt6S05nSnYxd2VKTGpOSWhEa1NKbmpxQ0x6azIrRm5yVGlMUmd6Q2Y5K0hueTRsVlBLRFJGZ0NRbkhPSVJEb0hJQXplQmxqem1HNmVOTkZrRFNKdnY0NS9ONEZzRWRpSzU3L0IvRGtPQU93MHo4TEFBQUFBRWxGVGtTdVFtQ0MiIGlkPSJfSW1hZ2UxIiBoZWlnaHQ9IjIyNXB4Ii8+CiA8L2RlZnM+Cjwvc3ZnPgo=';
		me._svg_2_3__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2_3";
		el.ggDx=25;
		el.ggDy=-12.8205;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 42.735%;';
		hs+='left : calc(50% - ((15.7233% + 0px) / 2) + 25%);';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((42.735% + 0px) / 2) - 12.8205%);';
		hs+='visibility : inherit;';
		hs+='width : 15.7233%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_2_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2_3.onclick=function (e) {
			player.openNext("{node4}","$(cur)");
		}
		me._svg_2_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._svg_2_3);
		el=me._testo_3=document.createElement('div');
		els=me._testo_3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Testo 3";
		el.ggDx=25;
		el.ggDy=13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 14.5299%;';
		hs+='left : calc(50% - ((22.956% + 0px) / 2) + 25%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14.5299% + 0px) / 2) + 13%);';
		hs+='visibility : inherit;';
		hs+='width : 22.956%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._testo_3.ggUpdateText=function() {
			var params = [];
			var hs = player._("Girali", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._testo_3.ggUpdateText();
		el.appendChild(els);
		me._testo_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._testo_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._testo_3);
		me.divSkin.appendChild(me._container_2);
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggDx=11.71;
		el.ggDy=21.76;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 13.75%;';
		hs+='left : calc(50% - ((16.5714% + 0px) / 2) + 11.71%);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13.75% + 0px) / 2) + 21.76%);';
		hs+='visibility : hidden;';
		hs+='width : 16.5714%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getCurrentNode() == "node4")) || 
				((player.getCurrentNode() == "node8")) || 
				((player.getCurrentNode() == "node9"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._container_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._container_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._container_3.style.transition='';
				if (me._container_3.ggCurrentLogicStateVisible == 0) {
					me._container_3.style.visibility=(Number(me._container_3.style.opacity)>0||!me._container_3.style.opacity)?'inherit':'hidden';
					me._container_3.ggVisible=true;
				}
				else {
					me._container_3.style.visibility="hidden";
					me._container_3.ggVisible=false;
				}
			}
		}
		me._container_3.logicBlock_visible();
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3_1=document.createElement('div');
		el.ggId="Rectangle 3_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4d4d4d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='bottom : 0%;';
		hs+='cursor : pointer;';
		hs+='height : 30%;';
		hs+='left : 0%;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._rectangle_3_1);
		el=me._svg_3_1=document.createElement('div');
		els=me._svg_3_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbW'+
			'l0OjEwO3N0cm9rZS13aWR0aDoycHgiIHBvaW50cz0iMTguMDcgMzguOTYgMzIuMDEgMjUuMDQgMzIuMDEgMjUuMDQgNDUuOTMgMzguOTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_3_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0%;';
		hs+='cursor : pointer;';
		hs+='height : 30%;';
		hs+='left : 1%;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 15%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3_1.onclick=function (e) {
			player.openNext("{node8}","$(cur)");
		}
		me._svg_3_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._svg_3_1);
		el=me._testo_3_1=document.createElement('div');
		els=me._testo_3_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Testo 3_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 5%;';
		hs+='color : rgba(232,232,232,1);';
		hs+='height : 16.3636%;';
		hs+='left : 15%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 42.2414%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._testo_3_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Vegetazione", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._testo_3_1.ggUpdateText();
		el.appendChild(els);
		me._testo_3_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._testo_3_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._testo_3_1);
		el=me._rectangle_3_1_1=document.createElement('div');
		el.ggId="Rectangle 3_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #4d4d4d;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 100px;';
		hs+='bottom : 35%;';
		hs+='cursor : pointer;';
		hs+='height : 30%;';
		hs+='left : 0%;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 65%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_3_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_3_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._rectangle_3_1_1);
		el=me._svg_3_1_1=document.createElement('div');
		els=me._svg_3_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbW'+
			'l0OjEwO3N0cm9rZS13aWR0aDoycHgiIHBvaW50cz0iMTguMDcgMzguOTYgMzIuMDEgMjUuMDQgMzIuMDEgMjUuMDQgNDUuOTMgMzguOTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_3_1_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 35%;';
		hs+='cursor : pointer;';
		hs+='height : 30%;';
		hs+='left : 1%;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 15%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_3_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3_1_1.onclick=function (e) {
			player.openNext("{node9}","$(cur)");
		}
		me._svg_3_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._svg_3_1_1);
		el=me._testo_3_1_1=document.createElement('div');
		els=me._testo_3_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Testo 3_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 41.89%;';
		hs+='color : rgba(232,232,232,1);';
		hs+='height : 15.4545%;';
		hs+='left : 14.68%;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 49.1379%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._testo_3_1_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("Creature mostruose", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._testo_3_1_1.ggUpdateText();
		el.appendChild(els);
		me._testo_3_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._testo_3_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me._testo_3_1_1);
		me.divSkin.appendChild(me._container_3);
		me._background_blur.logicBlock_visible();
		me._share.logicBlock_position();
		me._share.logicBlock_visible();
		me._copy.logicBlock_visible();
		me.elementMouseOver['copy']=false;
		me._twitter.logicBlock_visible();
		me.elementMouseOver['twitter']=false;
		me._facebook.logicBlock_visible();
		me.elementMouseOver['facebook']=false;
		me.elementMouseOver['share_close']=false;
		me._info.logicBlock_visible();
		me.elementMouseOver['info_close']=false;
		me._map.logicBlock_visible();
		me._map_content.ggInitMap=function() {};
		me._map_content.ggInitMapMarkers=function() {};
		me._map_content.ggClearMap=function() {};
		me._map_content.logicBlock_visible();
		me._floorplan_content.ggInitMap=function() {};
		me._floorplan_content.ggInitMapMarkers=function() {};
		me._floorplan_content.ggClearMap=function() {};
		me._floorplan_content.logicBlock_visible();
		me.elementMouseOver['map_close']=false;
		me.elementMouseOver['map_full']=false;
		me._map_fullscreen.logicBlock_visible();
		me._map_fs_content.ggInitMap=function() {};
		me._map_fs_content.ggInitMapMarkers=function() {};
		me._map_fs_content.ggClearMap=function() {};
		me._map_fs_content.logicBlock_visible();
		me._floorplan_fs_content.ggInitMap=function() {};
		me._floorplan_fs_content.ggInitMapMarkers=function() {};
		me._floorplan_fs_content.ggClearMap=function() {};
		me._floorplan_fs_content.logicBlock_visible();
		me.elementMouseOver['map_fs_close']=false;
		me.elementMouseOver['map_fs_small']=false;
		me._thumbnails.logicBlock_visible();
		me.elementMouseOver['thumbnails_close']=false;
		me.elementMouseOver['thumbnails_full']=false;
		me._thumbnails_fullscreen.logicBlock_visible();
		me.elementMouseOver['thumbnails_fs_close']=false;
		me.elementMouseOver['thumbnails_small']=false;
		me._video_hs_popup.logicBlock_visible();
		me.elementMouseOver['video_hs_popup_close']=false;
		me._video_youtube_hs_popup_vid.logicBlock_visible();
		me._video_youtube_hs_popup_vid.ggVideoSource = '';
		me._video_youtube_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_vimeo_hs_popup_vid.logicBlock_visible();
		me._video_vimeo_hs_popup_vid.ggVideoSource = '';
		me._video_vimeo_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_file_hs_popup_vid.logicBlock_visible();
		me._video_file_hs_popup_vid.ggVideoSource = 'media/';
		me._video_file_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_file_hs_popup_play.logicBlock_visible();
		me.elementMouseOver['video_file_hs_popup_play']=false;
		me._video_url_hs_popup_vid.logicBlock_visible();
		me._video_url_hs_popup_vid.ggVideoSource = 'media/';
		me._video_url_hs_popup_vid.ggVideoNotLoaded = true;
		me._video_url_hs_popup_play.logicBlock_visible();
		me.elementMouseOver['video_url_hs_popup_play']=false;
		me._video_controller.logicBlock_visible();
		me._pdf_hs_popup.logicBlock_visible();
		me.elementMouseOver['pdf_hs_popup_close']=false;
		me._image_hs_popup_fullscreen.logicBlock_visible();
		me._image_hs_popup_fs_img.logicBlock_size();
		me.elementMouseOver['image_hs_popup_fs_close']=false;
		me._url_hs_popup.logicBlock_visible();
		me.elementMouseOver['url_hs_popup_close']=false;
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off']=false;
		me.elementMouseOver['sounds_on']=false;
		el = me._local_fonts;
		;
		me._popup_phone.logicBlock_visible();
		me.elementMouseOver['close_popup_phone']=false;
		me._info_popup_phone.logicBlock_visible();
		me._thumbnail_scroller_phone.logicBlock_visible();
		me._map_el_phone.ggInitMap=function() {};
		me._map_el_phone.ggInitMapMarkers=function() {};
		me._map_el_phone.ggClearMap=function() {};
		me._map_el_phone.logicBlock_visible();
		me._floorplan_el_phone.ggInitMap=function() {};
		me._floorplan_el_phone.ggInitMapMarkers=function() {};
		me._floorplan_el_phone.ggClearMap=function() {};
		me._floorplan_el_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone_play.logicBlock_visible();
		me.elementMouseOver['video_file_popup_phone_play']=false;
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone_play.logicBlock_visible();
		me.elementMouseOver['video_url_popup_phone_play']=false;
		me._container_1.logicBlock_visible();
		me._container_2.logicBlock_visible();
		me._container_3.logicBlock_visible();
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
			me._info.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			for(var i = 0; i < me._thumbnails_cloner.ggInstances.length; i++) {
				me._thumbnails_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info_1')) {
				for(var i = 0; i < hotspotTemplates['ht_info_1'].length; i++) {
					hotspotTemplates['ht_info_1'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_video_hs_popup.logicBlock();
			me._variable_opt_share.logicBlock();
			me._background_blur.logicBlock_visible();
			me._share.logicBlock_position();
			me._share.logicBlock_visible();
			me._copy.logicBlock_visible();
			me._twitter.logicBlock_visible();
			me._facebook.logicBlock_visible();
			me._info.logicBlock_visible();
			me._map.logicBlock_visible();
			me._map_content.logicBlock_visible();
			me._floorplan_content.logicBlock_visible();
			me._map_fullscreen.logicBlock_visible();
			me._map_fs_content.logicBlock_visible();
			me._floorplan_fs_content.logicBlock_visible();
			me._thumbnails.logicBlock_visible();
			me._thumbnails_cloner.ggUpdateConditionNodeChange();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fs_cloner.ggUpdateConditionNodeChange();
			me._video_hs_popup.logicBlock_visible();
			me._video_youtube_hs_popup_vid.logicBlock_visible();
			me._video_vimeo_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_url_hs_popup_vid.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._video_controller_seekbar.ggConnectToMediaEl();
			me._pdf_hs_popup.logicBlock_visible();
			me._image_hs_popup_fullscreen.logicBlock_visible();
			me._image_hs_popup_fs_img.logicBlock_size();
			me._url_hs_popup.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._popup_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._node_cloner_phone.ggUpdateConditionNodeChange();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
			me._container_1.logicBlock_visible();
			me._container_2.logicBlock_visible();
			me._container_3.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._node_cloner_phone.ggInstances.length; i++) {
				me._node_cloner_phone.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnails_fs_cloner.ggInstances.length; i++) {
				me._thumbnails_fs_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			for(var i = 0; i < me._thumbnails_cloner.ggInstances.length; i++) {
				me._thumbnails_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
		});
		player.addListener('configloaded', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info_1')) {
				for(var i = 0; i < hotspotTemplates['ht_info_1'].length; i++) {
					hotspotTemplates['ht_info_1'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_vis_controls_left.logicBlock();
			me._variable_vis_video_hs_popup.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_opt_share.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._background_blur.logicBlock_visible();
			me._share.logicBlock_position();
			me._share.logicBlock_visible();
			player.setVariableValue('pos_share_buttons', Number("8.00"));
			if (
				(
					((player.getVariableValue('opt_share_facebook') == true))
				)
			) {
				player.setVariableValue('pos_share_buttons', player.getVariableValue('pos_share_buttons') + Number("32.00"));
			}
			me._twitter.style.transition='none';
			me._twitter.ggParameter.rx=player.getVariableValue('pos_share_buttons', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._twitter.ggParameter.ry=0;
			me._twitter.style.transform=parameterToTransform(me._twitter.ggParameter);
			if (
				(
					((player.getVariableValue('opt_share_twitter') == true))
				)
			) {
				player.setVariableValue('pos_share_buttons', player.getVariableValue('pos_share_buttons') + Number("32.00"));
			}
			me._copy.style.transition='none';
			me._copy.ggParameter.rx=player.getVariableValue('pos_share_buttons', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));me._copy.ggParameter.ry=0;
			me._copy.style.transform=parameterToTransform(me._copy.ggParameter);
			me._copy.logicBlock_visible();
			me._twitter.logicBlock_visible();
			me._facebook.logicBlock_visible();
			me._info.logicBlock_visible();
			me._map.logicBlock_visible();
			me._map_content.logicBlock_visible();
			me._floorplan_content.logicBlock_visible();
			me._map_fullscreen.logicBlock_visible();
			me._map_fs_content.logicBlock_visible();
			me._floorplan_fs_content.logicBlock_visible();
			me._thumbnails.logicBlock_visible();
			me._thumbnails_scroller.ggUpdatePosition();
			me._thumbnails_fullscreen.logicBlock_visible();
			me._thumbnails_fs_scroller.ggUpdatePosition();
			me._video_hs_popup.logicBlock_visible();
			me._video_youtube_hs_popup_vid.logicBlock_visible();
			me._video_vimeo_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_url_hs_popup_vid.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._pdf_hs_popup.logicBlock_visible();
			me._image_hs_popup_fullscreen.logicBlock_visible();
			me._image_hs_popup_fs_img.logicBlock_size();
			me._url_hs_popup.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._popup_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._thumbnail_scroller_phone.ggUpdatePosition();
			me._thumbnail_scroller_phone.logicBlock_visible();
			me._map_el_phone.logicBlock_visible();
			me._floorplan_el_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_image_hs_description', function(event) {
			me._image_hs_popup_fs_img.logicBlock_size();
		});
		player.addListener('varchanged_opt_share_copy', function(event) {
			me._variable_opt_share.logicBlock();
			me._copy.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_facebook', function(event) {
			me._variable_opt_share.logicBlock();
			me._facebook.logicBlock_visible();
		});
		player.addListener('varchanged_opt_share_twitter', function(event) {
			me._variable_opt_share.logicBlock();
			me._twitter.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			me._variable_vis_controls_left.logicBlock();
			me._share.logicBlock_position();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._map.logicBlock_visible();
			me._floorplan_content.logicBlock_visible();
		});
		player.addListener('varchanged_vis_floorplan_full', function(event) {
			me._background_blur.logicBlock_visible();
			me._map_fullscreen.logicBlock_visible();
			me._floorplan_fs_content.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_hs_popup_full', function(event) {
			me._background_blur.logicBlock_visible();
			me._image_hs_popup_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_hs_popups', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_image_hs_popups();
				}
			}
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._info.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info_hs_popups', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_info_hs_popups();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info_1')) {
				for(var i = 0; i < hotspotTemplates['ht_info_1'].length; i++) {
					hotspotTemplates['ht_info_1'][i].ggEvent_varchanged_vis_info_hs_popups();
				}
			}
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._map.logicBlock_visible();
			me._map_content.logicBlock_visible();
		});
		player.addListener('varchanged_vis_map_full', function(event) {
			me._background_blur.logicBlock_visible();
			me._map_fullscreen.logicBlock_visible();
			me._map_fs_content.logicBlock_visible();
		});
		player.addListener('varchanged_vis_pdf_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
			me._pdf_hs_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_floorplan', function(event) {
			me._floorplan_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_map', function(event) {
			me._map_el_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_popup', function(event) {
			me._popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_thumbs', function(event) {
			me._thumbnail_scroller_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_share', function(event) {
			me._share.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info_1')) {
				for(var i = 0; i < hotspotTemplates['ht_info_1'].length; i++) {
					hotspotTemplates['ht_info_1'][i].ggEvent_varchanged_vis_skin();
				}
			}
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnails', function(event) {
			me._thumbnails.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbnails_full', function(event) {
			me._background_blur.logicBlock_visible();
			me._thumbnails_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
			me._url_hs_popup.logicBlock_visible();
			if (
				(
					((player.getVariableValue('vis_url_hs_popup') == false))
				)
			) {
					me._url_hs_popup_iframe.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._url_hs_popup_iframe.ggUpdateText();
				me._url_hs_popup_iframe.ggTextDiv.scrollTop = 0;
			}
		});
		player.addListener('varchanged_vis_video_file_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_file_hs_popup_vid.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_hs_popup', function(event) {
			me._background_blur.logicBlock_visible();
			me._video_hs_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_url_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_url_hs_popup_vid.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._video_controller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_vimeo_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_vimeo_hs_popup_vid.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_youtube_hs_popup', function(event) {
			me._variable_vis_video_hs_popup.logicBlock();
			me._video_youtube_hs_popup_vid.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._thumbnails_cloner.ggUpdate();
			me._thumbnails_fs_cloner.ggUpdate();
			me._node_cloner_phone.ggUpdate();
		});
	};
	function SkinHotspotClass_ht_info_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_1=document.createElement('div');
		el.ggId="ht_info_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_1.style.transition='';
				if (me._ht_info_1.ggCurrentLogicStateVisible == 0) {
					me._ht_info_1.style.visibility=(Number(me._ht_info_1.style.opacity)>0||!me._ht_info_1.style.opacity)?'inherit':'hidden';
					me._ht_info_1.ggVisible=true;
				}
				else {
					me._ht_info_1.style.visibility="hidden";
					me._ht_info_1.ggVisible=false;
				}
			}
		}
		me._ht_info_1.logicBlock_visible();
		me._ht_info_1.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_1.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info_1']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info_1.onmouseleave=function (e) {
			me.elementMouseOver['ht_info_1']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_info_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_hs_popup=document.createElement('div');
		el.ggId="info_hs_popup";
		el.ggDx=15;
		el.ggDy=107;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #464646;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 16px;';
		hs+='cursor : default;';
		hs+='height : 165px;';
		hs+='left : calc(50% - ((280px + 8px) / 2) + 15px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((165px + 8px) / 2) + 107px);';
		hs+='visibility : hidden;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_hs_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_info_hs_popups') !== null) && (player.getVariableValue('vis_info_hs_popups')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_hs_popup.style.transition='';
				if (me._info_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._info_hs_popup.style.visibility=(Number(me._info_hs_popup.style.opacity)>0||!me._info_hs_popup.style.opacity)?'inherit':'hidden';
					me._info_hs_popup.ggVisible=true;
				}
				else {
					me._info_hs_popup.style.visibility="hidden";
					me._info_hs_popup.ggVisible=false;
				}
			}
		}
		me._info_hs_popup.logicBlock_visible();
		me._info_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_hs_popup_text=document.createElement('div');
		els=me._info_hs_popup_text__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_hs_popup_text";
		el.ggDx=-5;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 48px);';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 400;';
		hs+='text-align: justify;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_hs_popup_text.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("<div>%1<\/div>\n\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_hs_popup_text.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_hs_popup_text.ggUpdateText();
		});
		el.appendChild(els);
		me._info_hs_popup_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup_text.ggUpdatePosition=function (useTransition) {
		}
		me._info_hs_popup.appendChild(me._info_hs_popup_text);
		el=me._info_hs_popup_close=document.createElement('div');
		els=me._info_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._info_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : -4px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_hs_popups', player.getVariableValue('vis_info_hs_popups').replace(me.hotspot.id, ''));
			me._ht_info.style.zIndex='-1';
		}
		me._info_hs_popup_close.onmouseenter=function (e) {
			me._info_hs_popup_close__img.style.visibility='hidden';
			me._info_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['info_hs_popup_close']=true;
		}
		me._info_hs_popup_close.onmouseleave=function (e) {
			me._info_hs_popup_close__img.style.visibility='inherit';
			me._info_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['info_hs_popup_close']=false;
		}
		me._info_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._info_hs_popup.appendChild(me._info_hs_popup_close);
		me._ht_info_1.appendChild(me._info_hs_popup);
		el=me._ht_info_container=document.createElement('div');
		el.ggId="ht_info_container";
		el.ggDx=1;
		el.ggDy=-9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33px + 0px) / 2) - 9px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_info_hs_popups') !== null) && (player.getVariableValue('vis_info_hs_popups')).indexOf(me.hotspot.id) == -1))
				)
			) {
				player.setVariableValue('vis_info_hs_popups', player.getVariableValue('vis_info_hs_popups') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title_phone.ggUpdateText();
				skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_text_phone.ggUpdateText();
				skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
		}
		me._ht_info_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_bg=document.createElement('div');
		el.ggId="ht_info_bg";
		el.ggDx=-2;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 10px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_info_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_info_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_info_bg.style.transition='background-color 0s';
				if (me._ht_info_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_info_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_info_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_info_bg.logicBlock_backgroundcolor();
		me._ht_info_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_info_bg']=true;
			me._ht_info_bg.logicBlock_backgroundcolor();
		}
		me._ht_info_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_info_bg']=false;
			me._ht_info_bg.logicBlock_backgroundcolor();
		}
		me._ht_info_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIGN4PSIzMiIgY3k9IjIwLjg0Ii8+CiAgPGxpbmUgeTI9IjQ3LjUiIHN0eWxlPSJmaWxsOm'+
			'5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjMxLjUiIHgyPSIzMiIgeDE9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIHI9IjEuMyIgY3g9IjMyIiBjeT0iMjAuOCIgY2xhc3M9InN0MCIvPgogIDxsaW5lIHkyPSI0Ny41IiB5MT0iMzEuNSIgeDI9IjMyIiB4MT0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon.onmouseenter=function (e) {
			me._ht_info_icon__img.style.visibility='hidden';
			me._ht_info_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_icon']=true;
		}
		me._ht_info_icon.onmouseleave=function (e) {
			me._ht_info_icon__img.style.visibility='inherit';
			me._ht_info_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_icon']=false;
		}
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_icon);
		me._ht_info_container.appendChild(me._ht_info_bg);
		me._ht_info_1.appendChild(me._ht_info_container);
		me._ht_info_1.logicBlock_visible();
		me.elementMouseOver['ht_info_1']=false;
		me._info_hs_popup.logicBlock_visible();
		me.elementMouseOver['info_hs_popup_close']=false;
		me._ht_info_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_info_bg']=false;
		me.elementMouseOver['ht_info_icon']=false;
			me.ggEvent_changenode=function() {
				me._ht_info_1.logicBlock_visible();
				me._info_hs_popup.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info_1.logicBlock_visible();
				me._info_hs_popup.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_hs_popups=function() {
				me._info_hs_popup.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_info_1.logicBlock_visible();
			};
			me.__div = me._ht_info_1;
	};
	function SkinCloner_node_cloner_phone_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnail_node_image_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_image_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_node_image_phone__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_preview_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_node_image_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 112px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_node_image_phone.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_node_image_phone.onclick=function (e) {
			if (me._thumbnail_node_image_phone.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_phone_thumbs', false);
			player.setVariableValue('vis_phone_popup', false);
		}
		me._thumbnail_node_image_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_node_title_bg_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_title_bg_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_node_title_bg_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 33%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_node_title_bg_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_node_title_bg_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_node_title_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_title_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_node_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_node_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnail_node_title_phone.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnail_node_title_phone.ggUpdateText();
		el.appendChild(els);
		me._thumbnail_node_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_node_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_node_title_bg_phone.appendChild(me._thumbnail_node_title_phone);
		me._thumbnail_node_image_phone.appendChild(me._thumbnail_node_title_bg_phone);
		el=me._thumbnail_node_active_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_node_active_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnail_node_active_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #e6e6e6;';
		hs+='border-radius : 8px;';
		hs+='cursor : default;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_node_active_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_node_active_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._thumbnail_node_active_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_node_active_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_node_active_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_node_active_phone.style.transition='';
				if (me._thumbnail_node_active_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_node_active_phone.style.visibility=(Number(me._thumbnail_node_active_phone.style.opacity)>0||!me._thumbnail_node_active_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_node_active_phone.ggVisible=true;
				}
				else {
					me._thumbnail_node_active_phone.style.visibility="hidden";
					me._thumbnail_node_active_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_node_active_phone.logicBlock_visible();
		me._thumbnail_node_active_phone.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail_node_image_phone.appendChild(me._thumbnail_node_active_phone);
		me.__div.appendChild(me._thumbnail_node_image_phone);
		el=me._thumbnail_visited_phone=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnail_visited_phone;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnail_visited_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgcj0iMzEiIGN4PSIzMiIgY3k9IjMyIiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBjbGFzcz0ic3QxIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnail_visited_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_visited_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_visited_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_visited_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnail_visited_phone.ggElementNodeId()) == true)) || 
				((me._thumbnail_visited_phone.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_visited_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_visited_phone.style.transition='';
				if (me._thumbnail_visited_phone.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_visited_phone.style.visibility=(Number(me._thumbnail_visited_phone.style.opacity)>0||!me._thumbnail_visited_phone.style.opacity)?'inherit':'hidden';
					me._thumbnail_visited_phone.ggVisible=true;
				}
				else {
					me._thumbnail_visited_phone.style.visibility="hidden";
					me._thumbnail_visited_phone.ggVisible=false;
				}
			}
		}
		me._thumbnail_visited_phone.logicBlock_visible();
		me._thumbnail_visited_phone.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_visited_phone);
		me._thumbnail_node_active_phone.logicBlock_visible();
		me._thumbnail_visited_phone.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnail_node_active_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
				me._thumbnail_visited_phone.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnail_visited_phone.logicBlock_visible();
			};
	};
	function SkinCloner_thumbnails_fs_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnails_fs_node_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_preview_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_fs_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 112px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnails_fs_node_image.onclick=function (e) {
			if (me._thumbnails_fs_node_image.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			player.setVariableValue('vis_thumbnails_full', false);
		}
		me._thumbnails_fs_node_image.onmouseenter=function (e) {
			me.elementMouseOver['thumbnails_fs_node_image']=true;
			me._thumbnails_fs_node_title_bg.logicBlock_visible();
		}
		me._thumbnails_fs_node_image.onmouseleave=function (e) {
			me.elementMouseOver['thumbnails_fs_node_image']=false;
			me._thumbnails_fs_node_title_bg.logicBlock_visible();
		}
		me._thumbnails_fs_node_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_fs_node_title_bg=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_title_bg;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnails_fs_node_title_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 33%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_node_title_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_node_title_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnails_fs_node_image'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_node_title_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_node_title_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_node_title_bg.style.transition='';
				if (me._thumbnails_fs_node_title_bg.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_node_title_bg.style.visibility=(Number(me._thumbnails_fs_node_title_bg.style.opacity)>0||!me._thumbnails_fs_node_title_bg.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_node_title_bg.ggVisible=true;
				}
				else {
					me._thumbnails_fs_node_title_bg.style.visibility="hidden";
					me._thumbnails_fs_node_title_bg.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_node_title_bg.logicBlock_visible();
		me._thumbnails_fs_node_title_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_fs_node_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnails_fs_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnails_fs_node_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnails_fs_node_title.ggUpdateText();
		el.appendChild(els);
		me._thumbnails_fs_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fs_node_title_bg.appendChild(me._thumbnails_fs_node_title);
		me._thumbnails_fs_node_image.appendChild(me._thumbnails_fs_node_title_bg);
		el=me._thumbnails_fs_node_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_node_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnails_fs_node_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #e6e6e6;';
		hs+='border-radius : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_node_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_node_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._thumbnails_fs_node_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_node_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_node_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_node_active.style.transition='';
				if (me._thumbnails_fs_node_active.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_node_active.style.visibility=(Number(me._thumbnails_fs_node_active.style.opacity)>0||!me._thumbnails_fs_node_active.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_node_active.ggVisible=true;
				}
				else {
					me._thumbnails_fs_node_active.style.visibility="hidden";
					me._thumbnails_fs_node_active.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_node_active.logicBlock_visible();
		me._thumbnails_fs_node_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_fs_node_image.appendChild(me._thumbnails_fs_node_active);
		me.__div.appendChild(me._thumbnails_fs_node_image);
		el=me._thumbnails_fs_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_fs_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_fs_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgcj0iMzEiIGN4PSIzMiIgY3k9IjMyIiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBjbGFzcz0ic3QxIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_fs_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_fs_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_fs_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_fs_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnails_fs_visited.ggElementNodeId()) == true)) || 
				((me._thumbnails_fs_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_fs_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_fs_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_fs_visited.style.transition='';
				if (me._thumbnails_fs_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_fs_visited.style.visibility=(Number(me._thumbnails_fs_visited.style.opacity)>0||!me._thumbnails_fs_visited.style.opacity)?'inherit':'hidden';
					me._thumbnails_fs_visited.ggVisible=true;
				}
				else {
					me._thumbnails_fs_visited.style.visibility="hidden";
					me._thumbnails_fs_visited.ggVisible=false;
				}
			}
		}
		me._thumbnails_fs_visited.logicBlock_visible();
		me._thumbnails_fs_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnails_fs_visited);
		me.elementMouseOver['thumbnails_fs_node_image']=false;
		me._thumbnails_fs_node_title_bg.logicBlock_visible();
		me._thumbnails_fs_node_active.logicBlock_visible();
		me._thumbnails_fs_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnails_fs_node_active.logicBlock_visible();
				me._thumbnails_fs_visited.logicBlock_visible();
				me._thumbnails_fs_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnails_fs_visited.logicBlock_visible();
			};
	};
	function SkinCloner_thumbnails_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._thumbnails_node_image=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_node_image;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_preview_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 8px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_node_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 112px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_node_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnails_node_image.onclick=function (e) {
			if (me._thumbnails_node_image.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._thumbnails_node_image.onmouseenter=function (e) {
			me.elementMouseOver['thumbnails_node_image']=true;
			me._thumbnails_node_title_bg.logicBlock_visible();
		}
		me._thumbnails_node_image.onmouseleave=function (e) {
			me.elementMouseOver['thumbnails_node_image']=false;
			me._thumbnails_node_title_bg.logicBlock_visible();
		}
		me._thumbnails_node_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_node_title_bg=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_node_title_bg;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnails_node_title_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 33%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_node_title_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_node_title_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['thumbnails_node_image'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_node_title_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_node_title_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_node_title_bg.style.transition='';
				if (me._thumbnails_node_title_bg.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_node_title_bg.style.visibility=(Number(me._thumbnails_node_title_bg.style.opacity)>0||!me._thumbnails_node_title_bg.style.opacity)?'inherit':'hidden';
					me._thumbnails_node_title_bg.ggVisible=true;
				}
				else {
					me._thumbnails_node_title_bg.style.visibility="hidden";
					me._thumbnails_node_title_bg.ggVisible=false;
				}
			}
		}
		me._thumbnails_node_title_bg.logicBlock_visible();
		me._thumbnails_node_title_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnails_node_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_node_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnails_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._thumbnails_node_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._thumbnails_node_title.ggUpdateText();
		el.appendChild(els);
		me._thumbnails_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_node_title_bg.appendChild(me._thumbnails_node_title);
		me._thumbnails_node_image.appendChild(me._thumbnails_node_title_bg);
		el=me._thumbnails_node_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_node_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="thumbnails_node_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 4px solid #e6e6e6;';
		hs+='border-radius : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 104px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 104px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_node_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_node_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._thumbnails_node_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_node_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_node_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_node_active.style.transition='';
				if (me._thumbnails_node_active.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_node_active.style.visibility=(Number(me._thumbnails_node_active.style.opacity)>0||!me._thumbnails_node_active.style.opacity)?'inherit':'hidden';
					me._thumbnails_node_active.ggVisible=true;
				}
				else {
					me._thumbnails_node_active.style.visibility="hidden";
					me._thumbnails_node_active.ggVisible=false;
				}
			}
		}
		me._thumbnails_node_active.logicBlock_visible();
		me._thumbnails_node_active.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnails_node_image.appendChild(me._thumbnails_node_active);
		me.__div.appendChild(me._thumbnails_node_image);
		el=me._thumbnails_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._thumbnails_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._thumbnails_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgcj0iMzEiIGN4PSIzMiIgY3k9IjMyIiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBjbGFzcz0ic3QxIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._thumbnails_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnails_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 8px;';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnails_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnails_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._thumbnails_visited.ggElementNodeId()) == true)) || 
				((me._thumbnails_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnails_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnails_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnails_visited.style.transition='';
				if (me._thumbnails_visited.ggCurrentLogicStateVisible == 0) {
					me._thumbnails_visited.style.visibility=(Number(me._thumbnails_visited.style.opacity)>0||!me._thumbnails_visited.style.opacity)?'inherit':'hidden';
					me._thumbnails_visited.ggVisible=true;
				}
				else {
					me._thumbnails_visited.style.visibility="hidden";
					me._thumbnails_visited.ggVisible=false;
				}
			}
		}
		me._thumbnails_visited.logicBlock_visible();
		me._thumbnails_visited.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnails_visited);
		me.elementMouseOver['thumbnails_node_image']=false;
		me._thumbnails_node_title_bg.logicBlock_visible();
		me._thumbnails_node_active.logicBlock_visible();
		me._thumbnails_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._thumbnails_node_active.logicBlock_visible();
				me._thumbnails_visited.logicBlock_visible();
				me._thumbnails_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._thumbnails_visited.logicBlock_visible();
			};
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-272;
		el.ggDy=-358;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 272px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) - 358px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #8d8d8d;';
		hs+='border : 2px solid #141414;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((16px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._map_pin_active.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_active.style.transition='';
				if (me._map_pin_active.ggCurrentLogicStateVisible == 0) {
					me._map_pin_active.style.visibility="hidden";
					me._map_pin_active.ggVisible=false;
				}
				else {
					me._map_pin_active.style.visibility=(Number(me._map_pin_active.style.opacity)>0||!me._map_pin_active.style.opacity)?'inherit':'hidden';
					me._map_pin_active.ggVisible=true;
				}
			}
		}
		me._map_pin_active.logicBlock_visible();
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_inactive=document.createElement('div');
		els=me._map_pin_inactive__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNFNkU2RTY7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MntmaWxsOiNGRkZGRkY7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzIsMy4yYzEwLjYsMCwxOS4yLDguNiwxOS4y'+
			'LDE5LjJsMCwwYzAsMTIuNC0xMCwzMC42LTE5LjIsMzguNGwwLDBjLTkuMy03LjgtMTkuMi0yNi0xOS4yLTM4LjRsMCwwICAgQzEyLjgsMTEuOCwyMS40LDMuMiwzMiwzLjJMMzIsMy4yeiIgY2xhc3M9InN0MSIvPgogIDxjaXJjbGUgcj0iNC4zIiBjeD0iMzIiIGN5PSIyMi40IiBjbGFzcz0ic3QyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_pin_inactive__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_inactive";
		el.ggDx=0;
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((31px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) - 15px);';
		hs+='visibility : hidden;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_inactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_inactive.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_inactive'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_inactive.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_inactive.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_inactive.style.transition='transform 200ms ease 0ms';
				if (me._map_pin_inactive.ggCurrentLogicStateScaling == 0) {
					me._map_pin_inactive.ggParameter.sx = 1.2;
					me._map_pin_inactive.ggParameter.sy = 1.2;
					me._map_pin_inactive.style.transform=parameterToTransform(me._map_pin_inactive.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_inactive);}, 250);
				}
				else {
					me._map_pin_inactive.ggParameter.sx = 1;
					me._map_pin_inactive.ggParameter.sy = 1;
					me._map_pin_inactive.style.transform=parameterToTransform(me._map_pin_inactive.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_inactive);}, 250);
				}
			}
		}
		me._map_pin_inactive.logicBlock_scaling();
		me._map_pin_inactive.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._map_pin_inactive.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_inactive.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_inactive.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_inactive.style.transition='transform 200ms ease 0ms';
				if (me._map_pin_inactive.ggCurrentLogicStateVisible == 0) {
					me._map_pin_inactive.style.visibility=(Number(me._map_pin_inactive.style.opacity)>0||!me._map_pin_inactive.style.opacity)?'inherit':'hidden';
					me._map_pin_inactive.ggVisible=true;
				}
				else {
					me._map_pin_inactive.style.visibility="hidden";
					me._map_pin_inactive.ggVisible=false;
				}
			}
		}
		me._map_pin_inactive.logicBlock_visible();
		me._map_pin_inactive.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', false);
			}
		}
		me._map_pin_inactive.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_inactive']=true;
			me._map_pin_inactive.logicBlock_scaling();
		}
		me._map_pin_inactive.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_inactive']=false;
			me._map_pin_inactive.logicBlock_scaling();
		}
		me._map_pin_inactive.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_inactive);
		me._map_pin_active.logicBlock_visible();
		me._map_pin_inactive.logicBlock_scaling();
		me._map_pin_inactive.logicBlock_visible();
		me.elementMouseOver['map_pin_inactive']=false;
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_visible();
				me._map_pin_inactive.logicBlock_visible();
			};
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 404px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			me.elementMouseOver['ht_image']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup=document.createElement('div');
		el.ggId="image_hs_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 18px;';
		hs+='bottom : -330px;';
		hs+='cursor : default;';
		hs+='height : 300px;';
		hs+='left : calc(50% - ((300px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_image_hs_popups') !== null) && (player.getVariableValue('vis_image_hs_popups')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_hs_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_hs_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_hs_popup.style.transition='';
				if (me._image_hs_popup.ggCurrentLogicStateVisible == 0) {
					me._image_hs_popup.style.visibility=(Number(me._image_hs_popup.style.opacity)>0||!me._image_hs_popup.style.opacity)?'inherit':'hidden';
					me._image_hs_popup.ggVisible=true;
				}
				else {
					me._image_hs_popup.style.visibility="hidden";
					me._image_hs_popup.ggVisible=false;
				}
			}
		}
		me._image_hs_popup.logicBlock_visible();
		me._image_hs_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_hs_popup_description=document.createElement('div');
		els=me._image_hs_popup_description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(25% - 32px);';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : calc(75% + 16px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._image_hs_popup_description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_description.ggUpdateText();
		player.addListener('changenode', function() {
			me._image_hs_popup_description.ggUpdateText();
		});
		el.appendChild(els);
		me._image_hs_popup_description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_description.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_description);
		el=me._image_hs_popup_img=document.createElement('div');
		els=me._image_hs_popup_img__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_hs_popup_img.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_hs_popup_img.ggSubElement.setAttribute('alt', player._(me._image_hs_popup_img.ggAltText));
			me._image_hs_popup_img.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_hs_popup_img.ggText_untranslated = img;
			me._image_hs_popup_img.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_hs_popup_img.ggSubElement.style.width = '0px';
			me._image_hs_popup_img.ggSubElement.style.height = '0px';
			me._image_hs_popup_img.ggSubElement.src='';
			me._image_hs_popup_img.ggSubElement.src=me._image_hs_popup_img.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_hs_popup_img.ggText != player._(me._image_hs_popup_img.ggText_untranslated)) {
				me._image_hs_popup_img.ggText = player._(me._image_hs_popup_img.ggText_untranslated);
				me._image_hs_popup_img.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_hs_popup_img";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 60%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_img.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_img.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_hs_popup_img.clientWidth;
			var parentHeight = me._image_hs_popup_img.clientHeight;
			var img = me._image_hs_popup_img__img;
			var aspectRatioDiv = me._image_hs_popup_img.clientWidth / me._image_hs_popup_img.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_hs_popup_img.ggScrollbars || currentWidth < me._image_hs_popup_img.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_hs_popup_img.scrollLeft=currentWidth / 2 - me._image_hs_popup_img.clientWidth / 2;
			}
			if (!me._image_hs_popup_img.ggScrollbars || currentHeight < me._image_hs_popup_img.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_hs_popup_img.scrollTop=currentHeight / 2 - me._image_hs_popup_img.clientHeight / 2;
			}
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_img);
		el=me._image_hs_popup_title=document.createElement('div');
		els=me._image_hs_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="image_hs_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((calc(100% - 24px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._image_hs_popup_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._image_hs_popup_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._image_hs_popup_title.ggUpdateText();
		});
		el.appendChild(els);
		me._image_hs_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_title);
		el=me._image_hs_popup_close=document.createElement('div');
		els=me._image_hs_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._image_hs_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_close.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace(me.hotspot.id, ''));
			me._ht_image.style.zIndex='-1';
		}
		me._image_hs_popup_close.onmouseenter=function (e) {
			me._image_hs_popup_close__img.style.visibility='hidden';
			me._image_hs_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_close']=true;
		}
		me._image_hs_popup_close.onmouseleave=function (e) {
			me._image_hs_popup_close__img.style.visibility='inherit';
			me._image_hs_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_close']=false;
		}
		me._image_hs_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_close);
		el=me._image_hs_popup_full=document.createElement('div');
		els=me._image_hs_popup_full__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIzNS41NCAxNiA0OCAxNiA0OCAxNiA0OCAyOC40NiIvPgogIDxsaW5lIHkyPSIxNiIgc3'+
			'R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5MT0iMjgiIHgyPSI0OCIgeDE9IjM1Ljg5Ii8+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIyOC40NiA0OCAxNiA0OCAxNiA0OCAxNiAzNS41NCIvPgogIDxsaW5lIHkyPSI0OCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5MT0iMzYiIHgyPSIxNiIgeDE9IjI4LjExIi8+'+
			'CiA8L2c+Cjwvc3ZnPgo=';
		me._image_hs_popup_full__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_hs_popup_full__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbW'+
			'l0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiLz4KICA8bGluZSB5Mj0iMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTE9IjI4IiB4Mj0iNDgiIHgxPSIzNS44OSIvPgogIDxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHBvaW50cz0iMjguNDYgNDggMTYg'+
			'NDggMTYgNDggMTYgMzUuNTQiLz4KICA8bGluZSB5Mj0iNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTE9IjM2IiB4Mj0iMTYiIHgxPSIyOC4xMSIvPgogPC9nPgo8L3N2Zz4K';
		me._image_hs_popup_full__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="image_hs_popup_full";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_hs_popup_full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_hs_popup_full.onclick=function (e) {
			player.setVariableValue('image_hs_description', player._(me.hotspot.description));
			player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace(me.hotspot.id, ''));
			me._ht_image.style.zIndex='-1';
			player.setVariableValue('vis_image_hs_popup_full', true);
			skin._image_hs_popup_fs_img.ggSetImage(player._(player.getBasePath()+""+player._(me.hotspot.url)));
				skin._image_hs_popup_fs_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._image_hs_popup_fs_title.ggUpdateText();
			skin._image_hs_popup_fs_title.ggTextDiv.scrollTop = 0;
		}
		me._image_hs_popup_full.onmouseenter=function (e) {
			me._image_hs_popup_full__img.style.visibility='hidden';
			me._image_hs_popup_full__imgo.style.visibility='inherit';
			me.elementMouseOver['image_hs_popup_full']=true;
		}
		me._image_hs_popup_full.onmouseleave=function (e) {
			me._image_hs_popup_full__img.style.visibility='inherit';
			me._image_hs_popup_full__imgo.style.visibility='hidden';
			me.elementMouseOver['image_hs_popup_full']=false;
		}
		me._image_hs_popup_full.ggUpdatePosition=function (useTransition) {
		}
		me._image_hs_popup.appendChild(me._image_hs_popup_full);
		me._ht_image.appendChild(me._image_hs_popup);
		el=me._ht_image_container=document.createElement('div');
		el.ggId="ht_image_container";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_container.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_image_hs_popups') !== null) && (player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) == -1))
				)
			) {
				player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._image_hs_popup_img.ggSetImage(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._image_popup_phone.ggSetImage(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
		}
		me._ht_image_container.onmouseenter=function (e) {
			me.elementMouseOver['ht_image_container']=true;
			me._ht_image_title.logicBlock_visible();
		}
		me._ht_image_container.onmouseleave=function (e) {
			me.elementMouseOver['ht_image_container']=false;
			me._ht_image_title.logicBlock_visible();
		}
		me._ht_image_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_title=document.createElement('div');
		els=me._ht_image_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 32px;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #e8e8e8;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image_container'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_title.style.transition='';
				if (me._ht_image_title.ggCurrentLogicStateVisible == 0) {
					me._ht_image_title.style.visibility=(Number(me._ht_image_title.style.opacity)>0||!me._ht_image_title.style.opacity)?'inherit':'hidden';
					me._ht_image_title.ggVisible=true;
				}
				else {
					me._ht_image_title.style.visibility="hidden";
					me._ht_image_title.ggVisible=false;
				}
			}
		}
		me._ht_image_title.logicBlock_visible();
		me._ht_image_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_container.appendChild(me._ht_image_title);
		el=me._ht_image_bg=document.createElement('div');
		el.ggId="ht_image_bg";
		el.ggDx=0;
		el.ggDy=9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 3px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 6px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 6px) / 2) + 9px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_image_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_image_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_image_bg.style.transition='background-color 0s';
				if (me._ht_image_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_image_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_image_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_image_bg.logicBlock_backgroundcolor();
		me._ht_image_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_image_bg']=true;
			me._ht_image_bg.logicBlock_backgroundcolor();
		}
		me._ht_image_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_image_bg']=false;
			me._ht_image_bg.logicBlock_backgroundcolor();
		}
		me._ht_image_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTMyLDI4LjE3YTQsNCwwLDEsMS00LDQsNCw0LDAsMCwxLDQtNG0wLTRhOCw4LDAsMSwwLDgsOCw4LDgsMCwwLDAtOC04WiIvPgogIDxwb2x5Z29uIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOi'+
			'NlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIzNy4yMyAyMi4yMiAzNS44OSAxOS40NSAyOC4xMSAxOS40NSAyNi43NyAyMi4yMiAxNiAyMi4yMiAxNiA0My41NSA0OCA0My41NSA0OCAyMi4yMiAzNy4yMyAyMi4yMiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzIsMjguMmMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0cy00LTEuOC00LTRsMCwwQzI4LDMwLDI5LjgsMjguMiwzMiwyOC4yIE0z'+
			'MiwyNC4yYy00LjQsMC04LDMuNi04LDggICBzMy42LDgsOCw4czgtMy42LDgtOFMzNi40LDI0LjIsMzIsMjQuMnoiIGNsYXNzPSJzdDEiLz4KICA8cG9seWdvbiBwb2ludHM9IjM3LjIsMjIuMiAzNS45LDE5LjUgMjguMSwxOS41IDI2LjgsMjIuMiAxNiwyMi4yIDE2LDQzLjUgNDgsNDMuNSA0OCwyMi4yICAiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.onmouseenter=function (e) {
			me._ht_image_icon__img.style.visibility='hidden';
			me._ht_image_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_icon']=true;
		}
		me._ht_image_icon.onmouseleave=function (e) {
			me._ht_image_icon__img.style.visibility='inherit';
			me._ht_image_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_icon']=false;
		}
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_icon);
		me._ht_image_container.appendChild(me._ht_image_bg);
		me._ht_image.appendChild(me._ht_image_container);
		el=me._ht_image_container_close=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="ht_image_container_close";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 67px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((67px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_container_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_container_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_image_hs_popups') !== null) && (player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_container_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_container_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_container_close.style.transition='';
				if (me._ht_image_container_close.ggCurrentLogicStateVisible == 0) {
					me._ht_image_container_close.style.visibility=(Number(me._ht_image_container_close.style.opacity)>0||!me._ht_image_container_close.style.opacity)?'inherit':'hidden';
					me._ht_image_container_close.ggVisible=true;
				}
				else {
					me._ht_image_container_close.style.visibility="hidden";
					me._ht_image_container_close.ggVisible=false;
				}
			}
		}
		me._ht_image_container_close.logicBlock_visible();
		me._ht_image_container_close.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_image_hs_popups') !== null) && (player.getVariableValue('vis_image_hs_popups')).indexOf(me.hotspot.id) != -1))
				)
			) {
				player.setVariableValue('vis_image_hs_popups', player.getVariableValue('vis_image_hs_popups').replace("<"+me.hotspot.id+">", ''));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_image.style.zIndex='-1';
			}
		}
		me._ht_image_container_close.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_container_close);
		me._ht_image.logicBlock_visible();
		me.elementMouseOver['ht_image']=false;
		me._image_hs_popup.logicBlock_visible();
		me.elementMouseOver['image_hs_popup_close']=false;
		me.elementMouseOver['image_hs_popup_full']=false;
		me.elementMouseOver['ht_image_container']=false;
		me._ht_image_title.logicBlock_visible();
		me._ht_image_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_image_bg']=false;
		me.elementMouseOver['ht_image_icon']=false;
		me._ht_image_container_close.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_title.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._image_hs_popup.logicBlock_visible();
				player.setVariableValue('vis_image_hs_popups', "");
				me._ht_image_title.logicBlock_visible();
				me._ht_image_container_close.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._image_hs_popup.logicBlock_visible();
				me._ht_image_title.logicBlock_visible();
				me._ht_image_container_close.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_image_hs_popups=function() {
				me._image_hs_popup.logicBlock_visible();
				me._ht_image_container_close.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 184px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style.transition='';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
				else {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
			}
		}
		me._ht_url.logicBlock_visible();
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_hs_popup_title.ggUpdateText();
				skin._url_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_hs_popup_iframe.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_hs_popup_iframe.ggUpdateText();
				skin._url_hs_popup_iframe.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', true);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._ht_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._ht_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_title=document.createElement('div');
		els=me._ht_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_url_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_url_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_url_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_title.style.transition='';
				if (me._ht_url_title.ggCurrentLogicStateVisible == 0) {
					me._ht_url_title.style.visibility=(Number(me._ht_url_title.style.opacity)>0||!me._ht_url_title.style.opacity)?'inherit':'hidden';
					me._ht_url_title.ggVisible=true;
				}
				else {
					me._ht_url_title.style.visibility="hidden";
					me._ht_url_title.ggVisible=false;
				}
			}
		}
		me._ht_url_title.logicBlock_visible();
		me._ht_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_title);
		el=me._ht_url_bg=document.createElement('div');
		el.ggId="ht_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_bg.style.transition='background-color 0s';
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_url_bg.style.visibility="hidden";
					me._ht_url_bg.ggVisible=false;
				}
				else {
					me._ht_url_bg.style.visibility=(Number(me._ht_url_bg.style.opacity)>0||!me._ht_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_url_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_url_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_url_bg.style.transition='background-color 0s';
				if (me._ht_url_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_url_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_url_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_url_bg.logicBlock_backgroundcolor();
		me._ht_url_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_url_bg']=true;
			me._ht_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_url_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_url_bg']=false;
			me._ht_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_icon=document.createElement('div');
		els=me._ht_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGVsbGlwc2Ugc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiByeD0iOC42MiIgY3g9IjMyIiBjeT0iMzIiIHJ5PSIxNiIvPgogIDxjaXJjbGUgcj0iMTYiIHN0eWxlPS'+
			'JmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgY3g9IjMyIiBjeT0iMzIiLz4KICA8bGluZSB5Mj0iMzIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjMyIiB4Mj0iNDgiIHgxPSIxNiIvPgogIDxsaW5lIHkyPSI0OCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5MT0iMTYiIHgyPSIzMiIgeDE9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8ZWxsaXBzZSByeD0iOC42IiBjeD0iMzIiIGN5PSIzMiIgY2xhc3M9InN0MSIgcnk9IjE2Ii8+CiAgPGNpcmNsZSByPSIxNiIgY3g9IjMyIiBjeT0iMzIiIGNsYXNzPSJzdDEiLz4KICA8bGluZSB5'+
			'Mj0iMzIiIHkxPSIzMiIgeDI9IjQ4IiB4MT0iMTYiIGNsYXNzPSJzdDEiLz4KICA8bGluZSB5Mj0iNDgiIHkxPSIxNiIgeDI9IjMyIiB4MT0iMzIiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_icon.onmouseenter=function (e) {
			me._ht_url_icon__img.style.visibility='hidden';
			me._ht_url_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_url_icon']=true;
		}
		me._ht_url_icon.onmouseleave=function (e) {
			me._ht_url_icon__img.style.visibility='inherit';
			me._ht_url_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_url_icon']=false;
		}
		me._ht_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.appendChild(me._ht_url_icon);
		me._ht_url.appendChild(me._ht_url_bg);
		el=me._ht_url_custom_image=document.createElement('div');
		els=me._ht_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_url_custom_image.ggAltText));
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_url_custom_image.ggText_untranslated = img;
			me._ht_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_url_custom_image.ggSubElement.src='';
			me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_url_custom_image.ggText != player._(me._ht_url_custom_image.ggText_untranslated)) {
				me._ht_url_custom_image.ggText = player._(me._ht_url_custom_image.ggText_untranslated);
				me._ht_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_custom_image.style.transition='';
				if (me._ht_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_custom_image.style.visibility=(Number(me._ht_url_custom_image.style.opacity)>0||!me._ht_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_url_custom_image.ggSubElement.src=me._ht_url_custom_image.ggText;
					me._ht_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_url_custom_image.style.visibility="hidden";
					me._ht_url_custom_image.ggSubElement.src='';
					me._ht_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_url_custom_image.logicBlock_visible();
		me._ht_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_url_custom_image.clientWidth;
			var parentHeight = me._ht_url_custom_image.clientHeight;
			var img = me._ht_url_custom_image__img;
			var aspectRatioDiv = me._ht_url_custom_image.clientWidth / me._ht_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentWidth < me._ht_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_url_custom_image.ggScrollbars || currentHeight < me._ht_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_url_custom_image.scrollTop=currentHeight / 2 - me._ht_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_url_custom_image);
		me._ht_url.logicBlock_visible();
		me.elementMouseOver['ht_url']=false;
		me._ht_url_title.logicBlock_visible();
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_url_bg']=false;
		me.elementMouseOver['ht_url_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_url.logicBlock_visible();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 1023px;';
		hs+='position : absolute;';
		hs+='top : 197px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
			}
		}
		me._ht_node.logicBlock_visible();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_preview_bg.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_node_preview_bg.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_bg=document.createElement('div');
		el.ggId="ht_node_preview_bg";
		el.ggDx=0;
		el.ggDy=-66;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) - 66px);';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:none;';
		hs+='overflow: hidden';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_preview_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_preview_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_preview_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_bg.style.transition='';
				if (me._ht_node_preview_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_bg.style.visibility=(Number(me._ht_node_preview_bg.style.opacity)>0||!me._ht_node_preview_bg.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_bg.ggVisible=true;
				}
				else {
					me._ht_node_preview_bg.style.visibility="hidden";
					me._ht_node_preview_bg.ggVisible=false;
				}
			}
		}
		me._ht_node_preview_bg.logicBlock_visible();
		me._ht_node_preview_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_img=document.createElement('div');
		els=me._ht_node_preview_img__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_preview_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 5px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_preview_img";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 112px;';
		hs+='left : calc(50% - ((112px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((112px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 112px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_preview_img.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_preview_img.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg.appendChild(me._ht_node_preview_img);
		el=me._ht_node_title_bg=document.createElement('div');
		el.ggId="ht_node_title_bg";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(40,40,40,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 33%;';
		hs+='left : calc(50% - ((100% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_title_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_title_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_title=document.createElement('div');
		els=me._ht_node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_title_bg.appendChild(me._ht_node_title);
		me._ht_node_preview_bg.appendChild(me._ht_node_title_bg);
		me._ht_node.appendChild(me._ht_node_preview_bg);
		el=me._ht_node_bg=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 2px solid #141414;';
		hs+='border-radius : 4px 15px 4px 15px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((24px + 4px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 4px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg.style.transition='background-color 0s';
				if (me._ht_node_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg.style.visibility="hidden";
					me._ht_node_bg.ggVisible=false;
				}
				else {
					me._ht_node_bg.style.visibility=(Number(me._ht_node_bg.style.opacity)>0||!me._ht_node_bg.style.opacity)?'inherit':'hidden';
					me._ht_node_bg.ggVisible=true;
				}
			}
		}
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_node_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_node_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_node_bg.style.transition='background-color 0s';
				if (me._ht_node_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_node_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_node_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_node_bg.logicBlock_backgroundcolor();
		me._ht_node_bg.onmouseenter=function (e) {
			me._ht_node.style.zIndex='0';
			me.elementMouseOver['ht_node_bg']=true;
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.onmouseleave=function (e) {
			me._ht_node.style.zIndex='-1';
			me.elementMouseOver['ht_node_bg']=false;
			me._ht_node_bg.logicBlock_backgroundcolor();
		}
		me._ht_node_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM0RDRENEQ7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiNFNkU2RTY7c3Ryb2tlLXdpZHRoOjY7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgcj0iMzEiIGN4PSIzMiIgY3k9IjMyIiBjbGFzcz0ic3QwIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBjbGFzcz0ic3QxIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_visited";
		el.ggDx=14;
		el.ggDy=18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 18px;';
		hs+='left : calc(50% - ((18px + 0px) / 2) + 14px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((18px + 0px) / 2) + 18px);';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_visited);
		el=me._ht_node_icon=document.createElement('div');
		els=me._ht_node_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIxOC4wNiAyOS45MyAzMi4wMSAxNiAzMi4wMSAxNiA0NS45NCAyOS45MyIvPgogIDxsaW'+
			'5lIHkyPSIxNy42NCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiB5MT0iNDgiIHgyPSIzMiIgeDE9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxOC4xLDI5LjkgMzIsMTYgMzIsMTYgNDUuOSwyOS45ICAiIGNsYXNzPSJzdDEiLz4KICA8bGluZSB5Mj0iMTcuNiIgeTE9IjQ4IiB4Mj0iMzIiIHgxPSIzMiIgY2xh'+
			'c3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 48px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((48px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_icon.onmouseenter=function (e) {
			me._ht_node_icon__img.style.visibility='hidden';
			me._ht_node_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_icon']=true;
		}
		me._ht_node_icon.onmouseleave=function (e) {
			me._ht_node_icon__img.style.visibility='inherit';
			me._ht_node_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_icon']=false;
		}
		me._ht_node_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_icon);
		me._ht_node.appendChild(me._ht_node_bg);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.logicBlock_visible();
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image);
		me._ht_node.logicBlock_visible();
		me.elementMouseOver['ht_node']=false;
		me._ht_node_preview_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_node_bg']=false;
		me.elementMouseOver['ht_node_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_preview_bg.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_preview_bg.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_preview_bg.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 85px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
				else {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.onclick=function (e) {
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			me.elementMouseOver['ht_info']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_hs_popup0=document.createElement('div');
		el.ggId="info_hs_popup";
		el.ggDx=14;
		el.ggDy=107;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #464646;';
		hs+='border : 4px solid #141414;';
		hs+='border-radius : 16px;';
		hs+='cursor : default;';
		hs+='height : 165px;';
		hs+='left : calc(50% - ((280px + 8px) / 2) + 14px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((165px + 8px) / 2) + 107px);';
		hs+='visibility : hidden;';
		hs+='width : 280px;';
		hs+='pointer-events:auto;';
		hs+='transform: translateZ(1px)';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_hs_popup0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				(((player.getVariableValue('vis_info_hs_popups') !== null) && (player.getVariableValue('vis_info_hs_popups')).indexOf("<"+me.hotspot.id+">") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_hs_popup0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_hs_popup0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_hs_popup0.style.transition='';
				if (me._info_hs_popup0.ggCurrentLogicStateVisible == 0) {
					me._info_hs_popup0.style.visibility=(Number(me._info_hs_popup0.style.opacity)>0||!me._info_hs_popup0.style.opacity)?'inherit':'hidden';
					me._info_hs_popup0.ggVisible=true;
				}
				else {
					me._info_hs_popup0.style.visibility="hidden";
					me._info_hs_popup0.ggVisible=false;
				}
			}
		}
		me._info_hs_popup0.logicBlock_visible();
		me._info_hs_popup0.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_hs_popup_text0=document.createElement('div');
		els=me._info_hs_popup_text0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_hs_popup_text";
		el.ggDx=-5;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 48px);';
		hs+='left : calc(50% - ((calc(100% - 32px) + 0px) / 2) - 5px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(100% - 48px) + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 32px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 12px;';
		hs+='font-weight: 400;';
		hs+='text-align: justify;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_hs_popup_text0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.description)));
			var hs = player._("<div>%1<\/div>\n\n\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_hs_popup_text0.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_hs_popup_text0.ggUpdateText();
		});
		el.appendChild(els);
		me._info_hs_popup_text0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup_text0.ggUpdatePosition=function (useTransition) {
		}
		me._info_hs_popup0.appendChild(me._info_hs_popup_text0);
		el=me._info_hs_popup_close0=document.createElement('div');
		els=me._info_hs_popup_close0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIHkxPSIyMC42OSIgeDI9IjQzLjMxIiB4MT0iMjAuNjkiLz4KICA8bGluZSB5Mj0iNDMuMz'+
			'EiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjIwLjY5IiB4Mj0iMjAuNjkiIHgxPSI0My4zMSIvPgogPC9nPgo8L3N2Zz4K';
		me._info_hs_popup_close0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_hs_popup_close0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0iaGlnaGxpZ2h0Ij4KICA8Y2lyY2xlIHI9IjI3IiBzdHlsZT0iZmlsbDojNGQ0ZDRkIiBjeD0iMzIiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiIGRhdGEtbmFtZT0icXVhZHJhdG8gY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBzdHlsZT0iZmlsbDpub25lIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEiPgogIDxsaW5lIHkyPSI0My4zMSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzE0MTQxNDtzdHJva2UtbW'+
			'l0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5MT0iMjAuNjkiIHgyPSI0My4zMSIgeDE9IjIwLjY5Ii8+CiAgPGxpbmUgeTI9IjQzLjMxIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkxPSIyMC42OSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._info_hs_popup_close0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_hs_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : -4px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_hs_popup_close0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._info_hs_popup_close0.onclick=function (e) {
			player.setVariableValue('vis_info_hs_popups', player.getVariableValue('vis_info_hs_popups').replace(me.hotspot.id, ''));
			me._ht_info.style.zIndex='-1';
		}
		me._info_hs_popup_close0.onmouseenter=function (e) {
			me._info_hs_popup_close0__img.style.visibility='hidden';
			me._info_hs_popup_close0__imgo.style.visibility='inherit';
			me.elementMouseOver['info_hs_popup_close0']=true;
		}
		me._info_hs_popup_close0.onmouseleave=function (e) {
			me._info_hs_popup_close0__img.style.visibility='inherit';
			me._info_hs_popup_close0__imgo.style.visibility='hidden';
			me.elementMouseOver['info_hs_popup_close0']=false;
		}
		me._info_hs_popup_close0.ggUpdatePosition=function (useTransition) {
		}
		me._info_hs_popup0.appendChild(me._info_hs_popup_close0);
		me._ht_info.appendChild(me._info_hs_popup0);
		el=me._ht_info_container0=document.createElement('div');
		el.ggId="ht_info_container";
		el.ggDx=1;
		el.ggDy=-9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 33px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((33px + 0px) / 2) - 9px);';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_container0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_container0.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false)) && 
					(((player.getVariableValue('vis_info_hs_popups') !== null) && (player.getVariableValue('vis_info_hs_popups')).indexOf(me.hotspot.id) == -1))
				)
			) {
				player.setVariableValue('vis_info_hs_popups', player.getVariableValue('vis_info_hs_popups') + "<"+me.hotspot.id+">");
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				me._ht_info.style.zIndex='0';
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title_phone.ggUpdateText();
				skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_text_phone.ggUpdateText();
				skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
		}
		me._ht_info_container0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_bg0=document.createElement('div');
		el.ggId="ht_info_bg";
		el.ggDx=-2;
		el.ggDy=10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 10px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_bg0.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_info_bg0'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_info_bg0.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_info_bg0.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_info_bg0.style.transition='background-color 0s';
				if (me._ht_info_bg0.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_info_bg0.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_info_bg0.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_info_bg0.logicBlock_backgroundcolor();
		me._ht_info_bg0.onmouseenter=function (e) {
			me.elementMouseOver['ht_info_bg0']=true;
			me._ht_info_bg0.logicBlock_backgroundcolor();
		}
		me._ht_info_bg0.onmouseleave=function (e) {
			me.elementMouseOver['ht_info_bg0']=false;
			me._ht_info_bg0.logicBlock_backgroundcolor();
		}
		me._ht_info_bg0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_icon0=document.createElement('div');
		els=me._ht_info_icon0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZTZlNmU2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHgiIGN4PSIzMiIgY3k9IjIwLjg0Ii8+CiAgPGxpbmUgeTI9IjQ3LjUiIHN0eWxlPSJmaWxsOm'+
			'5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgeTE9IjMxLjUiIHgyPSIzMiIgeDE9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_icon0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_icon0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIHI9IjEuMyIgY3g9IjMyIiBjeT0iMjAuOCIgY2xhc3M9InN0MCIvPgogIDxsaW5lIHkyPSI0Ny41IiB5MT0iMzEuNSIgeDI9IjMyIiB4MT0iMzIiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_icon0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon0.onmouseenter=function (e) {
			me._ht_info_icon0__img.style.visibility='hidden';
			me._ht_info_icon0__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_icon0']=true;
		}
		me._ht_info_icon0.onmouseleave=function (e) {
			me._ht_info_icon0__img.style.visibility='inherit';
			me._ht_info_icon0__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_icon0']=false;
		}
		me._ht_info_icon0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg0.appendChild(me._ht_info_icon0);
		me._ht_info_container0.appendChild(me._ht_info_bg0);
		me._ht_info.appendChild(me._ht_info_container0);
		me._ht_info.logicBlock_visible();
		me.elementMouseOver['ht_info']=false;
		me._info_hs_popup0.logicBlock_visible();
		me.elementMouseOver['info_hs_popup_close0']=false;
		me._ht_info_bg0.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_info_bg0']=false;
		me.elementMouseOver['ht_info_icon0']=false;
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
				me._info_hs_popup0.logicBlock_visible();
				player.setVariableValue('vis_info_hs_popups', "");
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._info_hs_popup0.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_info_hs_popups=function() {
				me._info_hs_popup0.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_info.logicBlock_visible();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 294px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf.style.transition='';
				if (me._ht_pdf.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf.style.visibility=(Number(me._ht_pdf.style.opacity)>0||!me._ht_pdf.style.opacity)?'inherit':'hidden';
					me._ht_pdf.ggVisible=true;
				}
				else {
					me._ht_pdf.style.visibility="hidden";
					me._ht_pdf.ggVisible=false;
				}
			}
		}
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._pdf_hs_popup_pdf.ggInitPdf(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				let pdfInterval_31 = setInterval(() => {
					if (skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication && skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_hs_popup_pdf__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_hs_popup_pdf.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_31);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._pdf_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._pdf_hs_popup_title.ggUpdateText();
				skin._pdf_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._pdf_popup_phone.ggInitPdf(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				let pdfInterval_32 = setInterval(() => {
					if (skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_32);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			me._ht_pdf_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseleave=function (e) {
			me.elementMouseOver['ht_pdf']=false;
			me._ht_pdf_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_title=document.createElement('div');
		els=me._ht_pdf_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_pdf_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_pdf_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_pdf_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_title.style.transition='';
				if (me._ht_pdf_title.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_title.style.visibility=(Number(me._ht_pdf_title.style.opacity)>0||!me._ht_pdf_title.style.opacity)?'inherit':'hidden';
					me._ht_pdf_title.ggVisible=true;
				}
				else {
					me._ht_pdf_title.style.visibility="hidden";
					me._ht_pdf_title.ggVisible=false;
				}
			}
		}
		me._ht_pdf_title.logicBlock_visible();
		me._ht_pdf_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_title);
		el=me._ht_pdf_bg=document.createElement('div');
		el.ggId="ht_pdf_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_bg.style.transition='background-color 0s';
				if (me._ht_pdf_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_bg.style.visibility="hidden";
					me._ht_pdf_bg.ggVisible=false;
				}
				else {
					me._ht_pdf_bg.style.visibility=(Number(me._ht_pdf_bg.style.opacity)>0||!me._ht_pdf_bg.style.opacity)?'inherit':'hidden';
					me._ht_pdf_bg.ggVisible=true;
				}
			}
		}
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_pdf_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_pdf_bg.style.transition='background-color 0s';
				if (me._ht_pdf_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_pdf_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_pdf_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_pdf_bg.logicBlock_backgroundcolor();
		me._ht_pdf_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_pdf_bg']=true;
			me._ht_pdf_bg.logicBlock_backgroundcolor();
		}
		me._ht_pdf_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_pdf_bg']=false;
			me._ht_pdf_bg.logicBlock_backgroundcolor();
		}
		me._ht_pdf_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_icon=document.createElement('div');
		els=me._ht_pdf_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlnb24gc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2U2ZTZlNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4IiBwb2ludHM9IjM2IDE2IDIwIDE2IDIwIDQ4IDQ0IDQ4IDQ0IDI0IDM2IDE2Ii8+CiAgPHBvbHlsaW5lIH'+
			'N0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNlNmU2ZTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweCIgcG9pbnRzPSIzNiAxNiAzNiAyNCA0NCAyNCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_pdf_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_pdf_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM2LDE2IDIwLDE2IDIwLDQ4IDQ0LDQ4IDQ0LDI0ICAiIGNsYXNzPSJzdDEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzNiwxNiAzNiwyNCA0NCwyNCAgIiBjbGFzcz0i'+
			'c3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_pdf_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_pdf_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon.onmouseenter=function (e) {
			me._ht_pdf_icon__img.style.visibility='hidden';
			me._ht_pdf_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_pdf_icon']=true;
		}
		me._ht_pdf_icon.onmouseleave=function (e) {
			me._ht_pdf_icon__img.style.visibility='inherit';
			me._ht_pdf_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_pdf_icon']=false;
		}
		me._ht_pdf_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_icon);
		me._ht_pdf.appendChild(me._ht_pdf_bg);
		el=me._ht_pdf_custom_image=document.createElement('div');
		els=me._ht_pdf_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_pdf_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_pdf_custom_image.ggText_untranslated = img;
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_pdf_custom_image.ggSubElement.style.width = '0px';
			me._ht_pdf_custom_image.ggSubElement.style.height = '0px';
			me._ht_pdf_custom_image.ggSubElement.src='';
			me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_pdf_custom_image.ggText != player._(me._ht_pdf_custom_image.ggText_untranslated)) {
				me._ht_pdf_custom_image.ggText = player._(me._ht_pdf_custom_image.ggText_untranslated);
				me._ht_pdf_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_pdf_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_custom_image.style.transition='';
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_custom_image.style.visibility=(Number(me._ht_pdf_custom_image.style.opacity)>0||!me._ht_pdf_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
					me._ht_pdf_custom_image.ggVisible=true;
				}
				else {
					me._ht_pdf_custom_image.style.visibility="hidden";
					me._ht_pdf_custom_image.ggSubElement.src='';
					me._ht_pdf_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_pdf_custom_image.logicBlock_visible();
		me._ht_pdf_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.clientHeight;
			var img = me._ht_pdf_custom_image__img;
			var aspectRatioDiv = me._ht_pdf_custom_image.clientWidth / me._ht_pdf_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentWidth < me._ht_pdf_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_pdf_custom_image.scrollLeft=currentWidth / 2 - me._ht_pdf_custom_image.clientWidth / 2;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentHeight < me._ht_pdf_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_pdf_custom_image.scrollTop=currentHeight / 2 - me._ht_pdf_custom_image.clientHeight / 2;
			}
		}
		me._ht_pdf.appendChild(me._ht_pdf_custom_image);
		me._ht_pdf.logicBlock_visible();
		me.elementMouseOver['ht_pdf']=false;
		me._ht_pdf_title.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_pdf_bg']=false;
		me.elementMouseOver['ht_pdf_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_pdf_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_pdf_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_pdf_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_pdf_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_pdf.logicBlock_visible();
			};
			me.__div = me._ht_pdf;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 734px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_file_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_file_hs_popup_vid.ggInitMedia(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "video_file_hs_popup_vid";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_file_popup_phone.ggInitMedia(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_file_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._ht_video_file_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_file']=false;
			me._ht_video_file_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_title=document.createElement('div');
		els=me._ht_video_file_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_file_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_title.style.transition='';
				if (me._ht_video_file_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_title.style.visibility=(Number(me._ht_video_file_title.style.opacity)>0||!me._ht_video_file_title.style.opacity)?'inherit':'hidden';
					me._ht_video_file_title.ggVisible=true;
				}
				else {
					me._ht_video_file_title.style.visibility="hidden";
					me._ht_video_file_title.ggVisible=false;
				}
			}
		}
		me._ht_video_file_title.logicBlock_visible();
		me._ht_video_file_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_title);
		el=me._ht_video_file_bg=document.createElement('div');
		el.ggId="ht_video_file_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_bg.style.transition='background-color 0s';
				if (me._ht_video_file_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_bg.style.visibility="hidden";
					me._ht_video_file_bg.ggVisible=false;
				}
				else {
					me._ht_video_file_bg.style.visibility=(Number(me._ht_video_file_bg.style.opacity)>0||!me._ht_video_file_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_file_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_file_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_file_bg.style.transition='background-color 0s';
				if (me._ht_video_file_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_file_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_file_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_file_bg.logicBlock_backgroundcolor();
		me._ht_video_file_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_file_bg']=true;
			me._ht_video_file_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_file_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_file_bg']=false;
			me._ht_video_file_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_file_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_icon=document.createElement('div');
		els=me._ht_video_file_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMND'+
			'gsNDAuNTdWMjMuNDNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_file_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_file_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_file_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon.onmouseenter=function (e) {
			me._ht_video_file_icon__img.style.visibility='hidden';
			me._ht_video_file_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_file_icon']=true;
		}
		me._ht_video_file_icon.onmouseleave=function (e) {
			me._ht_video_file_icon__img.style.visibility='inherit';
			me._ht_video_file_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_file_icon']=false;
		}
		me._ht_video_file_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_bg.appendChild(me._ht_video_file_icon);
		me._ht_video_file.appendChild(me._ht_video_file_bg);
		el=me._ht_video_file_custom_image=document.createElement('div');
		els=me._ht_video_file_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_file_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_file_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_file_custom_image.ggAltText));
			me._ht_video_file_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_file_custom_image.ggText_untranslated = img;
			me._ht_video_file_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_file_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_file_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_file_custom_image.ggSubElement.src='';
			me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_file_custom_image.ggText != player._(me._ht_video_file_custom_image.ggText_untranslated)) {
				me._ht_video_file_custom_image.ggText = player._(me._ht_video_file_custom_image.ggText_untranslated);
				me._ht_video_file_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_file_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_custom_image.style.transition='';
				if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_custom_image.style.visibility=(Number(me._ht_video_file_custom_image.style.opacity)>0||!me._ht_video_file_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
					me._ht_video_file_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_file_custom_image.style.visibility="hidden";
					me._ht_video_file_custom_image.ggSubElement.src='';
					me._ht_video_file_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_file_custom_image.logicBlock_visible();
		me._ht_video_file_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_file_custom_image.clientWidth;
			var parentHeight = me._ht_video_file_custom_image.clientHeight;
			var img = me._ht_video_file_custom_image__img;
			var aspectRatioDiv = me._ht_video_file_custom_image.clientWidth / me._ht_video_file_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentWidth < me._ht_video_file_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_file_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_file_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentHeight < me._ht_video_file_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_file_custom_image.scrollTop=currentHeight / 2 - me._ht_video_file_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_file.appendChild(me._ht_video_file_custom_image);
		me._ht_video_file.logicBlock_visible();
		me.elementMouseOver['ht_video_file']=false;
		me._ht_video_file_title.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_file_bg']=false;
		me.elementMouseOver['ht_video_file_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_file_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_file_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_file_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_file_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_file_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 734px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style.transition='';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
				else {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
			}
		}
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_url_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_url_hs_popup_vid.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "video_url_hs_popup_vid";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_url_popup_phone.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_url_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._ht_video_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_url']=false;
			me._ht_video_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_title=document.createElement('div');
		els=me._ht_video_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_url_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_title.style.transition='';
				if (me._ht_video_url_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_title.style.visibility=(Number(me._ht_video_url_title.style.opacity)>0||!me._ht_video_url_title.style.opacity)?'inherit':'hidden';
					me._ht_video_url_title.ggVisible=true;
				}
				else {
					me._ht_video_url_title.style.visibility="hidden";
					me._ht_video_url_title.ggVisible=false;
				}
			}
		}
		me._ht_video_url_title.logicBlock_visible();
		me._ht_video_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_title);
		el=me._ht_video_url_bg=document.createElement('div');
		el.ggId="ht_video_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_bg.style.transition='background-color 0s';
				if (me._ht_video_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_bg.style.visibility="hidden";
					me._ht_video_url_bg.ggVisible=false;
				}
				else {
					me._ht_video_url_bg.style.visibility=(Number(me._ht_video_url_bg.style.opacity)>0||!me._ht_video_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_url_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_url_bg.style.transition='background-color 0s';
				if (me._ht_video_url_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_url_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_url_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_url_bg.logicBlock_backgroundcolor();
		me._ht_video_url_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_url_bg']=true;
			me._ht_video_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_url_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_url_bg']=false;
			me._ht_video_url_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_icon=document.createElement('div');
		els=me._ht_video_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMND'+
			'gsNDAuNTdWMjMuNDNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_url_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_icon.onmouseenter=function (e) {
			me._ht_video_url_icon__img.style.visibility='hidden';
			me._ht_video_url_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_icon']=true;
		}
		me._ht_video_url_icon.onmouseleave=function (e) {
			me._ht_video_url_icon__img.style.visibility='inherit';
			me._ht_video_url_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_icon']=false;
		}
		me._ht_video_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_bg.appendChild(me._ht_video_url_icon);
		me._ht_video_url.appendChild(me._ht_video_url_bg);
		el=me._ht_video_url_custom_image=document.createElement('div');
		els=me._ht_video_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_url_custom_image.ggAltText));
			me._ht_video_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_url_custom_image.ggText_untranslated = img;
			me._ht_video_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_url_custom_image.ggSubElement.src='';
			me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_url_custom_image.ggText != player._(me._ht_video_url_custom_image.ggText_untranslated)) {
				me._ht_video_url_custom_image.ggText = player._(me._ht_video_url_custom_image.ggText_untranslated);
				me._ht_video_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_custom_image.style.transition='';
				if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_custom_image.style.visibility=(Number(me._ht_video_url_custom_image.style.opacity)>0||!me._ht_video_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
					me._ht_video_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_url_custom_image.style.visibility="hidden";
					me._ht_video_url_custom_image.ggSubElement.src='';
					me._ht_video_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_url_custom_image.logicBlock_visible();
		me._ht_video_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_url_custom_image.clientWidth;
			var parentHeight = me._ht_video_url_custom_image.clientHeight;
			var img = me._ht_video_url_custom_image__img;
			var aspectRatioDiv = me._ht_video_url_custom_image.clientWidth / me._ht_video_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentWidth < me._ht_video_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentHeight < me._ht_video_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_url_custom_image.scrollTop=currentHeight / 2 - me._ht_video_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_url.appendChild(me._ht_video_url_custom_image);
		me._ht_video_url.logicBlock_visible();
		me.elementMouseOver['ht_video_url']=false;
		me._ht_video_url_title.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_url_bg']=false;
		me.elementMouseOver['ht_video_url_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 624px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style.transition='';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
				else {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_vimeo_hs_popup_vid.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._vimeo_popup_phone.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._ht_video_vimeo_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_vimeo']=false;
			me._ht_video_vimeo_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_title=document.createElement('div');
		els=me._ht_video_vimeo_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_vimeo_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_title.style.transition='';
				if (me._ht_video_vimeo_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_title.style.visibility=(Number(me._ht_video_vimeo_title.style.opacity)>0||!me._ht_video_vimeo_title.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_title.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_title.style.visibility="hidden";
					me._ht_video_vimeo_title.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_title.logicBlock_visible();
		me._ht_video_vimeo_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_title);
		el=me._ht_video_vimeo_bg=document.createElement('div');
		el.ggId="ht_video_vimeo_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_bg.style.transition='background-color 0s';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_bg.style.visibility="hidden";
					me._ht_video_vimeo_bg.ggVisible=false;
				}
				else {
					me._ht_video_vimeo_bg.style.visibility=(Number(me._ht_video_vimeo_bg.style.opacity)>0||!me._ht_video_vimeo_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_vimeo_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_vimeo_bg.style.transition='background-color 0s';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_vimeo_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_vimeo_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		me._ht_video_vimeo_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_vimeo_bg']=true;
			me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_vimeo_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_vimeo_bg']=false;
			me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_vimeo_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_icon=document.createElement('div');
		els=me._ht_video_vimeo_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMND'+
			'gsNDAuNTdWMjMuNDNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_vimeo_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_vimeo_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_vimeo_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_icon.onmouseenter=function (e) {
			me._ht_video_vimeo_icon__img.style.visibility='hidden';
			me._ht_video_vimeo_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_vimeo_icon']=true;
		}
		me._ht_video_vimeo_icon.onmouseleave=function (e) {
			me._ht_video_vimeo_icon__img.style.visibility='inherit';
			me._ht_video_vimeo_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_vimeo_icon']=false;
		}
		me._ht_video_vimeo_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_bg.appendChild(me._ht_video_vimeo_icon);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_bg);
		el=me._ht_video_vimeo_custom_image=document.createElement('div');
		els=me._ht_video_vimeo_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_vimeo_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_vimeo_custom_image.ggAltText));
			me._ht_video_vimeo_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_vimeo_custom_image.ggText_untranslated = img;
			me._ht_video_vimeo_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.src='';
			me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_vimeo_custom_image.ggText != player._(me._ht_video_vimeo_custom_image.ggText_untranslated)) {
				me._ht_video_vimeo_custom_image.ggText = player._(me._ht_video_vimeo_custom_image.ggText_untranslated);
				me._ht_video_vimeo_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_vimeo_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_custom_image.style.transition='';
				if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_custom_image.style.visibility=(Number(me._ht_video_vimeo_custom_image.style.opacity)>0||!me._ht_video_vimeo_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
					me._ht_video_vimeo_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_custom_image.style.visibility="hidden";
					me._ht_video_vimeo_custom_image.ggSubElement.src='';
					me._ht_video_vimeo_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
		me._ht_video_vimeo_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_vimeo_custom_image.clientWidth;
			var parentHeight = me._ht_video_vimeo_custom_image.clientHeight;
			var img = me._ht_video_vimeo_custom_image__img;
			var aspectRatioDiv = me._ht_video_vimeo_custom_image.clientWidth / me._ht_video_vimeo_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentWidth < me._ht_video_vimeo_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_vimeo_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_vimeo_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentHeight < me._ht_video_vimeo_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_vimeo_custom_image.scrollTop=currentHeight / 2 - me._ht_video_vimeo_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_custom_image);
		me._ht_video_vimeo.logicBlock_visible();
		me.elementMouseOver['ht_video_vimeo']=false;
		me._ht_video_vimeo_title.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_vimeo_bg']=false;
		me.elementMouseOver['ht_video_vimeo_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_vimeo_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_vimeo_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_vimeo_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_vimeo_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 0px;';
		hs+='left : 514px;';
		hs+='position : absolute;';
		hs+='top : 186px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style.transition='';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
				else {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_youtube_hs_popup_vid.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._video_hs_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._video_hs_popup_title.ggUpdateText();
				skin._video_hs_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_map_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_floorplan_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_thumbnails_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup_full', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._youtube_popup_phone.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_thumbs', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_map', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_floorplan', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_share', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._ht_video_youtube_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_youtube']=false;
			me._ht_video_youtube_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_title=document.createElement('div');
		els=me._ht_video_youtube_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text open_sans";
		el.ggType='text';
		hs ='';
		hs+='bottom : 7px;';
		hs+='color : rgba(230,230,230,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #141414;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 6px 8px 12px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_youtube_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_title.style.transition='';
				if (me._ht_video_youtube_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_title.style.visibility=(Number(me._ht_video_youtube_title.style.opacity)>0||!me._ht_video_youtube_title.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_title.ggVisible=true;
				}
				else {
					me._ht_video_youtube_title.style.visibility="hidden";
					me._ht_video_youtube_title.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_title.logicBlock_visible();
		me._ht_video_youtube_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_title);
		el=me._ht_video_youtube_bg=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #3d3d3d;';
		hs+='border : 4px solid #000000;';
		hs+='border-radius : 20px;';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((26px + 8px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_bg.style.transition='background-color 0s';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_bg.style.visibility="hidden";
					me._ht_video_youtube_bg.ggVisible=false;
				}
				else {
					me._ht_video_youtube_bg.style.visibility=(Number(me._ht_video_youtube_bg.style.opacity)>0||!me._ht_video_youtube_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['ht_video_youtube_bg'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._ht_video_youtube_bg.style.transition='background-color 0s';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateBackgroundColor == 0) {
					me._ht_video_youtube_bg.style.backgroundColor="rgba(77,77,77,1)";
				}
				else {
					me._ht_video_youtube_bg.style.backgroundColor="rgba(61,61,61,1)";
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		me._ht_video_youtube_bg.onmouseenter=function (e) {
			me.elementMouseOver['ht_video_youtube_bg']=true;
			me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_youtube_bg.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_youtube_bg']=false;
			me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		}
		me._ht_video_youtube_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_icon=document.createElement('div');
		els=me._ht_video_youtube_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6I2U2ZTZlNiIgZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMND'+
			'gsNDAuNTdWMjMuNDNaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeD0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZX'+
			'JfMSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiMxNDE0MTQ7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzQuNSwyNy40djkuMUgyMHYtOS4xSDM0LjUgTTQ0LDMwLjR2My4zTDQxLjIsMzJMNDQsMzAuNCBNNDgsMjMuNGwtOS41LDUuNXYtNS41SDE2djE3LjFoMjIuNXYtNS41bDkuNSw1LjUgICBWMjMuNHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_youtube_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon.onmouseenter=function (e) {
			me._ht_video_youtube_icon__img.style.visibility='hidden';
			me._ht_video_youtube_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_youtube_icon']=true;
		}
		me._ht_video_youtube_icon.onmouseleave=function (e) {
			me._ht_video_youtube_icon__img.style.visibility='inherit';
			me._ht_video_youtube_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_youtube_icon']=false;
		}
		me._ht_video_youtube_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_bg.appendChild(me._ht_video_youtube_icon);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_bg);
		el=me._ht_video_youtube_custom_image=document.createElement('div');
		els=me._ht_video_youtube_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_youtube_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_youtube_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_youtube_custom_image.ggAltText));
			me._ht_video_youtube_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_youtube_custom_image.ggText_untranslated = img;
			me._ht_video_youtube_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_youtube_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.src='';
			me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_youtube_custom_image.ggText != player._(me._ht_video_youtube_custom_image.ggText_untranslated)) {
				me._ht_video_youtube_custom_image.ggText = player._(me._ht_video_youtube_custom_image.ggText_untranslated);
				me._ht_video_youtube_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_youtube_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_custom_image.style.transition='';
				if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_custom_image.style.visibility=(Number(me._ht_video_youtube_custom_image.style.opacity)>0||!me._ht_video_youtube_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
					me._ht_video_youtube_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_youtube_custom_image.style.visibility="hidden";
					me._ht_video_youtube_custom_image.ggSubElement.src='';
					me._ht_video_youtube_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
		me._ht_video_youtube_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_youtube_custom_image.clientWidth;
			var parentHeight = me._ht_video_youtube_custom_image.clientHeight;
			var img = me._ht_video_youtube_custom_image__img;
			var aspectRatioDiv = me._ht_video_youtube_custom_image.clientWidth / me._ht_video_youtube_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentWidth < me._ht_video_youtube_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_youtube_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_youtube_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentHeight < me._ht_video_youtube_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_youtube_custom_image.scrollTop=currentHeight / 2 - me._ht_video_youtube_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_custom_image);
		me._ht_video_youtube.logicBlock_visible();
		me.elementMouseOver['ht_video_youtube']=false;
		me._ht_video_youtube_title.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_backgroundcolor();
		me.elementMouseOver['ht_video_youtube_bg']=false;
		me.elementMouseOver['ht_video_youtube_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_youtube_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_youtube_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_youtube_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_youtube_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.__div = me._ht_video_youtube;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_video_youtube') {
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_pdf') {
				hotspot.skinid = 'ht_pdf';
				hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_info_1';
				hsinst = new SkinHotspotClass_ht_info_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #999; } .ggdefaulthotspot { font-family: "Open Sans"; font-size: 15px; -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .open_sans { font-family: "Open Sans"; } .ggskin_text>div::-webkit-scrollbar { width: 4px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Open Sans"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/open-sans-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/open-sans-latin-600.woff2") format("woff2"); } @font-face { font-family: "Open Sans"; font-style: normal; font-weight: 700; src: local(""), url("$(skinbase)fonts/open-sans-latin-700.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}