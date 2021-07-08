var container = $('.container');
var button = $('.button');

button.on("click", giveAnswer); 

function giveAnswer() {
  console.log("inside giveAnswer function");
  event.preventDefault();
  var nameInput = $('.name').val();

  var ecoScore = 0;
  
  if (nameInput == null || nameInput == ""){
    return;
    console.log(ecoScore);
  }
  if($('.Q1A1').is(':checked')) {
    ecoScore += 3;
  }else if ($('.Q1A2').is(':checked')){
    ecoScore +=2;
  }else if ($('.Q1A3').is(':checked')){  
    ecoScore+=1;
  }else  {
    ecoScore+=0;
  }
  if($('.Q2A1').is(':checked')) {
    ecoScore += 3;
  }else if ($('.Q2A2').is(':checked')){
    ecoScore +=2;
  }else if ($('.Q2A3').is(':checked')){  
    ecoScore+=1;
  }else  {
    ecoScore+=0;
  }
  if($('.Q3A1').is(':checked')) {
    ecoScore += 3;
  }else if ($('.Q3A2').is(':checked')){
    ecoScore +=2;
  }else if ($('.Q3A3').is(':checked')){  
    ecoScore+=1;
  }else  {
    ecoScore+=0;
  }
   if($('.Q4A1').is(':checked')) {
    ecoScore += 3;
  }else if ($('.Q4A2').is(':checked')){
    ecoScore +=2;
  }else if ($('.Q4A3').is(':checked')){  
    ecoScore+=1;
  }else  {
    ecoScore+=0;
  }
  if($('.Q5A1').is(':checked')) {
    ecoScore += 3;
  }else if ($('.Q5A2').is(':checked')){
    ecoScore +=2;
  }else if ($('.Q5A3').is(':checked')){  
    ecoScore+=1;
  }else  {
    ecoScore+=0;
  }
  if($('.Q6A1').is(':checked')) {
    ecoScore += 3;
  }else if ($('.Q6A2').is(':checked')){
    ecoScore +=2;
  }else if ($('.Q6A3').is(':checked')){  
    ecoScore+=1;
  }else  {
    ecoScore+=0;
  }
  if (ecoScore <= 7){
     container.append(`<p class = "answer"> Hi ${nameInput}! The path to sustaibability is a longer one, but don't worry, this website has so much information and resources to help you establish more sustainble practices, start small, are there reuseable items that can replace your one time use items. Is there some basic recycling speration system in your house hold. Explore this website for more useful tips. Good Luck!</p>`);
  }else if (ecoScore<= 13){
    container.append(`<p class = "answer"> Hi ${nameInput}! Looks like you have a great start to a more sustainble life style. That's awesome. Keep at it. Explore this website to find tips like ways to extend the life cycle of your products and enhance a sustainble mindset that works against throw away culture</p>`);
  }else if (ecoScore<= 18){
    container.append(`<p class = "answer"> Hi ${nameInput}! Way to be an eco enthusiast! For more tips and informatin on sustainblity, explore the website. Sustainbility is a never ending process!</p>`);
  }else{
    return;
  }

var name = $('.name');
name.val("");
}