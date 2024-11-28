// bai tap thuc hanh ngay 27-11-2024
function checkAge(){
    var tuoi;
     tuoi = window.prompt("Nhập tuổi: ");
     if(tuoi >= 18){
        console.log("Nguoi lon");
     }
     else{
        console.log("Vi thanh nien");
     }
}
checkAge();
function checkEvenOdd(so){
      if(so % 2 == 0){
         console.log("Day la so chan!");
      }
      else{
         console.log("Day la so le!");
      }
}
checkEvenOdd(20);
function compareNumbers(a, b){
   if(a > b){
      console.log("So a lon hon so b");
   }
   else if(a < b){
      console.log("So a nho hon so b");
   }
   else
      console.log("2 so bang nhau");
}
compareNumbers(20, 30);

function checkInteger(a){
   if(a < 0){
      a = a -(a * 2);
   }
   if(a - Math.floor(a) == 0){
      console.log("Day la so nguyen");
   }
   else{
      console.log("Day khong phai so nguyen");
   }
}
checkInteger(-2);
function convertNumberToMonth(a){
   switch(a){
      case (1): 
      console.log("thang mot");
      break;
      case (2): 
      console.log("thang hai");
      break;
      case (3): 
      console.log("thang ba");
      break;
      case (4): 
      console.log("thang bon");
      break;
      case (5): 
      console.log("thang nam");
      break;
      case (6): 
      console.log("thang sau");
      break;
      case (7): 
      console.log("thang bay");
      break;
      case (8): 
      console.log("thang tam");
      break;
      case (9): 
      console.log("thang chin");
      break;
      case (10): 
      console.log("thang muoi");
      break;
      case (11): 
      console.log("thang muoi mot");
      break;
      case (12): 
      console.log("thang muoi hai");
      break;
      default:
         console.log("thang khong hop le");
   }
}
convertNumberToMonth(2);

function calculateShipping(a){
   if(a <= 5){
      return 7000;
   }
   else{
      return (a-5)*2000 + 7000;
   }
}
var b = calculateShipping(10);
console.log(b);

function gradeExam(a){
   if(a >= 90){
      return "xuat sac";
   }
   else if(a >= 80){
      return "gioi";
   }
   else if( a >= 70){
      return "kha";
   }
   else if(a >= 60){
      return "trung binh";
   }
   else{
      return "yeu";
   }
}
var c = gradeExam(90);
console.log(c);