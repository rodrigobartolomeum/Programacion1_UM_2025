from flask import Flask
from dotenv import load_dotenv

from flask_restful import Api


import os

#Importar sqlalchemy
from flask_sqlalchemy import SQLAlchemy

#Inicializamos restful
api = Api()

#Inicializar sqlalchemy
db = SQLAlchemy()

def create_app():
    #Inicializar flask
    app = Flask(__name__)
    #cargamos variables de entorno
    load_dotenv()
    
    if not os.path.exists(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')):
        os.mknod(os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME'))
    
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////'+os.getenv('DATABASE_PATH')+os.getenv('DATABASE_NAME')
    db.init_app(app)
    
    import main.resources as resources
    #cargar los recursos
    api.add_resource(resources.AnimalResource, '/animal/<id>')
    api.add_resource(resources.AnimalesResource, '/animales')
    
    api.init_app(app)
    return app
    