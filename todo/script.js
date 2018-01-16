let list = ['uno','due'];


$('#addTodo').on('click', ()=>{
  list.push($('#todo').val());
  showList();
})

function showList(){
  $('#ul-list').empty();
  list.forEach((el, i)=>{
    $('#ul-list').append(`<li>${el} <button onclick="remove(${i})">-</button></li>`);
  });
}

function remove(i){
  list.splice(i, 1);
  showList();
}
