from django.db import models

# Create your models here.


class IndexImage(models.Model):
    image_src = models.CharField(max_length=100)
    image_name = models.CharField(max_length=45)