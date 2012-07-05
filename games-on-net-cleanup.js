(function () {
  "use strict";
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
}());
