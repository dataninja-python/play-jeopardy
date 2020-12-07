import $ = require("jquery");

// NOTE: this script was created just for advanced features like modals and sticky navbars;
// i'm not certain if it should be placed before or after my app.js file but will try both


$(() => {
  // console.log("hi");
  const $openBtn = $("#openModal");
  const $modal = $("#modal");
  const $closeBtn = $("#close");

  const openModal = () => {
      $modal.css("display", "block");
  };

  $openBtn.on("click", openModal);

  const closeModal = () => {
    $modal.css("display", "none");
  };

  $closeBtn.on("click", closeModal);

  // setTimeout(openModal, 5000);
});