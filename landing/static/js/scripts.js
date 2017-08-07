$(document).ready(function() {
            var form = $('#form_buying_product');
    console.log(form);
    form.on('submit', function(e) {
        e.preventDefault();
        console.log('123');
        var nmb = $('#number').val();
        var submit_button = $('#submit_button');
        var product_name = submit_button.data('product_name');
        var product_id = submit_button.data('product_id');
        var product_price = submit_button.data('product_price');
        console.log( product_id);
         console.log( product_name);

      $('#add-to-cart').append('<li>' + product_name + ' ' + nmb + 'шт' + product_price + 'UAH' +
          '<a class="delete-item" href="">x</a>' +'</li>');
    })

    $(document).on('click', 'delete-item', function (e) {
        e.preventDefault();
        $(this).closesest('<li>').remove();


    })


});