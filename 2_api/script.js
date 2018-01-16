$('#button').button();

$('#btnGetPeople').on('click', ()=>{
  $.get('https://swapi.co/api/people', (data)=>{
    const people = data.results;
    people.forEach((person)=>{
      $('#list').append(`<li>${person.name}</li>`);
    })
  });
})


$('#search').on('input', (e)=>{
  const val = $('#search').val();
  $.get(`https://swapi.co/api/people/?search=${val}`, (data)=>{
    if(data.count > 0){
      $('#searchList').empty();
      data.results.forEach((ris)=>{
        $('#searchList').append(`<li>${ris.name}</li>`)
      })
    }
  })
});
