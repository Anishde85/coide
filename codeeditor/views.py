from django.shortcuts import render
import requests
import logging
from codeeditor.forms import CodeForm
from django.http import HttpResponse,JsonResponse
logger = logging.getLogger(__name__)
language='PYTHON3'
def TodoListApiView(request):
    inp = CodeForm(request.POST or None)
    if request.method == 'POST' and inp.is_valid():
        source = inp.cleaned_data['code']
        inpu = inp.cleaned_data['input']
        language=inp.cleaned_data['language']
        RUN_URL = u'https://api.hackerearth.com/v3/code/run/'
        CLIENT_SECRET = '5c50ec0c27f8768c8d7903adf216eb9f0cb730a8'
        data = {
            'client_secret': CLIENT_SECRET,
            'async': 0,
            'source': source,
            'input': inpu,
            'lang': language,
            'time_limit': 5,
            'memory_limit': 262144,
        }
        r = requests.post(RUN_URL, data=data)
        if r.json()['compile_status']=="OK":
            return render(request, "index.html", {'form':inp,'output':r.json()['run_status']['output']})
        else:
            return render(request, "index.html", {'form': inp, 'output': r.json()['compile_status']})
    return render(request, "index.html", {'form':inp,'output': ''})