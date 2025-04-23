$(document).ready(function () {
   //Code geos here
   let text = "Hello";
   console.log("Text: ", text);
   const TAX = 0.13;
   console.log("Constant: ",TAX);
   //Topic 1: Selecting elements
    //Select the particular/specific section
    let section = $('#main_page');
    console.log("Section: ",section);
    //Select the First Article
    let first = $('#main_page > article:first-child');
    console.log("First: ",first);
    //Select the next element after one element
    let next = first.next();
    console.log("Next : ",next);
    //Select all paragraphs
    let pgs = $('#main_page p');
    console.log("Paragraph: ",pgs);
    //Other Way
    let pgs2 = $('#main_page').find('p').css({color: 'green'});
    console.log("Paragraph: ",pgs2);
    //Select the paragraph for Article 2
    let article2_p = $('.article2 p');
    console.log("A2 paragraph: ", article2_p);
    // Topic 2: click event
    $("input[type=button]").click(()=>{
        //fetch the username & display in p tag
        let uname = $('#username').val();
        //alert(uname);
        $('#main_page form p').html("Hello " + uname);
        $('#main_page form p').css({color: 'orange'});
        $('#username').addClass("demo");
        $('#username').removeClass("test");
        $('#username').toggleClass("test");

    });
    //Topic 3: setTimeout(function,time)
    setTimeout(()=>{
        //change the color
        $('#main_page form p').css({color: 'blue'});
    }, 36000);
    //Animate
    $( "#main_page" ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500 );
});