## Step 1: Import Dependencies and Libraries
# Commented out IPython magic to ensure Python compatibility.
# %matplotlib inline 
import numpy as np    # linear algebra 
import pandas as pd    # Data processing, Input & Output load    

from sklearn.ensemble import GradientBoostingClassifier    # GBM algorithm

import joblib  #Joblib is a set of tools to provide lightweight pipelining in Python (Avoid computing twice the same thing)
from sklearn.model_selection import train_test_split as tts
from sklearn.model_selection import cross_val_score, GridSearchCV
                                    # GridSearchCV - Implements a “fit” and a “score” method
                                    # train_test_split - Split arrays or matrices into random train and test subsets
                                    # cross_val_score - Evaluate a score by cross-validation 

from sklearn.metrics import mean_squared_error
from sklearn.metrics import f1_score, precision_score, accuracy_score, roc_auc_score, recall_score, roc_curve
from sklearn.metrics import make_scorer, confusion_matrix, classification_report   # Differnt metrics to evaluate the model

import warnings    # To avoid warning messages in the code run
warnings.filterwarnings('ignore')


## Step 2: Import Dataset
import pandas as pd 
diabetes = pd.read_csv('TypeIIDiabetes.csv')    
diabetes


## Step 3: Applying the Label Encoder
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
for i in diabetes.columns[1:] :
    diabetes[i] = le.fit_transform(diabetes[i])
diabetes


## Step 4: Splitting Independent and dependent features
##a.) Independent Variables
x=diabetes.iloc[:,:-1].values
x
##b.) Dependent Variables"""
y=diabetes.iloc[:,-1].values
y


## Step 5: Transform Data using Standard Scaler
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
x=sc.fit_transform(x)
x


## Step 6: Save the transform data using joblib
import joblib  
joblib.dump(sc,'Type2Diabetes_transform')


## Step 7: Splitting the dataset into 70% training data and 30% testing data
X_train, X_test, y_train, y_test = tts(x, y, test_size = 0.3, random_state = 100) 
print('Train Shape: ', X_train.shape)
print('Test Shape: ', X_test.shape)


## Step 8: Construct Model using Gradient Boosting
model_parameters = {'n_estimators': [10, 50, 100, 200, 500, 750, 1000], 'max_depth': [3, 5, 10],
                    'min_samples_leaf': [np.random.randint(1,10)], 'max_features': [None, 'sqrt', 'log2']}

model = GradientBoostingClassifier(random_state = 10)
gscv_GBM = GridSearchCV(estimator = model, 
                        param_grid = model_parameters, 
                        cv = 5, 
                        verbose = 1, 
                        n_jobs = -1,
                        scoring = 'roc_auc')
gscv_GBM.fit(X_train, y_train)


### a.) Refitting the data
gradient_booster_model = GradientBoostingClassifier(**gscv_GBM.best_params_)
gradient_booster_model.fit(X_train, y_train)


### b.) Displaying model prediction and classification report
train_pred = gradient_booster_model.predict(X_train)
test_pred = gradient_booster_model.predict(X_test)

print('Classification report for train data is : \n',
      classification_report(y_train, train_pred))
print('Classification report for test data is : \n',
      classification_report(y_test, test_pred))


### c.) Making predictions for test data by testing the model
y_pred = gradient_booster_model.predict(X_test)
predictions = [round(value) for value in y_pred]
predictions


### d.) Checking the prediction accuracy for test data of the model
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy: %.2f%%" % (accuracy * 100.0))


### e.) Model Evaluation Metrics
from sklearn.metrics import accuracy_score,recall_score,precision_score,f1_score
print('Accuracy Score : ' + str(accuracy_score(y_test, y_pred)))
print('Precision Score : ' + str(precision_score(y_test, y_pred)))
print('Recall Score : ' + str(recall_score(y_test, y_pred)))
print('F1 Score : ' + str(f1_score(y_test, y_pred)))


### f.) Confusion Matrix

from sklearn.metrics import confusion_matrix
print('Confusion Matrix : \n' + str(confusion_matrix(y_test, y_pred)))

### g.) Saving the Gradient Boosting Model
joblib.dump(gradient_booster_model, 'Type2Diabetes_model')

