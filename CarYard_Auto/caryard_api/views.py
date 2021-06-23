from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .models import Car, Customer, Orders
from .serializers import CustomerSerializer, OrderSerializer, CarSerializer

# Create your views here.

class GetCustomers(APIView):
    def get(self, request):
        customers = Customer.objects.all()
        serialized = CustomerSerializer(customers, many=True)
        return Response(serialized.data)

def home(request):
    return render(request, 'index.html')
class CustomerViewSet(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer

class CarViewSet(viewsets.ModelViewSet):
    """
    Api to allow users to be viewed or edited 
    """
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrderSerializer
