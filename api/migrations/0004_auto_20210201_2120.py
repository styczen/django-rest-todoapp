# Generated by Django 3.1.5 on 2021-02-01 21:20

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210131_1200'),
    ]

    operations = [
        migrations.RenameField(
            model_name='task',
            old_name='content',
            new_name='text',
        ),
    ]
