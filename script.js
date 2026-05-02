 document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('click').checked = false;
            });
        });

        var typed = new Typed(".auto-type" , {
            strings: ["Frontend Developer","Mern Stack Developer", "React Developer"],
            typeSpeed:150,
            backSpeed:150,
            loop:true
        })