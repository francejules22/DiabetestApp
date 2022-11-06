import numpy as np
import sys
from flask import Flask, request, jsonify, render_template, make_response
from flask_restplus import Api, Resource, fields
from joblib import load  #loading the file

flask_app = Flask(__name__)
app = Api(app = flask_app,
                version = "1.0",
                title = "Diabetes Prediction",
                description = "Predict results using a trained model")

name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
                            {'age' : fields.Integer(required = True, description="Age", help="Age cannot be blank"),
                             'sex' : fields.String(required = True, description="Sex", help="Sex cannot be blank"),
                             'polyuria' : fields.String(required = True, description="Polyuria", help="Polyuria cannot be blank"),
                             'polydipsia' : fields.String(required = True, description="Polydipsia", help="Polydipsia cannot be blank"),
                             'weight' : fields.String(required = True, description="Weight", help="Weight cannot be blank"),
                             'polyphagia' : fields.String(required = True, description="Polyphagia", help="Polyphagia cannot be blank"),
                             'genital' : fields.String(required = True, description="Genital", help="Genital cannot be blank"),
                             'visual' : fields.String(required = True, description="Visual", help="Visual cannot be blank"),
                             'itching' : fields.String(required = True, description="Itching", help="Itching cannot be blank"),
                             'irritability' : fields.String(required = True, description="Irritability", help="Irritability cannot be blank"),
                             'healing' : fields.String(required = True, description="Healing", help="Healing cannot be blank"),
                             'paresis' : fields.String(required = True, description="Paresis", help="Paresis cannot be blank"),
                             'stiffness' : fields.String(required = True, description="Stiffness", help="Stiffness cannot be blank"),
                             'alopecia' : fields.String(required = True, description="Alopecia", help="Alopecia cannot be blank"),
                             'obesity' : fields.String(required = True, description="Obesity", help="Obesity cannot be blank")      
                        })

#model created using Gradient Boosting Algorithm
classifier = load('diabetes_model')

#model transform using Standard Scaler
trans = load('diabetes_transform')


@name_space.route("/")
class MainClass(Resource):
    def options(self):
        response = make_response()
        response.headers.add("Access-Control-Allow-Origin", "*")
        response.headers.add("Access-Control-Allow-Headers", "*")
        response.headers.add("Access-Control-Allow-Methods", "*")
        return response
    
    @app.expect(model)
    def post(self):
         try: 
              formData = request.json
              data = [val for val in formData.values()]
              prediction = classifier.predict([np.array(list(data.values()))])
              types = { 0: 'Low Risk' , 1: 'High Risk'}
              response = jsonify({
                          "statusCode": 200,
                          "status" : "Successfully Predict",
                          "result" : "Based on your result, you have" + types[prediction[0]] + " of having Type II Diabetes."
                        })
              response.headers.add('Access-Control-Allow-Origin', '*')
              return response
         except Exception as error: 
              return jsonify({
                          "statusCode" : 500,
                          "status" : "Unsuccessfully Predict",
                          "error" : str(error)
              })



# @app.route('/')
# def home():
#     return render_template('index.html')

# @app.route('/y_predict',methods=['POST'])
# def y_predict():
#For rendering results on HTML GUI    
    # X_test = [[X for X in request.form.values()]]
    # print(X_test)
    # test=trans.transform(X_test)
    # test=test[:,1:]
    # print(test)
    # prediction = model.predict(test)
    # print(prediction)
    # output=prediction[0]
    # if prediction[0]==1:
    #     output="High Risk"
    # else:
    #     output="Low Risk"
    # return render_template('index.html', prediction_text='Diabetes detected - {}'.format(output))



#To run the app
if __name__ == "__main__":
    flask_app.run(debug=True)

