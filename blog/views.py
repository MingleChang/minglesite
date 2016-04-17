from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	return HttpResponse("Hello, world. You're at the blog index.")

def detail(request,blog_id):
	response = "You're looking at the blog %s."
	return HttpResponse(response % blog_id)