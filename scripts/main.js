 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8R3UeSE66bdzhlgzdyjmHrEyUBQIekFs",
    authDomain: "amber-heat-9880.firebaseapp.com",
    databaseURL: "https://amber-heat-9880.firebaseio.com",
    storageBucket: "amber-heat-9880.appspot.com",
    messagingSenderId: "628131767456"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  logs = this.database.ref('logs');

 function envia(tipo_evt, user_id_var, tempo_var, versao_var){
  this.logs.push(
  {
  user_id: user_id_var,
  tempo: tempo_var,
  versao: versao_var,
  tipo: tipo_evt
  }
  );
 }


function tempo_inicial(){
  // definir tempo inicial
  var d = Date.now();
  // enviar para Firebase
  envia("inicio", id_pessoa, d, versao);
}