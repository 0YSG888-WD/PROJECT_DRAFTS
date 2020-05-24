from django.shortcuts import render, HttpResponse, redirect
from time import strftime

# Create your views here.
def index(request):
    return HttpResponse('WHITNEY IS SO BEAUTIFUL')

def new(request):
    return HttpResponse('NEW NEW NEW NEW ENW NWE NW')

def create(request):
    return HttpResponse('CREATE')

def displayInt(request, val):
    return HttpResponse(f'TEST {val}')

def edit(request, val):
    return HttpResponse(f'WHFIEONFIEWNFOIEWJFIO {val}')

def destroy(request, val):
    return HttpResponse(f'DESTROY {val}')

def template_test(request):
    context = {
        "name": "Sean",
        "status": "Whitney is Beautiful"
    }
    return render(request, 'test.html', context)

def time(request):
    context = {
        "test": "test",
        "time": strftime("%d-%m-%Y %H:%M %p")
    }
    return render(request, 'time.html', context)

def form_test(request):
    return render(request, 'form.html')

def form_process(request):
    request.session['username'] = request.POST['username']
    request.session['password'] = request.POST['password']
    return redirect('/form_display')

def form_display(request):
    return render(request, 'form_display.html')

def greensocktest(request):
    return render(request, 'greensock.html')

def animations(request):
    return render(request, 'animations.html')