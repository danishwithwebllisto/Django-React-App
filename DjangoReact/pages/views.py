from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

def index(request):    
    data = {'name': 'zafar','age':20, 'role': 'python developer'}
    context = {'data':json.dumps(data)}
    return render(request, 'pages/index.html', context)


def about(request):
    return render(request,'pages/about.html')

@csrf_exempt
def contact(request):
    if request.method == "POST":
        post_data = json.loads(request.body.decode("utf-8"))
        print(post_data)
        return JsonResponse({'status':'Success'})
    return render(request,"pages/contact.html")