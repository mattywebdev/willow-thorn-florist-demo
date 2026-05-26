from django.shortcuts import render
from .models import Bouquet
from django.http import JsonResponse
from django.template.loader import render_to_string


def home(request):
    featured_bouquets = Bouquet.objects.filter(is_featured=True)[:11]

    return render(request, 'core/home.html', {
        'featured_bouquets': featured_bouquets
    })

def bouquets(request):

    category = request.GET.get("category")
    sort = request.GET.get("sort")

    bouquets = Bouquet.objects.all()

    if category:
        bouquets = bouquets.filter(category__slug=category)

    if sort == "price_asc":
        bouquets = bouquets.order_by("price")

    elif sort == "price_desc":
        bouquets = bouquets.order_by("-price")

    elif sort == "name":
        bouquets = bouquets.order_by("name")

    # AJAX REQUEST
    if request.headers.get('x-requested-with') == 'XMLHttpRequest':

        html = render_to_string(
            'partials/bouquet_grid.html',
            {'bouquets': bouquets}
        )

        return JsonResponse({'html': html})

    return render(
        request,
        'core/bouquets.html',
        {'bouquets': bouquets}
    )