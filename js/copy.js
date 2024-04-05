function copyText() {
  var text = document.getElementById("text").innerHTML;
  var input = document.getElementById("input");
  input.value = text;
  console.log('12')
  console.log(input.value)
  input.select();//选中文本
  document.execCommand("Copy");
}