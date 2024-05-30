#blogProject 내부의 urls.py
from django.contrib import admin
from django.urls import path, include
from blog import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path ("", views.home, name="home"),
    path("blog/", include("blog.urls")),
    path("posts/", include("posts.urls")),
    path('create/', views.create, name='create'),
    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)