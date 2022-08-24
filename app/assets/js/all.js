$(function () {
  console.log('Hello Bootstrap5');
  $('#modal-expand').on('click', function (e) {
    $('#modal-expand').toggleClass('active');
  });
});
