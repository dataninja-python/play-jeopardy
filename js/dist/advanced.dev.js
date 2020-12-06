"use strict";

// "use strict";
// exports.__esModule = true;
// var $ = require("jquery");
// NOTE: this script was created just for advanced features like modals and sticky navbars;
// i'm not certain if it should be placed before or after my app.js file but will try both
$(function () {
  // console.log("hi");
  var $openBtn = $("#openModal");
  var $modal = $("#modal");
  var $closeBtn = $("#close");

  var openModal = function openModal() {
    $modal.css("display", "block");
  };

  $openBtn.on("click", openModal);

  var closeModal = function closeModal() {
    $modal.css("display", "none");
  };

  $closeBtn.on("click", closeModal); // setTimeout(openModal, 5000);
});