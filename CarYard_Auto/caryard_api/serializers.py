from rest_framework import serializers
from .models import Car, Customer, Orders   

class CarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orders
        fields = '__all__'
