# -*- coding: utf-8 -*-

## Step 1: Importing The Libraries and Dependencies
# %matplotlib inline 
import pandas as pd # Data processing, Input & Output load 
import numpy as np  # linear algebra 
#from sklearn.preprocessing import LabelEncoder #performs the conversion of these labels of categorical data into a numeric format.
#from sklearn.preprocessing import StandardScaler #standardizing data such the the transformed feature has 0 mean and and a standard deviation of 1.
#Import the model
from sklearn.ensemble import GradientBoostingClassifier    # GBM algorithm
import joblib  #Joblib is a set of tools to provide lightweight pipelining in Python (Avoid computing twice the same thing / save the model)
from sklearn.model_selection import train_test_split   # train_test_split - Split arrays or matrices into random train and test subsets                      
from sklearn.model_selection import KFold
from sklearn.metrics import accuracy_score                               
from sklearn.metrics import classification_report   # Different metrics to evaluate the model

import warnings    # To avoid warning messages in the code run
warnings.filterwarnings('ignore')


##Step 2: Load The Dataset
import pandas as pd 
diabetes = pd.read_csv('TypeIIDiabetes.csv')    
diabetes


##Step 3: Apply Label Encoder
from sklearn.preprocessing import LabelEncoder
le = LabelEncoder()
for i in diabetes.columns[1:] :
    diabetes[i] = le.fit_transform(diabetes[i])
diabetes


## Step 4: Spliting Independent and dependent variables
#a.) Independent Variables
x=diabetes.iloc[:,:-1].values
x

#b.) Dependent Variables"""
y=diabetes.iloc[:,-1].values
y

## Step 5: Transform Data using Standard Scaler
from sklearn.preprocessing import StandardScaler
sc = StandardScaler()
x=sc.fit_transform(x)
x

## Step 6: Save the transform data using joblib
import joblib  
joblib.dump(sc,'diabetes_transform')


## Step 7: Split the dataset into training (80%) and testing (20%) data
from sklearn.model_selection import train_test_split
X_train,X_test,Y_train,Y_test = train_test_split(x,y,test_size=0.2,random_state=0)

print('Train Shape: ', X_train.shape)
print('Test Shape: ', Y_test.shape)


## Step 8: Construct Model using Gradient Boosting
from sklearn.ensemble import GradientBoostingClassifier 
gradient_booster = GradientBoostingClassifier(learning_rate=0.1)
gradient_booster.get_params()

# a.) Refitting the data
gradient_booster.fit(X_train, Y_train)

# b.) Displaying model prediction and classification report
train_pred = gradient_booster.predict(X_train)
test_pred = gradient_booster.predict(X_test)

print('Classification report for train data is : \n',
      classification_report(Y_train, train_pred))
print('Classification report for test data is : \n',
      classification_report(Y_test, test_pred))

# c.) Making predictions for test data by testing the model
y_pred = gradient_booster.predict(X_test)
predictions = [round(value) for value in y_pred]
predictions

# d.) Checking the prediction accuracy for test data of the model
accuracy = accuracy_score(Y_test, y_pred)
print("Accuracy: %.2f%%" % (accuracy * 100.0))

# e.) Model Evaluation Metrics
from sklearn.metrics import accuracy_score,recall_score,precision_score,f1_score
print('Accuracy Score : ' + str(accuracy_score(Y_test, y_pred)))
print('Precision Score : ' + str(precision_score(Y_test, y_pred)))
print('Recall Score : ' + str(recall_score(Y_test, y_pred)))
print('F1 Score : ' + str(f1_score(Y_test, y_pred)))

# f.) Confusion Matrix
from sklearn.metrics import confusion_matrix
print('Confusion Matrix : \n' + str(confusion_matrix(Y_test, y_pred)))

# g.) Save the model to disk
joblib.dump(gradient_booster, 'diabetes_model')
