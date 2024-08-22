const $send = document.querySelector('#send');
const $input_text = document.querySelector('#input_text');
$input_text.focus();
const $result_text = document.querySelector('.result_text');

$send.addEventListener('click', function(){
  let message = `<div class="user">${$input_text.value}</div>`;
  $result_text.insertAdjacentHTML('beforeend', message);
  $input_text.value = '';
  $result_text.scrollTop = $result_text.scrollHeight;
});
$input_text.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    let message = `<div class="user">${$input_text.value}</div>`;
    $result_text.insertAdjacentHTML('beforeend', message);
    $input_text.value = '';
    $result_text.scrollTop = $result_text.scrollHeight;
  }
});
