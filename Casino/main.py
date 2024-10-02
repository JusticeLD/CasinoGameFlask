from flask import Flask, render_template, request, redirect, url_for
import random

app = Flask(__name__, template_folder='templates')

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/slots', methods=['GET','POST'])
def slots():
    '''
    brings up the slots page
    post request will update the slots
    functioning as a slot machine
    '''
    if request.method == 'POST':
        return redirect(url_for('slots'))
    else:
        return render_template('slots.html')
    
@app.route('/blackjack', methods=['GET','POST'])
def blackjack():
    '''
    brings up the blackjack page
    post request will update the blackjack
    functioning as a blackjack game
    '''
    if request.method == 'POST':
        return redirect(url_for('blackjack'))
    return render_template('blackjack.html')
if __name__ == '__main__':
    app.run(debug=True)