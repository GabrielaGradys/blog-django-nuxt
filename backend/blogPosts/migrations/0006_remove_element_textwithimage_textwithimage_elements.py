# Generated by Django 4.1.2 on 2022-11-02 22:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blogPosts', '0005_remove_element_grade_grade_post_alter_element_name_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='element',
            name='textwithimage',
        ),
        migrations.AddField(
            model_name='textwithimage',
            name='elements',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, to='blogPosts.element'),
        ),
    ]