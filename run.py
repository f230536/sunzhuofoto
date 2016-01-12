#!flask/bin/python
import os
from flask import Flask
from app import app


if __name__ == "__main__":
	# app.run(debug=True)
	port = int(os.environ.get("PORT", 5000))
	app.run(host='0.0.0.0', port=port)
# app.run('24.6.153.190')
# app.run(host='192.168.1.255', port=5000)
