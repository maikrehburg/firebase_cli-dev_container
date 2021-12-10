(function() {
    
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDxWRNvHHFj5J8C0M5A5mP5RwgyLIRvIN4",
        authDomain: "db-test-edd45.firebaseapp.com",
        databaseURL: "https://db-test-edd45-default-rtdb.firebaseio.com",
        projectId: "db-test-edd45",
        storageBucket: "db-test-edd45.appspot.com",
        messagingSenderId: "930099754602",
        appId: "1:930099754602:web:6fb588cf9990ba83a57c13",
        measurementId: "G-4GHRRCT93Y"
    };

    firebase.initializeApp(firebaseConfig);

    console.log("hello");


    // get elements from html
    var btn_user = document.getElementById('btn_user');
    var pre_users = document.getElementById('users');

    var btn_activity = document.getElementById('btn_activity');
    var pre_activities = document.getElementById('activities');

    // event listeners
    btn_user.addEventListener('click', () => {
        var txt_user_id = document.getElementById('id_user').value;
        var txt_user_name = document.getElementById('name_user').value;
        var txt_user_mail = document.getElementById('mail_user').value;

        writeUserData(txt_user_id, txt_user_name, txt_user_mail);
    });

    btn_activity.addEventListener('click', () => {

        var txt_activity_id = document.getElementById('id_activity').value;
        var txt_activity_name = document.getElementById('name_activity').value;
        var txt_activity_emission = document.getElementById('emission_activity').value;

        writeActivityData(txt_activity_id, txt_activity_name, txt_activity_emission);
    });


    // create db references
    const db_ref_users = firebase.database().ref().child('users');
    const db_ref_activities = firebase.database().ref().child('activities');

    // sync objects changes
    db_ref_users.on('value', snap => {
        pre_users.innerText = JSON.stringify(snap.val(), null, 3);
    });

    db_ref_activities.on('value', snap => {
        pre_activities.innerText = JSON.stringify(snap.val(), null, 3);
    });

    
    function writeUserData(user_id, user_name, email) {
        console.log("add new user to db");
        firebase.database().ref('/users/' + user_id).set({
            username: user_name,
            email: email
        });
    }

    function writeActivityData(activity_id, activity_name, activity_emission) {
        console.log("add new activity to db");
        firebase.database().ref('/activities/' + activity_id).set({
            activity: activity_name,
            emission: activity_emission
        });
    }
}());