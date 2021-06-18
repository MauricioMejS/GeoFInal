function Send() {
    var email = (document.getElementById("txtEmail") || {}).value || "";
    var phone = (document.getElementById("txtPhone") || {}).value || "";
    var info = (document.getElementById("txtInf") || {}).value || "";
  
    if (email == "" || phone == "" || info == "") {
      document.getElementById("alrtDanger").style.display = "block";
      document.getElementById("alrtSuccess").style.display = "none";
    } else {
      document.getElementById("alrtSuccess").style.display = "block";
      document.getElementById("alrtDanger").style.display = "none";
    }
  }