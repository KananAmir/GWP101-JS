// let btn = document.querySelector(".btn");

let btn = $(".btn");

// console.log(btn[0].innerHTML);
console.log(btn.html());

// $("#heading");
// $("h1");

$(".btn").click(function () {
  //   $("#heading").css({ color: "red", backgroundColor: "green" });

  //   $(".box").hide();
  //   $(".box").toggle();

  //   $(".box").fadeOut(2000);
  $(".box").fadeOut("slow", () => {
    console.log("fade out");
  });
});

$(".title").click(() => {
  //   $(".content").slideUp();
  //   $(".content").slideDown();
  $(".content").slideToggle();
});

// $('form').submit(()=>{

// })

$("#txt").keyup(function () {
  console.log("sadas");
  console.log($("#txt").val());

  //   console.log($("h5").text());
  //   console.log($("h5").html());

  $("h5").html("Salam");

  $("h5").remove();

  //   console.log($("h5").text());
});
