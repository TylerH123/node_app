#Tyler Huang
#SoftDev1 pd2
#K11 -- Ay Mon Go Git It From Yer Flask
#2020-03-17

from flask import Flask, render_template, request


app = Flask(__name__)

@app.route("/")
def root():
    print(__name__)
    return render_template("demo.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
