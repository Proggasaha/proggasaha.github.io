let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}



let themeDots = document.getElementsByClassName('theme-dot');


for (var i = 0; i < themeDots.length; i++) {

    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = 'default.css'
    }
    if (mode == 'blue') {
        document.getElementById('theme-style').href = 'blue.css'
    }
    if (mode == 'green') {
        document.getElementById('theme-style').href = 'green.css'
    }
    if (mode == 'purple') {
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode);
}



// make contact form working 

var btn = document.getElementById('submit-btn');
        btn.addEventListener('click', function(e){
            e.preventDefault();
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;

            var body = 'Name: ' +name+ '<br /> Email:' +email+ '<br/> Message: ' + message; 

            Email.send({
                    Host : "smtp.gmail.com",
                    Username : "proggasaha005@gmail.com",
                    Password : "ihgqnipuhyrjonyk",
                    To : 'progga-2018223976@ling.du.ac.bd',
                    From : email,
                    Subject : "New Contact Form Enquiry",
                    Body : body
                }).then(
                        message => {
                            document.getElementsByClassName('confirmation').style.display = 'block';
                        }
                    );
        })    
