from django.contrib import admin

# Register your models here.
from .models import Sign,Blog

class BlogAdmin(admin.ModelAdmin):
	list_display = ('title', 'pub_date')
	fieldsets=[
		(None,					{'fields':['title']}),
		('Content',				{'fields':['content'],'classes': ['collapse']}),
		('Signs',				{'fields':['signs'],'classes': ['collapse']}),
		('Publish Date',		{'fields':['pub_date'],'classes': ['collapse']}),
	]

admin.site.register(Sign)
admin.site.register(Blog,BlogAdmin)