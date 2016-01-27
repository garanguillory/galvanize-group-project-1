// ** Begin Stripe API ** //
Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

$(function($) {
  $('#payment-form').submit(function(event) {
    prevent.default();
    var $form = $(this);

    // Disable the submit button to prevent repeated clicks
    $form.find('button').prop('disabled', true);

    Stripe.card.createToken($form, stripeResponseHandler);

    // Prevent the form from submitting with the default action
    return false;
  });
});

function stripeResponseHandler(status, response) {
  var $form = $('#payment-form');

  if (response.error) {
    // Show the errors on the form
    $form.find('.payment-errors').text(response.error.message);
    $form.find('button').prop('disabled', false);
  } else {
    // response contains id and card, which contains additional card details
    var token = response.id;
    Stripe.card.validateCardNumber($('.card-number').val());
    Stripe.card.validateExpiry(token.exp_month, token.exp_year);
    Stripe.card.validateCVC(token.cvc)
    // Insert the token into the form so it gets submitted to the server
  }
};
// ** End Stripe API ** //

$(document).on('ready', function() {
  console.log('sanity check!');
});




