from rest_framework import serializers
from .models import Car, Customer, Orders   

class CarSerializer(serializers.HyperLinkSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class CustomerSerializer(serializers.HyperLinkSerializer):
    class Meta:
        model = Customer
        fields = ('name', 'email', 'phone')

class OrderSerializer(serializers.HyperLinkSerializer):
    class Meta:
        model = Order
        fields = ('date', 'amount', 'customer')
