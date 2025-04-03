from flask_restful import Resource
from flask import request
from main.models import AnimalModel
from .. import db

ANIMALES = {
    1:{'nombre':'Pepe', 'raza':'Obejero Aleman'},
    2:{'nombre':'Juanchi', 'raza':'Caniche'}
}

USUARIOS = {
    
}
#Definir el recurso Animal
class Animal(Resource):
    def get(self, id):
        animal = db.session.query(AnimalModel).get_or_404(id)
        return animal.to_json()
        
        # if int(id) in ANIMALES:
        #     return ANIMALES[int(id)]
        
        # return 'El id es inexistente', 404
        
    def delete(self, id):
        if int(id) in ANIMALES:
            del ANIMALES[int(id)]
            return 'Eliminado con exito', 204
        
        return 'El id a eliminar es inexistente', 404
    
    def put(self, id):
        if int(id) in ANIMALES:
            animal = ANIMALES[int(id)]
            data = request.get_json()
            animal.update(data)
            return 'Animal editado con exito', 201
        
        return 'El id que intentan editar es inexistente', 404

class Animales(Resource):
    def get(seft):
        return ANIMALES
    
    def post(self):
        animal = request.get_json()
        id = int(max(ANIMALES.keys()))+1
        ANIMALES[id] = animal
        return ANIMALES[id], 201
        