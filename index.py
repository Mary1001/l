from flask import Flask
app = Flask(__name__)

@app.route('/')
def home(): return 'página principal'

@app.route('/contacto/')
def contactos(): return 'página contacto'

@app.route('/otro')
def ot(): return 'otro contacto'

if (__name__=='__main__'):
    app.run()







