from flask import render_template
from app import app
from os import listdir
from os.path import isfile, join

@app.route('/')
@app.route('/index')
def index():
	user = {'nickname' : 'Jason'}
	posts = [  # fake array of posts
	        { 
	            'author': {'nickname': 'John'}, 
	            'body': 'Beautiful day in Portland!' 
	        },
	        { 
	            'author': {'nickname': 'Susan'}, 
	            'body': 'The Avengers movie was so cool!' 
        }
        ]
	return render_template('index.html',
                           title='Home',
                           posts = posts,
                           user=user)

@app.route('/aboutMe')
def about():
	return render_template('about.html')

@app.route('/ego')
def ego():
	return render_template('ego.html')

@app.route('/L2')
def studio():
	return render_template('l2.html')
@app.route('/mythomania')
def mythomania():
	images = [f for f in listdir('app/static/images/mythomania') if isfile(join('app/static/images/mythomania', f))]
	smlImage = []
	largImage = []
	for img in images :
		# print img
		if "_2x" not in img: 
			smlImage.append(img)
		else :
			largImage.append(img)


	return render_template('mythomania.html',
							images = images,
							smlImage= smlImage,
							largImage= largImage)

@app.route('/jasmine')
def jasmine():
	images = [f for f in listdir('app/static/images/jasmine') if isfile(join('app/static/images/jasmine', f))]
	smlImage = []
	largImage = []
	for img in images :
		print img
		if "_2x" not in img: 
			smlImage.append(img)
		else :
			largImage.append(img)


	return render_template('jasmine.html',
							images = images,
							smlImage= smlImage,
							largImage= largImage)
@app.route('/accidents')
def accidents():
	try:
		images = [f for f in listdir('app/static/images/accidents') if isfile(join('app/static/images/accidents', f))]
		smlImage = []
		largImage = []
		for img in images :
			# print img
			if "_2x" not in img: 
				smlImage.append(img)
			else :
				largImage.append(img)
	except :
		images = []
		smlImage = []
		largImage = []
	
	return render_template('accidents.html',
							images = images,
							smlImage= smlImage,
							largImage= largImage)
@app.route('/works/')
def menu():
	works = [
				{'name' : 'Mythomania'},
				{'name'	: 'Jasmine#'}, 
				{'name'	: 'Accidents'}, 
				{'name'	: 'The Cube'}, 
			]
	return render_template('works.html',
							works = works
						  )
