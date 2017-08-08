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

         var data = {};

        data['product_name'] = product_name;
        data['nmb'] = nmb;
        data['product_price'] = product_price;

        var csrf_token = $('#form_buying_product [name="csrfmiddlewaretoken"]').val();
        data['csrfmiddlewaretoken'] = csrf_token;

        var url = form.attr('action');
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            cache: true,
            success: function (data) {
                console.log('OK');
                console.log(data.products_total_nmb);
                if (data.products_total_nmb){
                   $('#basket_total_nmb').text('('+ data.products_total_nmb + ')');
                }
            },
            error: function (data) {
                console.log('error')
            }
        });


      $('#add-to-cart').append('<li>' + '<a href="">'+ product_name + ' ' + nmb + ' ' + 'шт ' +
          product_price + ' UAH' + '</a>' + '<a class="delete-item" href="">x</a>' + '</li>');
    });

    $(document).on('click', 'delete-item', function (e) {
        e.preventDefault();
        $(this).closesest('<li>').remove();


    })


});