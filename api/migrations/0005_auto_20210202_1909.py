# Generated by Django 3.1.5 on 2021-02-02 19:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210201_2120'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='created_date_time',
        ),
        migrations.RemoveField(
            model_name='task',
            name='due_date',
        ),
    ]
