$(document).ready(function() {

  $('[data-toggle="drawer"]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).data('target');
    if ($(target).hasClass('is-active')) {
      $(target).removeClass('is-active');
      $('body').removeClass('u-nbfc');
    } else {
      $(target).addClass('is-active');
      $('body').addClass('u-nbfc');
    }

  });

  $('[data-toggle="dropdown"]').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var target = $(this).data('target');
    $(target).toggleClass('is-active');
  });

  $(document).click(function(e) {
    e.stopPropagation();

    if (!$(e.target).is('[data-toggle="dropdown"]')) {
      $('[data-toggle="dropdown"]').each(function() {
        $($(this).data('target')).removeClass('is-active');
      })
    }
  });

  $('[data-toggle="tab"]').on('click', function(e) {
    e.preventDefault();
    var target = $(this).data('target');
    $(this).addClass('is-active').siblings().removeClass('is-active');      
    $(target).addClass('is-active').siblings().removeClass('is-active');      
    
  });    

  $('[data-toggle="dialog"]').each(function(e) {
    var target = $(this).data('target');
    var dialog = document.querySelector(target);
    dialogPolyfill.registerDialog(dialog);

    $(this).on('click', function(e) { dialog.showModal(); });
    $(target).find('.js-close').click(function(e){ 
      e.preventDefault();
      dialog.close(); 
    });
  });

});
