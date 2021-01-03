var filter = "win16|win32|win64|mac|macintel";

if ( navigator.platform ) {
 if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) {
   //mobile
   console.log('mobile 접속');
   location.replace('mobile.html');
 } else {
   //pc
   console.log('pc 접속');
   
   
 }
}