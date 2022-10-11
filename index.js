var form = document.getElementById('form')

form.addEventListener('submit', function(event) {

    event.preventDefault()

    var name = document.getElementById('name').value
    console.log(name)

    var email = document.getElementById('email').value

    console.log(email)
    var tel = document.getElementById('tel').value

    console.log(tel)
    var location = document.getElementById('location').value

    console.log(location)

    var school = document.getElementById('school').value

    console.log(school)

    var department = document.getElementById('department').value

    console.log(department)

    var level = document.getElementById('level').value

    console.log(level)

})