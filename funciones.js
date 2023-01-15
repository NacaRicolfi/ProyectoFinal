
document.getElementById('boton_color1').addEventListener('click',function() {
    document.body.style.backgroundColor = 'White';
})

document.getElementById('boton_color2').addEventListener('click',function() {
    document.body.style.backgroundColor = '#FF7F50';
})

let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
            location.reload();
})

function muestra1(){
    document.getElementById('estudiosad1').style.display="block";
    document.getElementById('estudiosad2').style.display="none";
  };
  
  function muestra2(){
    document.getElementById('estudiosad1').style.display="none";
    document.getElementById('estudiosad2').style.display="block";
  };