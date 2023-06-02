function show() {
    radiobtn1 = document.getElementById("switch1");
    radiobtn2 = document.getElementById("switch2");
    radiobtn3 = document.getElementById("switch3");
    radiobtn4 = document.getElementById("switch4");
    radiobtn5 = document.getElementById("switch5");
    if(radiobtn1.checked == true)
    {
        radiobtn1.checked = false;
        radiobtn3.checked = false;
        radiobtn4.checked = false;
        radiobtn5.checked = false;

        radiobtn2.checked = true;
    }
    else if(radiobtn2.checked == true)
    {
        radiobtn2.checked = false;
        radiobtn1.checked = false;
        radiobtn4.checked = false;
        radiobtn5.checked = false;

        radiobtn3.checked = true;
    }
    else if(radiobtn3.checked == true)
    {
        radiobtn2.checked = false;
        radiobtn3.checked = false;
        radiobtn1.checked = false;
        radiobtn5.checked = false;

        radiobtn4.checked = true;
    }
    else if(radiobtn4.checked == true)
    {
        radiobtn2.checked = false;
        radiobtn3.checked = false;
        radiobtn4.checked = false;
        radiobtn1.checked = false;

        radiobtn5.checked = true;
    }
    else if(radiobtn5.checked == true)
    {
        radiobtn2.checked = false;
        radiobtn3.checked = false;
        radiobtn4.checked = false;
        radiobtn5.checked = false;

        radiobtn1.checked = true;
    }

}

let timerId = setInterval(() => show(), 5000);
