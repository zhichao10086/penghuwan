#!/usr/bin/python
# -*- coding: utf-8 -*-

from django.http import HttpResponse
from django.shortcuts import render


def jianli(request):

    return render(request, 'jianli.html')