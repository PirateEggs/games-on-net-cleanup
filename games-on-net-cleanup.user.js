// ==UserScript==
// @name          Clean up games.on.net Forums
// @description   Pew pew that crazy games.on.net Forums header
// @match         *://games.on.net/forums*
// @require       http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @version       1.3
// ==/UserScript==

// don't execute in frames
if (window.top !== window.self) {
  return;
}

$(function() {
  GM_addStyle('#mspace-block { display: none }');
  GM_addStyle('#gon_cleanup_nav li { display: inline-block }');
  GM_addStyle('#gon_cleanup_nav p.username { margin-top: 0; margin-bottom: 0 }');
  GM_addStyle('#gon_cleanup_nav p.user_tools { margin-bottom: 0 }');
  GM_addStyle('div#overall_container { width: 960px !important }');
  
  var mspace = $("#mspace-block");
  var username = mspace.find(".username");
  var user_tools = mspace.find(".self");
  var user_tools_html = user_tools.html();
  user_tools.html(user_tools_html.replace(/<br>/gi, ' | '));
  var post_tools = mspace.find(".post_tools");
  var new_nav = mspace.after('<ul id="gon_cleanup_nav"></ul>').parent().find(':last');
  new_nav.append("<li>").parent().find(':last').html(username);
  username.after(user_tools);
  new_nav.append("<li>").parent().find(':last').html(post_tools);

  // remove left/right skin elements because they take up space weirdly
  // in 1024 width window
  var remove_ids = [ "skin_left", "skin_right" ];
  for (var i = 0; i < remove_ids.length; i += 1) {
    var e = document.getElementById(remove_ids[i]);
    e.parentNode.removeChild(e);
  }
});
