$(document).ready(function () {

  $("#mybtn").click(() => {
    searchUser();
  })


  async function searchUser() {

    let searchQuery = $("#mysearch").val();
    if (searchQuery == "") {
      alert("Invalid input field");
      return false;
    }

    let url = "https://api.github.com/users/" + searchQuery + "";
    try {
      let response = await fetch(url);
      let data = await response.json();

      $("#name").html(`${data.name}`);
      $("#username").html(`@${data.login}`);

      let bio = data.bio;
      if (bio === "" || bio === null) {
        $("#bio").html('This profile has no bio');
      } else {
        $("#bio").html(`${data.bio}`);
      }


      $("#avatar").attr("src", `${data.avatar_url}`);
      $("#repo").html(`${data.public_repos}`);
      $("#following").html(`${data.following}`);
      $("#followers").html(`${data.followers}`);


      let location = data.location;
      if (location == "" || location == null) {
        $("#location").html('Location not specified');
      } else {
        $("#location").html(`${location}`);
      }


      let tweet = data.twitter_username;
      if (tweet == "" || tweet == null) {
        $("#tweet").html("Not available");
      } else {
        $("#tweet").html(`${tweet}`);
      }


      let blog = data.blog
      if (blog == "" || blog == null) {
        $("#blog").htnl("No blog post available");
      } else {
        $("#blog").htnl(`${blog}`);
      }

      $("#link").attr("href", `${data.html_url}`);
      // $("#link").attr("href", `https://github.com/${data.login}`);
      let created = data.created_at;
      created = timeDateFormat(created);
      $("#date").html(`${created}`);

    } catch (error) {
      // alert("error");
    }
  }


  function timeDateFormat(d){
    let date = new Date(d);
    let dayOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsOfTheYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
  
    // let getDayName = dayOfTheWeek[date.getDay()];
    let getMonthName = monthsOfTheYear[date.getMonth()];
    let getDate = date.getDate();
    let getYear = date.getFullYear();
  
    // return getDayName + " " + getDate + ", " + getMonthName + " " + getYear;
    return getDate + ", " + getMonthName + " " + getYear;
  }

})



// fetch('https://api.github.com/users/USERNAME')
