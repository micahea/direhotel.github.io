function val() {
  var a = document.getElementById('NAME').value;
  var f = document.getElementById('fname').value;
  var email=document.getElementById('email').value;
  // var r = $('input[name=room]:checked').val();
  var p = parseInt(document.getElementById('phoneno')).value;
phone(p)
user(a);
fn(f);
em(email);
// check(r);

  alert("you will receive email in next 2hrs thak you")
}



function user(a){
  if(a=="")
  {
  alert("Please Enter Your Name");
  document.bform.name.focus();
  return false;
  }
  if(!isNaN(a))
  {
  alert("Please Enter Only Characters");
  document.bform.name.select();
  return false;
  }
}


function fn(f){
  if(f=="")
  {
  alert("Please Enter Your fName");
  document.bform.fname.focus();
  return false;
  }
  if(!isNaN(f))
  {
  alert("Please Enter Only Characters");
  document.bform.fname.select();
  return false;
  }
}


function em(email)
{
  filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (filter.test(bform.email.value))
    {
 return true;

    }
    else {
      alert("You have entered an invalid email address!");
      document.bform.email.focus();
      return false;
    }
}
function check(r){
ErrorText= "";
if ( r == false )
{
alert ( "Please choose your " );
return false;
}
if (ErrorText= "") { form.submit() }
}

function phone(p)
{
var p = document.bform.phoneno.value;
if(p=="")
{
alert("please Enter the Contact Number");
document.bform.phoneno.focus();
return false;
}
if(isNaN(p))
{
alert("Enter the valid Mobile Number(Like : 0921109888)");
document.bform.phoneno.focus();
return false;
}
}
















/*



function validate(){
  var name = document.getElementById('NAME');
  var fname = document.getElementById('fname');
  filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var email=document.getElementById('email');
  var phone = parseInt(document.getElementById('phoneno'));
  var option=document.getElementById('room');
    var val= false;




if (NAME.value.trim() =="" || fname.value.trim()=="") {
  alert("NO blank values allows");
  return false;
}


  if (filter.test(bform.email.value))
    {


    }
    else {
      alert("You have entered an invalid email address!");
      document.form1.email.focus();
      return false;
    }


           if(phone.value.match(phoneno))
           {
    return true;
           }
           else {
             document.getElementById("phoneno").style.borderColor = "red";
             alert("phone number ")
             return false;
           }


for(var i=0; i<option.length;i++){
  if(option[i].checked == true){
    val =true;
  }
}
if(!val){
  alert("heloo")
  return false;
}
else {
   alert("you will get the booking payment details in your email chek for your email")
}



 }
*/
