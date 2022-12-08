import numpy as np
import jsonpickle
from flask_cors import CORS, cross_origin
from flask import Flask, request, jsonify, render_template, send_from_directory
from joblib import load  #loading the file
app = Flask(__name__, static_folder='diabetestfrontend/build', static_url_path='')
CORS(app)

gradient_boosting_model= load('Type2Diabetes_model')
model_transform = load('Type2Diabetes_transform')


@app.route('/predict_api',methods=['POST'])
@cross_origin()
def y_predict():
    response = request.get_json()
    
    X_test = [[X for X in response.values()]]
    test=model_transform.transform(X_test)
    prediction = gradient_boosting_model.predict(test)
    predictionStatus = prediction[0] == 1 and True or False

    if prediction[0] == 1:
        output = "High Risk"
        
    else:
        output = "Low Risk"

    config = {
        "message": output,
        "prediction": predictionStatus
    }

    response_json = jsonpickle.encode(config);

    return response_json

@app.route('/')
@cross_origin()
def serve():
    return send_from_directory(app.static_folder,'index.html')

'''@app.route('/predict_api',methods=['POST'])
def predict_api():
    
    #For direct API calls trought request
    
    data = request.get_json(force=True)
    prediction = model.y_predict([np.array(list(data.values()))])
    output = prediction[0]
    return jsonify(output)'''

if __name__ == "_main_":
    app.run(debug=True)