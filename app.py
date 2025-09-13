from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = "mysecretkey"  # Change for real apps

# Fake users (for demo)
users = {
    "user1": "password123",
    "admin": "adminpass"
}

@app.route("/")
def home():
    return render_template("login.html")

@app.route("/login", methods=["POST"])
def login():
    username = request.form["username"]
    password = request.form["password"]

    if username in users and users[username] == password:
        session["user"] = username
        return redirect(url_for("secure"))
    else:
        return render_template("login.html", error="Invalid username or password")

@app.route("/secure")
def secure():
    if "user" in session:
        return render_template("secure.html", user=session["user"])
    else:
        return redirect(url_for("home"))

@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.run(debug=True)
