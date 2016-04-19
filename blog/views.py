from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse,Http404,HttpResponseRedirect

from .models import Sign,Blog

# Create your views here.
def index(request):
	# return HttpResponse("Hello, world. You're at the blog index.")
	blog_list = Blog.objects.order_by('-pub_date')[:5]
	context = {'blog_list':blog_list}
	return render(request,'blog/index.html',context)

def detail(request,blog_id):
	# response = "You're looking at the blog %s."
	# return HttpResponse(response % blog_id)
	blog = get_object_or_404(Blog,pk=blog_id)
	context = {'blog':blog}
	return render(request,'blog/detail.html',context)