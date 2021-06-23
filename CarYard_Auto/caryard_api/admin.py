from django.contrib import admin
from .models import Car, Customer, Orders 

# Register your models here.


admin.site.register(Car)
admin.site.register(Customer)
admin.site.register(Orders)