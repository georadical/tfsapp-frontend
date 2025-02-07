// filter Js
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      $(".post-box")
        .not("." + value)
        .hide("1000");
      $(".post-box")
        .filter("." + value)
        .show("1000");
    }
  });

  // Add active to btn
  //   $(".filter-item").click(function () {
  //     $(this).addClass("active-filter").siblings().removeClass("active-filter");
  //   });
  // });

  // Header Background Change On Scroll
  let header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
  });

  //$(document).ready(function () {
  // Create a variable to store the current active filter item.
  var currentActiveFilterItem = $(".filter-item:first");

  // Add an event listener to the `click` event of the `.filter-item` elements.
  $(".filter-item").click(function () {
    // Get the clicked item.
    var clickedItem = $(this);

    // If the clicked item is not the current active filter item, then...
    if (clickedItem !== currentActiveFilterItem) {
      // Remove the `active-filter` class from the current active filter item.
      currentActiveFilterItem.removeClass("active-filter");

      // Add the `active-filter` class to the clicked item.
      clickedItem.addClass("active-filter");

      // Update the current active filter item to the clicked item.
      currentActiveFilterItem = clickedItem;
    }
  });
});
