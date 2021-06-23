
from django.db import models



# Create your models here.
class Car(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    number = models.IntegerField()
    sold = models.BooleanField(default=false)
    available = models.BooleanField(default=false)
    incoming = models.BooleanField(default=false)
    def __str__(self):
        return self.name

class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=10)
    email = models.EmailField(max_length=70)
    address = models.CharField(max_length=255)
    id_number = models.IntegerField(max_length=8)
    def __str__(self):
        return self.name


class Orders(models.Model):
    id = AutoField(primary_key=True)
    car =  models.OneToOneField(Car, on_delete=models.CASCADE,primary_key=True)
    customer = models.ManyToManyField(Customer, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    High = 'H'
    Low = 'L'
    Normal = 'N'
    options =(( High, 'High'), ( Low, 'Low'), ( Normal, 'Normal'))
    priority = models.CharField(max_length=1, choices=options, default=Normal )
    class Meta:
        ordering = ['date']
    def __str__(self):
        return self.id 
