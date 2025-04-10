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
    
    @staticmethod
    #Convertir JSON a objeto
    def from_json(animal_json):
        id = animal_json.get('id')
        nombre = animal_json.get('nombre')
        raza = animal_json.get('raza')
        return Animal(id=id,
                      nombre=nombre,
                    raza=raza,
                    )