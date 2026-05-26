from django.contrib import admin
from .models import Bouquet, Category


@admin.register(Bouquet)
class BouquetAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'is_featured')
    list_filter = ('is_featured',)
    search_fields = ('name',)
    prepopulated_fields = {"slug": ("name",)}

admin.site.register(Category)