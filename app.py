from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/api/finance')
def get_finance_data():
    try:
        response = requests.get('https://api.hgbrasil.com/finance')
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': 'Erro ao obter os dados da API'}), 500

if __name__ == '__main__':
    app.run()
