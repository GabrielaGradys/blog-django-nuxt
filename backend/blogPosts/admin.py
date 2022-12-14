from django.contrib import admin
import nested_admin

from .models import Paragraph, Element, TextWithImage, Grade


class TextWithImageInline(nested_admin.NestedStackedInline):
    model = TextWithImage


class ElementsInline(nested_admin.NestedStackedInline):
    model = Element
    inlines = [TextWithImageInline]


class GradeInline(nested_admin.NestedStackedInline):
    model = Grade


@admin.register(Element)
class ElementAdmin(nested_admin.NestedModelAdmin):
    model = Element
    inlines = [TextWithImageInline]


@admin.register(Paragraph)
class ParagraphAdmin(nested_admin.NestedModelAdmin):
    model = Paragraph
    inlines = [ElementsInline]


@admin.register(TextWithImage)
class TextWithImageAdmin(admin.ModelAdmin):
    model = TextWithImage


@admin.register(Grade)
class GradeAdmin(admin.ModelAdmin):
    model = Grade
