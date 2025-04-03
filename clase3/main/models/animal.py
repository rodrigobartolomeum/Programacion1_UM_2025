from .. import db

class Animal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    raza = db.Column(db.String(100), nullable=False)
    
    #Convertir a JSON
    def to_json(self):
        animal_json = {
            'id':self.id,
            'nombre': str(self.nombre),
            'raza': str(self.raza),
        }
        
        return animal_json