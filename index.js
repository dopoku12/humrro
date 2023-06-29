$(document).ready(function () {
    const form = $('#form')
    const formLi = [{
        notify: [

            "Work related articles shared by employees",
            "Work related posts created by employees",
            "Personal employee stories",
            "Stories with photos (especially if they are of pets)",
        ],

        artNum: 'How many articles would you like shared each week?',
        text: 'Short summary about yourself for your profile'


    },
    ]
    formLi.map(i => (

        $(` <input type="checkbox" id="check"> <label for="check">${i.notify}</label>
    
    <input type="number" id="weeks" placeholder="${i.artNum}">
    <textarea name="" id="profile" placeholder="${i.text}" cols="30" rows="10"></textarea>
        `).appendTo('#form')
    ))

    $('  <button type="submit">Submit</button>').appendTo('#form')

    form.submit((e) => {
        e.preventDefault()
        const email = $(form).find('#email').val()
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.test(regex) === false) {
            $('#email').css('border-color', 'red')
        }


    })



})