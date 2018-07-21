#!/usr/bin/python
# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.shortcuts import render
from penghuwanModel.models import IndexImage

def test(request):
    penghuwan = IndexImage(image_src= "./wuzhichao/penghuwan.png")
    penghuwan.save()
    return HttpResponse("<p> 数据添加成功</p>")
