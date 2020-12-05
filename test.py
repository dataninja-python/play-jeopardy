# After losing a day to data issues, I resorted to using a tried and true language to grab and format the api data
# i considered using python, go and rust; sources for those looked at seriously below
# https://www.codegrepper.com/code-examples/python/python+write+requests+response+to+text+file; https://tutorialedge.net/golang/consuming-restful-api-with-go/
import requests

apiURL = "https://jservice.io/api/categories?count=30"
myFile = "py_test.txt"
chunk_size = 25

response = requests.get(apiURL)

with open(myFile, "wb") as fd:
    for chunk in response.iter_content(chunk_size):
        fd.write(chunk)