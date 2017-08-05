from django.shortcuts import render
from .forms import SubscriberForm
from products.models import ProductImage


def landing(request):
    name = 'Dima'
    form = SubscriberForm(request.POST or None)
    if request.method == "POST" and form.is_valid():
        data = form.cleaned_data
        print(data['name'])

        new_form = form.save()

    return render(request, 'landing/landing.html', locals())


def home(request):
    products_images = ProductImage.objects.filter(is_active=True, is_main=True, product__is_active=True)
    products_images_phone = products_images.filter(product__category_id=1)
    products_images_laptop = products_images.filter(product__category_id=2)
    return render(request, 'landing/home.html', locals())
