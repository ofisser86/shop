from django.shortcuts import render


def landing(request):
    return render(request, 'landind/landing.html', locals())