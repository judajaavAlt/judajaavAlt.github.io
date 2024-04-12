"""
URL configuration for Constructora project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from constructora1.views import IndexView
from django.contrib.auth import views as auth_views
from django.conf import settings
from djgango.conf.urls.static import static
from rest_framework import routers
import requests

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',IndexView.as_view(), name = 'index'),
]

router = routers.DefaultRouter()
router.register('api/myresource', MyResourceViewSet)



# URL a la que enviar la solicitud POST
url = 'https://recaptchaenterprise.googleapis.com/v1/projects/my-project-64509-1712880366463/assessments?key=API_KEY'

# Cargar el cuerpo de la solicitud desde el archivo request.json
with open('request.json', 'r') as file:
    data = file.read()

# Realizar los reemplazos necesarios en el cuerpo de la solicitud (si es necesario)
# real:AIzaSyC19ifBA-RRRvTWrGka9L929QyPJAz9j7Y

data = data.replace('API_KEY', '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe')

# Enviar la solicitud POST
response = requests.post(url, json=data)

# Verificar la respuesta
if response.status_code == 200:
    print("Solicitud exitosa")
    print(response.json())
else:
    print("Error al enviar la solicitud:", response.status_code)
    print(response.text)
