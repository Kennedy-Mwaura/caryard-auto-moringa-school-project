# Generated by Django 3.2.4 on 2021-06-22 19:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('company', models.CharField(max_length=255)),
                ('number', models.IntegerField()),
                ('sold', models.BooleanField(default=False)),
                ('available', models.BooleanField(default=False)),
                ('incoming', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('phone', models.CharField(max_length=10)),
                ('email', models.EmailField(max_length=70)),
                ('address', models.CharField(max_length=255)),
                ('id_number', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('date', models.DateField(auto_now_add=True)),
                ('priority', models.CharField(choices=[('H', 'High'), ('L', 'Low'), ('N', 'Normal')], default='N', max_length=1)),
                ('car', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='caryard_api.car')),
                ('customer', models.ManyToManyField(to='caryard_api.Customer')),
            ],
            options={
                'ordering': ['date'],
            },
        ),
    ]