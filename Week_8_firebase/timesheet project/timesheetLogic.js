var config = {
    apiKey: "AIzaSyBAtdwxnmKQSihcb6tj99iSZFCYJij6FKA",
    authDomain: "fukaround-28acc.firebaseapp.com",
    databaseURL: "https://fukaround-28acc.firebaseio.com",
    projectId: "fukaround-28acc",
    storageBucket: "fukaround-28acc.appspot.com",
    messagingSenderId: "614494525735"
  };
  firebase.initializeApp(config);
  var db = firebase.database();
  $(document).on("click", "#add-employee-btn", function() {
     event.preventDefault();
     var name = $("#employee-name-input").val().trim();
     var role = $("#role-input").val().trim();
     var start = $("#start-input").val().trim();
     var rate = $("#rate-input").val().trim();
     console.log(name + role + start + rate);
     db.ref('/employees').push({
         Ename: name, 
         Erole: role,
         Estartdate: start,
         Erate: rate
     })
        $("#employee-name-input").val('');
        $("#role-input").val('');
        $("#start-input").val('');
        $("#rate-input").val('');
  });

  db.ref('/employees').on("child_added", function(childsnap) {
    var employee = childsnap.val();
    var row = $("<tr>");
    row.append('<td>' + employee.Ename + '</td>');
    row.append('<td>' + employee.Erole + '</td>');
    row.append('<td>' + employee.Estartdate + '</td>');
    row.append('<td>' + employee.Erate + '</td>');
    $('#employee-table').append(row);
  });