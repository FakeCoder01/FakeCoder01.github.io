function renderFile(file_name) {
  $('#filecontent').html(`<zero-md src="/static/pages/${file_name}" style="background:inherit;background-color:inherit;"><template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/github-markdown-css@5/github-markdown.min.css" /> </template></zero-md><br>`);
  $('#layscreen').show();
  $("#top-demo").hide();
  $("#output-area").hide();
  $(".markdown-body").css('background', 'inherit');
  $(".markdown-body").css('background-color', 'inherit');
  document.getElementById("command").scrollIntoView();
  return true;
}

function fileShow(file_name_arg) {
  var file_name_arg_x = file_name_arg.split(".");
  const file_name = file_name_arg_x[0] + '.md';
  if (current_pwd === '~') {
    for (i = 0; i < commands_list['dirs'].length; i++) {
      if (commands_list['dirs'][i] === file_name_arg) {
        if (renderFile(file_name)) return true;
      }
    }
    return false;
  }
  else {
    const dir_no = commands_list.dir_no[current_pwd];
    for (i = 0; i < commands_list.dirs[dir_no][current_pwd + '/'].length; i++) {
      if (commands_list.dirs[dir_no][current_pwd + '/'][i] === file_name_arg) {
        if (renderFile(file_name)) return true;
      }
    }
    return false;
  }
}