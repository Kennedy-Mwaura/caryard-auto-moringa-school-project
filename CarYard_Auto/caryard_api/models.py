
from django.db import models



# Create your models here.
class Car(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    number = models.IntegerField()
    sold = models.BooleanField(default=False)
    available = models.BooleanField(default=False)
    incoming = models.BooleanField(default=False)
    def __str__(self):
        return self.name

class Customer(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=10)
    email = models.EmailField(max_length=70)
    address = models.CharField(max_length=255)
    id_number = models.IntegerField()
    def __str__(self):
        return self.name


class Orders(models.Model):
    id = models.AutoField(primary_key=True)
    car =  models.ForeignKey(Car, on_delete=models.CASCADE)
    customer = models.ManyToManyField(Customer)
    date = models.DateField(auto_now_add=True)
    High = 'H'
    Low = 'L'
    Normal = 'N'
    options =(( High, 'High'), ( Low, 'Low'), ( Normal, 'Normal'))
    priority = models.CharField(max_length=1, choices=options, default=Normal )
    amount = models.IntegerField()
    class Meta:
        ordering = ['date']

