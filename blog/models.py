from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Sign(models.Model):
	title = models.CharField(max_length=200)

	def __unicode__(self):
		return self.title

class Blog(models.Model):
	title = models.CharField(max_length=500)
	content = models.TextField()
	pub_date = models.DateTimeField('date published')
	signs = models.ManyToManyField(Sign)

	def __unicode__(self):
		return self.title
