from flask import Flask, request
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/getdataBystuid',methods=['POST'])
def getdataBystuid():
    if request.method=='POST':
        name = request.json.get("name").strip()
        studyid = request.json.get("studyid").strip()
        print("post请求参数：",name,studyid)
        path = "./data.json"
        with open(path,'r',encoding = 'utf-8') as fp:
            jsondata = json.load(fp)
        # print(jsondata)
        print(name in jsondata.keys(), jsondata[name]["studyid"] , studyid, jsondata[name]["studyid"] ==studyid )
        if name in jsondata.keys() and jsondata[name]["studyid"] == studyid:
            res ={"name": name}
            res["success"] = True
            res.update(jsondata[name])
        else:
            res = {
                "success": False
            }
        # print(res)
        return json.dumps(res)
    else:
        return "request method error!"

@app.route('/test',methods=['POST','GET'])
def test():
    return "port:1218 normal"

    


if __name__ == '__main__':
    app.run(port=1218,debug=True)